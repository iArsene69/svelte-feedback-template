<script lang="ts">
  import FeedbackForm from "./lib/FeedbackForm.svelte";
  import FeedbackList from "./lib/FeedbackList.svelte";
  import FeedbackStats from "./lib/FeedbackStats.svelte";
</script>

<div class="max-w-3xl mx-auto my-10">
  <FeedbackForm />
  <FeedbackStats />
  <FeedbackList />
</div>