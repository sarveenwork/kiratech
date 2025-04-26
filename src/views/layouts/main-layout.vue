<template>
  <div>
    <div>
      <top-bar />
    </div>
    <div>
      <div style="min-height: 88vh">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/topbar";

export default {
  name: "MainLayout",
  components: { TopBar },
};
</script>
