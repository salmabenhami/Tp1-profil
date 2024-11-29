import React from "react";
import './profil.css';
import image from '../images/profil.png'
import image2 from '../images/carre.png'
function Profil(){
    return(
        <main>
            <div className="titre">
                <h1>Student Profil Page Design Example</h1>
                <h3>A responsive student profile page design</h3>
            </div>
            <div className="partie1">
            <section className="section1">
                <div id="div1">
                    <img src={image} alt="" width="150px"/>
                    <h2>Ishmam Ahasan Samin</h2>
                </div>
                <hr />
                <div>
                    <ul>
                        <li> <b>Student ID:</b> 321000001</li>
                        <li><b>Class:</b> 4</li>
                        <li><b>Section:</b> A</li>
                    </ul>
                </div>
            </section>
            <div id="partie2">
                <section className="section2">
                    <div id="div2">
                        <img src={image2} alt="" width="32px" height="32px" style={{ marginTop: "10px" }} />
                        <h2>General Information</h2>
                    </div>
                    <div>
                        <table rules="all">
                            <tr>
                                <th>Roll</th>
                                <td class="center">:</td>
                                <td>125</td>
                            </tr>
                            <tr>
                                <th>Academic Year</th>
                                <td class="center">:</td>
                                <td>2020</td>
                            </tr>
                            <tr>
                                <th>Gender</th>
                                <td class="center">:</td>
                                <td>Male</td>
                            </tr>
                            <tr>
                                <th>Religion</th>
                                <td class="center">:</td>
                                <td>Group</td>
                            </tr>
                            <tr>
                                <th>Blood</th>
                                <td class="center">:</td>
                                <td>+B</td>
                            </tr>
                        </table>
                    </div>
                </section>
                <section className="section3">
                    <div id="div2">
                        <img src={image2} alt="" width="32px" height="32px" style={{ marginTop: "10px" }} />
                        <h2>Other Information</h2>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore quidem alias porro, officiis enim adipisci impedit mollitia incidunt esse officia ratione culpa vel voluptatem ea illo libero facilis ad iste!
                    Omnis maiores laudantium provident tempore dolor quas dolorum aperiam recusandae, accusamus dicta fugiat eligendi aliquam reprehenderit fugit neque? Doloribus laudantium amet unde quidem natus quae cupiditate rem voluptatibus optio reiciendis!
                    </p>
                </section>
            </div>
            </div>
            
        </main>
    )
}
export default Profil;