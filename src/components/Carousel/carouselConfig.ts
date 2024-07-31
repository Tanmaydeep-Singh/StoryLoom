interface CarouselConfig {
    autoPlay: boolean;
    autoPlayInterval: number;
    loop: boolean;
    showButtons: boolean;
  }
  
  const carouselConfig: CarouselConfig = {
    autoPlay: true,
    autoPlayInterval: 5000, // 3 seconds
    loop: true,
    showButtons: true,
  };
  
  export default carouselConfig;
  