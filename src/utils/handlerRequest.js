export async function handler(promiseF){
  try{
    await promiseF()
  }catch(e){
    console.log(e)
  }
}