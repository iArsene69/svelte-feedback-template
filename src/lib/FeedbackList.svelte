<script lang="ts">
  import { FeedbackStorage } from "../storage";

  let feedbackArray: { id: number; rating: number; review: string }[];

  FeedbackStorage.subscribe((feedback) => {
    feedbackArray = feedback;
  });
  const handleRemove = (id: number) => {
    FeedbackStorage.update((feedback) => {
      return feedback.filter((fb) => fb.id != id);
    });
  };
</script>

{#each feedbackArray as feedback (feedback.id)}
  <div
    class="font-merriweather px-3 py-3 bg-white border my-2 rounded-lg relative"
  >
    <div
      class="bg-[#ff3e00] rounded-full w-6 h-6 text-center text-white absolute -top-2 -left-2 text-base"
    >
      {feedback.rating}
    </div>
    <button
      on:click={() => handleRemove(feedback.id)}
      class="absolute top-1 right-2 cursor-pointer bg-none border-none"
    >
      <svg
        class="w-2 h-2 text-gray-800"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
    </button>
    <p class="text-center text-sm px-4 py-4">{feedback.review}</p>
  </div>
{/each}
