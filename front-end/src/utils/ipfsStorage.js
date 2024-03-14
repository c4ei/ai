import { NFTStorage } from 'nft.storage';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk0YzAyNTBhMDY1OTI2YzU1YjNkOEQyNDg3NEJiMzREMzRDN2U2Q0EiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTcxMDQxNjc1MTAwMSwibmFtZSI6Im5mdC5jNGV4Lm5ldCJ9.wvCdWQsk0VIviWIo6ePD1EWjbh0V8h4w3mZLCyRehVM';

export const IPFS_GATEWAY = "https://nftstorage.link/ipfs/"; //Gateway from nft.storage

function MakeStorageClient() {
   return new NFTStorage({ token });
}


  //const storage = new NFTStorage({ token })


export const saveContent = async (file) => {
  console.log(`storing file(s)...with nft.storage`);
  const storage = MakeStorageClient();
  //
  const cid = await storage.storeDirectory([file]);
  console.log("Stored files with cid:", { cid });
  return cid;
};