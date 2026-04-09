  import { useHistory } from 'react-router-dom';
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faTwitter } from "@fortawesome/free-brands-svg-icons";

  const Home = () => {
    const history = useHistory();

    const handleOrderClick = () => {
      history.push('/pizza');
    };

    return (
      <div className="font-['Barlow'] overflow-x-hidden bg-[#FAF7F2] min-h-screen text-[#292929]">
        
        {/* ========================== 1.BÖLÜM // BANNER ========================== */}
        <section className="relative w-full min-h-screen overflow-hidden">
          <img 
            src="/images/iteration-1-images/home-banner.png" 
            alt="Banner" 
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-10 flex flex-col items-center text-center pt-[5vh] px-4 w-full">
            <img 
              src="/images/iteration-1-images/logo.svg" 
              alt="Logo" 
              className="w-[200px] md:w-[350px] mb-12 md:mb-16"
            />

            {/* ALT BLOK */}
            <div className="flex flex-col items-center justify-center">
              <p className="font-['Satisfy'] text-[#FFD700] text-2xl md:text-3xl mb-4 italic leading-none">
                fırsatı kaçırma
              </p>
              <h1 className="font-['Roboto_Condensed'] font-light text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-widest mb-10 uppercase">
                KOD ACIKTIRIR<br />PİZZA, DOYURUR
              </h1>
              <button 
                onClick={handleOrderClick}
                className="bg-[#FFD700] text-[#292929] px-16 py-4 rounded-full font-semibold text-xl hover:bg-yellow-500 transition-all shadow-xl uppercase tracking-widest whitespace-nowrap leading-none min-w-[200px]"
              >
                ACIKTIM
              </button>
            </div>
          </div>
        </section>

        {/* ========================== 2.BÖLÜM // NAVIGATION-CATEGORIES-1 ========================== */}
        <nav className="bg-white py-6 shadow-sm flex justify-center w-full">
          <div className="max-w-[1100px] w-full px-4 flex justify-center"> 
            <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-x-12 gap-y-6 w-fit">
              {[
                { id: '1', name: 'YENİ! Kore' },
                { id: '2', name: 'Pizza' },
                { id: '3', name: 'Burger' },
                { id: '4', name: 'Kızartmalar' },
                { id: '5', name: 'Fast food' },
                { id: '6', name: 'Gazlı İçecek' }
              ].map(cat => (
                <button 
                  key={cat.id} 
                  onClick={handleOrderClick} 
                  className="flex items-center gap-3 group cursor-pointer whitespace-nowrap min-w-[140px] md:min-w-0"
                >
                  <img 
                    src={`/images/iteration-2-images/icons/${cat.id}.svg`} 
                    alt="" 
                    className="w-10 h-10 object-contain" 
                  />
                  <span className="text-sm md:text-base font-medium group-hover:text-[#CE2829] transition-colors">
                    {cat.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* ========================== 3.BÖLÜM // MENU CARDS ========================== */}
        <section className="w-full pt-12 pb-8 px-4 flex justify-center bg-[#FAF7F2]">
          <div className="max-w-[1072px] w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            
            {/* Sol Büyük Kart */}
            <div className="relative bg-[#CE2829] rounded-2xl p-8 md:p-12 overflow-hidden flex flex-col justify-start min-h-[360px] md:min-h-[420px]">
              <div className="relative z-10 w-full md:w-[60%] text-white">
                <h3 className="font-['Quattrocento'] text-white text-[70px] md:text-7xl font-bold mb-4 leading-[1.1] md:leading-[1]">
                  Özel<br />Lezzetus
                </h3>
                <p className="text-white text-xl md:text-xl font-medium mb-8 leading-snug">
                  Position: Absolute Acı Burger
                </p>
                <button onClick={handleOrderClick} className="bg-white text-[#CE2829] px-8 py-4 md:px-8 md:py-4 rounded-full font-bold uppercase text-base md:text-base hover:bg-gray-100 transition-colors w-fit leading-none">
                  SİPARİŞ VER
                </button>
              </div>
              <img 
              src="/images/iteration-2-images/cta/kart-1.png"
              alt="Özel Lezzetus Pizza"
              className="absolute pointer-events-none z-0 bottom-[-10px] right-[-40px] min-w-[440px] w-[95%] h-auto md:bottom-[-40px] md:right-[-40px] md:min-w-0 md:w-auto md:h-[115%] md:max-w-none" 
              />
            </div>

            {/* Sağ İki Küçük Kart */}
            <div className="flex flex-col gap-4">
              
              {/* Sağ-Üst Kart - Hackathlon Burger */}
              <div className="bg-[#292929] rounded-2xl p-8 relative overflow-hidden h-[200px] flex items-center text-white shadow-md">
                <div className="z-10 w-[60%]">
                  <h2 className="text-3xl font-semibold mb-4 !font-['Barlow']">
                    Hackathlon <br /> Burger Menü
                  </h2>
                  <button 
                    onClick={handleOrderClick} 
                    className="bg-white text-[#CE2829] px-8 py-4 rounded-full font-bold uppercase text-base hover:bg-gray-100 transition-colors w-fit leading-none"
                  >
                    SİPARİŞ VER
                  </button>
                </div>
                <img 
                  src="/images/iteration-2-images/cta/kart-2.png" 
                  className="absolute right-5 bottom-10 h-full w-[75%] object-contain object-right-bottom" 
                  alt="Burger Menü"
                />
              </div>
              
              {/* Sağ-Alt Kart - npm kurye */}
              <div className="bg-[#FAF7F2] rounded-2xl p-8 relative overflow-hidden h-[200px] flex items-center shadow-md">
                <div className="z-10 w-[70%]">
                  <h2 className="text-3xl font-semibold text-[#292929] mb-4 leading-tight !font-['Barlow']">
                    <span className="text-[#CE2829]">Çoooook</span> hızlı <br /> npm gibi kurye
                  </h2>
                  <button 
                    onClick={handleOrderClick} 
                    className="bg-white text-[#CE2829] px-8 py-4 rounded-full font-bold uppercase text-base hover:bg-gray-100 transition-colors w-fit leading-none"
                  >
                    SİPARİŞ VER
                  </button>
                </div>
                <img 
                  src="/images/iteration-2-images/cta/kart-3.png" 
                  className="absolute inset-0 w-full h-full object-cover z-0" 
                  alt="Hızlı Kurye"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================== 4.BÖLÜM // ORTA SAYFA ========================== */}
        <section className="pt-8 pb-8 px-4 flex flex-col items-center w-full bg-[#FAF7F2]">
          <p className="font-['Satisfy'] text-[#CE2829] text-2xl md:text-3xl mb-4 italic text-center">
            en çok paketlenen menüler
          </p>
          <h2 className="text-[32px] md:text-[42px] font-semibold mb-12 !font-['Barlow'] text-center text-[#292929] leading-[1.2] max-w-[340px] md:max-w-none md:w-fit md:px-0 mx-auto">
            Acıktıran<br className="md:hidden" /> Kodlara Doyuran<br className="md:hidden" /> Lezzetler
          </h2>
        </section>

        {/* ========================== 5.BÖLÜM // NAVIGATION-CATEGORIES-2 ========================== */}
        <section className="pb-16 px-4 flex flex-col items-center w-full bg-[#FAF7F2]">
          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 md:gap-4 max-w-[1072px] w-full">
            {[
              { name: 'Ramen', icon: '1.svg' },
              { name: 'Pizza', icon: '2.svg' },
              { name: 'Burger', icon: '3.svg' },
              { name: 'French fries', icon: '4.svg' },
              { name: 'Fast food', icon: '5.svg' },
              { name: 'Soft drinks', icon: '6.svg' }
            ].map((item, i) => (
              <button 
                key={item.name}
                onClick={handleOrderClick} 

                className={`flex items-center justify-start gap-3 py-3 px-5 rounded-full font-medium text-lg transition-all cursor-pointer shadow-sm w-full md:w-auto
                  ${i === 1 ? 'bg-[#292929] text-white' : 'bg-white text-gray-800 hover:bg-gray-100'}`}
              >
                <img 
                  src={`/images/iteration-2-images/icons/${item.icon}`} 
                  alt={item.name} 
                  className={`w-10 h-10 object-contain ${i === 1 ? 'brightness-200' : ''}`} 
                />
                <span className="whitespace-nowrap">{item.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* ========================== 6.BÖLÜM // HIZLI SİPARİŞ KARTLARI ========================== */}
        <section className="pb-24 px-4 flex flex-col items-center w-full bg-[#FAF7F2]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1072px] w-full">
            {[1, 2, 3].map(id => (
              <div 
                key={id} 
                onClick={handleOrderClick} 
                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col items-start text-left cursor-pointer"
              >
                <img 
                  src={`/images/iteration-2-images/pictures/food-${id}.png`} 
                  alt="" 
                  className="w-full h-auto aspect-square mb-10 object-contain mx-auto" 
                />
                <h3 className="text-xl font-semibold mb-2 !font-['Barlow'] text-[#292929]">
                  {id === 1 ? 'Terminal Pizza' : id === 2 ? 'Position Absolute Pizza' : 'useEffect Burger'}
                </h3>
                <div className="flex justify-between w-full font-medium text-gray-500 items-center">
                  <span className="font-bold text-sm">4.9 (200)</span>
                  <span className="text-[#292929] text-xl font-bold">60₺</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================== 7.BÖLÜM // FOOTER ========================== */}
        <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 w-full flex flex-col items-center">
          <div className="max-w-[1072px] w-full px-12 grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 items-start">
            <div className="flex flex-col items-start md:-mt-8">
              <img 
                src="/images/iteration-2-images/footer/logo-footer.svg" 
                alt="Footer Logo" 
                className="w-[200px] mb-8 md:mt-[-12px]" 
              />
              <div className="space-y-6 text-normal text-white-400 font-['Barlow']">
                <p className="flex items-start gap-3 justify-start leading-relaxed">
                  <img src="/images/iteration-2-images/footer/icons/icon-1.png" className="w-5 mt-1" alt="" />
                  <span>341 Londonderry Road,<br /> İstanbul Türkiye</span>
                </p>
                <p className="flex items-center gap-3 justify-start">
                  <img src="/images/iteration-2-images/footer/icons/icon-2.png" className="w-5" alt="" />
                  aciktim@teknolojikyemekler.com
                </p>
                <p className="flex items-center gap-3 justify-start">
                  <img src="/images/iteration-2-images/footer/icons/icon-3.png" className="w-5" alt="" />
                  +90 216 123 45 67
                </p>
              </div>
            </div>
            
            {/* 2. Sütun: Hot Menu */}
            <div className="flex flex-col items-start md:mt-8">
              <h4 className="text-xl font-semibold mb-10 font-['Barlow'] leading-none">
                Hot Menu
              </h4>
              <ul className="space-y-4 text-normal text-white-400 font-light font-['Barlow'] md:-mt-2 flex flex-col items-start">
                <li>Terminal Pizza</li>
                <li>5 Kişilik Hackathlon Pizza</li>
                <li>useEffect Tavuklu Pizza</li>
                <li>Beyaz Console Frosty</li>
                <li>Testler Geçti Mutlu Burger</li>
                <li>Position Absolute Acı Burger</li>
              </ul>
            </div>

            {/* 3. Sütun: Instagram */}
            <div className="flex flex-col items-start md:mt-8">
              <h4 className="text-xl font-semibold mb-10 font-['Barlow'] leading-none">
                Instagram
              </h4>
              <div className="grid grid-cols-3 gap-3 max-w-[280px]">
                {[0, 1, 2, 3, 4, 5].map(i => (
                  <img 
                    key={i} 
                    src={`/images/iteration-2-images/footer/insta/li-${i}.png`} 
                    className="w-full rounded-lg object-cover aspect-square" 
                    alt="" 
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Alt Bar */}
          <div className="border-t border-gray-800 pt-8 w-full">
            <div className="max-w-[1072px] mx-auto flex justify-between items-center text-[12px] px-12">
              <p className="text-lg text-white-400">© 2023 Teknolojik Yemekler.</p>
              <div className="text-white hover:text-blue-400 transition-colors cursor-pointer">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  };

  export default Home;