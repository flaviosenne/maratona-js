import React from 'react'

const Layout = ({children}) => {
    // o parametro children é a mesma coisa que isso
    //const children = props.children
    //const { children }= props
    return (
        <div className = "layout">
            <nav className ="navbar navbar-expand-lg bg-primary text-light">
                <div className = "container d-flex w-100 justify-content-between">
                    <div>
                        <span>BACK</span>
                    </div>
                    <div className = "text-center">
                        <strong>Links</strong>
                    </div>
                    <div>
                        <span>Exit</span>
                    </div>
                </div>
            </nav>
            <div className= "container">{children}</div>
        </div>
    )
}

export default Layout