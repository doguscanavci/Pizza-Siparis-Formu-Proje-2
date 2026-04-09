describe('Teknolojik Yemekler Sipariş Süreci', () => {
  
  beforeEach(() => {
    // Her testten önce ana sayfayı ziyaret et ve sipariş formuna geç
    cy.visit('http://localhost:5173/');
    cy.contains('ACIKTIM').first().click();
  });

  it('1. Senaryo: Zorunlu alanlar eksikken Sipariş Ver butonu disabled kalmalı', () => {
    // Başlangıçta buton devre dışı olmalı
    cy.get('button[type="submit"]').first().should('be.disabled');

    // Sadece boyut seçildiğinde buton hala devre dışı kalmalı (Eksik hamur ve malzeme)
    cy.get('input[value="L"]').check({ force: true });
    cy.get('button[type="submit"]').first().should('be.disabled');

    // Hamur da seçildiğinde buton hala devre dışı kalmalı (Eksik malzeme)
    cy.get('select[name="hamur"]').select('ince');
    cy.get('button[type="submit"]').first().should('be.disabled');
  });

  it('2. Senaryo: Sipariş notu alanı metin girişine izin vermeli (Opsiyonel Alan)', () => {
    // Not alanına metin yazılabilmeli ve yazılan değer doğrulanmalı
    cy.get('textarea[name="not"]')
      .type('Kapıyı çalmayın, siparişi kapıya bırakın.')
      .should('have.value', 'Kapıyı çalmayın, siparişi kapıya bırakın.');
  });

  it('3. Senaryo: 10 taneden fazla malzeme seçimine izin vermemeli (Maksimum Sınır)', () => {
    const malzemeler = ['Pepperoni','Sosis','Kanada Jambonu','Tavuk Izgara','Soğan','Domates','Mısır','Sucuk','Jalepeno','Sarımsak','Biber','Ananas','Kabak'];

    // İlk 10 malzemeyi seç
    malzemeler.slice(0, 10).forEach(m => {
      cy.contains(m).first().click();
    });

    // 11. malzemeye tıklamaya çalış
    cy.contains(malzemeler[10]).first().click();
    
    // Seçili checkbox sayısının hala 10 olduğunu doğrula
    cy.get('input[type="checkbox"]:checked').should('have.length', 10);
  });

  it('4. Senaryo: Tüm alanlar doğru dolduğunda sipariş başarıyla verilmeli ve /success sayfasına yönlendirilmeli', () => {
    // Zorunlu seçimleri yap
    cy.get('input[value="L"]').check({ force: true });
    cy.get('select[name="hamur"]').select('ince');

    // Minimum 4 malzeme seç
    const secilecekler = ['Pepperoni', 'Sosis', 'Mısır', 'Ananas'];
    secilecekler.forEach(m => cy.contains(m).first().click());

    // Buton aktifleşmeli ve tıklanmalı
    cy.get('button[type="submit"]').should('not.be.disabled').first().click();
    
    // Başarı sayfasına ulaşıldığını doğrula
    cy.url().should('include', '/success');
    cy.contains('SİPARİŞ ALINDI').should('be.visible');
  });
});