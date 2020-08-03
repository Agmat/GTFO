<template>
  <div>
    <button v-on:click="notify">{{ test }}</button>
    <p>{{ defaultText }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  mounted() {
    browser.runtime.sendMessage({});
  },
  computed: {
    defaultText() {
      return browser.i18n.getMessage("extName");
    }
  },
  data: function() {
    return {
      test: "ok"
    };
  },
  methods: {
    notify: () => {
      console.log(Notification.permission);
      if (Notification.permission === "granted") {
        // Si c'est ok, créons une notification
        new Notification("Salut");
      }

      // Sinon, nous avons besoin de la permission de l'utilisateur
      // Note : Chrome n'implémente pas la propriété statique permission
      // Donc, nous devons vérifier s'il n'y a pas 'denied' à la place de 'default'
      else if (Notification.permission !== "denied") {
        Notification.requestPermission(function(permission) {
          // Quelque soit la réponse de l'utilisateur, nous nous assurons de stocker cette information
          if (!("permission" in Notification)) {
            Notification.permission = permission;
          }

          // Si l'utilisateur est OK, on crée une notification
          if (permission === "granted") {
            new Notification("Salut");
          }
        });
      }
    }
  }
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
