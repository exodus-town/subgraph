import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  AuctionBid,
  AuctionCreated,
  AuctionExtended,
  AuctionMinBidIncrementPercentageUpdated,
  AuctionReservePriceUpdated,
  AuctionReset,
  AuctionSettled,
  AuctionTimeBufferUpdated,
  OwnershipTransferred,
  Paused,
  Unpaused
} from "../generated/AuctionHouse/AuctionHouse"

export function createAuctionBidEvent(
  tokenId: BigInt,
  sender: Address,
  value: BigInt,
  extended: boolean
): AuctionBid {
  let auctionBidEvent = changetype<AuctionBid>(newMockEvent())

  auctionBidEvent.parameters = new Array()

  auctionBidEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  auctionBidEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  auctionBidEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )
  auctionBidEvent.parameters.push(
    new ethereum.EventParam("extended", ethereum.Value.fromBoolean(extended))
  )

  return auctionBidEvent
}

export function createAuctionCreatedEvent(
  tokenId: BigInt,
  startTime: BigInt,
  endTime: BigInt
): AuctionCreated {
  let auctionCreatedEvent = changetype<AuctionCreated>(newMockEvent())

  auctionCreatedEvent.parameters = new Array()

  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )

  return auctionCreatedEvent
}

export function createAuctionExtendedEvent(
  tokenId: BigInt,
  endTime: BigInt
): AuctionExtended {
  let auctionExtendedEvent = changetype<AuctionExtended>(newMockEvent())

  auctionExtendedEvent.parameters = new Array()

  auctionExtendedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  auctionExtendedEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )

  return auctionExtendedEvent
}

export function createAuctionMinBidIncrementPercentageUpdatedEvent(
  minBidIncrementPercentage: BigInt
): AuctionMinBidIncrementPercentageUpdated {
  let auctionMinBidIncrementPercentageUpdatedEvent = changetype<
    AuctionMinBidIncrementPercentageUpdated
  >(newMockEvent())

  auctionMinBidIncrementPercentageUpdatedEvent.parameters = new Array()

  auctionMinBidIncrementPercentageUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "minBidIncrementPercentage",
      ethereum.Value.fromUnsignedBigInt(minBidIncrementPercentage)
    )
  )

  return auctionMinBidIncrementPercentageUpdatedEvent
}

export function createAuctionReservePriceUpdatedEvent(
  reservePrice: BigInt
): AuctionReservePriceUpdated {
  let auctionReservePriceUpdatedEvent = changetype<AuctionReservePriceUpdated>(
    newMockEvent()
  )

  auctionReservePriceUpdatedEvent.parameters = new Array()

  auctionReservePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "reservePrice",
      ethereum.Value.fromUnsignedBigInt(reservePrice)
    )
  )

  return auctionReservePriceUpdatedEvent
}

export function createAuctionResetEvent(
  tokenId: BigInt,
  startTime: BigInt,
  endTime: BigInt
): AuctionReset {
  let auctionResetEvent = changetype<AuctionReset>(newMockEvent())

  auctionResetEvent.parameters = new Array()

  auctionResetEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  auctionResetEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  auctionResetEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )

  return auctionResetEvent
}

export function createAuctionSettledEvent(
  tokenId: BigInt,
  winner: Address,
  amount: BigInt
): AuctionSettled {
  let auctionSettledEvent = changetype<AuctionSettled>(newMockEvent())

  auctionSettledEvent.parameters = new Array()

  auctionSettledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  auctionSettledEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  auctionSettledEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return auctionSettledEvent
}

export function createAuctionTimeBufferUpdatedEvent(
  timeBuffer: BigInt
): AuctionTimeBufferUpdated {
  let auctionTimeBufferUpdatedEvent = changetype<AuctionTimeBufferUpdated>(
    newMockEvent()
  )

  auctionTimeBufferUpdatedEvent.parameters = new Array()

  auctionTimeBufferUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "timeBuffer",
      ethereum.Value.fromUnsignedBigInt(timeBuffer)
    )
  )

  return auctionTimeBufferUpdatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
