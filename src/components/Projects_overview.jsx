import React from 'react'
import { Outlet } from 'react-router-dom'
import img from "../assets/article-img-1.jpg"

const Projects_overview = () => {
    return (
        <div className='flex'>
            <div>
                <div>
                    <h3 className='text-[18px] font-bold'>Project overview</h3>
                    <p className='w-[550px] text-[#737373] text-[16px] mt-5'>Bite plants chirp at birds for gnaw the corn cob be a nyan cat,
                        feel great about it, be annoying 24/7 poop rainbows in litter box
                        all day sleep on my human's head cat dog hate mouse eat string barf
                        pillow no baths hate everything cat not kitten around . Swat turds
                        around the house chase dog then run away but pet right here, no not
                        there, here,</p>
                </div>
                <div>
                    <h3 className='text-[18px] font-bold mt-4'>About the client</h3>
                    <p className='w-[530px] text-[#737373] text-[16px] mt-5'>Lick butt. Under the bed purrrrrr or attack like a vicious monster and
                        instantly break out into full speed gallop across the house for no reason
                        for scream for no reason at 4 am or climb leg meowing chowing and wowing. Cat gets stuck
                        in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters'slippers pelt
                        around the house and up and down stairs chasing phantoms for sleep over your phone and make cute snoring noises
                        take a deep sniff of sock then walk around with mouth half open drool sit in box, pee on walls it smells
                        like breakfast. Cough furball kitty poochy.</p>
                </div> 
                <div  className='w-[530px] text-[#737373] text-[16px] mt-4'>
                    <h4>
                        What the heck just happened, something feels fishy head nudges i cry and cry and cry unless you pet me, and then maybe
                        i cry just for fun demand to have some of whatever the human is cooking, then sniff the offering and walk away
                        lick the curtain just to be annoying the door is opening! how exciting oh, it's you, meh run off table persian
                        cat jump eat fish. Knock dish off table head butt cant eat out of my own dish touch my tail, i shred your hand purrrr.
                    </h4>
                    <h4 className='mt-4'>
                        Pounce on unsuspecting person purr as loud as possible, be the most annoying cat that you can, and, knock everything off 
                        the table but flex claws on the human's belly and purr like a lawnmower, yet ask for petting so cats are a queer kind 
                        of folk so lick yarn hanging out of own butt yet skid on floor, crash into wall.
                    </h4>
                    <h4 className='mt-4'>Meow meow you are my owner so here is a dead rat get scared by sudden appearance of cucumber leave dead animals
                         as gifts cat jumps 
                        and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow
                         meow yummy there is a bunch of cats hanging around eating catnip</h4>
                </div>
                <div>
                    <img src={img} alt="" className='w-[540px] my-7' />
                </div>
                <div>
                    <h2 className='font-bold text-[18px] text-[#171717]'>The goals</h2>
                    <h4 className='w-[550px] text-[#737373] text-[16px] mt-5'>
                        Reward the chosen human with a slow blink making sure that fluff gets
                        into the owner's eyes and sit on human cuddle no cuddle cuddle love scratch scratch.
                        Grass smells good then cats take over the world but stare at ceiling light, sniff other
                        cat's butt and hang jaw half open thereafter the dog smells bad. Groom yourself 4 hours - 
                        checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked shed
                        everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the
                         grass sniff for bathe private parts with tongue then lick owner's face hit you unexpectedly. Growl at dogs
                          in my sleep scratch the furniture inspect anything brought into the house, for pelt 
                        around the house and up and down stairs chasing phantoms x rub my belly hiss chew the plant. 
                        Licks your face mrow stare at the wall, play with food and get confused by dust. Commence midnight
                         zoomies destroy house in 5 seconds, suddenly go on wild-eyed crazy rampage.</h4>
                </div>
                <div>
                    <h2 className='font-bold text-[18px] text-[#171717] mt-5'>Requirements</h2>
                    <h4 className='w-[550px] text-[#737373] text-[16px] mt-5'>Floof tum, tickle bum, jellybean footies curly toes no, you can't close the door, i haven't decided 
                        whether or not i wanna go out, yet hiding behind the couch until lured out by a feathery toy so chase
                        red laser dot. Eat my own ears catching very fast laser pointer but eat fish on floor cough furball into
                        food bowl then scratch owner for a new one use lap as chair reaches under door
                         into adjacent room. Eat the fat cats food paw your face to wake you up in the morning.
                          While happily ignoring when being called.</h4>
                </div>
            </div>
            <div className=''>
                <div className='bg-[#f5f5f5] rounded-[12px] w-[320px] h-[269px] p-6'>
                <h2 className='text-[18px] font-bold'>Client information</h2>
                <h3 className='mt-4 font-medium'>Client: <span className='text-[#737373] mt-4'>Acme Agency inc.</span></h3>
                <h3 className='mt-4 font-medium'>Skate holder:</h3>
                <div className='flex mt-4 gap-2'>
                <h3 className='h-[24px] w-[24px] rounded-full bg-amber-300 text-amber-300 '>v</h3>
                <h4 className=' text-[#737373] font-medium'>Jeremiah Minsk</h4>
                </div>
                <h3 className='mt-4 font-medium'>Project manager:</h3>
                <div className='flex gap-2 mt-4'>
                <h3 className='h-[24px] w-[24px] rounded-full bg-amber-300 text-amber-300 '>v</h3>   
                <h4 className=' text-[#737373] font-medium'>Max Alexander</h4>
                 </div>
                </div>
                <div className='bg-[#f5f5f5] rounded-[12px] w-[320px] h-[269px] p-6 mt-10 mr-5'>
                <h2 className='text-[18px] font-bold'>Schedule</h2>
                <h3 className='mt-4 font-medium'>Start date: <span className='text-[#737373] mt-4'>Sat,09 Mar 2024</span></h3>
                <h3 className='mt-4 font-medium'>due date: <span className='text-[#737373] mt-4'>Sat,09 Mar 2025</span></h3>
                <div className='flex font-medium gap-4 mt-5'>
                <h4>Status:</h4>
                <h5 className='text-green-600 font- border border-green-600 rounded-full p-1 text-[12px]'>In progress</h5>
                </div>
                <h5 className='font-medium mt-3'>Competition:</h5>
                <div className="flex justify-center">
                <div className="flex items-center gap-3 mt-5 w-64">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  <span className="font-semibold text-sm">80%</span>
                </div>
              </div>
            </div>
            </div>
            
        </div>
    )
}

export default Projects_overview