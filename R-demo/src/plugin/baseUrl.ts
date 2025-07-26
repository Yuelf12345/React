import fs from 'fs'
const baseUrlPlugin = (limit: number) => {
    return {
        name: 'base-url-plugin',
        async transform(_: string, id: string) {
            if (process.env.NODE_ENV !== 'development') return
            if (!id.endsWith('.png')) return
            console.log(id);
            const stat = await fs.promises.stat(id)
            if (stat.size < limit) {
                const base64 = await fs.promises.readFile(id, 'base64')
                const dataurl = `data:image/png;base64,${base64}`
                return {
                    code: `export default "${dataurl}"`
                }
            }
        }
    }
}

export default baseUrlPlugin;