import React from 'react';

function Landing () {
    return (
        <div className="text-center m-5 container">
            <div>
                <h1>Vending Machine</h1>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container">
                            <a class="navbar-link" href="/soda">Soda</a>
                            <a class="navbar-link" href="/chips">Chips</a>
                            <a class="navbar-link" href="/sardine">Sardine</a>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Landing