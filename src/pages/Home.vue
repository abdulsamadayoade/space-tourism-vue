<script setup></script>

<template>
  <section class="home h-screen w-full py-20 px-5">
    <div class="flex flex-col justify-between h-full">
      <div class="text-center">
        <p class="text-base uppercase text-cLightBlue font-barlow-condensed leading-[19px] tracking-[2.7px]">SO, YOU
          WANT
          TO TRAVEL TO</p>
        <h1 class="text-cWhite text-[80px] my-5 font-bellefair uppercase font-normal leading-[100px]">Space</h1>
        <p class="text-cLightBlue font-barlow text-[15px]">
          Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of
          on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
        </p>
      </div>

      <div class="flex items-center justify-center">
        <button class="explore-btn h-[250px] w-[250px] relative"></button>
      </div>
    </div>
  </section>
</template>

<style>
.home {
  background-image: url('../assets/home/background-home-mobile.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.explore-btn:hover::after {
  transform: scale(1);
}

.explore-btn::after {
  content: '';
  width: 250px;
  height: 250px;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);
  border-radius: 50%;
  transform: scale(0);
  transition: transform 0.5s ease;
}

.explore-btn::before {
  content: 'Explore';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  text-transform: uppercase;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  letter-spacing: 1.25px;
  font-family: 'Bellefair', serif;
  font-weight: 400;
  color: #0B0D17;
  z-index: 2;
}
</style>