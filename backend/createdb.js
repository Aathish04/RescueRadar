import { createLibp2p } from 'libp2p'
import { createHelia } from 'helia'
import { createOrbitDB,IPFSAccessController } from '@orbitdb/core'
import { LevelBlockstore } from 'blockstore-level'
import { Libp2pOptions } from './config/libp2pOptions.js'

// Create an IPFS instance.
const blockstore = new LevelBlockstore('./ipfs')
const libp2p = await createLibp2p(Libp2pOptions)
const ipfs = await createHelia({ libp2p, blockstore })

const orbitdb = await createOrbitDB({ ipfs })

// const db = await orbitdb.open('/orbitdb/zdpuAo7MztTqYBXdu9MSH6GAY1DP2dfyAFYYkjatMU4Umi1SP');
let db = await orbitdb.open('my-db', { type: 'documents', AccessController: IPFSAccessController({ write: ['*'] }) })
db = await orbitdb.open('/orbitdb/zdpuAtRaxsrGj93bD6DmcruYvaNeuP7sgWDYsXCPTqCs8d1Lz', { type: 'documents', AccessController: IPFSAccessController({ write: ['*'] }) })
console.log('my-db address', db.address)

// // Add some records to the db.
await db.put({ _id:"doc1",hello: "world 1", hits: 5 })
await db.put({ _id:"doc2",hello: "world 2", hits: 2 })

// Print out the above records.
console.log(await db.all())

// Close your db and stop OrbitDB and IPFS.
await db.close()
await orbitdb.stop()
await ipfs.stop()