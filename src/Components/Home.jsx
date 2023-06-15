import React from 'react'
import "./css/animate.css"
import "./css/bootsnav.css"
import "./css/color.css"
import "./css/custom.css"
import "./css/flaticon.css"
import stampa from "./images/stamp.png"
import chiken from "./images/chicken.png"
import triple from "./images/triple.png"
import roque from "./images/descarga.jpg"

export default function Home() {
  return (
    <body data-spy="scroll" data-target="#navbar-menu" data-offset="100" id='body'>
       
        <header id="hello">
            
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-0" style={{width:"100%"}}>
                        <div class="banner">
                            <h3 className='h3Inicio'>-¡Hamburguesas a tu estilo!-</h3>
                            <h1>Master Burgers</h1>

                            <div class="inner_banner">
                                <div class="banner_content">
                                    {/* <p>Las mejores hamburguesas de la ciudad a un paso</p>
                                    <p> 100% caseras!!!</p>							 */}
                                </div>
                                <div class="stamp">
                                    <img src={stampa} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <p class="caption">No nos comparamos</p> */}
        </header>

        
        <section id="block">
            <div class="container">

                
                <div class="row">
                    <div class="col-sm-8">
                        <div class="feature">
                            <div class="shack_burger">
                                <div class="chicken">
                                    <img src={chiken} alt="Chicken" id='imgCarta1'/>
                                </div>

                                <h2>Pollo Bacon</h2>
                                <p>Medallón de pollo cubierta con queso, tomate, lechuga, bacon y el mejor pan</p>
                            </div>
                            <p class="caption">El pollo no falla</p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="signature">
                            <div class="shape">
                                <span class="flaticon flaticon-burger"></span>
                                <p>Doble</p>
                            </div>
                            <div class="signature_content">
                                <p>Solía ​​ser un secreto, ¡pero ya no! Nuestro tributo al Rey es una hamburguesa de ternera con queso cheddar inigualable</p>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div class="row">
                    <div class="col-md-6">
                        <div class="classic">
                            <a href="" class="classic_btn">clasicas</a>

                            <div class="overlay">
                                <h3>Smash de la casa</h3>
                                <p>(Servidas con las mejores papas).</p>

                                <p class="overlay_content">Destaca por su sencillez y sabor auténtico. Esta hamburguesa se caracteriza por su carne jugosa y sabrosa, acompañada de ingredientes tradicionales que la convierten en un verdadero placer para los amantes de las hamburguesas.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        
                        <div id="small_carousel" class="carousel slide" >
                           
                            <ol class="carousel-indicators">
                                {/* <li data-target="#small_carousel" data-slide-to="0" class="active"></li>
                                <li data-target="#small_carousel" data-slide-to="1"></li>
                                <li data-target="#small_carousel" data-slide-to="2"></li> */}
                            </ol>

                            <div class="carousel-caption">
                                <h3>La gran Triple</h3>
                                <hr />

                                <ul class="list-unstyled nutrition">
                                    <li><a href="#"><span class="flaticon flaticon-protein"></span><p>Proteina - 70g</p></a></li>
                                    <li><a href="#"><span class="flaticon flaticon-carbohydrate"></span><p>Carbohidratos - 46gm</p></a></li>
                                    <li><a href="#"><span class="flaticon flaticon-calories"></span><p>Calories - 1000 kcal</p></a></li>
                                </ul>
                                <div class="info_btn_shadow">
                                    <a href="#" class="info_btn">info & nutrición</a>
                                </div>
                            </div>

                            
                            <div class="carousel-inner" role="listbox">
                                <div class="item active">
                                    <img src={triple} alt="" id='triple'/>
                                </div>
                                <div class="item">
                                    <img src="images/small_slider_bg.jpg" alt="" />
                                </div>
                                <div class="item">
                                    <img src="images/small_slider_bg.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               
                <div id="carousel" class="carousel slide" data-ride="carousel">
                   
                    <ol class="carousel-indicators">
                        {/* <li data-target="#carousel" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel" data-slide-to="1"></li>
                        <li data-target="#carousel" data-slide-to="2"></li> */}
                    </ol>

                   
                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <img src={roque} alt="Burger" id='imgCarta'/>

                            <div class="carousel-caption">
                                <h2>Le Blue</h2>
                                <h3>Para l@s amantes del Roquefort</h3>

                                <p> Una delicia para los amantes del queso y los sabores intensos. Esta hamburguesa combina la jugosidad de la carne con la potencia y el carácter distintivo del queso Roquefort, creando una experiencia gastronómica única.</p>

                                <div class="info_btn_shadow">
                                    <a href="" class="info_btn">info & nutrición</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

               
                <div class="row forth_sec" id='servicios'>
                    <div class="col-sm-4">
                        <div class="menu">
                            <div class="inner_content">
                                <span class="flaticon flaticon-burger"></span>
                                <h2>Hamburguesas</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="drinks">
                            <div class="inner_content">
                                <span class="flaticon flaticon-drink"></span>
                                <h2>Bebidas</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="sides">
                            <div class="inner_content">
                                <span class="flaticon flaticon-food"></span>
                                <h2>Papas</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section id="lock">
            <h2>SIRVIENDO MÁS QUE HAMBURGUESAS DESDE 2019</h2>
            <p>Consulte nuestro horario de apertura y la dirección de la ubicación a continuación.</p>
        </section>

        
        <footer>
           
            <div class="container">
                <div class="row">

                    <div class="col-lg-3 col-sm-4 col-xs-12 col-lg-offset-1 pull-right" style={{display:"flex", gap:"20px"}}>
                        <div class="contact_us">
                            <h4>Dirección</h4>
                            {/* <a href="">masterburguer@gmail.com</a> */}

                            <address>
                            Av. V. Sarsfield y J. B. Lagos <br />
                            </address>
                        </div>
                        <div class="contact_us">
                            <h4>Horarios</h4>
                            {/* <a href="">masterburguer@gmail.com</a> */}

                            <address>
                            Martes a Domingos desde las 20hs <br />
                            </address>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-4 col-xs-12 pull-right">
                        <div class="basic_info">

                            <ul class="list-inline social">
                                {/* <li><a href="" class="fa fa-facebook"></a></li> */}
                                <li><a href="https://api.whatsapp.com/send?phone=5493584440337&text=Hola Master!" target='_blank' class="fa fa-whatsapp"></a></li>
                                <li><a href="https://www.instagram.com/master_.burgers/" target='_blank' class="fa fa-instagram"></a></li>
                            </ul>

                            					
                        </div>
                    </div>
                    <div class="footer-copyright">
                                <p class="wow fadeInRight" data-wow-duration="1s">
                                    Hecho por 
                                    
                                    
                                    <a target="_blank" href="http://bootstrapthemes.co">Proyecto Web Development</a> <br /> 
                                    2023. Todos los derechos reservados
                                </p>
                            </div>

                </div>
            </div>
        </footer>


       
        <div class="scrollup">
            <a href="#"><i class="fa fa-chevron-up"></i></a>
        </div>

        
    </body>	
  )
}
