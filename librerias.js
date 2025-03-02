const job = {
  frameWorksUses: {
    1: ['react'],
    2: ['laravel'],
    3: ['angular']
  },
  libraries: {
    1: ['bootstrap'],
    2: ['tailwind']
  }
}

// ejercicios  1 de programacion
const removeClone = (list = [1]) => {
  return list.sort((a, b) => a - b).filter((v, i) => list[i + 1] !== v)
}

// ejercicios  2 de programacion
function createFrame(names = ['']) {
  const ancho = names.map(e => e.length).sort((a, b) => a - b).at(-1)
  const line = '*'.repeat(ancho + 4)
  return `${line}\n${names.map(name => `* ${name}${' '?.repeat(ancho - name.length)} *`).join('\n')}\n${line}`
}

// ejercicio 3
function organizeInventory(inventory = [{}]) {
  const res = {}
  inventory.forEach(val => {
    const { category, name, quantity } = val
    res[category] ??= {}
    res[category][name] ? res[category][name] += quantity : res[category][name] = quantity
  })
  return res
}

// ejercicio 4
function createXmasTree(height, ornament) {
  let res = ''

  for (let i = 1; i <= height; i++) {
    res += `${'_'.repeat(height - i * 2)}${'*'.repeat(i === 1 ? 1 : i * 2 - 1)}${'_'.repeat(height - i * 2)}\n`
  }
  for (i = 1; i <= 2; i++) {
    res = res.concat(`${'_'.repeat(height - 1)}#${'_'.repeat(height - 1)}\n`)
  }
  return res
}

// ejercicio 5
function organizeShoes(shoes) {
  const quitUndefined = (array = []) => array.filter(el => el !== undefined && el)
  const res = {}

  shoes.forEach(({ type, size }, i) => {
    res[type] ??= []
    res[type][i] ??= size
    res[type] = quitUndefined(res[type])
  })

  const { I, R } = res
  const [mayorNumZap, minorNumZap] = I > R ? [I, R] : [R, I]

  return quitUndefined(mayorNumZap?.map((e, i) => {
    if (minorNumZap.includes(e)) {
      mayorNumZap.splice(mayorNumZap[i], 1)
      minorNumZap.splice(minorNumZap.indexOf(e), 1)
      return e
    }
    return undefined
  }))
}

// ejercicio 6
