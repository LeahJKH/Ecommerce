import "./ModalLogginn.css"

export function ModalLogginn(){
    return(
        <>
            <div class="modal" id="modal">
                <div class="modal-header">
                    <img className="modal-logo" src="/dd.png" alt="" />
                    <button class="modal-close-btn" id="modal-close-btn">X</button>
                </div>
                <div class="modal-inner" id="modal-inner">
                    <p class="modal-text" id="modal-text">Sign Up and Enjoy Personalized Experiences</p>	
                    <form className="modal-form" action="">
                        <label htmlFor="userName" className="modal-label">Fullname:</label>
                        <input type="text" name="userName" placeholder="Enter your fullname" className="modal-userName modal-input" />  
                        <label htmlFor="userEmail" className="modal-label">Email:</label>
                        <input type="email" name="userEmail" placeholder="Enter your email" className="modal-userEmail modal-input" />  
                        <label htmlFor="userPassword" className="modal-label">Password:</label>
                        <input type="password" name="userPassword" placeholder="********" className="modal-userPassword modal-input" /> 
                        <button className="modal-button-singUp" >Sing Up</button> 
                        <button className="modal-button-guest">Continue as Guest</button>
                    </form>	
                    <p className="modal-singIn"></p>

                </div>
            </div>
        </>
    )
}