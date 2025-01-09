class Landing{
    dataBase={}

    // dataBase={
    //     {"eldo@gmail.com":{"name":"Eldo","email":"eldo@gmail.com","password":"eld123"}}
    // }

    registerUser(){
        if(localStorage.getItem('userData') !=null)
        {
            this.getData()
        }

        let firstname = username.value;
        let email= exampleInputEmail1.value;
        let password= exampleInputPassword1.value;
        
        if(firstname !=='' && email !== '' && password !=='')
        {
            // alert(`${firstname}, ${email}, ${password}`)
            if(email in this.dataBase)
            {
                alert(`${email} already registered`)
            }
            else
            {
                this.dataBase[email]={
                    name:firstname,
                    email:email,
                    password:password
                }
                //save data
                this.saveData()
                alert("Registeration Sucessfully..")
                //method to navigate to a new html page
                window.location='login.html'
            }

        }
        else{
            alert("Please enter the valid values")
        }
    }
    getData(){
        this.dataBase=JSON.parse(localStorage.getItem('userData'))
    }
    saveData()
    {
        localStorage.setItem('userData',JSON.stringify(this.dataBase))
    }
    login()
    {
        let loggedEmail= userEmail.value;
        let loggedPassword = userPassword.value
        this.getData();
        if(loggedEmail === '' || loggedPassword === '')
        {
            alert("Please enter values")
        }
        else{
            // alert(`${loggedEmail}, ${loggedPassword}`)
            if(this.dataBase[loggedEmail])
            {
                if(this.dataBase[loggedEmail].password===loggedPassword)
                {
                    localStorage.setItem('firstname',this.dataBase[loggedEmail].name)
                    //reason for bind name in home page

                    alert("signed in !!!!!!!!!!!!!!1")
                    window.location='home.html'
                }
                else
                {
                    alert("password mismatch")
                }

            }
            else
            {
                alert(`${loggedEmail} not found`)
            }
        }
    }
}

const obj = new Landing()
