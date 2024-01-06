<script>
export default {
    name: "Card"
}
</script>

<template>
<div class="card snow-bg" v-motion="'custom'" :initial="{ opacity: 0, y: 100 }" :visible="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: '100', delay: 100 } }" :variants="{ custom: { scale: 1 } }">
    <div class="card-head">
        <img src="../../assets/images/landing-img.jpg" class="card-img" />
    </div>
    <div class="card-body">
        <div class="body-head">
            Lorem
        </div>
        <div class="body-desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, culpa. Facilis, iusto eveniet eos praesentium explicabo deleniti autem maxime consectetur sequi natus consequatur impedit accusantium, nihil tempore molestias dolor vitae.
        </div>
        <div class="card-btn ">
            <button class="more-btn mint-bg snow">More</button>
        </div>
    </div>
</div>
</template>

<style scoped>
.card {
    width: 23%;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
}

.card-body {
    padding: 1rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

}

.body-desc {
    text-align: justify;
    line-height: 1.5rem;
}

.card-img {
    object-fit: cover;
    width: 100%;
}

.card-btn {
    display: flex;
    justify-content: flex-end;
}

.more-btn {
    padding: .5rem 1.9rem;
    border: none;
}

.more-btn:hover {
    cursor: pointer;
}
</style>
