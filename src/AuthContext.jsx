import React from 'react'


const auth = {user:undefined,isLoggedIn:false}


const AuthContext = React.createContext(auth)

export class AuthProvider extends React.Component {
    // Context state
    state = {
      user: {},
      isLoggedIn:false
    }
  
    // Method to update state
    setAuth = (user,isLoggedIn) => {
      this.setState((prevState) => ({ user,isLoggedIn }),()=>{
          console.log(this.state)
      })
    }
  
    render() {
      const { children } = this.props
      const { user,isLoggedIn } = this.state
      const { setAuth } = this
      return (
        <AuthContext.Provider
          value={{
            user,
            isLoggedIn,
            setAuth,
          }}
        >
          {children}
        </AuthContext.Provider>
      )
    }
  }
export const AuthConsumer = AuthContext.Consumer

export default AuthContext