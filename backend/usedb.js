import { createLibp2p } from 'libp2p'
import { createHelia } from 'helia'
import { createOrbitDB } from '@orbitdb/core'
import { LevelBlockstore } from 'blockstore-level'
import { Libp2pOptions } from './config/libp2pOptions.js'

// Create an IPFS instance.
const blockstore = new LevelBlockstore('./ipfs')
const libp2p = await createLibp2p(Libp2pOptions)
const ipfs = await createHelia({ libp2p, blockstore })

const orbitdb = await createOrbitDB({ ipfs })

// const db = await orbitdb.open('/orbitdb/zdpuAo7MztTqYBXdu9MSH6GAY1DP2dfyAFYYkjatMU4Umi1SP');
const db = await orbitdb.open('/orbitdb/zdpuAtRaxsrGj93bD6DmcruYvaNeuP7sgWDYsXCPTqCs8d1Lz', { type: 'documents'})
console.log('my-db address', db.address)

// Print out the above records.
// console.log(await db.all())

for await (const record of db.iterator()) {
    await db.del(record.key)
}

console.log(await db.all())

// Close your db and stop OrbitDB and IPFS.
await db.close()
await orbitdb.stop()
await ipfs.stop()
