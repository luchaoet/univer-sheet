const map = new Map();

export function setUniverMap(id: string, instance: any) {
  map.set(id, instance)
}

export function getUniverMap(id: string) {
  return map.get(id)
}

export function deleteUniverMap(id: string) {
  if(map.has(id)) {
    const m = map.get(id)
    m?.dispose?.()
    map.delete(id)
  }
}