if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,d,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(d.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-b6ef96bd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/app.7b1939c3.js",revision:"5dd3c0b4f92b0e47f0ef7448e6a6b3c1"},{url:"assets/concepts_animation-controllers.md.b9c8b9db.js",revision:"778ac875e52559ffc98be48b6e7e7d1e"},{url:"assets/concepts_animation-controllers.md.b9c8b9db.lean.js",revision:"778ac875e52559ffc98be48b6e7e7d1e"},{url:"assets/concepts_biomes.md.1730b97a.js",revision:"cd6423341df3b07b709737d987fa784d"},{url:"assets/concepts_biomes.md.1730b97a.lean.js",revision:"bfebd63c8afa38d7799c6d2fd1c3f999"},{url:"assets/concepts_blocks.md.e4a730af.js",revision:"4719008e83232bc74d391a762ed23100"},{url:"assets/concepts_blocks.md.e4a730af.lean.js",revision:"ccff5490a469a65a6aa00437a5fdcefd"},{url:"assets/concepts_components-events-groups.md.f03c8ccf.js",revision:"9e4b390da6c0ab4688983407f65084a9"},{url:"assets/concepts_components-events-groups.md.f03c8ccf.lean.js",revision:"7f262c9568f99a8a18d4279bd0fe0576"},{url:"assets/concepts_format-version.md.9e69df00.js",revision:"bee05f2a0eeb76f7626e37d88ca4e3da"},{url:"assets/concepts_format-version.md.9e69df00.lean.js",revision:"0007097ebc3b1d5523a11cd649aed79f"},{url:"assets/concepts_index.md.152dbe8c.js",revision:"462da04e1a82165fe57859265ad7d14e"},{url:"assets/concepts_index.md.152dbe8c.lean.js",revision:"462da04e1a82165fe57859265ad7d14e"},{url:"assets/concepts_items.md.bbf3f338.js",revision:"41edd80634fca1714f1d28d2a465b3ff"},{url:"assets/concepts_items.md.bbf3f338.lean.js",revision:"992072cfc66ea08948c2f401ec259011"},{url:"assets/concepts_json-ui.md.d0fcbf0b.js",revision:"439124facb677983cd5104763949c6c0"},{url:"assets/concepts_json-ui.md.d0fcbf0b.lean.js",revision:"5c2d206a7f7f6adb55728191b13ceef9"},{url:"assets/concepts_lang.md.c1139f1c.js",revision:"e8d6f752ea5caad8fa4b4b5ca475b0c9"},{url:"assets/concepts_lang.md.c1139f1c.lean.js",revision:"931758d353084485f272c6dab0a3bbd3"},{url:"assets/concepts_materials.md.b3b77a69.js",revision:"0a7f91d42b6b9f951d70f2f3b07209ff"},{url:"assets/concepts_materials.md.b3b77a69.lean.js",revision:"abc421333583adfb55ee46115143a1b4"},{url:"assets/concepts_math-based-animations.md.fd688275.js",revision:"392745a78f4fe2d119b7e6be6b7bea3d"},{url:"assets/concepts_math-based-animations.md.fd688275.lean.js",revision:"86909cd2a0cdcc465772f6a999da116c"},{url:"assets/concepts_mcfunction.md.c7033dbe.js",revision:"8a1b3b512112997298c7c245d144f488"},{url:"assets/concepts_mcfunction.md.c7033dbe.lean.js",revision:"bdb3a21be57a89d72470c17f2f2e3c80"},{url:"assets/concepts_mcstructure.md.58ac9832.js",revision:"be1c8bce46fa89be0f01f3a59fb5ed72"},{url:"assets/concepts_mcstructure.md.58ac9832.lean.js",revision:"15e85b797c6fee723a0a9c9abccbdad2"},{url:"assets/concepts_namespaces.md.f14e26f7.js",revision:"cddcf290e0f82b29a1491c9999d539e9"},{url:"assets/concepts_namespaces.md.f14e26f7.lean.js",revision:"5a37eeee253255cec1e49e0cdecb76de"},{url:"assets/concepts_render-controller.md.4d92a4fa.js",revision:"2212261a007d1884afc29eca0a1a19a1"},{url:"assets/concepts_render-controller.md.4d92a4fa.lean.js",revision:"a9a55e631c09ae74808695b9779aadb4"},{url:"assets/concepts_shaders.md.93f40faf.js",revision:"864774c898f115694d9275f579e7335a"},{url:"assets/concepts_shaders.md.93f40faf.lean.js",revision:"864774c898f115694d9275f579e7335a"},{url:"assets/concepts_sounds.md.4e758a57.js",revision:"3c64b9b218b888af487fb5d6dbaa3ffc"},{url:"assets/concepts_sounds.md.4e758a57.lean.js",revision:"c53281530827dc13fb891d886af22c0c"},{url:"assets/concepts_textures-list.md.1231e1f3.js",revision:"96b5f0e9c8a2f9e2262b889e409c458f"},{url:"assets/concepts_textures-list.md.1231e1f3.lean.js",revision:"3be8c3e1c7aede902a7d8ad2e518d8e0"},{url:"assets/contribute.md.b7d04417.js",revision:"cbd6f122b71271658d61f137a30bab18"},{url:"assets/contribute.md.b7d04417.lean.js",revision:"da5f104ee457825d81938e01e0f1c6e6"},{url:"assets/discord.md.b62933e6.js",revision:"02d0e5a73d17b25fab7062dd26843644"},{url:"assets/discord.md.b62933e6.lean.js",revision:"912aae963a265bca5e59280702affd25"},{url:"assets/documentation_biome-tags.md.0050b336.js",revision:"73219748cc7a8823f33ef0538aacd133"},{url:"assets/documentation_biome-tags.md.0050b336.lean.js",revision:"77adae6b6aa648aa8caec09dc8cbab0f"},{url:"assets/documentation_block-model-materials.md.e6d506da.js",revision:"d13f50965dcdf35d01a5a09a36bb8194"},{url:"assets/documentation_block-model-materials.md.e6d506da.lean.js",revision:"74bbf542e6f0f46a192c3a89ae0fad2d"},{url:"assets/documentation_block-shapes.md.ff589c18.js",revision:"60e19aed19db8da089f460bbfdc2a8d9"},{url:"assets/documentation_block-shapes.md.ff589c18.lean.js",revision:"41c5dbd08671d81b9a750a09ccc550d8"},{url:"assets/documentation_block-tags.md.595b4b27.js",revision:"b84b1440621507e5245037b47321e62e"},{url:"assets/documentation_block-tags.md.595b4b27.lean.js",revision:"253ebe5f2a30e76d79885f9d7f3b751c"},{url:"assets/documentation_color-codes.md.644baa07.js",revision:"c39be7b614249a092b71a37e308eea8c"},{url:"assets/documentation_color-codes.md.644baa07.lean.js",revision:"50ebc948b6188b0f529fad6f2cef922b"},{url:"assets/documentation_dummy-components.md.5aee5b53.js",revision:"d1f6fa3d4dcc26230dd5bcd62440e506"},{url:"assets/documentation_dummy-components.md.5aee5b53.lean.js",revision:"b4dc17726a8012a8c64b07dba9eb21da"},{url:"assets/documentation_emojis.md.9e47148d.js",revision:"1e6d0bb966f89170c68d4cdf3c2a697c"},{url:"assets/documentation_emojis.md.9e47148d.lean.js",revision:"1e6d0bb966f89170c68d4cdf3c2a697c"},{url:"assets/documentation_fog-ids.md.eaf68ad4.js",revision:"c8a2e06d4c068692bd7a70c3d9e2b182"},{url:"assets/documentation_fog-ids.md.eaf68ad4.lean.js",revision:"048424b4d7c59b1c222125f44a3660f8"},{url:"assets/documentation_index.md.3b408dba.js",revision:"e906f4cf1ee07902b116804fb6dcd63e"},{url:"assets/documentation_index.md.3b408dba.lean.js",revision:"e906f4cf1ee07902b116804fb6dcd63e"},{url:"assets/documentation_item-groups.md.b02057a9.js",revision:"350b5c25bdf069f3cf4f9a88e1f939bc"},{url:"assets/documentation_item-groups.md.b02057a9.lean.js",revision:"516a0460f828e236035a2721a793bbf6"},{url:"assets/documentation_json-ui.md.186dec30.js",revision:"a86cb4a91724a69fb7e1309847e2840b"},{url:"assets/documentation_json-ui.md.186dec30.lean.js",revision:"2f907f18fc3dd56f4636e4a4cef333c2"},{url:"assets/documentation_materials.md.d873cb76.js",revision:"c0ee213fe57fd30e93d8b333e5eb2f61"},{url:"assets/documentation_materials.md.d873cb76.lean.js",revision:"f90eaa0555519fda143684753a0a4b90"},{url:"assets/documentation_particles.md.b16c65cd.js",revision:"971aab4620273df06e8a316e0fc63751"},{url:"assets/documentation_particles.md.b16c65cd.lean.js",revision:"2b1cfaa49aac27d8e32be955588dd3e3"},{url:"assets/documentation_projectiles.md.98f599e7.js",revision:"60fdd37b09242f1914c6ea35f686fe5b"},{url:"assets/documentation_projectiles.md.98f599e7.lean.js",revision:"1ed8f86d320d5012c3017ecc61fe53b6"},{url:"assets/documentation_queries.md.7ccf11d7.js",revision:"7576950a117a3989d9977b44ce29eca1"},{url:"assets/documentation_queries.md.7ccf11d7.lean.js",revision:"8c8938a8b8e356b2029e83f93000faaf"},{url:"assets/documentation_runtime-identifier.md.16868a74.js",revision:"2cc82f601bcd4a0d8de44c8a40300ef5"},{url:"assets/documentation_runtime-identifier.md.16868a74.lean.js",revision:"3f5a4294848b550baa0f471062d3f157"},{url:"assets/documentation_sound-definitions.md.c51a80fa.js",revision:"1cdd727dd298b1a62661c397509283a0"},{url:"assets/documentation_sound-definitions.md.c51a80fa.lean.js",revision:"886e043dab0a6090099ebf1083e81c45"},{url:"assets/documentation_subpacks.md.543f592e.js",revision:"2ac99e5fec2e2e6e941568200e2c4561"},{url:"assets/documentation_subpacks.md.543f592e.lean.js",revision:"23bfb2c091fae4c8bdb682036d8a6654"},{url:"assets/documentation_tellraw.md.15176603.js",revision:"da52d5d279e8e0617eecaa34f78e3026"},{url:"assets/documentation_tellraw.md.15176603.lean.js",revision:"da52d5d279e8e0617eecaa34f78e3026"},{url:"assets/guide_animation-controllers.md.a093e48f.js",revision:"ada99158d6d7d0b9363dee6bc2b8bc3b"},{url:"assets/guide_animation-controllers.md.a093e48f.lean.js",revision:"ada99158d6d7d0b9363dee6bc2b8bc3b"},{url:"assets/guide_creating-entity-visuals.md.2231fd8f.js",revision:"9e3a3e2ab1a9f190eea72c9dc2292e57"},{url:"assets/guide_creating-entity-visuals.md.2231fd8f.lean.js",revision:"9e3a3e2ab1a9f190eea72c9dc2292e57"},{url:"assets/guide_custom-blocks.md.d7c997ed.js",revision:"410269e350064ee4bd6c228ecc1d9b1d"},{url:"assets/guide_custom-blocks.md.d7c997ed.lean.js",revision:"410269e350064ee4bd6c228ecc1d9b1d"},{url:"assets/guide_custom-entity-full.md.37de39df.js",revision:"e02f5a2e8ecf465d45ee98aefb60db98"},{url:"assets/guide_custom-entity-full.md.37de39df.lean.js",revision:"e02f5a2e8ecf465d45ee98aefb60db98"},{url:"assets/guide_custom-generation.md.d4a9d8b2.js",revision:"29c8252f305642ed04723ec54a99d39c"},{url:"assets/guide_custom-generation.md.d4a9d8b2.lean.js",revision:"29c8252f305642ed04723ec54a99d39c"},{url:"assets/guide_custom-items.md.6c89004b.js",revision:"515fd54d0c1ae1b2cff8e41ce0ec1ed3"},{url:"assets/guide_custom-items.md.6c89004b.lean.js",revision:"a6fe38957a4d401afca51b93c12d4f0b"},{url:"assets/guide_custom-particles.md.51dd8cf0.js",revision:"89448f27558205c1f4a3835c14625469"},{url:"assets/guide_custom-particles.md.51dd8cf0.lean.js",revision:"89448f27558205c1f4a3835c14625469"},{url:"assets/guide_custom-skin-packs.md.37fe40c9.js",revision:"81679694f414a5af373ef3197ef44837"},{url:"assets/guide_custom-skin-packs.md.37fe40c9.lean.js",revision:"c20ad5b186290e5cee34897123355ab2"},{url:"assets/guide_custom-trades.md.0c31187e.js",revision:"f39820dcdcfe41a60010802bb2a85005"},{url:"assets/guide_custom-trades.md.0c31187e.lean.js",revision:"f39820dcdcfe41a60010802bb2a85005"},{url:"assets/guide_download-packs.md.f5e1e988.js",revision:"56614489e642927550bd90c6c6dd45b1"},{url:"assets/guide_download-packs.md.f5e1e988.lean.js",revision:"ef7a1b3f6f024f83f6bb42593d01e696"},{url:"assets/guide_index.md.799ba4ef.js",revision:"9fa718cdd37ae8c193d49119a7a5b7df"},{url:"assets/guide_index.md.799ba4ef.lean.js",revision:"4a2e3c5c727d960c230403e9b78764a9"},{url:"assets/guide_loot_tables-recipes-spawn_rules.md.cbe5b320.js",revision:"6d3a07d008351c47119cb8505ef8d4eb"},{url:"assets/guide_loot_tables-recipes-spawn_rules.md.cbe5b320.lean.js",revision:"0ee86abd107e9fb0bca6f16f01f9ec61"},{url:"assets/guide_project-setup.md.8af529b5.js",revision:"ccb62f08b323fabc31fd4f0f7021ea7e"},{url:"assets/guide_project-setup.md.8af529b5.lean.js",revision:"ccb62f08b323fabc31fd4f0f7021ea7e"},{url:"assets/guide_render-controllers.md.45d9f861.js",revision:"92182a65dc16bce9d5893662d94f244f"},{url:"assets/guide_render-controllers.md.45d9f861.lean.js",revision:"92182a65dc16bce9d5893662d94f244f"},{url:"assets/guide_software-preparation.md.77f71da6.js",revision:"fd7d70001220a37a54de3315eb2ce89d"},{url:"assets/guide_software-preparation.md.77f71da6.lean.js",revision:"fd7d70001220a37a54de3315eb2ce89d"},{url:"assets/guide_understanding-json.md.378e9971.js",revision:"da2f4ca2b87520ab3eb3303e53f528f1"},{url:"assets/guide_understanding-json.md.378e9971.lean.js",revision:"1fff2b73742a98f6c81a57f978219b43"},{url:"assets/index.md.796e57b0.js",revision:"9007148f6977c8308391060c8486857a"},{url:"assets/index.md.796e57b0.lean.js",revision:"4eacac8ae20af59dc69e92cbd97fc755"},{url:"assets/knowledge_addon-performance.md.ff91fba3.js",revision:"17e76d7fee8a48947a2517319a5b1e55"},{url:"assets/knowledge_addon-performance.md.ff91fba3.lean.js",revision:"266729fcc0fe22ed0b536148a31be892"},{url:"assets/knowledge_addon-programming.md.da77b9a8.js",revision:"9b58a753de667d97294af78e49f104c1"},{url:"assets/knowledge_addon-programming.md.da77b9a8.lean.js",revision:"765a2f3798e597f73521fffedf1c6a25"},{url:"assets/knowledge_bedrock-modeling.md.570ec46f.js",revision:"07ff03ee1b8dae910e4b937030566e81"},{url:"assets/knowledge_bedrock-modeling.md.570ec46f.lean.js",revision:"f28c367fdce124c4209793288b807426"},{url:"assets/knowledge_entity-movement.md.00de9822.js",revision:"9807bec0cf573c0c5a1cf50935b22b61"},{url:"assets/knowledge_entity-movement.md.00de9822.lean.js",revision:"b559e0a7847d2391e3fec26db2229b13"},{url:"assets/knowledge_faq.md.5baa0fb5.js",revision:"517af62bcc9ec77f046df1cb7f500af9"},{url:"assets/knowledge_faq.md.5baa0fb5.lean.js",revision:"703f3c05a3fc4393a2d568a9ad082593"},{url:"assets/knowledge_index.md.4ceb7bfa.js",revision:"ac76619939de22c660c2925e59de4d43"},{url:"assets/knowledge_index.md.4ceb7bfa.lean.js",revision:"ac76619939de22c660c2925e59de4d43"},{url:"assets/knowledge_jq.md.a90d23a3.js",revision:"a37dda99b75313d3cc69a518dc3cf59a"},{url:"assets/knowledge_jq.md.a90d23a3.lean.js",revision:"664d8c3da2e26947660166c8ff96dfc9"},{url:"assets/knowledge_nbt_commands.md.048af569.js",revision:"48374612e36a9b5b9684eb731cd1521a"},{url:"assets/knowledge_nbt_commands.md.048af569.lean.js",revision:"e321c93007fa04e1d81a08d53655a0cd"},{url:"assets/knowledge_style-guide.md.4d02c7dd.js",revision:"bafd7497527946a932c634bd24356b2c"},{url:"assets/knowledge_style-guide.md.4d02c7dd.lean.js",revision:"055610ee7234993e8d5d4f038ef8b43a"},{url:"assets/knowledge_useful-links.md.64fd8b66.js",revision:"ec0f7fb50ddf3f04a27a0e5f71f34b0a"},{url:"assets/knowledge_useful-links.md.64fd8b66.lean.js",revision:"ebd56c9f918c5c1e547a114826f60ee6"},{url:"assets/knowledge_using-schemas.md.e9b92501.js",revision:"3d827d4de4d461b69038f9a738c7d4d1"},{url:"assets/knowledge_using-schemas.md.e9b92501.lean.js",revision:"48c45f10727b0ff5fc103bb718a2bf28"},{url:"assets/knowledge_version-control.md.8b040d71.js",revision:"a13d2c8df7d9a38da998ce94ced0abae"},{url:"assets/knowledge_version-control.md.8b040d71.lean.js",revision:"edc3be01b581e7eeb6febc7af671f8f5"},{url:"assets/scripting_game-tests.md.4be3a98e.js",revision:"f0a05cd058d4cefff6c2dd2b06d160f8"},{url:"assets/scripting_game-tests.md.4be3a98e.lean.js",revision:"9e85ec81955ebe692ac2e03d8cea20fa"},{url:"assets/scripting_hello-world-tutorial.md.f9ce20b0.js",revision:"41e6e7996019a897c2dc9d02ae2f5c70"},{url:"assets/scripting_hello-world-tutorial.md.f9ce20b0.lean.js",revision:"41e6e7996019a897c2dc9d02ae2f5c70"},{url:"assets/scripting_index.md.e223b370.js",revision:"78b755d2f90c1c4bdf0614d44fe6a5ef"},{url:"assets/scripting_index.md.e223b370.lean.js",revision:"78b755d2f90c1c4bdf0614d44fe6a5ef"},{url:"assets/scripting_saving_loading.md.5c00d29b.js",revision:"e454d04d490df4f8f3f5b5a96fc03751"},{url:"assets/scripting_saving_loading.md.5c00d29b.lean.js",revision:"1b4e294f2d9222823a5060c800dd1718"},{url:"assets/style.1442f6dd.css",revision:"a60747fb2bbcf608a1aeeef4373ce8f2"},{url:"assets/troubleshooting_entities.md.3e41bb5d.js",revision:"d6dee7a0a891186f213efea416de2d8e"},{url:"assets/troubleshooting_entities.md.3e41bb5d.lean.js",revision:"4128a13c6dc97766f56de540b6bdefd5"},{url:"assets/troubleshooting_index.md.4e4f63ef.js",revision:"32fe1b0bce1d482acf6f6d6ebb40974f"},{url:"assets/troubleshooting_index.md.4e4f63ef.lean.js",revision:"0db010b4281514596204d105021b85c5"},{url:"assets/tutorials_beginner-commands.md.a724a468.js",revision:"5a31e8023bb60aeeee5bfe12db169364"},{url:"assets/tutorials_beginner-commands.md.a724a468.lean.js",revision:"4a43a7d1000b45a6dff91d8bd5dc07f8"},{url:"assets/tutorials_block-texture-variation.md.2cab3dfb.js",revision:"d918f16e6f0a6025ecb09e29f9d7670a"},{url:"assets/tutorials_block-texture-variation.md.2cab3dfb.lean.js",revision:"8f99f5a9237d0b6f3af06cf620879a20"},{url:"assets/tutorials_boat-entities.md.b78b15e7.js",revision:"1fa079f135df680a746da5be94749f75"},{url:"assets/tutorials_boat-entities.md.b78b15e7.lean.js",revision:"d908e9712f6de102a950df48d69a52ad"},{url:"assets/tutorials_cancelling-death-animations.md.ccc7b3a2.js",revision:"bd3bb8c4872978f1537bbda4e6badff9"},{url:"assets/tutorials_cancelling-death-animations.md.ccc7b3a2.lean.js",revision:"3cf8cc1547e35ec2a34be8075043d96c"},{url:"assets/tutorials_controlling-flying-entities.md.2b6ac0db.js",revision:"8f1bbfa2597c473518e3ebdb1be72e33"},{url:"assets/tutorials_controlling-flying-entities.md.2b6ac0db.lean.js",revision:"3bb8165c0ac2143f12fd9de8283a60c4"},{url:"assets/tutorials_craftable-spawneggs.md.c078c6e8.js",revision:"c6c81e94b2f504c2a3cfb8cc43a341e7"},{url:"assets/tutorials_craftable-spawneggs.md.c078c6e8.lean.js",revision:"4f495c7c022b43c2b9861388309e1fbe"},{url:"assets/tutorials_custom-item-models.md.5c450b6d.js",revision:"faba55a3b78cb155c666b861f96de247"},{url:"assets/tutorials_custom-item-models.md.5c450b6d.lean.js",revision:"faba55a3b78cb155c666b861f96de247"},{url:"assets/tutorials_death-effects.md.4da8c27e.js",revision:"72413b3e9c85891943e03db2096ce40f"},{url:"assets/tutorials_death-effects.md.4da8c27e.lean.js",revision:"7dde5e7bedec71958a682c53acc7ebef"},{url:"assets/tutorials_disabling-particles.md.41e3616e.js",revision:"e05a8368301d0a6b6ac1d4c1e6f12452"},{url:"assets/tutorials_disabling-particles.md.41e3616e.lean.js",revision:"c9d9b8bbee1cb667304f31e8e9f08df9"},{url:"assets/tutorials_disabling-team-damage.md.6c0b3d7d.js",revision:"18a99e82d60e97af6de31de8ea391b5d"},{url:"assets/tutorials_disabling-team-damage.md.6c0b3d7d.lean.js",revision:"e813038b83f641b879debc315a1971df"},{url:"assets/tutorials_dummy-entities.md.a61f7db1.js",revision:"2c3a46973b05d94f02b86a6aad04837f"},{url:"assets/tutorials_dummy-entities.md.a61f7db1.lean.js",revision:"3d3901a2ccb5e1be0349512b715879c7"},{url:"assets/tutorials_egg-drops.md.dd0fe443.js",revision:"ccc13fa8dd1f387cccf13acd4b854ba8"},{url:"assets/tutorials_egg-drops.md.dd0fe443.lean.js",revision:"498772f8abe532de222a7098d31e29a4"},{url:"assets/tutorials_entity-commands.md.7ba1a6a1.js",revision:"9b2a715abd044312718087e389f38c0c"},{url:"assets/tutorials_entity-commands.md.7ba1a6a1.lean.js",revision:"2744e7bbe8798d55b4aa7a22f7f255ed"},{url:"assets/tutorials_entity-events.md.d862ed8b.js",revision:"3a396fa7d81f907880161055111e9561"},{url:"assets/tutorials_entity-events.md.d862ed8b.lean.js",revision:"192f77763e48c792b279888707b4502f"},{url:"assets/tutorials_entity-holds-item.md.5ee9cd85.js",revision:"a712f1e57a2a910b246092bc383ddca4"},{url:"assets/tutorials_entity-holds-item.md.5ee9cd85.lean.js",revision:"a712f1e57a2a910b246092bc383ddca4"},{url:"assets/tutorials_fake_blocks.md.1f09a4f9.js",revision:"f637b6decf144bd97937a94feae39971"},{url:"assets/tutorials_fake_blocks.md.1f09a4f9.lean.js",revision:"6fb492f56b6613dd986db32824b10b45"},{url:"assets/tutorials_index.md.8b996036.js",revision:"d2c96a6d0b5bd5b3c8abc1277cd02eca"},{url:"assets/tutorials_index.md.8b996036.lean.js",revision:"d2c96a6d0b5bd5b3c8abc1277cd02eca"},{url:"assets/tutorials_invulnerable-entities.md.e38343e1.js",revision:"d9baf997beaf4ea26ff9f409c6c53303"},{url:"assets/tutorials_invulnerable-entities.md.e38343e1.lean.js",revision:"6c78e9bd53f3b48913a7682b0e9ba4b9"},{url:"assets/tutorials_pathfinding-entities.md.a062432a.js",revision:"a0796a522c633c795a626eb2ff5ff2f9"},{url:"assets/tutorials_pathfinding-entities.md.a062432a.lean.js",revision:"583fc8cd552bf1001dc3877609488339"},{url:"assets/tutorials_player-geometry.md.2f887a96.js",revision:"011d12bbef9fa7cb9aecc855c23ab5e7"},{url:"assets/tutorials_player-geometry.md.2f887a96.lean.js",revision:"5c300cf61b0ac5602c373ee5af27160f"},{url:"assets/tutorials_remove-shadows.md.282f4667.js",revision:"0ec0d6accdb0969c4730d0a58cb1d6c6"},{url:"assets/tutorials_remove-shadows.md.282f4667.lean.js",revision:"8a7a0bc40891479edb3e6ab96d77c5a7"},{url:"assets/tutorials_respawn-commands.md.85911ced.js",revision:"21b42e746b3406d837000dacf11a044a"},{url:"assets/tutorials_respawn-commands.md.85911ced.lean.js",revision:"3738b95efb65ce8aab7d1e73a91d57e1"},{url:"assets/tutorials_retexturing-spawn-eggs.md.25e4be13.js",revision:"2ee105006659f965e37cfe8c437234c4"},{url:"assets/tutorials_retexturing-spawn-eggs.md.25e4be13.lean.js",revision:"1103c6a9f03702c21f478e0135c931c6"},{url:"assets/tutorials_solid-entities.md.0b34e2c7.js",revision:"9f43671c1e03d1dad68006b6d5a72288"},{url:"assets/tutorials_solid-entities.md.0b34e2c7.lean.js",revision:"b1a6c0d0e22bca4580f4055a282e1864"},{url:"assets/tutorials_spawning-items.md.74c2de92.js",revision:"01b410a377618f276992cb71bdde9fb6"},{url:"assets/tutorials_spawning-items.md.74c2de92.lean.js",revision:"d0191aa2c1826ea0d8599b0b5f81d610"},{url:"assets/tutorials_text-localization.md.d1f6e85a.js",revision:"39d91fb1a4a16739c2e7120aab421fc5"},{url:"assets/tutorials_text-localization.md.d1f6e85a.lean.js",revision:"49cbb8e51c9e53b7fbd855052a961e11"},{url:"assets/tutorials_timers.md.df54bb9b.js",revision:"f3d5a0c65859901d6663c59cdea2676a"},{url:"assets/tutorials_timers.md.df54bb9b.lean.js",revision:"5945657377be5e43cede9d0ac46913f7"},{url:"assets/vanilla-usage_biomes.md.f5ab817b.js",revision:"d1dabafacc85bb563b0b26d9f30c8489"},{url:"assets/vanilla-usage_biomes.md.f5ab817b.lean.js",revision:"2ab77477c28a612b39c3c81e21db7818"},{url:"assets/vanilla-usage_components.md.da1b00eb.lean.js",revision:"f750f3ffbf9024230448a88c4f42941c"},{url:"assets/vanilla-usage_feature-rules.md.226175dd.js",revision:"34fee26b11a886d6be2e82465f8dc564"},{url:"assets/vanilla-usage_feature-rules.md.226175dd.lean.js",revision:"2d9be76a47a5bae2569e18cd7f81e160"},{url:"assets/vanilla-usage_index.md.80fe13e1.js",revision:"672c12159db9b581e1d2d5b7e364c59f"},{url:"assets/vanilla-usage_index.md.80fe13e1.lean.js",revision:"672c12159db9b581e1d2d5b7e364c59f"},{url:"assets/vanilla-usage_items-beta.md.407c8e66.js",revision:"3ba3bce25b133b15bea1846d987c1a13"},{url:"assets/vanilla-usage_items-beta.md.407c8e66.lean.js",revision:"ec64831f417fd6e0e01078f3ec62a4b0"},{url:"assets/vanilla-usage_items.md.9f03dcad.js",revision:"77de13d1718d1fef96126385d17ac938"},{url:"assets/vanilla-usage_items.md.9f03dcad.lean.js",revision:"bca94d543f6c79b67fc5bc9d43fddbee"},{url:"assets/vanilla-usage_spawn-rules.md.ee3696a4.js",revision:"6a23345a6860a3fce6b42e34981bcd66"},{url:"assets/vanilla-usage_spawn-rules.md.ee3696a4.lean.js",revision:"c0b18784bb0442ced1ab9d4adc021619"},{url:"registerSW.js",revision:"3be22912fd14291c200edaae7ff5f610"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map