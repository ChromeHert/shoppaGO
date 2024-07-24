import React from 'react'
import heroImg4 from '../assets/prdtImg4.jpg';
import heroImg5 from '../assets/prdtImg5.jpg';
import heroImg6 from '../assets/prdtImg6.jpg';
import heroImg7 from '../assets/prdtImg7.jpg';

const HeroII = () => {
  return (
      <>
          <div className="">
              <div className="container mx-auto px-4 py-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                      <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
                          <img src={heroImg7} alt="Nature" className="w-full h-full object-cover" />
                          <div
                              className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-0 left-0 right-0 p-4">
                                  <h3 className="text-2xl font-bold text-white">Groceries</h3>
                                  <p className="text-white">Discover the beauty of the natural world</p>
                              </div>
                          </div>
                      </div>

                      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                          <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Food" className="w-full h-48 object-cover" />
                          <div
                              className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-0 left-0 right-0 p-4">
                                  <h4 className="text-xl font-bold text-white">Culinary Delights</h4>
                              </div>
                          </div>
                      </div>
                      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MjEwNDI2Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Technology" className="w-full h-48 object-cover" />
                          <div
                              className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-0 left-0 right-0 p-4">
                                  <h4 className="text-xl font-bold text-white">Tech Innovations</h4>
                              </div>
                          </div>
                      </div>

                      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                          <img src={heroImg4} alt="Travel" className="w-full h-48 object-cover" />
                          <div
                              className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-0 left-0 right-0 p-4">
                                  <h4 className="text-xl font-bold text-white">Beauty Products</h4>
                              </div>
                          </div>
                      </div>
                      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                          <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxhcnR8ZW58MHwwfHx8MTcyMTA0MjY5Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Art" className="w-full h-48 object-cover" />
                          <div
                              className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-0 left-0 right-0 p-4">
                                  <h4 className="text-xl font-bold text-white">Artistic Expressions</h4>
                              </div>
                          </div>
                      </div>

                      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                          <img src={heroImg5} alt="Sport" className="w-full h-48 object-cover" />
                          <div
                              className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-0 left-0 right-0 p-4">
                                  <h4 className="text-xl font-bold text-white">Cosmetics</h4>
                              </div>
                          </div>
                      </div>
                      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                          <img src={heroImg6} alt="Sport" className="w-full h-48 object-cover" />
                          <div
                              className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-0 left-0 right-0 p-4">
                                  <h4 className="text-xl font-bold text-white">Veggies</h4>
                              </div>
                          </div>
                      </div>
                      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                          <img src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxmb290YmFsbHxlbnwwfDB8fHwxNzIxMDQzMjExfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Sport" className="w-full h-48 object-cover" />
                          <div
                              className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-0 left-0 right-0 p-4">
                                  <h4 className="text-xl font-bold text-white">Football</h4>
                              </div>
                          </div>
                      </div>
                      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                          <img src="https://img.freepik.com/free-photo/close-up-view-online-shopping-concept_23-2148625687.jpg?t=st=1721816722~exp=1721820322~hmac=76f6f6daa3fb4a4bef9b2dfce0b40555796c36b365f2ef41f1565f83559d7d5a&w=360" alt="Sport" className="w-full h-48 object-cover" />
                          <div
                              className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-0 left-0 right-0 p-4">
                                  <h4 className="text-xl font-bold text-white">Gadgets</h4>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default HeroII