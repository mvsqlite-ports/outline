import {
  Column,
  Table,
  BelongsTo,
  ForeignKey,
  NotEmpty,
  DataType,
  IsIn,
} from "sequelize-typescript";
import WebhookSubscription from "./WebhookSubscription";
import IdModel from "./base/IdModel";
import Fix from "./decorators/Fix";

@Table({
  tableName: "webhook_deliveries",
  modelName: "webhook_delivery",
})
@Fix
class WebhookDelivery extends IdModel {
  @NotEmpty
  @IsIn([["pending", "success", "failed"]])
  @Column(DataType.STRING)
  status: "pending" | "success" | "failed";

  @Column(DataType.INTEGER)
  statusCode: number;

  @Column(DataType.JSON)
  requestBody: unknown;

  @Column(DataType.JSON)
  requestHeaders: Record<string, string>;

  @Column(DataType.TEXT)
  responseBody: string;

  @Column(DataType.JSON)
  responseHeaders: Record<string, string>;

  @Column(DataType.DATE)
  createdAt: Date;

  // associations

  @BelongsTo(() => WebhookSubscription, "webhookSubscriptionId")
  webhookSubscription: WebhookSubscription;

  @ForeignKey(() => WebhookSubscription)
  @Column
  webhookSubscriptionId: string;
}

export default WebhookDelivery;
