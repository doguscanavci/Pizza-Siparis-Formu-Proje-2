import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import logo from '../../images/iteration-1-images/logo.svg';
import banner from '../../images/iteration-2-images/pictures/form-banner.png';

const OrderPizza = ({ setOrderData }) => {
  const history = useHistory();
  const [counter, setCounter] = useState(1);
  const [isFormValid, setIsFormValid] = useState(false);
  
  const [formData, setFormData] = useState({
    boyut: '',
    hamur: '',
    malzemeler: [],
    not: ''
  });

  const malzemelerListesi = ['Pepperoni','Sosis','Kanada Jambonu','Tavuk Izgara','Soğan','Domates','Mısır','Sucuk','Jalepeno','Sarımsak','Biber','Ananas','Kabak'];
  const pizzaTabanFiyat = 85.50;
  const ekMalzemeFiyat = 5;
  const secimlerToplami = formData.malzemeler.length * ekMalzemeFiyat;
  const toplamFiyat = (pizzaTabanFiyat + secimlerToplami) * counter;

  useEffect(() => {
    const valid = 
      formData.boyut !== '' && 
      formData.hamur !== '' &&
      formData.malzemeler.length >= 4 && 
      formData.malzemeler.length <= 10;
    
    setIsFormValid(valid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const guncelMalzemeler = checked 
        ? [...formData.malzemeler, value] 
        : formData.malzemeler.filter(m => m !== value);
      setFormData({ ...formData, malzemeler: guncelMalzemeler });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalOrder = {
      name: "Position Absolute Acı Pizza",
      size: formData.boyut,
      dough: formData.hamur.charAt(0).toUpperCase() + formData.hamur.slice(1),
      ingredients: formData.malzemeler.join(", "),
      extrasPrice: secimlerToplami.toFixed(2),
      totalPrice: toplamFiyat.toFixed(2)
    };

    const config = { headers: { 'x-api-key': 'reqres-free-v1' } };
    
    axios.post('https://reqres.in/api/users', formData, config)
      .then(() => {
        setOrderData(finalOrder);
        history.push('/success');
      })
      .catch(() => {
        setOrderData(finalOrder);
        history.push('/success');
      });
  };

  return (
    <div className="w-full min-h-screen bg-white font-['Barlow'] flex flex-col items-center">
      
      {/* ========================== 1.BÖLÜM // HEADER ========================== */}
      <header className="bg-[#ce2829] w-full flex flex-col items-center">
        <div className="py-6 md:py-12 flex justify-center w-full">
          <img src={logo} alt="Logo" className="w-[160px] md:w-[280px]" />
        </div>
        <div className="bg-[#ce2829] w-full py-3 px-6 md:hidden border-red-400">
          <nav className="text-white text-xs">
            <span className="font-light opacity-80">Anasayfa</span>
            <span className="mx-2">-</span>
            <span className="font-bold">Sipariş Oluştur</span>
          </nav>
        </div>
      </header>
      
      {/* ========================== 2.BÖLÜM // ÜST BİLGİ ========================== */}
      <section className="w-full bg-white md:bg-[#FAF7F2] pb-4 md:pb-8 flex flex-col items-center">
        <div className="hidden md:flex w-full flex justify-center bg-[#FAF7F2]">
          <img src={banner} alt="Banner" className="w-full max-w-[1072px] h-[250px] object-contain"/>
        </div>
        <div className="max-w-[600px] w-full mx-auto px-6 md:px-0 mt-6 md:mt-12 flex flex-col items-start">
          <nav className="hidden md:block text-sm font-medium mb-8">
            <span className="text-[#5f5f5f]">Anasayfa</span>
            <span className="mx-2 text-[#5f5f5f]">-</span>
            <span className="text-[#ce2829] font-bold">Sipariş Oluştur</span>
          </nav>
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#292929]">Position Absolute Acı Pizza</h2>
          <div className="flex justify-between items-center mb-6 w-full font-bold">
            <b className="text-2xl md:text-3xl">{pizzaTabanFiyat.toFixed(2)}₺</b>
            <div className="flex gap-8 text-[#5f5f5f] text-sm md:text-base">
              <span>4.9</span><span>(200)</span>
            </div>
          </div>
          <p className="text-[#5f5f5f] leading-relaxed text-sm md:text-base">
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
            malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı
            buğrday bazlı hamurdan oluşan İtalyan kökenli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
          </p>
        </div>
      </section>

      {/* ========================== 3.BÖLÜM // FORM ALANLARI ========================== */}
      <main className="w-full bg-white py-8 md:py-12 flex flex-col items-center">
        <div className="max-w-[600px] w-full mx-auto px-6 md:px-0">
          <form onSubmit={handleSubmit} className="space-y-10 md:space-y-12">
            
            {/* BOYUT VE HAMUR SEÇİMİ ALANI*/}
            <div className="flex flex-row md:flex-row gap-4 md:gap-16 items-start">
              <div className="flex-1">
                <h3 className="font-bold text-lg md:text-xl mb-4">Boyut Seç <span className="text-red-600">*</span></h3>
                <div className="flex flex-col md:flex-row gap-4">
                  {['S', 'M', 'L'].map(b => (
                    <label key={b} className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="boyut" value={b} onChange={handleChange} required className="w-5 h-5 md:sr-only accent-[#ce2829]" />
                      <div className={`hidden md:flex w-14 h-14 items-center justify-center rounded-full font-bold text-lg transition-all
                        ${formData.boyut === b ? 'bg-[#fdc913] text-[#292929]' : 'bg-[#FAF7F2] text-[#5f5f5f]'}`}>
                        {b}
                      </div>
                      <span className="md:hidden font-medium text-[#5f5f5f] text-sm">{b === 'S' ? 'Küçük' : b === 'M' ? 'Orta' : 'Büyük'}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg md:text-xl mb-4">Hamur Seç <span className="text-red-600">*</span></h3>
                <select name="hamur" onChange={handleChange} required className="w-full p-3 md:p-4 bg-white md:bg-[#FAF7F2] border border-gray-200 md:border-none rounded-md font-bold text-sm focus:outline-none">
                  <option value="">-Hamur Kalınlığı Seç-</option>
                  <option value="ince">İnce</option>
                  <option value="kalin">Kalın</option>
                </select>
              </div>
            </div>

            {/* EK MALZEMELER */}
            <div>
              <h3 className="font-bold text-lg mb-2">Ek Malzemeler</h3>
              <p className="text-[#5f5f5f] mb-6 font-medium text-xs">En az 4, en fazla 10 malzeme seçmelisiniz. 5₺</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4">
                {malzemelerListesi.map(m => (
                  <label key={m} className="flex items-center gap-3 cursor-pointer font-bold text-[#5f5f5f]">
                    <div className="relative w-6 h-6 md:w-10 md:h-10">
                      <input 
                        type="checkbox" 
                        value={m} 
                        onChange={handleChange} 
                        checked={formData.malzemeler.includes(m)}
                        className="peer absolute opacity-0 w-full h-full cursor-pointer"
                        disabled={!formData.malzemeler.includes(m) && formData.malzemeler.length >= 10} 
                      />
                      <div className={`w-full h-full rounded flex items-center justify-center transition-all
                        bg-white md:bg-[#FAF7F2] border border-gray-200 md:border-none
                        peer-checked:bg-[#2979FF] md:peer-checked:bg-[#fdc913]`}>
                        {formData.malzemeler.includes(m) && (
                          <span className="text-white md:text-[#292929] font-black text-sm md:text-xl">✓</span>
                        )}
                      </div>
                    </div>
                    <span className="text-xs md:text-base">{m}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* SİPARİŞ NOTU */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Sipariş Notu</h3>
              <textarea name="not" placeholder="Siparişine eklemek istediğin bir not var mı?" 
                className="w-full p-4 bg-white md:bg-[#FAF7F2] border border-gray-200 md:border-none rounded-md h-20 focus:outline-none text-sm" onChange={handleChange} />
            </div>

            <hr className="border-gray-200" />

            {/* SAYAÇ VE SİPARİŞ TOPLAM ALANI */}
            <div className="pb-20">
              {/* MASAÜSTÜ VERSİYON*/}
              <div className="hidden md:flex flex-row items-stretch gap-6">
                <div className="flex items-center justify-between border border-gray-200 rounded-md bg-white min-w-[140px] h-14 overflow-hidden">
                  <button type="button" onClick={() => setCounter(Math.max(1, counter-1))} className="flex-1 h-full bg-[#fdc913] font-bold text-xl hover:bg-[#eab308]">-</button>
                  <span className="flex-[1.5] text-center font-bold text-lg">{counter}</span>
                  <button type="button" onClick={() => setCounter(counter+1)} className="flex-1 h-full bg-[#fdc913] font-bold text-xl hover:bg-[#eab308]">+</button>
                </div>
                <div className="flex-1 bg-[#FAF7F2] p-8 rounded-md border border-gray-200">
                  <h4 className="font-bold text-lg mb-4">Sipariş Toplamı</h4>
                  <div className="space-y-2 mb-6 text-sm font-bold">
                    <div className="flex justify-between text-[#5f5f5f]"><span>Seçimler</span><span>{secimlerToplami.toFixed(2)}₺</span></div>
                    <div className="flex justify-between text-[#ce2829]"><span>Toplam</span><span>{toplamFiyat.toFixed(2)}₺</span></div>
                  </div>
                  <button type="submit" disabled={!isFormValid} className={`w-full py-4 rounded-md font-bold text-lg transition-colors ${isFormValid ? 'bg-[#fdc913] text-[#292929]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
                    SİPARİŞ VER
                  </button>
                </div>
              </div>

              {/* MOBİL VERSİYON*/}
              <div className="flex flex-col gap-4 md:hidden">
                <div className="bg-white p-6 rounded-md border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-lg mb-4">Sipariş Toplamı</h4>
                  <div className="space-y-2 mb-2 text-sm font-bold">
                    <div className="flex justify-between text-[#5f5f5f]"><span>Seçimler</span><span>{secimlerToplami.toFixed(2)}₺</span></div>
                    <div className="flex justify-between text-[#ce2829]"><span>Toplam</span><span>{toplamFiyat.toFixed(2)}₺</span></div>
                  </div>
                </div>
                <div className="flex flex-row gap-3 h-14">
                  <div className="flex items-center justify-between border border-gray-200 rounded-md bg-white w-1/3 overflow-hidden">
                    <button type="button" onClick={() => setCounter(Math.max(1, counter-1))} className="flex-1 h-full bg-[#fdc913] font-bold text-xl">-</button>
                    <span className="flex-1 text-center font-bold">{counter}</span>
                    <button type="button" onClick={() => setCounter(counter+1)} className="flex-1 h-full bg-[#fdc913] font-bold text-xl">+</button>
                  </div>
                  <button type="submit" disabled={!isFormValid} className={`flex-1 rounded-md font-bold text-lg transition-colors ${isFormValid ? 'bg-[#fdc913] text-[#292929]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
                    SİPARİŞ VER
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>

      {/* ========================== 4.BÖLÜM // FOOTER ========================== */}
      <footer className="hidden md:flex bg-[#1A1A1A] text-white pt-20 pb-10 w-full flex-col items-center">
        <div className="max-w-[1072px] w-full px-8 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 items-start">
          <div className="flex flex-col items-start md:-mt-8">
            <img src="/images/iteration-2-images/footer/logo-footer.svg" alt="Footer Logo" className="w-[180px] md:w-[200px] mb-8" />
            <div className="space-y-6 text-sm">
              <p className="flex items-start gap-3"><img src="/images/iteration-2-images/footer/icons/icon-1.png" className="w-5 mt-1" alt="" /><span>341 Londonderry Road,<br /> İstanbul Türkiye</span></p>
              <p className="flex items-center gap-3"><img src="/images/iteration-2-images/footer/icons/icon-2.png" className="w-5" alt="" />aciktim@teknolojikyemekler.com</p>
              <p className="flex items-center gap-3"><img src="/images/iteration-2-images/footer/icons/icon-3.png" className="w-5" alt="" />+90 216 123 45 67</p>
            </div>
          </div>
          <div className="flex flex-col items-start md:mt-8">
            <h4 className="text-xl font-semibold mb-6 md:mb-10">Hot Menu</h4>
            <ul className="space-y-4 text-sm font-light text-gray-300">
              <li>Terminal Pizza</li><li>5 Kişilik Hackathlon Pizza</li><li>useEffect Tavuklu Pizza</li><li>Beyaz Console Frosty</li><li>Testler Geçti Mutlu Burger</li><li>Position Absolute Acı Burger</li>
            </ul>
          </div>
          <div className="flex flex-col items-start md:mt-8">
            <h4 className="text-xl font-semibold mb-6 md:mb-10">Instagram</h4>
            <div className="grid grid-cols-3 gap-3 max-w-[280px]">
              {[0,1,2,3,4,5].map(i => <img key={i} src={`/images/iteration-2-images/footer/insta/li-${i}.png`} className="w-full rounded-lg aspect-square object-cover" alt="" />)}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 w-full">
          <div className="max-w-[1072px] mx-auto flex justify-between items-center text-xs px-8">
            <p className="text-base text-gray-400">© 2023 Teknolojik Yemekler.</p>
            <div className="text-xl text-white"><FontAwesomeIcon icon={faTwitter} /></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OrderPizza;