$(function() {
  main()
})

const main = async () => {
  let tableData = {
    title: 'POLYGON Network',
    heading: ['Pool Provider', 'LP', 'Reward Tokens', 'INFO'],
    rows: [
      ['Kyber DMM           ', `<a href="kyber"           >Various</a>`, 'KNC          ', 'https://dmm.exchange'],
      ['Quickswap           ',`<a href="quick"            >Various</a>`,'QUICK         ','https://quickswap.exchange/#/quick',],
      ['Cometh              ',`<a href="cometh"           >Various</a>`,'MUST          ','https://swap.cometh.io/#/stake',],
      ['Dark                ', `<a href="dark"            >Various</a>`, 'DB           ', 'https://www.dark.build'],
      ['Smartdex            ', `<a href="smartdex"        >Various</a>`, 'NIOX         ', 'https://swap.smartdex.app'],
      ['Elk                 ', `<a href="elk"             >Various</a>`, 'ELK          ', 'https://app.elk.finance'],
      ['Polywhale           ', `<a href="polywhale"       >Various</a>`, 'KRILL        ', 'https://polywhale.finance'],
      ['Aave                ', `<a href="aave"            >Various</a>`, 'MATIC        ', 'https://aave.com'],
      ['BullionFinance      ',`<a href="bullionfinance"   >Various</a>`,'GOLD          ','https://bullionfinance.xyz',],
      ['Polyfox             ', `<a href="polyfox"         >Various</a>`, 'FOX          ', 'https://polyfox.finance'],
      ['Hawkdex             ', `<a href="hawk"            >Various</a>`, 'HAWK         ', 'https://hawkdex.com'],
      ['PolyDragon          ', `<a href="polydragon"      >Various</a>`, 'FIRE         ', 'https://polydragon.io'],
      ['Polycat *           ', `<a href="polycat"         >Various</a>`, 'FISH/PAW     ', 'https://polycat.finance'],
      ['BoughtThe.top       ', `<a href="boughtthetop"    >Various</a>`, 'BTT          ', 'https://farm.BoughtThe.top'],
      ['PolyStarter         ', `<a href="polystarter"     >Various</a>`, 'STARTER      ', 'https://www.polystarter.fi'],
      ['Polyvolve           ', `<a href="polyvolve"       >Various</a>`, 'SPEAR        ', 'https://polyvolve.finance'],
      ['Polygaj             ', `<a href="polygaj"         >Various</a>`, 'GAJ          ', 'https://polygaj.finance'],
      ['Galaxy              ',`<a href="galaxy"           >Various</a>`,'Various       ','https://galaxyfarm.routerprotocol.com',],
      ['GameSwap            ',`<a href="gameswap"         >Various</a>`,'STONK         ','https://gameswapfinance.com',],
      ['Blackswap           ',`<a href="blackswap"        >Various</a>`,'AURORA/SOLAR  ','https://www.blackswap.finance',],
      ['Polycake            ',`<a href="polycake"         >Various</a>`,'PCAKE         ','https://www.polycake.finance',],
      ['Polyrangers         ',`<a href="polyrangers"      >Various</a>`,'RNG           ','https://polyrangers.finance',],
      ['Sushi               ', `<a href="sushi"           >Various</a>`, 'SUSHI        ', 'https://app.sushi.com'],
      ['Mai                 ', `<a href="mai"             >Various</a>`, 'Qi           ', 'https://www.mai.finance'],
      ['Polyshark           ',`<a href="polyshark"        >Various</a>`,'SHARK         ','https://www.polyshark.finance',],
      ['Polyvalent          ',`<a href="polyvalent"       >Various</a>`,'ELECTRON      ','https://www.polyvalent.finance',],
      ['Polyfi              ', `<a href="polyfi"          >Various</a>`, 'PolyFi       ', 'https://polyfi.io'],
      ['Polyape             ', `<a href="polyape"         >Various</a>`, 'Ape          ', 'https://www.polyape.online'],
      ['Polyzap             ',`<a href="polyzap"          >Various</a>`,'PZAP          ','https://farm.polyzap.finance',],
      ['Gemstones Finance   ', `<a href="gemstonesfinance">Various</a>`, 'GMS          ', 'https://gemstones.finance'],
      ['Polypanda           ', `<a href="polypanda"       >Various</a>`, 'BAMBOO       ', 'https://polypanda.finance'],
      ['Dfyn *              ',`<a href="dfyn"             >Various</a>`,'DFYN          ','https://exchange.dfyn.network',],
      ['Jurassic            ',`<a href="jurassic"         >Various</a>`,'RAPTOR        ','https://www.jurassicfarm.app',],
      ['Beefy               ',`<a href="beefy"            >Various</a>`,'Various       ','https://polygon.beefy.finance',],
      ['Monopoly            ',`<a href="monopoly"         >Various</a>`,'MONO          ','https://monopolyfinance.xyz',],
      ['Polyce              ', `<a href="polyce"          >Various</a>`, 'CSI          ', 'https://polyce.io'],
      ['Lumberjack          ', `<a href="lumberjack"      >Various</a>`, 'ACORN        ', 'https://lumberjack.finance'],
      ['PolyPunk            ', `<a href="polypunk"        >Various</a>`, 'PPNK         ', 'https://polypunk.finance'],
      ['SteakHouse          ', `<a href="steakhouse"      >Various</a>`, 'STEAK        ', 'https://steakhouse.finance'],
      ['Monke Farm          ', `<a href="monkefarm"       >Various</a>`, 'MONKE        ', 'https://monkefarm.finance'],
      ['Polylion            ', `<a href="polylion"        >Various</a>`, 'LION         ', 'https://polylion.exchange'],
      ['PolyBull            ', `<a href="polybull"        >Various</a>`, 'BULL         ', 'https://polybull.finance'],
      ['Orcinus             ', `<a href="orcinus"         >Various</a>`, 'ORCA         ', 'https://www.orcinuslabs.ca'],
      ['Polyape Finance     ',`<a href="polyape_finance"  >Various</a>`,'APE           ','https://www.polyapefinance.com',],
      ['PolyWolf            ', `<a href="polywolf"        >Various</a>`, 'WOLF         ', 'https://polywolf.finance'],
      ['Stacker Ventures    ', `<a href="stacker-vc"      >Various</a>`, 'STACK        ', 'https://stacker.vc'],
      ['Polygoat            ',`<a href="polygoat"         >Various</a>`, 'GOAT         ','https://www.polygoat.finance',],
      ['Polysnake           ',`<a href="polysnake"        >Various</a>`, 'SNAKE        ','https://www.polysnake.finance',],
      ['Moonwolf            ', `<a href="moonwolf"        >Various</a>`, 'MOON         ', 'https://www.moonwolf.io'],
      ['Iron                ',`<a href="iron"             >Various</a>`, 'TITAN        ','https://polygon.iron.finance',],
      ['Alchemy Dao         ',`<a href="alchemydao"       >Various</a>`, 'ALCH         ','https://polygon.alchemydao.com',],
      ['Polycrab            ', `<a href="polycrab"        >Various</a>`, 'CRAB         ', 'https://polycrab.finance'],
      ['Polybear            ', `<a href="polybear"        >Various</a>`, 'BEAR         ', 'https://polybear.exchange'],
      ['StonkFarm           ', `<a href="stonkfarm"       >Various</a>`, 'STONKX       ', 'https://stonk.farm'],
      ['Polydex             ', `<a href="polydex"         >Various</a>`, 'PLX          ', 'https://polydex.fi'],
      ['PolyMaple           ', `<a href="polymaple"       >Various</a>`, 'MAPLE        ', 'https://www.polymaple.com'],
      ['Gravity Finance     ', `<a href="gravityfinance"  >Various</a>`, 'GFI          ', 'https://gravityfinance.io'],
      ['Smellycat           ',`<a href="smellycat"       >Various</a>`,'PUSSY        ','https://www.smellycat.finance',],
      ['Polygold            ', `<a href="polygold"        >Various</a>`, 'POLYGOLD     ', 'https://polygold.finance'],
      ['Polyswan            ',`<a href="polyswan"        >Various</a>`,'SWAN         ','https://www.polyswan.finance',],
      ['Polyion             ', `<a href="polyion"         >Various</a>`, 'LION         ', 'https://www.polyion.net'],
      ['Eleven              ', `<a href="eleven"          >Various</a>`, 'ELE          ', 'https://eleven.finance'],
      ['Pirate Dice         ', `<a href="piratedice"      >Various</a>`, 'BOOTY        ', 'http://piratedice.xyz'],
      ['PolyPingu           ', `<a href="polypingu"       >Various</a>`, 'PINGU        ', 'https://polypingu.finance'],
      ['Goldenbull          ',`<a href="goldenbull"      >Various</a>`,'GBULL        ','https://farms.goldenbull.finance',],
      ['Polyakita           ', `<a href="polyakita"       >Various</a>`, 'HACHI        ', 'https://defi.polyakita.com'],
      ['Prism               ',`<a href="prism"           >Various</a>`,'PRISM        ','https://polygon.prismfinance.net',],
      ['Polybutterfly       ',`<a href="polybutterfly"   >Various</a>`,'POLLEN       ','https://polybutterfly.finance',],
      ['Southpark           ', `<a href="southpark"       >Various</a>`, 'SOUTHPARK    ', 'https://southpark.finance'],
      ['PolyCash            ', `<a href="polycash"        >Various</a>`, 'CASH         ', 'https://polycash.finance'],
      ['Dinosaur            ',`<a href="dinosaur"        >Various</a>`,'DINO         ','https://dinosaurfinance.vercel.app',],
      ['Magic               ', `<a href="magic"           >Various</a>`, 'DRAX/NIGHT/DMAGIC  ', 'https://defimagic.io'],
      ['Polymouse           ', `<a href="polymouse"       >Various</a>`, 'MICE         ', 'https://polymouse.finance'],
      ['PolyTiger           ', `<a href="polytiger"       >Various</a>`, 'TIGON        ', 'https://www.polytiger.com'],
      ['Polydeer            ', `<a href="polydeer"        >Various</a>`, 'DEER         ', 'https://polydeer.finance'],
      ['Avengers            ', `<a href="avengers"        >Various</a>`, 'SHIELD       ', 'https://avengers.exchange'],
      ['PolyBunny           ',`<a href="polybunny"       >Various</a>`,'BUNNY        ','https://www.polybunny.finance',],
      ['BerserkFinance      ', `<a href="berserkfinance"  >Various</a>`, 'BRSK         ', 'https://berserkfinance.com'],
      ['PolyMeme            ',`<a href="polymeme"        >Various</a>`,'MEME         ','vfat.tools/polygon/polymeme',],
      ['Museum Of Crypto Art',`<a href="moca"            >Various</a>`,'MOCA         ','https://museumofcryptoart.com',],
      ['PolyPup             ', `<a href="polypup"         >Various</a>`, 'PUP          ', 'https://polypup.finance'],
      ['Space               ',`<a href="space"           >Various</a>`,'SPACE        ','https://polygon.space-defi.com',],
      ['Glock               ', `<a href="glock"           >Various</a>`, 'GLOCK        ', 'https://www.glockswap.com'],
      ['XDollar             ',`<a href="xdollar"         >Various</a>`,'XDO          ','https://xdollar.mcn.ventures',],
      ['PolyCarrot          ',`<a href="polycarrot"      >Various</a>`,'CARROT       ','https://www.polycarrot.finance',],
      ['8Ball               ', `<a href="8ball"           >Various</a>`, '8BALL        ', 'https://8ballfinance.io'],
      ['MordorSwap          ', `<a href="mordorswap"      >Various</a>`, 'MORDOR       ', 'https://mordorswap.finance'],
      ['PolyVertex          ', `<a href="polyvertex"      >Various</a>`, 'VERT         ', 'https://polyvertex.finance'],
      ['PolyZero            ', `<a href="polyzero"        >Various</a>`, 'ZERO         ', ''],
      ['PolyMax             ', `<a href="polymax"         >Various</a>`, 'MAX          ', 'https://polymax.club'],
      ['PolySnowFarm        ', `<a href="polysnowfarm"    >Various</a>`, 'SNOW         ', 'https://polysnow.farm'],
      ['Polyyeld            ', `<a href="polyyeld"        >Various</a>`, 'YELD/xYELD   ', 'https://polyyeld.finance'],
      ['Polysa              ', `<a href="polysa"          >Various</a>`, 'DUFF         ', 'https://www.polysa.finance'],
      ['Wault               ',`<a href="wault"           >Various</a>`,'WEXpoly      ','https://app.wault.finance/polygon/',],
      ['PolyHarvest         ',`<a href="polyharvest"     >Various</a>`,'WHEAT        ','https://www.polyharvest.finance',],
      ['PolyWoof            ',`<a href="polywoof"        >Various</a>`,'TREAT        ','https://www.polywoof.finance',],
      ['SafeDollar          ', `<a href="safedollar"      >Various</a>`, 'SDS/SDO      ', 'https://app.safedollar.fi'],
      ['Cosmic              ',`<a href="cosmic"          >Various</a>`,'COSMIC       ','https://polygon.cosmicswap.finance',],
      ['StonkYFarm          ', `<a href="stonky"          >Various</a>`, 'STONKY       ', 'https://stonky.farm'],
      ['Polycafe            ', `<a href="polycafe"        >Various</a>`, 'JAVA         ', 'https://polycafe.finance'],
      ['Slowpoke            ', `<a href="slowpoke"        >Various</a>`, 'SLOW         ', 'https://slowpoke.space'],
      ['PolyRocket          ',`<a href="polyrocket"      >Various</a>`,'ROCKET       ','https://www.rocketfarming.finance',],
      ['PolyComet           ', `<a href="polycomet"       >Various</a>`, 'COMET        ', 'https://www.polycomet.com'],
      ['KogeFarm                ', `<a href="koge"            >Various</a>`, 'Various      ', 'https://kogefarm.io'],
      ['Fulcrum             ',`<a href="fulcrum"         >Various</a>`,'PGOV         ','https://polygon.fulcrum.trade',],
      ['XBull               ', `<a href="xbull"           >Various</a>`, 'XBULL        ', 'https://xbull.finance'],
      ['Augury              ', `<a href="augury"          >Various</a>`, 'OMEN         ', 'https://augury.finance'],
      ['PolyMeme V2         ', `<a href="polymemev2"      >Various</a>`, 'MEME         ', 'https://polyme.me'],
      ['WorldSwap Bali      ',`<a href="worldswap_dps"   >Various</a>`,'DPS          ','https://bali.worldswap.finance',],
      ['PolyFunky Finance   ', `<a href="polyfunky"       >Various</a>`, 'FUNK         ', 'https://www.polyfunky.com'],
      ['Polycuban           ', `<a href="polycuban"       >Various</a>`, 'CUBAN        ', 'https://polycuban.finance'],
      ['50Cent              ', `<a href="50c"             >Various</a>`, '50C/50K      ', 'https://50cent.network'],
      ['HonestWorkFarms     ', `<a href="honestwork"      >Various</a>`, '🚜          ', 'https://www.honestwork.farm'],
      ['Adamant             ', `<a href="adamant"         >Various</a>`, 'Various      ', 'https://adamant.finance'],
      ['Polygame            ', `<a href="polygame"        >Various</a>`, 'POLYGAME     ', 'https://polygame.finance'],
      ['Carousel            ', `<a href="carousel"        >Various</a>`, 'CRS          ', 'https://carouselswap.com'],
      ['PolyCrystal         ',`<a href="polycrystal"     >Various</a>`,'CRYSTAL      ','https://polycrystal.finance',],
      ['Firebird            ',`<a href="firebird"        >Various</a>`,'HOPE         ','https://app.firebird.finance',],
      ['Polyroll            ', `<a href="polyroll"        >Various</a>`, 'ROLL         ', 'https://polyroll.org'],
      ['FarmHero            ', `<a href="farmhero"        >Various</a>`, 'HONOR        ', 'https://farmhero.io'],
      ['PolyYield           ', `<a href="polyyield"       >Various</a>`, 'YIELD        ', 'https://polyyield.finance'],
      ['PolyPulsar          ',`<a href="polypulsar"      >Various</a>`,'BPUL         ','https://www.polypulsar.farm',],
      ['Lego                ',`<a href="lego"            >Various</a>`,'LEGO         ','https://legofarming-polygon.club',],
      ['FairyFarming        ', `<a href="fairy"           >Various</a>`, 'FAIRY        ', 'https://fairyfarming.world'],
      ['Rediant             ', `<a href="rediant"         >Various</a>`, 'RDT          ', 'https://rediant.finance'],
      ['StonkZFarm          ', `<a href="stonkzfarm"      >Various</a>`, 'STONKZ       ', 'https://stonkz.farm'],
      ['NinjaSwap           ', `<a href="ninjaswap"       >Various</a>`, 'NINJA        ', 'https://ninjaswapdefi.com'],
      ['Polyquity           ', `<a href="polyquity"       >Various</a>`, 'PYQ          ', 'https://app.polyquity.org'],
      ['Tako                ', `<a href="tako"            >Various</a>`, 'TAKO         ', 'https://takodefi.com'],
      ['Harvester           ', `<a href="harvester"       >Various</a>`, '🌾          ', 'https://harvester.app'],
      ['Polymer             ',`<a href="polymer"         >Various</a>`,'OIL          ','https://polymeryield.finance',],
      ['Polybrew            ', `<a href="polybrew"        >Various</a>`, 'BREW         ', 'https://polybrew.finance'],
      ['PolyDiamond         ',`<a href="polydiamond"     >Various</a>`,'DMND         ','https://polydiamondfinance.com',],
      ['PolyCactus          ', `<a href="polycactus"      >Various</a>`, 'CACTUS       ', 'https://polycactus.com'],
      ['PolyGrass           ', `<a href="polygrass"       >Various</a>`, 'GRASS        ', 'https://polygrass.online'],
      ['Pickle              ', `<a href="pickle"          >Various</a>`, 'PICKLE       ', 'https://app.pickle.finance'],
      ['Fox                 ', `<a href="fox"             >Various</a>`, 'FOX          ', 'https://foxfarming.us'],
      ['Hippolygon          ', `<a href="hippolygon"      >Various</a>`, 'HIPPO        ', 'https://hippolygon.com'],
      ['Pepe                ', `<a href="pepe"            >Various</a>`, 'PEPEFARM     ', 'https://pepefarm.finance'],
      ['PolyPupBone         ',`<a href="polypupbone"     >Various</a>`,'BONE         ','https://bone.polypup.finance',],
      ['PolyRhino           ',`<a href="polyrhino"       >Various</a>`,'HORN         ','https://polyrhino.vercel.app',],
      ['PolyRuby            ',`<a href="polyruby"        >Various</a>`,'RUBY         ','https://www.polyruby.finance',],
      ['PolyZeus            ', `<a href="polyzeus"        >Various</a>`, 'PolyZeus     ', 'https://polyzeus.finance'],
      ['PolyMax - CaveMan   ',`<a href="polymax_caveman" >Various</a>`,'CaveMan      ','https://caveman.polymax.club',],
      ['PolyTreasure        ',`<a href="polytreasure"    >Various</a>`,'TRZ          ','https://vfat.tools/polygon/polytreasure',],
      ['PolyRacoon          ', `<a href="polyracoon"      >Various</a>`, 'RACOON       ', 'https://polyracoon.com/'],
      ['BoneSwap            ',`<a href="boneswap"        >Various</a>`,'BONE         ','https://farm.boneswap.finance',],
      ['Polyyearn           ', `<a href="polyyearn"       >Various</a>`, 'YEARN        ', 'https://polyyearn.finance'],
      ['WorldSwap Hanoi     ',`<a href="worldswap_han"   >Various</a>`,'HAN          ','https://hanoi.worldswap.finance',],
      ['Astrobunny          ',`<a href="astrobunny"      >Various</a>`,'ABUNNY       ','https://www.astrobunny.finance',],
      ['BisonFinance        ',`<a href="bisonfinance"    >Various</a>`,'BISON        ','https://bisonfinance.online',],
      ['Bullrun             ',`<a href="bullrun"         >Various</a>`,'BULL         ','https://polygon.bullrun.finance',],
      ['PolyArrow           ', `<a href="polyarrow"       >Various</a>`, 'ARROW        ', 'https://polyarrow.xyz'],
      ['PantsuSwap          ', `<a href="pantsuswap"      >Various</a>`, 'PANTSU       ', 'https://pantsuswap.com'],
      ['PolyMocha           ', `<a href="polymocha"       >Various</a>`, 'MOCHA        ', 'https://polymocha.finance'],
      ['PolyOwl             ',`<a href="polyowl"         >Various</a>`,'OWL          ','https://www.polyowl.finance',],
      ['Astrofarms - Cancer ',`<a href="astrofarmscancer">Various</a>`,'CANCER       ','https://cancer.astrofarms.finance',],
      ['FaunaFinance        ', `<a href="faunafinance"    >Various</a>`, 'FAUNA        ', 'https://www.fauna.finance'],
      ['Vampire             ',`<a href="vampire"         >Various</a>`,'VAMPIRE      ','https://vampirefarming.club',],
      ['PolyGorilla         ',`<a href="polygorilla"     >Various</a>`,'GORILLA      ','https://polygorilla.finance',],
      ['PolyGarden          ',`<a href="polygarden"      >Various</a>`,'APPLE        ','https://www.polygarden.finance',],
      ['Gains Farm          ', `<a href="gains-farm"      >GFARM2/DAI</a>`, 'GFARM2     ', 'https://gains.farm'],
      ['DojoFarmFinance     ', `<a href="dojofarm"        >Various</a>`, 'DOJO         ', 'https://dojofarm.finance'],
      ['PolyMaple-MapleSyrup', `<a href="polymaplesyrup"  >Various</a>`, 'SYRUP        ', 'https://www.polymaple.com'],
      ['PolyTopia           ', `<a href="polytopia"       >Various</a>`, 'UTOPIA       ', 'https://polytopia.farm'],
      ['BrainSwap           ', `<a href="brainswap"       >Various</a>`, 'BRAIN        ', 'https://brainswap.finance'],
      ['BatSwap             ', `<a href="batswap"         >Various</a>`, 'BATSWAP      ', 'https://batswap.finance'],
      ['ChickenFarms        ', `<a href="chickenfarms"    >Various</a>`, 'CHICKEN      ', 'https://chickenfarms.live'],
      ['Polyfrenchie        ',`<a href="Polyfrenchie"    >Various</a>`,'pFRE         ','https://polyfrenchie.com/?network=polygon',],
      ['ChickenFarms        ', `<a href="chickenfarms"    >Various</a>`, 'CHICKEN      ', 'https://chickenfarms.live'],
      ['Polycuppa           ', `<a href="polycuppa"       >Various</a>`, 'CUPPA        ', 'https://polycuppa.finance'],
      ['Polymax - Berkshire ',`<a href="polymax_berkshire">Various</a>`,'BERKSHIRE   ','https://berkshire.polymax.club',],
      ['Platinum Finance    ',`<a href="platinumfinance" >Various</a>`,'PLATIN       ','https://platinumfinance.app',],
      ['DuckFarm            ', `<a href="duckfarm"        >Various</a>`, 'DUCK         ', 'https://duckfarm.one'],
      ['PolyCow             ', `<a href="polycow"         >Various</a>`, 'MILK / BUTTER', 'https://polycow.finance'],
      ['Euroballz           ', `<a href="euroballz"       >Various</a>`, 'BALLZ        ', 'https://euroballz.finance'],
      ['JetSwap             ',`<a href="jetswap"         >Various</a>`,'pWINGS       ','https://polygon.jetswap.finance',],
      ['PolyToken           ', `<a href="polytoken"       >Various</a>`, 'POLYTOKEN    ', 'https://polytoken.finance'],
      ['CupidSwap           ', `<a href="cupidswap"       >Various</a>`, 'CUPID        ', 'https://www.cupidswap.com'],
      ['PolyTulip           ', `<a href="polytulip"       >Various</a>`, 'TULIP        ', 'https://www.polytulip.com'],
      ['PolyHeaven          ', `<a href="polyheaven"      >Various</a>`, 'BIBLE        ', 'https://polyheaven.finance'],
      ['PolyGhost           ', `<a href="polyghost"       >Various</a>`, 'GHOST        ', 'https://polyghost.finance'],
      ['SecuraFinance       ',`<a href="securafinance"   >Various</a>`,'SCR          ','https://polygon.secura.finance',],
      ['LotusSwap           ',`<a href="lotusswap"       >Various</a>`,'ROYAL        ','https://polygon.lotusswapdefi.com',],
      ['LoveCupidSwap       ',`<a href="cupidswaplove"   >Various</a>`,'LOVE         ','https://www.lovecupidswap.live',],
      ['PharmSwap           ', `<a href="pharmswap"       >Various</a>`, 'PHARM        ', 'https://pharmswap.finance'],
      ['WorldSwap Community Edition',`<a href="worldswap_community"   >Various</a>`,'COMMUNITY','https://community.worldswap.finance',],
      ['PolyQuail           ',`<a href="polyquail_kwil"  >Various</a>`,'KWIL         ','https://kwil.polyquail.finance',],
      ['Coinopolis          ', `<a href="coinopolis"      >Various</a>`, 'CCASH        ', 'https://coinopolis.io'],
      ['Yearnit             ', `<a href="yearnit"         >Various</a>`, 'YEARNIT      ', 'https://yearnit.finance'],
      ['WePiggy             ',`<a href="wepiggy"         >Various</a>`,'WPC          ','https://polygon.wepiggy.com/markets',],
      ['Copycat             ', `<a href="copycat"         >Various</a>`, 'FISH         ', 'https://copycat.farm'],
      ['Cakecrypt           ', `<a href="cakecrypt"       >Various</a>`, 'pCAKECRYPT   ', 'https://poly.cakecrypt.io'],
      ['TitanBull           ', `<a href="tbull"           >Various</a>`, 'TBULL        ', 'https://titanbull.finance'],
      ['Lion                ', `<a href="lion"            >Various</a>`, 'LION         ', 'https://lionfarming.cc'],
      ['PolyWantsACracker   ',`<a href="polywantsacracker">Various</a>`,'LITHIUM     ','https://polywantsacracker.farm',],
      ['PolygonFarm Finance ',`<a href="polygonfarm"     >Various</a>`,'SPADE        ','https://polygonfarm.finance',],
      ['Polyheat            ', `<a href="polyheat"        >Various</a>`, 'HEAT         ', 'https://polyheat.finance'],
      ['Swap Net            ', `<a href="swapnet"         >Various</a>`, 'SWP          ', 'https://swap.net'],
      ['PaprPrintr          ',`<a href="paprprintr"      >Various</a>`,'PRNTR        ','https://polygon.paprprintr.finance',],
      ['PolyElysm           ',`<a href="polyelysm"       >Various</a>`,'ELYSM        ','https://elysm.polytopia.farm',],
      ['Poolsar             ', `<a href="poolsar"         >Various</a>`, 'STAR         ', 'https://poolsar.finance'],
      ['Polymax - Cyborg    ',`<a href="polymax_cyborg"  >Various</a>`,'ROBOCOP      ','https://cyborg.polymax.club',],
      ['PolyPonzi           ', `<a href="polyponzi"       >Various</a>`, 'PPZ          ', 'https://polyponzi.money'],
      ['MisfitSwap          ',`<a href="misfit"          >Various</a>`,'SKULL        ','https://www.misfitswap.live',],
      ['DinoSwap            ', `<a href="dinoswap"        >Various</a>`, 'DINO         ', 'https://dinoswap.exchange'],
      ['Swamp               ',`<a href="swamp"           >Various</a>`,'pSWAMP       ','https://swamp.finance/polygon',],
      ['SpacePortDeFi       ',`<a href="spaceport"       >Various</a>`,'STARSHIP     ','https://polygon.spaceportdefi.com',],
      ['PolyTide            ', `<a href="polytide"        >Various</a>`, 'OYSTER       ', 'https://polytide.finance'],
      ['Copycat2            ', `<a href="copycat2"        >Various</a>`, 'FISH2        ', 'https://copycat2.farm'],
      ['Cremepie            ',`<a href="cremepie"        >Various</a>`,'CPIE         ','https://cremepieswap.finance',],
      ['KUNAIFarm           ',`<a href="kunaifarm"       >Various</a>`,'KUNAI        ','https://kunai.dojofarm.finance',],
      ['PolyFalcon          ', `<a href="polyfalcon"      >Various</a>`, 'FALCON       ', 'https://polyfalcon.com'],
      ['BCharity            ', `<a href="bcharity"        >Various</a>`, 'GIVE         ', 'https://bcharity.net'],
      ['BlackSwan           ',`<a href="blackswan"       >Various</a>`,'SWAN         ','https://app.blackswan.network',],
      ['PolyBass            ', `<a href="polybass"        >Various</a>`, 'BASS         ', 'https://polybass.farm'],
      ['PolyBakerySwap      ',`<a href="polybakeryswap"  >Various</a>`,'BAKE         ','https://www.bakery-swap.finance',],
      ['PolyBakeryCream     ',`<a href="polybakerycream" >Various</a>`,'CREAM        ','https://bakerycream.finance',],
      ['PolyBakeryBiscuit   ',`<a href="polybakerybiscuit" >Various</a>`,'BISCUIT    ','https://bakerybiscuit.finance',],
      ['PolyTail            ', `<a href="polytail"        >Various</a>`, 'POLYTAIL     ', 'https://polytail.farm'],
      ['PearZap             ', `<a href="pearzap"         >Various</a>`, 'PEAR         ', 'https://pearzap.com'],
      ['Astrofarms - Neptune',`<a href="astrofarmsneptune">Various</a>`,'NEPTUNE      ','https://neptune.astrofarms.finance',],
      ['Cygnus Finance      ', `<a href="cygnusfinance"   >Various</a>`, 'CYGNUS       ', 'https://www.cygnusdefi.com'],
      ['PolyCoke            ', `<a href="polycoke"        >Various</a>`, 'COKE         ', 'https://polycoke.farm'],
      ['PolySeal            ', `<a href="polyseal"        >Various</a>`, 'SEAL         ', 'https://polyseal.farm'],
      ['Galaxy Finance One  ',`<a href="galaxy_triton"   >Various</a>`,'TRITON       ','https://polygon-triton.galaxyfinance.one',],
      ['Stonk Share         ', `<a href="stonkshare"      >Various</a>`, 'STONKS       ', 'https://shares.stonk.farm'],
      ['Iridium Finance     ', `<a href="iridiumfinance"  >Various</a>`, 'IRID         ', 'https://iridiumfinance.app'],
      ['PlanetSwap          ',`<a href="planetswap"      >Various</a>`,'VENUS        ','https://venus.planetswap.app',],
      ['Xenomorph Finance   ', `<a href="xenomorph"       >Various</a>`, 'XENO         ', 'https://xenomorph.finance'],
      ['PolyGoon            ', `<a href="polygoon"        >Various</a>`, 'GOON         ', 'https://polygoon.finance'],
      ['HamsterParty        ', `<a href="hamsterparty"    >Various</a>`, 'HAMSTER      ', 'https://hamsterparty.club'],
      ['SpacePortDeFi Layer1',`<a href="spaceport layer1">Various</a>`,'SATELITE     ','https://polygon2.spaceportdefi.com',],
      ['PolyMax - Gratitude ',`<a href="polymax_gratitude">Various</a>`,'GRATITUDE    ','https://gratitude.polymax.club',],
      ['Suncrypto           ', `<a href="suncrypto"       >Various</a>`, 'SUN          ', 'https://suncrypto.finance'],
      ['SushiFarm Finance   ', `<a href="sushifarm"       >Various</a>`, 'SUSHI        ', 'https://sushifarm.finance'],
      ['MeebMaster          ', `<a href="meeb"            >Various</a>`, 'MEEB         ', 'https://app.meebmaster.com'],
      ['Atma                ', `<a href="atma"            >Various</a>`, 'ATMA         ', 'https://0xatma.finance'],
      ['Avengers Defi       ', `<a href="avengers_defi"   >Various</a>`, 'AVENGERS     ', 'https://avengersdefi.club'],
      ['PolyKiwi            ', `<a href="polykiwi"        >Various</a>`, 'KIWI         ', 'https://polykiwi.farm'],
      ['PolySky             ', `<a href="polysky"         >Various</a>`, 'SIRIUS       ', 'https://polysky.finance'],
      ['PolyGlass           ', `<a href="polyglass"       >Various</a>`, 'GLASS        ', 'https://polyglass.farm'],
      ['OceanFinance        ', `<a href="oceanfinance"    >Various</a>`, 'DOLPH        ', 'https://oceanfinance.io'],
      ['PolyYork            ', `<a href="polyyork"        >Various</a>`, 'YORK         ', 'https://polyyork.finance'],
      ['Hermes              ', `<a href="hermes"          >Various</a>`, 'IRIS         ', 'https://www.hermesdefi.io'],
      ['PolyFund            ',`<a href="polyfund"        >Various</a>`,'FUND         ','https://www.polyfund.finance',],
      ['Timeleap Finance    ', `<a href="timeleapfinance" >Various</a>`, 'TIME         ', 'https://timeleap.finance'],
      ['BerryFarmsRaspBerry ', `<a href="berryfarmsraspberry">Various</a>`, 'RASP      ', 'https://berryfarms.world'],
      ['PolyEarn            ', `<a href="polyearn"        >Various</a>`, 'PEN          ', 'https://polyearn.com'],
      ['PolyYeti            ', `<a href="polyyeti"        >Various</a>`, 'YETI         ', 'https://polyyeti.farm'],
      ['PolyBean            ', `<a href="polybean"        >Various</a>`, 'BEAN         ', 'https://polybean.farm'],
      ['PolyDyson           ', `<a href="polydyson"       >Various</a>`, 'DYSON        ', 'https://polydyson.app'],
      ['PolyTopia Wonster   ',`<a href="wonster"         >Various</a>`,'WONSTER      ','https://wonster.polytopia.farm',],
      ['PolyRiver           ', `<a href="polyriver"       >Various</a>`, 'RIVER        ', 'WIP'],
      ['PolyBakeryCake      ', `<a href="polybakerycake"  >Various</a>`, 'CAKE         ', 'https://bakerycake.finance'],
      ['PolySecond          ',`<a href="polyanon_vol_1"  >ROI</a>`,'MATIC        ','https://github.com/PolyAnon/PolySecond/blob/main/Docs/PolySecond.md',],
      ['PolyRabbit          ',`<a href="polyrabbit"      >Various</a>`,'RABBIT       ','https://polyrabbitfinance.com',],
      ['polyDEX-CryptionNetwork', `<a href="polydex_cryptionnetwork">Various</a>`, 'CNT', 'https://app.polydex.org'],
      ['WorldSwap Kuala Lumpur',`<a href="worldswap_kul" >Various</a>`,'KUL          ','https://kualalumpur.worldswap.finance',],
      ['PolySanta           ', `<a href="polysanta"       >Various</a>`, 'SANTA        ', 'https://polysanta.farm'],
      ['SpacePortDeFi Layer2',`<a href="spaceport layer2">Various</a>`,'UFO          ','https://polygon3.spaceportdefi.com',],
      ['PolyPizza           ', `<a href="polypizza"       >Various</a>`, 'PIZZA        ', 'https://polypizza.farm'],
      ['ShallotDefi         ',`<a href="shallotdefi"     >Various</a>`,'SHALLOT      ','https://poly.shallotdefi.com',],
      ['BerryFarmsBlueBerry ',`<a href="berryfarmsblueberry">Various</a>`,'BLUEBRY   ','https://blueberryfarms.world',],
      ['PolyWave            ',`<a href="polywave"        >Various</a>`,'WAVE         ','https://polywave.finance/pools',],
      ['PolyPup Ball        ',`<a href="polypupball"     >Various</a>`,'BALL         ','https://ball.polypup.finance',],
      ['Polymon             ', `<a href="polymon"         >Various</a>`, 'PYM          ', 'https://polymon.finance'],
      ['PlagueFactory       ', `<a href="plaguefactory"   >Various</a>`, 'PLAGUE       ', 'https://plaguefactory.com'],
      ['PolyShield          ', `<a href="polyshield"      >Various</a>`, 'SHI3LD       ', 'https://polyshield.finance'],
      ['Yield Enhancement Labs', `<a href="yel"           >Various</a>`, 'YEL          ', 'https://yel.finance'],
      ['PolyZeroDawn        ', `<a href="polyzerodawn"    >Various</a>`, 'PolyZeroDawn ', 'N/A'],
      ['HawkSwap            ',`<a href="hawkswap"        >Various</a>`,'HAWK         ','https://hawkfarming.finance',],
      ['PolyQuail KEGG      ',`<a href="polyquail_kegg"  >Various</a>`,'KEGG         ','https://kegg.polyquail.finance',],
      ['SpacePortDeFi Layer3',`<a href="spaceport layer3">Various</a>`,'GALACTICA    ','https://polygon4.spaceportdefi.com',],
      ['Daikiri Finance', `<a href='daikiri'            >Various</a>`, 'DAIKI        ', 'https://daikiri.finance/#'],
      ['BerryFarmsBlackBerry',`<a href="berryfarmsblackberry">Various</a>`,'BLACKBRY ','https://blackberryfarms.world',],
      ['Beefarm             ', `<a href="beefarm"         >Various</a>`, 'BEE          ', 'https://beefarmpolygon.com'],
      ['Raccoon             ', `<a href="raccoon"         >Various</a>`, 'RACCOON      ', 'https://raccoonyield.club'],
      ['PolyFlower          ', `<a href="polyflower"      >Various</a>`, 'FLOWER       ', 'https://t.me/polyflower'],
      ['PolyDachshund       ', `<a href="polydachs"       >Various</a>`, 'DACHS        ', 'https://t.me/polydachs'],
      ['iDegen Finance      ',`<a href="idegen"           >Various</a>`, 'IDEGEN       ','https://vfat.tools/polygon/idegen/',],
      ['Growth Finance      ', `<a href="growthfinance"   >Various</a>`, 'GROWTH       ', 'https://growthfinance.app'],
      ['EdenRuby            ', `<a href="edenruby"        >Various</a>`, 'RGEM         ', 'https://edenruby.farm'],
      ['Geo Finance         ', `<a href="geofinance"      >Various</a>`, 'GEO          ', 'http://farmgeo.finance'],
      ['MATIC STAKE         ', `<a href="matic_stake"     >STAKE</a>`, 'MATIC          ', 'https://t.me/matic_stake'],
      ['Poly Unicorn        ', `<a href="polyunicorn"     >Various</a>`, 'CORN         ', 'https://PolyUnicorn.org'],
      ['Plague Doctor       ',`<a href="plaguedoctor"     >Various</a>`, 'DOCTOR       ','https://doc.plaguefactory.com',],
      ['Barbershop          ', `<a href="barbershop"      >Various</a>`, 'HAIR         ', 'https://barbershop.finance'],
      ['Ninja               ', `<a href="ninja"           >Various</a>`, 'NINJA        ', 'https://0xpolygon.ninja'],
      ['Poly United Finance ', `<a href="polyunitedfinance">Various</a>`, 'UNITED      ', 'http://polyunited.finance'],
      ['Singular            ', `<a href="singular"        >Various</a>`, 'SING         ', 'https://singular.farm/'],
      ['Earth Finance       ', `<a href="earthfinance"    >Various</a>`, 'EARTH        ', 'https://geo-earthswap.finance'],
      ['The Stadium Arcadium', `<a href="stadiumarcadium" >Various</a>`, 'ARCADIUM / MYFRIENDS', 'https://stadiumarcadium.farm'],
      ['Tetu.io'             , `<a href="tetu"            >Various</a>`, 'TETU         ', 'https://app.tetu.io'],
      ['SunsetV2'            , `<a href="sunsetv2"        >Various</a>`, 'SUNSET       ', 'https://sunsetv2.finance'],
      ['Helium Finance'      , `<a href="heliumfinance"   >Various</a>`, 'HELIUM       ', 'https://heliumfinance.club'],
      ['PolyYork V2'         , `<a href="polyyork2"       >Various</a>`, 'GoldYork     ', 'https://gold.polyyork.finance'],
      ['WoodChain Polygon'   , `<a href="woodchain"       >Various</a>`, 'WOOD         ', 'https://polygon.woodchain.io'],
      ['Ragnarok'            , `<a href="ragnarok"        >Various</a>`, 'RAGNAROK     ', 'https://ragnarok.digital'],
      ['EbiSwap Finance'     , `<a href="ebiswap"         >Various</a>`, 'EBI          ', 'https://ebiswap.finance'],
      ['Hype Matic v1'       , `<a href="hypematic"       >ROI</a>`,     'MATIC        ', 'https://vfat.tools/polygon/hypematic/'],
      ['Pan Finance         ', `<a href="panfinance"      >Various</a>`, 'PAN          ', 'https://panfinance.xyz'],
      ['CryptoDouble        ', `<a href="crypto_double"   >DOUBLE</a>` , 'MATIC        ', 'https://t.me/cryptodoublecrypto'],
      ['Valorant Finance    ', `<a href="valorantfinance" >Various</a>`, 'RADIANITE    ', 'https://valorant.life'],
      ['PolyYeld V2         ', `<a href="polyyeld_v2"     >Various</a>`, 'YELD V2      ', 'https://app.polyyeld.finance'],
      ['AFK System          ', `<a href="afksystem"       >Various</a>`, 'SILVER       ', 'https://afksystem.finance'],
      ['Barns               ', `<a href="barns"           >Various</a>`, 'FARM         ', 'https://barns.finance'],
      ['Polycorn Finance    ', `<a href="polycorn"        >Various</a>`, 'YCORN        ', 'https://polycorn.finance'],
      ['PolyPixel           ', '<a href="polypixel"       >Various</a>', 'PIXEL        ', 'https://polypixel.farm'],
      ['BerryFactory-Tartlet', `<a href="tartlet"         >Various</a>`, 'TARTLET      ', 'https://berryfactory.world'],
      ['SandmanFarm         ',`<a href="sandmanfarm"       >Various</a>`,'SANDMANFARM   ','https://sandman.farm',],
      ['Sunrise'             , `<a href="sunrise"         >Various</a>`, 'SUNRISE      ', 'N/A']
      ['Arable'              , `<a href="arable"          >Various</a>`, 'ARABELLA     ', 'https://arable.finance'],
      ['Ton Finance         ', `<a href="tomfinance"      >Various</a>`, 'TOM          ', 'https://tomfinance.vip'],
    ],
  }

  let table = new AsciiTable().fromJSON(tableData)
  document.getElementById('log').innerHTML += table + '<br />'
  hideLoading()
}