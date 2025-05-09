// Dizi içerisindeki belirtilen alanlardan  değerleri döndürür

export function uniqueValues<T>(arr: T[], key: keyof T): string[] {
  const values = arr.map(item => item[key]);
  const set = new Set<string>();

  for (const val of values) {
    if (val !== null && val !== undefined) {
      set.add(val.toString());
    }
  }

  return Array.from(set);
}