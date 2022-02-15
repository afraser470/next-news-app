
export default async function newsApi(req, res) {
    try{
        const data = await fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=tzDIKDLrSJUtyJQIXep7Y76qMee1Ucpz');
        const json = await data.json();
        

        res.status(200).json({success:true,data:json});
    }catch{
        res.status(500).json({success:false,error:error.message});

    }
};