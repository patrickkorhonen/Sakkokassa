import prisma from '../lib/prisma';

export const dynamic = "force-dynamic";

export const getStaticProps = async () => {
  const minutes = await prisma.user.findMany();
  //console.log(minutes)
  return minutes
};

export const updateMinutes = async (id: string, newMinutes: number) => {
  const update = await prisma.user.update({
    where: {
      id: id
    },
    data: {
      minutes: newMinutes,
    },
  })
  return update
}