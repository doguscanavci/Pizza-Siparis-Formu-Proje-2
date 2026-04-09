import React from 'react';

const Success = () => {
  // Örnek veri seti
  const orderDetails = {
    name: "Position Absolute Acı Pizza",
    size: "L",
    dough: "Süpper İnce",
    ingredients: "Pepperoni, Sosis, Mısır, Ananas, Jalepeno",
    extrasPrice: "25.00",
    totalPrice: "110.50"
  };

  return (
    <div className="bg-[#ce2829] min-h-screen flex flex-col items-center text-white font-['Barlow']">
      
      {/* ========================== 1.BÖLÜM // MASAÜSTÜ VE MOBİL HEADER ========================== */}
      <header className="w-full flex justify-center mt-24 md:mt-12 mb-10 md:mb-16">
        <img 
          src="/images/iteration-1-images/logo.svg" 
          alt="Logo" 
          className="w-[280px] md:w-[350px]" 
        />
      </header>

      <main className="flex flex-col items-center w-full px-6 text-center">
        
        {/* ========================== 2.BÖLÜM // MOBİL SUCCESS SAYFASI ========================== */}
        <div className="md:hidden mt-6 mb-12">
           <h1 className="text-5xl xs:text-6xl font-extralight tracking-widest leading-tight uppercase">
             TEBRİKLER!<br />SİPARİŞİNİZ<br />ALINDI!
           </h1>
        </div>

        {/* ========================== 3.BÖLÜM // MASAÜSTÜ SUCCESS SAYFASI ========================== */}
        <div className="hidden md:flex flex-col items-center w-full max-w-[800px]">
          
          {/*  SİPARİŞ ALINDI MESAJI  */}
          <div className="flex flex-col items-center mb-10">
            <p className="text-[#fdc913] font-['Satisfy'] text-3xl mb-4 italic">lezzetin yolda</p>
            <h1 className="text-7xl font-extralight tracking-tighter border-white/30 pb-8 mb-1 uppercase w-full max-w-[600px] text-center">
              SİPARİŞ ALINDI
            </h1>
            <div className="w-[600px] max-w-[90%] h-[1px] bg-white/80"></div>
          </div>

          {/*  SİPARİŞ ÖZETİ  */}
          <div className="flex flex-col items-start w-[350px] mb-12 text-left">
            <h3 className="text-2xl font-semibold tracking-tight mb-8 w-full pl-7">
              {orderDetails.name}
            </h3>            
            <div className="flex flex-col gap-4 text-base font-light text-white/90">
              <p className="pl-15">
                Boyut: <strong className="font-bold text-white">{orderDetails.size}</strong>
              </p>
              <p className="pl-15">
                Hamur: <strong className="font-bold text-white">{orderDetails.dough}</strong>
              </p>
              <p className="pl-15 flex items-start">
                <span>Ek Malzemeler:</span>
                <strong className="font-bold text-white ml-2 max-w-[140px] inline-block leading-snug">
                  {orderDetails.ingredients}
                </strong>
              </p>
            </div>
          </div>

          {/*  SİPARİŞ TOPLAM KARTI  */}
          <div className="border border-white rounded-md p-10 w-[350px]">
            <h4 className="text-xl font-bold mb-6 text-left uppercase tracking-tight">Sipariş Toplamı</h4>
            <div className="space-y-4 font-medium">
              <div className="flex justify-between items-center text-lg">
                <span>Seçimler</span>
                <span>{orderDetails.extrasPrice}₺</span>
              </div>
              <div className="flex justify-between items-center text-lg">
                <span>Toplam</span>
                <span>{orderDetails.totalPrice}₺</span>
              </div>
            </div>
          </div>
          
        </div>

      </main>
    </div>
  );
};

export default Success;