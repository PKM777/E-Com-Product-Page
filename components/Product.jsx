import Image from 'next/image'

const Product = () => {
    const sub_images=['/first.jpg','/second.jpg','/third.jpg','/fourth.jpg']
    
    return (
    
        <div>
            <div class='w-screen h-screen bg-primary-color flex justify-center items-center '>
                <div class='flex justify-center items-center w-[90%] h-[80%]  border-border-style border-solid border-2 bg-secondary-color shadow-2xl shadow-shadow-color'  >
                    <div class='w-[60%] h-full m-0 flex justify-center items-center flex-col'>
                        <div class='w-[100%] h-2/3 m-0 p-0 flex justify-between items-center bg-cover bg-[url(/fourth.jpg)] bg-center'>
                            <div class='w-2/3 flex justify-center items-center '>
                                <Image src='/main.jpg' width='550%' height='340%' class='object-contain'/>
                            </div>
                                
                            <div class='flex justify-around flex-wrap items-center w-1/3 h-[100%]'>
                                {sub_images.map((images)=>{
                                    return <Image src={images} width='100%' height='130%' class='flex-1 m-0  object-contain'/>
                                })}
                            </div>
                        </div>
                        
                            {/* section below image section */}

                        <div class='w-full h-1/3 bg-secondary-color flex justify-around items-center'>
                            <div class='w-[25%] h-full border-x-2 border-primary-color flex justify-center items-center'>
                                <div class='w-[95%] h-[95%] bg-primary-color flex justify-center items-center border-white border-[1px] border-[solid]'>
                                <ul class='m-0 p-0 flex justify-center items-center flex-col w-full h-full'>
                                    <li class='list-none w-full h-[10px] flex justify-center items-center mt-[15px] p-0'><i class='flex justify-center items-center mr-[5px] p-0 text-white w-[10%]'>5</i><span class='w-[70%] h-[5px] bg-shadow-color m-0 p-0 flex justify-left items-center'><span class='m-0 p-0 w-[70%] h-full bg-yellow-300'></span><i  class='flex text-[0.6rem] justify-center items-center ml-[10px] p-0 text-white w-[10%]'>70%</i></span></li>
                                    <li class='list-none w-full h-[10px] flex justify-center items-center mt-[15px] p-0'><i class='flex justify-center items-center mr-[5px] p-0 text-white w-[10%]'>4</i><span class='w-[70%] h-[5px] bg-shadow-color m-0 p-0 flex justify-left items-center'><span class='m-0 p-0 w-[15%] h-full bg-yellow-300'></span><i  class='flex text-[0.6rem] justify-center items-center ml-[10px] p-0 text-white w-[10%]'>15%</i></span></li>
                                    <li class='list-none w-full h-[10px] flex justify-center items-center mt-[15px] p-0'><i class='flex justify-center items-center mr-[5px] p-0 text-white w-[10%]'>3</i><span class='w-[70%] h-[5px] bg-shadow-color m-0 p-0 flex justify-left items-center'><span class='m-0 p-0 w-[6%] h-full bg-yellow-300'></span><i   class='flex text-[0.6rem] justify-center items-center ml-[10px] p-0 text-white w-[10%]'>6%</i></span></li>
                                    <li class='list-none w-full h-[10px] flex justify-center items-center mt-[15px] p-0'><i class='flex justify-center items-center mr-[5px] p-0 text-white w-[10%]'>2</i><span class='w-[70%] h-[5px] bg-shadow-color m-0 p-0 flex justify-left items-center'><span class='m-0 p-0 w-[5%] h-full bg-yellow-300'></span><i   class='flex text-[0.6rem] justify-center items-center ml-[10px] p-0 text-white w-[10%]'>5%</i></span></li>
                                    <li class='list-none w-full h-[10px] flex justify-center items-center mt-[15px] p-0'><i class='flex justify-center items-center mr-[5px] p-0 text-white w-[10%]'>1</i><span class='w-[70%] h-[5px] bg-shadow-color m-0 p-0 flex justify-left items-center'><span class='m-0 p-0 w-[4%] h-full bg-yellow-300'></span><i   class='flex text-[0.6rem] justify-center items-center ml-[10px] p-0 text-white w-[10%]'>4%</i></span></li>
                                </ul>

                                </div>
                            </div>

                            <div class='w-[25%] h-full border-x-2 border-primary-color flex justify-center items-center '>
                                <div class='w-[95%] h-[95%] bg-primary-color border-white border-[1px] border-[solid]'>
                                    <div class=' w-full h-[50%] border-white border-b-[1px] border-b-[solid]'>
                                        <span class='text-[0.8rem] text-white text-center ml-[5px]'>Available colors</span>
                                        <div class='flex justify-center items-center mt-[5px]'>
                                        <span class='w-[30px] h-[30px] bg-[red]     rounded-[50%] m-[3px]'></span>
                                        <span class='w-[30px] h-[30px] bg-[yellow]  rounded-[50%] m-[3px]'></span>
                                        <span class='w-[30px] h-[30px] bg-[green]   rounded-[50%] m-[3px]'></span>
                                        <span class='w-[30px] h-[30px] bg-[purple]  rounded-[50%] m-[3px]'></span>
                                        </div>
                                    </div>
                                    <div class='flex justify-center items-left w-full h-[50%]  text-white flex-col'>
                                        <span class='ml-[5px] text-[0.7rem]'>Total Items Sold</span>
                                        <span class='ml-[5px] text-[0.9rem]'>5682</span>
                                        <span class='ml-[5px] text-[0.7rem]'>Total items returned</span>
                                        <span class='ml-[5px] text-[0.9rem]'>4</span>
                                    </div>

                                </div>
                            </div>

                            <div class='w-[50%] h-full border-x-2 border-primary-color flex justify-center items-center'>
                                <div class='w-[98%] h-[95%] bg-primary-color border-white border-[1px] border-[solid] overflow-hidden'>

                                    <div class='w-full h-[50px] flex mt-[5px] justify-left items-center'>
                                        <span class='w-[30px] h-[30px] bg-[#f0e10f] m-[5px] border-b-[solid] border-white border-b-[1px] flex justify-center items-center'>L</span>
                                        <div class='w-[80%] h-[50px] border-b-[solid] border-white border-b-[1px]'>
                                            <span class='flex justify-between items-center w-full'>
                                            <i class='ml-[5px] text-[0.7rem] p-0 text-white'>Lisa</i>
                                            <i class='mr-[5px] text-[0.7rem] p-0 text-white'>50 minutes ago</i>
                                            </span>
                                            <p class='text-[0.8rem] ml-[5px] mt-[7px] text-yellow-200'>"this was a great buy. I totally loved it"</p>
                                        </div>
                                    </div>

                                    <div class='w-full h-[50px] flex mt-[5px] justify-left items-center'>
                                        <span class='w-[30px] h-[30px] bg-[#f0e10f] m-[5px] border-b-[solid] border-white border-b-[1px] flex justify-center items-center'>L</span>
                                        <div class='w-[80%] h-[50px] border-b-[solid] border-white border-b-[1px]'>
                                            <span class='flex justify-between items-center w-full'>
                                            <i class='ml-[5px] text-[0.7rem] p-0 text-white'>Lisa</i>
                                            <i class='mr-[5px] text-[0.7rem] p-0 text-white'>50 minutes ago</i>
                                            </span>
                                            <p class='text-[0.8rem] ml-[5px] mt-[7px] text-yellow-200'>"this was a great buy. I totally loved it"</p>
                                        </div>
                                    </div>

                                    <div class='w-full h-[50px] flex mt-[5px] justify-left items-center'>
                                        <span class='w-[30px] h-[30px] bg-[#f0e10f] m-[5px] border-b-[solid] border-white border-b-[1px] flex justify-center items-center'>L</span>
                                        <div class='w-[80%] h-[50px] border-b-[solid] border-white border-b-[1px]'>
                                            <span class='flex justify-between items-center w-full'>
                                            <i class='ml-[5px] text-[0.7rem] p-0 text-white'>Lisa</i>
                                            <i class='mr-[5px] text-[0.7rem] p-0 text-white'>50 minutes ago</i>
                                            </span>
                                            <p class='text-[0.8rem] ml-[5px] mt-[7px] text-yellow-200'>"this was a great buy. I totally loved it"</p>
                                        </div>
                                    </div>
                                    <div class='w-full h-[50px] flex mt-[5px] justify-left items-center'>
                                        <span class='w-[30px] h-[30px] bg-[#f0e10f] m-[5px] border-b-[solid] border-white border-b-[1px] flex justify-center items-center'>L</span>
                                        <div class='w-[80%] h-[50px] border-b-[solid] border-white border-b-[1px]'>
                                            <span class='flex justify-between items-center w-full'>
                                            <i class='ml-[5px] text-[0.7rem] p-0 text-white'>Lisa</i>
                                            <i class='mr-[5px] text-[0.7rem] p-0 text-white'>50 minutes ago</i>
                                            </span>
                                            <p class='text-[0.8rem] ml-[5px] mt-[7px] text-yellow-200'>"this was a great buy. I totally loved it"</p>
                                        </div>
                                    </div>
                                    <div class='w-full h-[50px] flex mt-[5px] justify-left items-center'>
                                        <span class='w-[30px] h-[30px] bg-[#f0e10f] m-[5px] border-b-[solid] border-white border-b-[1px] flex justify-center items-center'>L</span>
                                        <div class='w-[80%] h-[50px] border-b-[solid] border-white border-b-[1px]'>
                                            <span class='flex justify-between items-center w-full'>
                                            <i class='ml-[5px] text-[0.7rem] p-0 text-white'>Lisa</i>
                                            <i class='mr-[5px] text-[0.7rem] p-0 text-white'>50 minutes ago</i>
                                            </span>
                                            <p class='text-[0.8rem] ml-[5px] mt-[7px] text-yellow-200'>"this was a great buy. I totally loved it"</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='w-[40%] h-full m-0 flex justify-center items-center'>
                        <div class='w-[95%] h-[95%] bg-primary-color '>
                                {/* first section */}
                            <div class='w-[100%] h-[34%] pl-[10px] mt-[10px] border-b-[1px] border-b-[solid] border-white'>
                                <h1 class='text-3xl text-white'>
                                    Nebula Flash
                                </h1>
                                <h4 class='text-xs text-white'>
                                    Women Caramel Yellow Flash Sun Glasses
                                </h4>
                                <div class='border-[white] flex justify-around items-center w-[30%] h-[25px] border-[1px] mt-[10px]'>
                                    <span class='text-white text-[0.8rem] flex justify-center items-center m-0'>4.1 star </span>
                                    <span class='text-white text-[0.8rem] flex justify-center items-center m-0'>2k Ratings</span>
                                </div>
                                <div class='w-[50%] h-[50px] mt-[10px] flex justify-around items-center'>
                                    <span class='w-[33.33%] m-0 flex justify-start text-3xl items-center text-white'>$500</span>
                                    <span class='w-[33.33%] m-0 flex justify-center items-center text-white line-through'>$1000</span>
                                    <span class='w-[33.33%] m-0 flex justify-center items-center text-[0.9rem] text-white'>( 50% OFF )</span>
                                </div>
                                <p class='text-[0.6rem] text-white p-0 m-0'>inclusive of all taxes</p>
                            </div>

                            {/* first line */}

                            <div class='w-full h-[46%]'>
                                <div class='flex mt-[10px] justify-start ml-[10px] items-center w-[200px] h-[20px]'>
                                    <span class='flex justify-center items-center text-[0.9rem] text-white'>SELECT SIZE</span>
                                    <span class='flex justify-center ml-[10px] items-center text-[0.7rem] text-white underline'>SIZE CHART</span>
                                </div>
                                <div class='w-[80%] h-[60px] flex justify-around items-center ml-[10px]'>
                                    <span class='w-[40px] font-bold mr-[5px] text-shadow-color p-0 bg-white h-[40px] rounded-[50%] flex justify-center items-center'>XS</span>
                                    <span class='w-[40px] font-bold mr-[5px] text-shadow-color p-0 bg-white h-[40px] rounded-[50%] flex justify-center items-center'>S</span>
                                    <span class='w-[40px] font-bold mr-[5px] text-shadow-color p-0 bg-white h-[40px] rounded-[50%] flex justify-center items-center'>M</span>
                                    <span class='w-[40px] font-bold mr-[5px] text-shadow-color p-0 bg-white h-[40px] rounded-[50%] flex justify-center items-center'>L</span>
                                    <span class='w-[40px] font-bold mr-[5px] text-shadow-color p-0 bg-white h-[40px] rounded-[50%] flex justify-center items-center'>XL</span>
                                    <span class='w-[40px] font-bold mr-[5px] text-shadow-color p-0 bg-white h-[40px] rounded-[50%] flex justify-center items-center'>XXL</span>
                                    <span class='w-[40px] font-bold mr-[5px] text-shadow-color p-0 bg-white h-[40px] rounded-[50%] flex justify-center items-center'>3XL</span>
                                    <span class='w-[40px] font-bold mr-[5px] text-shadow-color p-0 bg-white h-[40px] rounded-[50%] flex justify-center items-center'>4XL</span>
                                </div>
                                <div class='w-[80%] h-[70px] ml-[10px] flex justify-start items-center'>
                                    <button class='w-[43%] h-[60px] bg-theme-color text-white m-0'>ADD TO BAG i</button>
                                    <button class='w-[35%] h-[60px] ml-[20px] bg-theme-color text-white'>i WISHLIST</button>
                                </div>
                                <div class='flex justify-start h-[60px] items-center w-[90%] ml-[10px]'>
                                    <div class='flex justify-around items-start flex-col w-[180px]'>
                                        <div class='text-white flex justify-start items-center mb-[5px] text-[0.8rem] uppercase'>Delivery Options i</div>
                                        <div class='flex justify-start items-center'>
                                        <input class='w-[70%] m-0 h-[22px] flex justify-center items-center text-center text-[0.7rem]' type='input' placeholder='search pincode'/>
                                        <button class='bg-white w-[30%] h-[22px] border-[none] text-[0.7rem] text-shadow-color text-[bold]'>Check</button>
                                        </div>
                                        <p class='text-[0.4rem] m-0 p-0 text-left text-white'>Enter pincode to check delivery time & Pay On Delivery availability</p>
                                    </div>
                                    <div class='flex justify-start items-start flex-col w-[40%]'>
                                        <h3 class='text-white text-[0.7rem]'>Best Offers</h3>
                                        <h3 class='text-white text-[0.7rem]'>EMI Options & Policy</h3>
                                        <p class='text-white text-[0.4rem]'>Easy 30 days return and exchanges</p>
                                        <p class='text-white text-[0.4rem]'>Try & Buy might be available</p>
                                    </div>
                                </div>
                            </div>

                            {/* //second line// */}
                            <div class='flex justify-start items-center w-full h-[16%] m-0 p-0'>
                                <div class='w-[40%] h-full flex justify-around items-left flex-col border-[1px] border-[white]'>
                                    <span class='w-[80%] h-[25px] text-white p-y-[5px] border-white border-[1px] pl-[5px] flex justify-left items-center ml-[10px] text-[0.8rem]'>PRODUCT DETAILS</span>
                                    <span class='w-[80%] h-[25px] text-white p-y-[5px] border-white border-[1px] pl-[5px] flex justify-left items-center ml-[10px] text-[0.8rem]'>SELLER DETAILS</span>
                                </div>
                                <div class='w-[60%] h-full  border-[1px] border-[white] flex justify-around items-center'>
                                    <div class='w-[80px] h-full m-0 p-0 flex justify-center items-center'>
                                        <Image src='/qrcode.png' width='50px' height='50px'/>
                                    </div>
                                    <div>
                                        <Image src='/fbk.png'     class='m-[5px]' width='30px' height='30px'/>
                                        <Image src='/insta.png'   class='m-[5px]' width='30px' height='30px'/>
                                        <Image src='/tiktok.png'  class='m-[5px]' width='30px' height='30px'/>
                                        <Image src='/twitter.png' class='m-[5px]' width='30px' height='30px'/>
                                        <Image src='/you.png'     class='m-[5px]' width='30px' height='30px'/>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Product