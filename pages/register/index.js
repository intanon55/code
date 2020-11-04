const close = document.getElementById('close');
const liffId = '1655039247-NZjBk64y';
let userId = '';

function main(){
    // 1.liff init
    // 2.get profile
    liff.init({liffId: liffId});
    liff.ready.then(() => {
        if(!liff.isLoggedIn()){
            liff.login();
        }        
        liff.getProfile().then((profile) => {            
            userId = profile.userId;
            console.log(profile);
        });
    });    
}

main()

async function send(e){     
    e.preventDefault(); 
    // 3. axios post data
    try {
        const result = await axios.post('http://localhost:3000/api/v1/change-richmenu', {
            userId: userId
        });        
        if(result.status == 200){
            console.log("closeWindow");
            // liff.closeWindow();
        }
    } catch (error) {
        console.log(error);
    }        
}