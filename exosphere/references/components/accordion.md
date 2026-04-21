---
id: "components-accordion--overview"
title: "Components/Accordion"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-accordion--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:12.798Z"
built_at: "2026-04-21T08:48:27.285Z"
---
### Accordion

### Style Properties:

Style PropertiesUsage

```

--exo-component-accordion-content-max-height | Token to modify the max height for accordion item.
--exo-component-accordion-content-label-size | Token to define the label size for accordion item.
--exo-component-accordion-content-height     | Token to define the height of the accordion item.

```

  

## Elevated

The Milky Way is the galaxy that contains our Solar System. It is a barred spiral galaxy, with a diameter of about 100,000 light-years, containing billions of stars, planets, and other celestial objects. The Milky Way is part of the Local Group of galaxies.

The Milky Way has a complex structure, consisting of a central bulge, a flat rotating disk, and a surrounding halo. The disk contains spiral arms filled with stars, gas, and dust, while the halo contains older stars and globular clusters. The central bulge hosts a supermassive black hole.

Our Solar System is located in one of the Milky Way's spiral arms, known as the Orion Arm or Orion Spur. It is situated about 27,000 light-years from the Galactic Center, in the outer region of the galaxy's disk.

The Galactic Center is the rotational center of the Milky Way, located in the constellation Sagittarius. It is home to a supermassive black hole called Sagittarius A\*, which has a mass of about 4 million times that of the Sun. The region around the Galactic Center is densely packed with stars, dust, and gas.

The Milky Way's spiral arms are regions of higher density in the galaxy's disk, where stars, gas, and dust are concentrated. These arms appear as winding structures extending from the central bulge and are sites of active star formation. The spiral arms give the Milky Way its characteristic shape.

  
  

## Flat

Earth's atmosphere is a layer of gases surrounding the planet, held in place by gravity. It consists of several layers, each with distinct characteristics, and is crucial for supporting life by providing oxygen, protecting from harmful solar radiation, and regulating temperature.

Earth's atmosphere is divided into five main layers: the troposphere, stratosphere, mesosphere, thermosphere, and exosphere. Each layer has unique properties, such as temperature gradients and the presence of specific gases, which play vital roles in various atmospheric processes.

The atmosphere protects life by filtering out harmful ultraviolet (UV) radiation through the ozone layer, providing a breathable mixture of gases, and maintaining the planet's temperature through the greenhouse effect. It also acts as a shield against meteoroids, which burn up upon entry.

The greenhouse effect is a natural process where certain gases in Earth's atmosphere, such as carbon dioxide and methane, trap heat from the Sun. This trapped heat helps keep the planet warm enough to sustain life, but an excess of these gases can lead to global warming.

The ozone layer, located in the stratosphere, plays a crucial role in absorbing most of the Sun's harmful ultraviolet (UV) radiation. Without this layer, life on Earth would be exposed to higher levels of UV radiation, which can cause skin cancer and other harmful effects.

Human activities, such as burning fossil fuels, deforestation, and industrial processes, release large amounts of greenhouse gases and pollutants into the atmosphere. These activities contribute to climate change, air pollution, and the depletion of the ozone layer, impacting the environment and human health.

## General Anatomy & Variants

There are two main accordion types that can be used:

1.  Elevated: Used when you need clearer separation of content, often when accordions are mixed with other types of interactable content
    
2.  Flat: Used when accordions are easily seen and don't need extra border emphasis
    

  
  

## Playground

  

The universe is all of space and time and their contents, including planets, stars, galaxies, and all other forms of matter and energy. The universe is vast and has been expanding since its formation in the Big Bang approximately 13.8 billion years ago.

The universe began with the Big Bang, a massive explosion that occurred around 13.8 billion years ago. This event marked the beginning of space, time, and all the matter and energy that make up the universe. The universe has been expanding ever since.

Dark matter is a form of matter that does not emit, absorb, or reflect light, making it invisible and detectable only through its gravitational effects. It is thought to make up about 27% of the universe's mass-energy content.

Dark energy is a mysterious force that is causing the accelerated expansion of the universe. It is estimated to make up about 68% of the universe, dominating over the matter and dark matter components.

Black holes are regions of space where the gravitational pull is so strong that not even light can escape. They are formed when massive stars collapse under their own gravity. Black holes play a crucial role in the structure of the universe, influencing the formation and evolution of galaxies.

Whether there is life elsewhere in the universe is one of the biggest unanswered questions in science. While there is no direct evidence of extraterrestrial life, the vastness of the universe and the discovery of potentially habitable planets suggest that it is possible.

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| variant | 
Elevated or flat style of accordion

string

 | 

ELEVATED

 | `one of: elevated | flat` |
| allow-multiple | 

Controls whether to close the previously opended accordion when a new one is closed

boolean

 | \- |  |
| use-enhanced-styles | 

⚠️ DEPRECATED: This property is deprecated and will be removed in next major release. when true the improved layout styles are automatically applied to flat variant

boolean

 | \- |  |
| onToggle | 

The toggle event fires when the open/closed state of a details element is toggled.

\-

 | 

@on-toggle

 | \- |
| leadingIconLabel | 

Custom native tooltip label for the icon in ex-accordion-item

string

 | \- |  |
