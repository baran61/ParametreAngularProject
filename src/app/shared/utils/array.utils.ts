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

// Belirli bir öğeyi diziden siler
export function removeItemById<T extends { id: number }>(arr: T[], item: T): T[] {
  return arr.filter(i => i.id !== item.id);
}

// Rastgele yeni bir kart nesnesi oluşturur
export function createNewCardItem<T extends { id: number }>(data: Partial<T>): T {
  return {
    id: Date.now(),
    ...data
  } as T;
}