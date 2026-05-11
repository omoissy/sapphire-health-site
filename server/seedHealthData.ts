import { db, pool } from "./db";
import { healthAlerts, environmentalData } from "@shared/schema";

const REQUIRED_HEALTH_TABLES = ["health_alerts", "environmental_data"] as const;

let hasLoggedSeedWarning = false;

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "object" && error !== null) {
    try {
      return JSON.stringify(error);
    } catch {
      return String(error);
    }
  }

  return String(error);
}

function isUndefinedTableError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "42P01"
  );
}

function warnSeedSkipped(message: string) {
  if (hasLoggedSeedWarning) {
    return;
  }

  hasLoggedSeedWarning = true;
  console.warn(`[health-data-seed] ${message}`);
}

async function getMissingRequiredTables(): Promise<string[]> {
  const result = await pool.query<{ table_name: string }>(
    `
      select table_name
      from information_schema.tables
      where table_schema = 'public'
        and table_name = any($1::text[])
    `,
    [REQUIRED_HEALTH_TABLES],
  );

  const existingTables = new Set(result.rows.map((row) => row.table_name));
  return REQUIRED_HEALTH_TABLES.filter((tableName) => !existingTables.has(tableName));
}

export async function seedHealthData() {
  try {
    const missingTables = await getMissingRequiredTables();
    if (missingTables.length > 0) {
      warnSeedSkipped(
        `Skipped because required table(s) are missing: ${missingTables.join(", ")}. ` +
          `Run "npm run db:push" against the Neon DATABASE_URL before seeding.`,
      );
      return;
    }

    // Check if data already exists
    const existingAlerts = await db.select().from(healthAlerts).limit(1);
    if (existingAlerts.length > 0) {
      console.log("[health-data-seed] Health data already seeded");
      return;
    }

    // Seed health alerts
    await db.insert(healthAlerts).values([
      {
        alertType: "disease",
        location: "Lagos",
        riskLevel: "moderate",
        title: "Cholera Advisory",
        message: "Water quality monitoring active. Ensure proper hygiene and use treated water.",
        source: "NCDC",
        isActive: true,
      },
      {
        alertType: "heat",
        location: "Abuja",
        riskLevel: "high",
        title: "Heat Wave Alert",
        message: "Temperatures exceeding 38°C. Stay hydrated and limit outdoor activities during peak hours.",
        source: "NIMET",
        isActive: true,
      },
      {
        alertType: "air-quality",
        location: "Port Harcourt",
        riskLevel: "moderate",
        title: "Air Quality Notice",
        message: "AQI levels elevated due to industrial activity. Sensitive groups should take precautions.",
        source: "LASEPA",
        isActive: true,
      },
      {
        alertType: "disease",
        location: "Nigeria-wide",
        riskLevel: "low",
        title: "Lassa Fever Monitoring",
        message: "Routine surveillance active nationwide. Practice good hygiene and rodent control.",
        source: "NCDC",
        isActive: true,
      },
    ]);

    // Seed environmental data
    await db.insert(environmentalData).values([
      {
        city: "Lagos",
        temperature: "32",
        humidity: "78",
        airQualityIndex: "65",
        uvIndex: "9",
        heatIndex: "36",
      },
      {
        city: "Abuja",
        temperature: "35",
        humidity: "42",
        airQualityIndex: "48",
        uvIndex: "10",
        heatIndex: "38",
      },
      {
        city: "Port Harcourt",
        temperature: "31",
        humidity: "82",
        airQualityIndex: "72",
        uvIndex: "8",
        heatIndex: "35",
      },
    ]);

    console.log("[health-data-seed] Health data seeded successfully");
  } catch (error) {
    if (isUndefinedTableError(error)) {
      warnSeedSkipped(
        `Skipped because database tables have not been created yet. ` +
          `Run "npm run db:push" against the Neon DATABASE_URL before restarting.`,
      );
      return;
    }

    warnSeedSkipped(`Seeding failed and startup will continue: ${getErrorMessage(error)}`);
  }
}
