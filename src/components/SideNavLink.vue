<script setup>
</script>

<template>
    <div class="link text-center text-capitalize q-mx-md q-mt-md ">
        Link
    </div>
</template>

<style lang="scss">
.link {
    border: $dCoral solid 1px;
    color: $gSepia;
    border-radius: 10px;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: 500;
}

.link.active {
    background-color: $mBeige;
    border: none;
    color: #575757;
}

.link:hover {
    background-color: $mlCoral;
    border: none;
    color: #575757;
}

.active:hover {
    background-color: $mlCoral;
    border: none;
    color: #575757;
}
</style>