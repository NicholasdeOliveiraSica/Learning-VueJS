<template>
    <div class="flex justify-center items-center h-screen">
        <main class="bg-neutral-500 p-4 rounded-lg w-100 flex flex-col">
        
            <section class="flex flex-col gap-4">
                <input
                    class="bg-white p-1 rounded"
                    placeholder="Distance in km"
                    v-model="distance"
                    />
                    <input
                        class="bg-white p-1 rounded"
                        placeholder="Shipment weight in kg"
                        v-model="weight"
                        />
                <select v-model="shipmentType" class="bg-white p-1 rounded">
                    <option value="express">Express</option>
                    <option value="standard">Standard</option>
                </select>
            </section>
            <section class="flex gap-4 mt-4">
                <div
                    class="font-mono uppercase font-bold h-15 w-full bg-white rounded flex justify-center items-center"
                    >{{distance}} km
                </div>
        
                <div
                    class="font-mono uppercase font-bold h-15 w-full bg-white rounded flex justify-center items-center"
                    >{{weight}} kg
                </div>
        
                <div
                    class="font-mono uppercase font-bold h-15 w-full bg-white rounded flex justify-center items-center"
                    >{{shipmentType}}
                </div>
        
            </section>
        
            <section class="flex gap-4 mt-4">
                <div
                    class="font-mono uppercase font-bold h-15 w-full bg-white rounded flex justify-center items-center"
                    >+ R${{calcDistancePrice()}},00
                </div>
        
                <div
                    class="font-mono uppercase font-bold h-15 w-full bg-white rounded flex justify-center items-center"
                    >+ R${{calcWeightPrice()}},00
                </div>
        
                <div
                    class="font-mono uppercase font-bold h-15 w-full bg-white rounded flex justify-center items-center"
                    >+ R${{calcTypePrice()}},00
                </div>
        
            </section>
            <section v-if="distance && weight" class="flex gap-4 mt-4">
                <div
                    class="font-mono uppercase font-bold h-15 w-full bg-white rounded flex justify-center items-center"
                    >+ R${{calcTotalPrice()}},00
                 </div>
        
            </section>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'ShipmentCalc',
        data() {
            return {
                distance: null,
                weight: null,
                shipmentType: 'standard',
            }
        },
        methods: {
            calcDistancePrice() {
                return this.distance * 0.1;
            },
            calcWeightPrice() {
                return this.weight * 2;
            },
            calcSubTotal() {
                return this.calcDistancePrice() + this.calcWeightPrice() 
            },
            calcTypePrice() {
                if (this.shipmentType === 'express') {
                    return this.calcSubTotal() * 0.3 + 10;
                } else {
                    return 10;
                }
            },
            calcTotalPrice() {
                return this.calcSubTotal() + this.calcTypePrice();
            }
        }
    }
</script>