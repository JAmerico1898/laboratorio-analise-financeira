import type { ModuleData } from "@/types/scenario";
import { modulo1 } from "./modulo1";
import { modulo2 } from "./modulo2";
import { modulo3 } from "./modulo3";
import { modulo4 } from "./modulo4";
import { modulo5 } from "./modulo5";
import { modulo6 } from "./modulo6";
import { modulo7 } from "./modulo7";
import { modulo8 } from "./modulo8";
import { modulo9 } from "./modulo9";
import { modulo10 } from "./modulo10";
import { modulo11 } from "./modulo11";
import { modulo12 } from "./modulo12";
import { modulo13 } from "./modulo13";
import { modulo14 } from "./modulo14";
import { modulo15 } from "./modulo15";

/** Módulos implementados, indexados pelo número da rota (/modulos/[modulo]). */
export const MODULE_REGISTRY: Record<string, ModuleData> = {
  "1": modulo1,
  "2": modulo2,
  "3": modulo3,
  "4": modulo4,
  "5": modulo5,
  "6": modulo6,
  "7": modulo7,
  "8": modulo8,
  "9": modulo9,
  "10": modulo10,
  "11": modulo11,
  "12": modulo12,
  "13": modulo13,
  "14": modulo14,
  "15": modulo15,
};

export function getModuleData(key: string): ModuleData | undefined {
  return MODULE_REGISTRY[key];
}
