export const getImage = (name: string) => {
  const icons: any = {
    EMBARGOCoctailBar: require('@/assets/images/png/EMBARGOCoctailBar.png'),
    Mint: require('@/assets/images/png/Mint.png'),
    SpiritBar: require('@/assets/images/png/SpiritBar.png'),
    Dominos: require('@/assets/images/png/Dominos.png'),
    DODO: require('@/assets/images/png/DODO.png'),
    EVO: require('@/assets/images/png/EVOWellnessClub.png'),
    Voka: require('@/assets/images/png/Voka.png'),
    Skyeng: require('@/assets/images/png/Skyeng.png'),
    Robolab: require('@/assets/images/png/Robolab.png'),
    TikiToki: require('@/assets/images/png/TikiToki.png'),
    Dushka: require('@/assets/images/png/Dushka.png'),
    Makey: require('@/assets/images/png/Makey.png'),
    Yestoday: require('@/assets/images/png/Yestoday.png'),
    InBody: require('@/assets/images/png/InBody.png'),
    F1Fitness: require('@/assets/images/png/F1Fitness.png'),
    XFit: require('@/assets/images/png/XFit.png'),
    Grafit: require('@/assets/images/png/Grafit.png'),
    Woogee: require('@/assets/images/png/Woogee.png'),
    ZNWR: require('@/assets/images/png/ZNWR.png'),
    Kiltme: require('@/assets/images/png/Kiltme.png'),
    Ekvitas: require('@/assets/images/png/Ekvitas.png'),
    NewtonLabs: require('@/assets/images/png/NewtonLabs.png'),
  }

  return icons[name]
}
