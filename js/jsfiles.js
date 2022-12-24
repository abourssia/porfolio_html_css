var nav = document.querySelector('.navbar-heads');
window.addEventListener('scroll', function()
                       
                        {
                            if(window.pageYOffset>100 ) {
                            
                            nav.classList +=' small';
                        } else {
                            
                            
                            nav.classList='navbar-heads';
                        }
                            
                        }
                    );
