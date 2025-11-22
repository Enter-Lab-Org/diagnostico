import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seeder de empresas...');

  // Empresa 1: Empresa de Tecnología
  const empresa1 = await prisma.empresa.upsert({
    where: { rfc: 'TEC123456ABC' },
    update: {},
    create: {
      razonSocial: 'Tecnología Digital S.A. de C.V.',
      rfc: 'TEC123456ABC',
      tamanoEmpresa: 'Mediana',
      actividad: 'Desarrollo de Software y Tecnologías de la Información',
      pais: 'México',
      estado: 'Ciudad de México',
      municipio: 'Benito Juárez',
    },
  });

  console.log('✅ Empresa 1 creada:', empresa1.razonSocial);

  // Empresa 2: Empresa de Consultoría
  const empresa2 = await prisma.empresa.upsert({
    where: { rfc: 'CON789012XYZ' },
    update: {},
    create: {
      razonSocial: 'Consultoría Empresarial del Norte S.A. de C.V.',
      rfc: 'CON789012XYZ',
      tamanoEmpresa: 'Pequeña',
      actividad: 'Servicios de Consultoría en Transformación Digital',
      pais: 'México',
      estado: 'Nuevo León',
      municipio: 'Monterrey',
    },
  });

  console.log('✅ Empresa 2 creada:', empresa2.razonSocial);

  // Empresa 3: Empresa de Comercio
  const empresa3 = await prisma.empresa.upsert({
    where: { rfc: 'COM456789DEF' },
    update: {},
    create: {
      razonSocial: 'Comercializadora del Sureste S. de R.L. de C.V.',
      rfc: 'COM456789DEF',
      tamanoEmpresa: 'Grande',
      actividad: 'Comercio al por Mayor y Menor de Productos Electrónicos',
      pais: 'México',
      estado: 'Yucatán',
      municipio: 'Mérida',
    },
  });

  console.log('✅ Empresa 3 creada:', empresa3.razonSocial);

  console.log('✨ Seeder completado exitosamente!');
  console.log(`📊 Total de empresas: 3`);
}

main()
  .catch((e) => {
    console.error('❌ Error en el seeder:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

