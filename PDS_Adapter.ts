// Interface para Galinha.
interface Galinha {
    cacarejar(): void;
    bicar(): void;
  }
  
  // Classe Pato que queremos adaptar para ser usado como Galinha.
  class Pato {
    grasnar(): void {
      console.log('Pato está grasnando.');
    }
  
    voar(): void {
      console.log('Pato está voando.');
    }
  }
  
  // Adaptador que permite que um objeto do tipo Pato seja usado como Galinha.
  class AdaptadorPato implements Galinha {
    constructor(private pato: Pato) {}
  
    cacarejar(): void {
      this.pato.grasnar();
    }
  
    bicar(): void {
      console.log('Pato está bicando como uma Galinha.');
    }
  }
  
  // Demo para demonstrar o uso do adaptador.
  class AdaptadorPatoDemo {
    static usarGalinha(galinha: Galinha) {
      console.log('Interagindo com a Galinha:');
      galinha.cacarejar();
      galinha.bicar();
      console.log('---');
    }
  }
  
  // Criar um objeto Pato.
  const pato = new Pato();
  
  // Criar um adaptador para o Pato.
  const adaptadorPato = new AdaptadorPato(pato);
  
  // Usar o adaptador como se fosse uma Galinha.
  AdaptadorPatoDemo.usarGalinha(adaptadorPato);
  