import { Button } from "reactstrap";
function LoginPage () {

    return (
    
    <div className = "loginPage">
    
    <h1 className = "loginPage-title">Registrate</h1>
    <form>

<input type = "text" name= "username"></input>

<input type= "password" name= "password"/>
<Button type="submit">sign up</Button>
<Button type="submit">Login</Button>

</form>
    </div>
    
    );
    
    }

export default LoginPage;