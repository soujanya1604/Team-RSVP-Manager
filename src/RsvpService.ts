import { Player, RsvpEntry, RsvpStatus } from "./types";
import { ILogger } from "./logger";

export class RsvpService {
  private data: Map<string, RsvpEntry> = new Map();

  constructor(private logger: ILogger) {}

  addOrUpdate(player: Player, status: RsvpStatus) {
    this.data.set(player.id, { player, status });
    this.logger.log(`${player.name} responded with: ${status}`);
  }

  getConfirmed() {
    const result: Player[] = [];
    for (const entry of this.data.values()) {
      if (entry.status === "Yes") {
        result.push(entry.player);
      }
    }
    return result;
  }

  getStats() {
    let yes = 0;
    let no = 0;

    for (const entry of this.data.values()) {
      if (entry.status === "Yes") yes++;
      else if (entry.status === "No") no++;
    }

    return {
      total: this.data.size,
      confirmed: yes,
      declined: no
    };
  }
}
