class SiteController {
    
    home(req,res){
        console.log('abc');
        res.render('home');
    }
    
    search(req,res){ 
        console.log('abc');
        res.render('search');
    }
}

export  { SiteController };
