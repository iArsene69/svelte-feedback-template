<script lang="ts">
  import { FeedbackStorage } from "../storage";

  $: count = $FeedbackStorage.length
  $: average = $FeedbackStorage.reduce((a, {rating}) => a + rating, 0) / $FeedbackStorage.length
</script>

<div class="flex justify-between items-center font-merriweather text-white font-semibold">
    <h1>{count} Reviews</h1>
    <h1>Average score: {average}</h1>
</div>