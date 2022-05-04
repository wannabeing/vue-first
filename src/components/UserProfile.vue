<template>
<div class="user-container">
    <div><i class="fa-solid fa-user"></i></div>
    <div class="user-description">
        <slot name="username">
            <!-- 상위 컴포넌트 정의 -->
        </slot>
        <div class="user-time-ago">
            <slot name="created">
                <!-- 상위 컴포넌트 정의 -->
            </slot>
            <slot name="karma">
                <!-- 상위 컴포넌트 정의 -->
            </slot>
        </div>
        
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.user-description {
  padding-left: 8px;
}
.user-time-ago {
  font-size: 0.7rem;
}
.fa-user {
  font-size: 2.5rem;
}
</style>
