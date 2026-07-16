// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    ""
// @linked    []
// @version    3.6.2
// ==/EMEVD==

$Event(90015000, Default, function(eventFlagId, chrEntityId, nameId, targetDistance, bgmBossConvParamId, eventFlagId2) {
    DisableNetworkSync();
    if (eventFlagId != 0) {
        WaitFor(EventFlag(eventFlagId));
    }
    chrArea = CharacterAIState(chrEntityId, AIStateType.Combat, GreaterOrEqual, 1)
        && EntityInRadiusOfEntity(20000, chrEntityId, targetDistance, 1)
        && !InArea(20000, 1043372980);
    chr = CharacterRatioDead(chrEntityId);
    chrAreaFlag |= chrArea || chr;
    if (eventFlagId2 != 0) {
        chrAreaFlag |= EventFlag(eventFlagId2);
    }
    WaitFor(chrAreaFlag);
    if (eventFlagId2 != 0) {
        EndIf(EventFlag(eventFlagId2));
    }
    SetWorldMapPointFlag(0, ON);
    SetWorldMapPointFlag(8, OFF);
    EndIf(chr.Passed);
    flag = !EventFlag(5000);
    flag2 = !EventFlag(5001);
    flag3 = flag || flag2;
    if (!flag3) {
        WaitFor(flag3);
        RestartEvent();
    }
    if (Signed(bgmBossConvParamId) != 0) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
    }
    WaitFixedTimeSeconds(1);
    if (flag.Passed) {
        SetEventFlagID(5000, ON);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
    } else if (flag2.Passed) {
        SetEventFlagID(5001, ON);
        DisplayBossHealthBar(Enabled, chrEntityId, 1, nameId);
    }
    LinkToBossHealthBar(Enabled, nameId, chrEntityId);
    chrArea2 = (CharacterAIState(chrEntityId, AIStateType.Recognition, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.Alert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.Combat, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.PassiveAlert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.ActiveAlert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.WaitBeforeForget, LessOrEqual, 0))
        && !EntityInRadiusOfEntity(20000, chrEntityId, targetDistance, 1);
    area = EntityInRadiusOfEntity(20000, chrEntityId, 100, 1);
    chr2 = CharacterRatioDead(chrEntityId);
    chr3 = CharacterDead(20000);
    chrAreaFlag2 |= chrArea2 || !area || InArea(20000, 1043372980) || chr2 || chr3;
    if (eventFlagId2 != 0) {
        chrAreaFlag2 |= EventFlag(eventFlagId2);
    }
    WaitFor(chrAreaFlag2);
    GotoIf(S0, eventFlagId2 == 0);
    GotoIf(L0, EventFlag(eventFlagId2));
S0:
    if (chr2.Passed) {
        WaitFixedTimeSeconds(5);
    } else {
        WaitFixedTimeSeconds(1);
    }
    GotoIf(S1, !chr3.Passed);
    WaitFixedTimeSeconds(2.5);
S1:
L0:
    if (Signed(bgmBossConvParamId) != 0) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
    }
    if (flag.Passed) {
        SetEventFlagID(5000, OFF);
        DisplayBossHealthBar(Disabled, chrEntityId, 0, nameId);
    } else if (flag2.Passed) {
        SetEventFlagID(5001, OFF);
        DisplayBossHealthBar(Disabled, chrEntityId, 1, nameId);
    }
    if (eventFlagId2 != 0) {
        EndIf(EventFlag(eventFlagId2));
    }
    EndIf(chr2.Passed);
    WaitFor(!CharacterDead(20000));
    RestartEvent();
});

$Event(90015001, Default, function(chrEntityId, chrEntityId2, value, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    CreateReferredDamagePair(chrEntityId, chrEntityId2);
    WaitFor(CharacterHPValue(chrEntityId2) <= 0);
    WaitFixedTimeSeconds(3);
    ForceCharacterTreasure(chrEntityId2);
    ForceCharacterDeath(chrEntityId2, true);
    EndIf(Signed(value) == 0);
    ForceCharacterDeath(chrEntityId, true);
    EndEvent();
});

$Event(90015002, Default, function(eventFlagId, eventFlagId2, eventFlagId3, chrEntityId, textEffectParamId, bgmBossConvParamId, userDispLogParamId, logObjectId, entityId) {
    DisableNetworkSync();
    if (eventFlagId != 0) {
        EndIf(!EventFlag(eventFlagId));
    }
    EndIf(EventFlag(eventFlagId3));
    if (eventFlagId2 != 0) {
        WaitFor(EventFlag(eventFlagId2));
    }
    chrArea = CharacterAIState(chrEntityId, AIStateType.Combat, GreaterOrEqual, 1)
        && EntityInRadiusOfEntity(20000, chrEntityId, 30, 1);
    hp = CharacterRatioHPValue(chrEntityId) <= 0;
    WaitFor(chrArea || hp);
    if (hp.Passed) {
        WaitFixedTimeSeconds(5);
    } else {
        chrArea2 = (CharacterAIState(chrEntityId, AIStateType.Recognition, LessOrEqual, 0)
            && CharacterAIState(chrEntityId, AIStateType.Alert, LessOrEqual, 0)
            && CharacterAIState(chrEntityId, AIStateType.Combat, LessOrEqual, 0)
            && CharacterAIState(chrEntityId, AIStateType.PassiveAlert, LessOrEqual, 0)
            && CharacterAIState(chrEntityId, AIStateType.ActiveAlert, LessOrEqual, 0)
            && CharacterAIState(chrEntityId, AIStateType.WaitBeforeForget, LessOrEqual, 0))
            && !EntityInRadiusOfEntity(20000, chrEntityId, 30, 1);
        area = EntityInRadiusOfEntity(20000, chrEntityId, 100, 1);
        hp2 = CharacterRatioHPValue(chrEntityId) <= 0;
        WaitFor(chrArea2 || !area || hp2 || CharacterDead(20000));
        RestartIf(!hp2.Passed);
        WaitFixedTimeSeconds(5);
        PlaySE(chrEntityId, SoundType.SFX, 888880000);
        DisplayTextEffectId(textEffectParamId);
    }
L0:
    RecordUserDispLog(userDispLogParamId, entityId, LogObjectType.NpcName, logObjectId);
    IncrementTeamBossesKilled(1);
    if (BossBGMPlaying(bgmBossConvParamId)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
    }
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
    SetWorldMapPointFlag(2, ON);
    SetWorldMapPointFlag(8, OFF);
    EndEvent();
});

$Event(90015003, Default, function(spEffectId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, permanentBuffParamId, timeSeconds) {
    DisableNetworkSync();
    if (eventFlagId != 0) {
        flag |= EventFlag(eventFlagId);
    }
    if (eventFlagId2 != 0) {
        flag |= EventFlag(eventFlagId2);
    }
    EndIf(!flag);
    if (eventFlagId3 != 0) {
        flag2 &= EventFlag(eventFlagId3);
    }
    if (eventFlagId4 != 0) {
        flag2 &= EventFlag(eventFlagId4);
    }
    WaitFor(flag2);
    if (CharacterDead(20000)) {
        WaitFor(CharacterDead(20000, Equal, 0));
        WaitFor(ElapsedSeconds(3));
    }
    if (eventFlagId3 != 0) {
        flag3 &= EventFlag(eventFlagId3);
    }
    if (eventFlagId4 != 0) {
        flag3 &= EventFlag(eventFlagId4);
    }
    RestartIf(!flag3);
    if (!CharacterHasSpEffect(20000, spEffectId)) {
        SetSpEffect(20000, spEffectId);
        WaitFixedTimeSeconds(timeSeconds);
        DisplayNetworkconnectedPermanentBuffPopup(permanentBuffParamId);
    }
    WaitFor(!CharacterHasSpEffect(20000, spEffectId));
    RestartEvent();
});

$Event(90015004, Restart, function(assetEntityId, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(6011));
    WaitFor(BonfireUsable(assetEntityId) && EntityInRadiusOfEntity(10000, assetEntityId, 7, 1));
    SpawnOneshotSFX(TargetEntityType.Asset, assetEntityId, 200, 1000);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90015005, Default, function(assetEntityId, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    if (!EventFlag(eventFlagId2)) {
        WaitFor(EventFlag(eventFlagId2));
        IncrementTeamOpenedBonfires();
    }
L0:
    WaitFor(BonfireUsable(assetEntityId) && EntityInRadiusOfEntity(10000, assetEntityId, 7, 1));
    SpawnOneshotSFX(TargetEntityType.Asset, assetEntityId, 200, 1000);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90015006, Restart, function(assetEntityId, chrEntityId, eventFlagId, distance) {
    if (EventFlag(eventFlagId)) {
        ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 0);
        EnableCharacter(chrEntityId);
        RegisterBonfire(assetEntityId, 0, distance);
        EndEvent();
    }
    ChangeAssetEnableStateUnknown200510(assetEntityId, Disabled, 0);
    DisableCharacter(chrEntityId);
    WaitFor(EventFlag(eventFlagId));
    SpawnOneshotSFX(TargetEntityType.Asset, assetEntityId, 200, 1060);
    WaitFixedTimeSeconds(0.5);
    ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 1);
    EnableCharacter(chrEntityId);
    RegisterBonfire(assetEntityId, 0, distance);
});

$Event(90015007, Default, function(eventFlagId, chrEntityId, areaEntityId, targetDistance, nameId, bgmBossConvParamId, eventFlagId2) {
    DisableNetworkSync();
    if (eventFlagId != 0) {
        WaitFor(EventFlag(eventFlagId));
    }
    chrArea = CharacterAIState(chrEntityId, AIStateType.Combat, GreaterOrEqual, 1)
        && (InArea(20000, areaEntityId)
            || EntityInRadiusOfEntity(20000, chrEntityId, targetDistance, 1));
    chr = CharacterRatioDead(chrEntityId);
    chrAreaFlag |= chrArea || chr;
    if (eventFlagId2 != 0) {
        chrAreaFlag |= EventFlag(eventFlagId2);
    }
    WaitFor(chrAreaFlag);
    if (eventFlagId2 != 0) {
        EndIf(EventFlag(eventFlagId2));
    }
    SetWorldMapPointFlag(0, ON);
    SetWorldMapPointFlag(8, OFF);
    EndIf(chr.Passed);
    flag = !EventFlag(5000);
    flag2 = !EventFlag(5001);
    flag3 = flag || flag2;
    if (!flag3) {
        WaitFor(flag3);
        RestartEvent();
    }
    if (Signed(bgmBossConvParamId) != 0) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
    }
    WaitFixedTimeSeconds(1);
    if (flag.Passed) {
        SetEventFlagID(5000, ON);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
    } else if (flag2.Passed) {
        SetEventFlagID(5001, ON);
        DisplayBossHealthBar(Enabled, chrEntityId, 1, nameId);
    }
    LinkToBossHealthBar(Enabled, nameId, chrEntityId);
    chrArea2 = (CharacterAIState(chrEntityId, AIStateType.Recognition, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.Alert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.Combat, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.PassiveAlert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.ActiveAlert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.WaitBeforeForget, LessOrEqual, 0))
        && !InArea(20000, areaEntityId)
        && !EntityInRadiusOfEntity(20000, chrEntityId, targetDistance, 1);
    area = EntityInRadiusOfEntity(20000, chrEntityId, 100, 1);
    chr2 = CharacterRatioDead(chrEntityId);
    chr3 = CharacterDead(20000);
    chrAreaFlag2 |= chrArea2 || !area || chr2 || chr3;
    if (eventFlagId2 != 0) {
        chrAreaFlag2 |= EventFlag(eventFlagId2);
    }
    WaitFor(chrAreaFlag2);
    GotoIf(S0, eventFlagId2 == 0);
    GotoIf(L0, EventFlag(eventFlagId2));
S0:
    if (chr2.Passed) {
        WaitFixedTimeSeconds(5);
    } else {
        WaitFixedTimeSeconds(1);
    }
    GotoIf(S1, !chr3.Passed);
    WaitFixedTimeSeconds(2.5);
S1:
L0:
    if (Signed(bgmBossConvParamId) != 0) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
    }
    if (flag.Passed) {
        SetEventFlagID(5000, OFF);
        DisplayBossHealthBar(Disabled, chrEntityId, 0, nameId);
    } else if (flag2.Passed) {
        SetEventFlagID(5001, OFF);
        DisplayBossHealthBar(Disabled, chrEntityId, 1, nameId);
    }
    if (eventFlagId2 != 0) {
        EndIf(EventFlag(eventFlagId2));
    }
    EndIf(chr2.Passed);
    WaitFor(!CharacterDead(20000));
    RestartEvent();
});

$Event(90015008, Restart, function(eventFlagId, eventFlagId2, bgmBossConvParamId, chrEntityId, spEffectId, targetAmount) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId2));
    if (eventFlagId != 0) {
        WaitFor(EventFlag(eventFlagId));
    }
    if (Signed(0) != spEffectId) {
        spHp |= CharacterHasSpEffect(chrEntityId, spEffectId, GreaterOrEqual, 1);
    } else {
        spHp |= CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount;
    }
    WaitFor((spHp && BossBGMPlaying(bgmBossConvParamId)) || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId2));
    SetBossBGM(bgmBossConvParamId, BossBGMState.HeatUp);
    WaitFor(!BossBGMPlaying(bgmBossConvParamId) || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId2));
    RestartEvent();
});

$Event(90015009, Default, function(eventFlagId, entityId, mapVariationId, value) {
    if (Signed(value) != 0) {
        DisableNetworkSync();
    }
    EndIf(!IsMapVariation(mapVariationId));
    if (EventFlag(eventFlagId)) {
        ForceAnimationPlayback(entityId, 210, true, false, false);
        EndEvent();
    }
    ForceAnimationPlayback(entityId, 110, true, false, false);
    WaitFor(EventFlag(eventFlagId) || (Signed(value) == 2 && EventFlag(7509)));
    ForceAnimationPlayback(entityId, 200, false, true, false);
    ForceAnimationPlayback(entityId, 210, true, false, false);
});

$Event(90015010, Default, function(assetEntityId, eventFlagId, chrEntityId, dummypolyId, behaviorId, mapVariationId) {
    DisableNetworkSync();
    EndIf(!IsMapVariation(mapVariationId));
    if (EventFlag(eventFlagId)) {
        RequestAssetDestruction(assetEntityId, 0);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
L0:
    CreateBulletOwner(chrEntityId);
    WaitFor(
        EntityInRadiusOfEntity(assetEntityId, 20000, 2, 1)
            || HasDamageType(assetEntityId, 20000, DamageType.Any)
            || EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    RequestAssetDestruction(assetEntityId, 0);
    ShootBullet(chrEntityId, assetEntityId, dummypolyId, behaviorId, 0, 0, 0);
});

$Event(90015011, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    if (eventFlagId2 != 0) {
        EndIf(EventFlag(eventFlagId2));
    }
    if (eventFlagId != 0) {
        WaitFor(EventFlag(eventFlagId));
    }
    if (eventFlagId2 != 0) {
        EndIf(EventFlag(eventFlagId2));
    }
    WaitFor(PlayerIsInOwnWorld() || EventFlag(eventFlagId2));
    if (eventFlagId2 != 0) {
        EndIf(EventFlag(eventFlagId2));
    }
    SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
    WaitFor(!PlayerIsInOwnWorld() || EventFlag(eventFlagId2));
    if (eventFlagId2 != 0) {
        EndIf(EventFlag(eventFlagId2));
    }
    SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Normal);
    RestartEvent();
});

$Event(90015012, Default, function(chrEntityId, eventFlagId) {
    EndIf(CharacterHasSpEffect(chrEntityId, 7999, NotEqual, 0));
    WaitFor(EventFlag(eventFlagId));
    ActivateMultiplayerdependantBuffs(chrEntityId);
    SetSpEffect(chrEntityId, 7999);
});

$Event(90015013, Default, function() {
    EndIf(EventFlag(7811));
    if (EventFlag(7505)) {
        SetWorldMapPointFlag(0, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(7517));
    SetWorldMapPointFlag(0, ON);
});

$Event(90015014, Default, function(eventFlagId, eventFlagId2) {
    EndIf(!EventFlag(eventFlagId));
    if (EventFlag(7505)) {
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(7517));
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90015015, Restart, function(chrEntityId) {
    WaitFor(CharacterBackreadStatus(chrEntityId) && InArea(chrEntityId, 1043372850));
    SetSpEffect(chrEntityId, 7791);
});

$Event(90015016, Restart, function(chrEntityId) {
    WaitFor(CharacterBackreadStatus(chrEntityId) && InArea(chrEntityId, 1043372860));
    SetSpEffect(chrEntityId, 7790);
});

$Event(90015017, Default, function(chrEntityId, targetDistance, areaEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    if (EventFlag(eventFlagId)) {
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
        SetNetworkconnectedEventFlagID(eventFlagId3, ON);
    }
L0:
    if (!EventFlag(eventFlagId2)) {
        if (chrEntityId != 0) {
            areaChrFlag |= EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1)
                || CharacterAIState(chrEntityId, AIStateType.Combat, GreaterOrEqual, 1);
        }
        if (areaEntityId != 0) {
            areaChrFlag |= InArea(10000, areaEntityId);
        }
        areaChrFlag |= EventFlag(eventFlagId);
        WaitFor(areaChrFlag);
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    }
L1:
    WaitFor(EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
});

$Event(90015018, Restart, function(eventFlagId, eventFlagId2, bgmBossConvParamId, chrEntityId, spEffectId, targetAmount) {
    EndIf(EventFlag(eventFlagId2));
    if (!CharacterHasSpEffect(chrEntityId, 5108)) {
        if (eventFlagId != 0) {
            WaitFor(EventFlag(eventFlagId));
        }
        WaitFor(
            ((CharacterHasSpEffect(chrEntityId, spEffectId, GreaterOrEqual, 1)
                && CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount)
                && BossBGMPlaying(bgmBossConvParamId))
                || EventFlag(eventFlagId2));
        EndIf(EventFlag(eventFlagId2));
    }
    SetBossBGM(bgmBossConvParamId, BossBGMState.HeatUp);
    SetSpEffect(chrEntityId, 5108);
    WaitFor(!BossBGMPlaying(bgmBossConvParamId) || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId2));
    RestartEvent();
});

$Event(90015019, Restart, function(eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(ElapsedSeconds(1.5));
    SetSpEffect(20000, 99262);
    SetEventFlagID(eventFlagId2, ON);
});

$Event(90015020, Default, function(eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    if (!EventFlag(eventFlagId)) {
        WaitFor(EventFlag(eventFlagId));
        SetNetworkconnectedEventFlagID(7530, ON);
    }
L0:
    WaitFor(EventFlag(eventFlagId2));
    SetNetworkconnectedEventFlagID(7530, OFF);
});

$Event(90015021, Default, function(eventFlagId, chrEntityId, nameId, targetDistance, bgmBossConvParamId, eventFlagId2, eventFlagId3) {
    DisableNetworkSync();
    if (eventFlagId != 0) {
        WaitFor(EventFlag(eventFlagId));
    }
    chrArea = CharacterAIState(chrEntityId, AIStateType.Combat, GreaterOrEqual, 1)
        && EntityInRadiusOfEntity(20000, chrEntityId, targetDistance, 1)
        && !InArea(20000, 1043372980);
    chr = CharacterRatioDead(chrEntityId);
    chrAreaFlag |= chrArea || chr;
    if (eventFlagId2 != 0) {
        chrAreaFlag |= EventFlag(eventFlagId2);
    }
    WaitFor(chrAreaFlag);
    if (eventFlagId2 != 0) {
        EndIf(EventFlag(eventFlagId2));
    }
    if (eventFlagId3 != 0) {
        SetNetworkconnectedEventFlagID(eventFlagId3, OFF);
    }
    EndIf(chr.Passed);
    flag = !EventFlag(5000);
    flag2 = !EventFlag(5001);
    flag3 = flag || flag2;
    if (!flag3) {
        WaitFor(flag3);
        RestartEvent();
    }
    if (Signed(bgmBossConvParamId) != 0) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
    }
    WaitFixedTimeSeconds(1);
    if (flag.Passed) {
        SetEventFlagID(5000, ON);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
    } else if (flag2.Passed) {
        SetEventFlagID(5001, ON);
        DisplayBossHealthBar(Enabled, chrEntityId, 1, nameId);
    }
    LinkToBossHealthBar(Enabled, nameId, chrEntityId);
    chrArea2 = (CharacterAIState(chrEntityId, AIStateType.Recognition, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.Alert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.Combat, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.PassiveAlert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.ActiveAlert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.WaitBeforeForget, LessOrEqual, 0))
        && !EntityInRadiusOfEntity(20000, chrEntityId, targetDistance, 1);
    area = EntityInRadiusOfEntity(20000, chrEntityId, 100, 1);
    chr2 = CharacterRatioDead(chrEntityId);
    chr3 = CharacterDead(20000);
    chrAreaFlag2 |= chrArea2 || !area || InArea(20000, 1043372980) || chr2 || chr3;
    if (eventFlagId2 != 0) {
        chrAreaFlag2 |= EventFlag(eventFlagId2);
    }
    WaitFor(chrAreaFlag2);
    GotoIf(S0, eventFlagId2 == 0);
    GotoIf(L0, EventFlag(eventFlagId2));
S0:
    if (chr2.Passed) {
        WaitFixedTimeSeconds(5);
    } else {
        WaitFixedTimeSeconds(1);
    }
    GotoIf(S1, !chr3.Passed);
    WaitFixedTimeSeconds(2.5);
S1:
L0:
    if (Signed(bgmBossConvParamId) != 0) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
    }
    if (flag.Passed) {
        SetEventFlagID(5000, OFF);
        DisplayBossHealthBar(Disabled, chrEntityId, 0, nameId);
    } else if (flag2.Passed) {
        SetEventFlagID(5001, OFF);
        DisplayBossHealthBar(Disabled, chrEntityId, 1, nameId);
    }
    if (eventFlagId2 != 0) {
        EndIf(EventFlag(eventFlagId2));
    }
    EndIf(chr2.Passed);
    WaitFor(!CharacterDead(20000));
    RestartEvent();
});

$Event(90015022, Default, function(chrEntityId, eventFlagId) {
    DisableNetworkSync();
    WaitFor(EventFlag(eventFlagId));
    WaitFor(!CharacterHasSpEffect(chrEntityId, 7999, GreaterOrEqual, 1));
    ActivateMultiplayerdependantBuffs(chrEntityId);
    SetSpEffect(chrEntityId, 7999);
    RestartEvent();
});

$Event(90015023, Default, function(eventFlagId, targetDistance, eventFlagId2, chrEntityId, chrEntityId2, nameId, chrEntityId3, nameId2, chrEntityId4, nameId3) {
    DisableNetworkSync();
    if (eventFlagId != 0) {
        WaitFor(EventFlag(eventFlagId));
    }
    chrArea = CharacterAIState(chrEntityId, AIStateType.Combat, GreaterOrEqual, 1)
        && EntityInRadiusOfEntity(20000, chrEntityId, targetDistance, 1);
    chr = CharacterRatioDead(chrEntityId);
    chrAreaFlag |= chrArea || chr;
    if (eventFlagId2 != 0) {
        chrAreaFlag |= EventFlag(eventFlagId2);
    }
    WaitFor(chrAreaFlag);
    if (eventFlagId2 != 0) {
        EndIf(EventFlag(eventFlagId2));
    }
    SetWorldMapPointFlag(0, ON);
    SetWorldMapPointFlag(8, OFF);
    EndIf(chr.Passed);
    DisplayBossHealthBar(Disabled, 0, 0, 0);
    DisplayBossHealthBar(Disabled, 0, 1, 0);
    DisplayBossHealthBar(Disabled, 0, 2, 0);
    SetEventFlagID(5000, ON);
    SetEventFlagID(5001, ON);
    if (chrEntityId3 == 0) {
        DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
    } else if (chrEntityId4 == 0) {
        DisplayBossHealthBar(Enabled, chrEntityId2, 1, nameId);
        DisplayBossHealthBar(Enabled, chrEntityId3, 0, nameId2);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        LinkToBossHealthBar(Enabled, nameId2, chrEntityId3);
    } else {
        DisplayBossHealthBar(Enabled, chrEntityId2, 2, nameId);
        DisplayBossHealthBar(Enabled, chrEntityId3, 1, nameId2);
        DisplayBossHealthBar(Enabled, chrEntityId4, 0, nameId3);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        LinkToBossHealthBar(Enabled, nameId2, chrEntityId3);
        LinkToBossHealthBar(Enabled, nameId3, chrEntityId4);
        Goto(L0);
    }
L0:
    chrArea2 = (CharacterAIState(chrEntityId, AIStateType.Recognition, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.Alert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.Combat, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.PassiveAlert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.ActiveAlert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.WaitBeforeForget, LessOrEqual, 0))
        && !EntityInRadiusOfEntity(20000, chrEntityId, targetDistance, 1);
    area = EntityInRadiusOfEntity(20000, chrEntityId, 100, 1);
    chr2 = CharacterRatioDead(chrEntityId);
    chr3 = CharacterDead(20000);
    chrAreaFlag2 |= chrArea2 || !area || InArea(20000, 1043372980) || chr2 || chr3;
    if (eventFlagId2 != 0) {
        chrAreaFlag2 |= EventFlag(eventFlagId2);
    }
    WaitFor(chrAreaFlag2);
    GotoIf(S0, eventFlagId2 == 0);
    GotoIf(L1, EventFlag(eventFlagId2));
S0:
    if (chr2.Passed) {
        WaitFixedTimeSeconds(5);
    } else {
        WaitFixedTimeSeconds(1);
    }
    GotoIf(S1, !chr3.Passed);
    WaitFixedTimeSeconds(2.5);
S1:
L1:
    SetEventFlagID(5000, OFF);
    SetEventFlagID(5001, OFF);
    if (chrEntityId3 == 0) {
        DisplayBossHealthBar(Disabled, chrEntityId2, 0, nameId);
    } else if (chrEntityId4 == 0) {
        DisplayBossHealthBar(Disabled, chrEntityId2, 1, nameId);
        DisplayBossHealthBar(Disabled, chrEntityId3, 0, nameId2);
    } else {
        DisplayBossHealthBar(Disabled, chrEntityId2, 2, nameId);
        DisplayBossHealthBar(Disabled, chrEntityId3, 1, nameId2);
        DisplayBossHealthBar(Disabled, chrEntityId4, 0, nameId3);
        Goto(L2);
    }
L2:
    if (eventFlagId2 != 0) {
        EndIf(EventFlag(eventFlagId2));
    }
    EndIf(chr2.Passed);
    WaitFor(!CharacterDead(20000));
    RestartEvent();
});

$Event(90015024, Default, function(spEffectId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, permanentBuffParamId, timeSeconds) {
    DisableNetworkSync();
    if (eventFlagId != 0) {
        flag |= EventFlag(eventFlagId);
    }
    if (eventFlagId2 != 0) {
        flag |= EventFlag(eventFlagId2);
    }
    EndIf(!flag);
    EndIf(EventFlag(eventFlagId5));
    if (eventFlagId3 != 0) {
        flag2 &= EventFlag(eventFlagId3);
    }
    if (eventFlagId4 != 0) {
        flag2 &= EventFlag(eventFlagId4);
    }
    WaitFor(flag2);
    if (CharacterDead(20000)) {
        WaitFor(CharacterDead(20000, Equal, 0));
        WaitFor(ElapsedSeconds(3));
    }
    if (eventFlagId3 != 0) {
        flag3 &= EventFlag(eventFlagId3);
    }
    if (eventFlagId4 != 0) {
        flag3 &= EventFlag(eventFlagId4);
    }
    RestartIf(!flag3);
    EndIf(EventFlag(eventFlagId5));
    SetEventFlagID(eventFlagId5, ON);
    SetSpEffect(20000, spEffectId);
    WaitFixedTimeSeconds(timeSeconds);
    DisplayNetworkconnectedPermanentBuffPopup(permanentBuffParamId);
    WaitFor(!EventFlag(eventFlagId5));
    RestartEvent();
});

$Event(90015025, Default, function(eventFlagId, eventFlagId2, eventFlagId3, chrEntityId, textEffectParamId, bgmBossConvParamId, userDispLogParamId, logObjectId, entityId, flagIndex) {
    DisableNetworkSync();
    if (eventFlagId != 0) {
        EndIf(!EventFlag(eventFlagId));
    }
    EndIf(EventFlag(eventFlagId3));
    if (eventFlagId2 != 0) {
        WaitFor(EventFlag(eventFlagId2));
    }
    chrArea = CharacterAIState(chrEntityId, AIStateType.Combat, GreaterOrEqual, 1)
        && EntityInRadiusOfEntity(20000, chrEntityId, 30, 1);
    hp = CharacterRatioHPValue(chrEntityId) <= 0;
    WaitFor(chrArea || hp);
    if (hp.Passed) {
        WaitFixedTimeSeconds(5);
    } else {
        chrArea2 = (CharacterAIState(chrEntityId, AIStateType.Recognition, LessOrEqual, 0)
            && CharacterAIState(chrEntityId, AIStateType.Alert, LessOrEqual, 0)
            && CharacterAIState(chrEntityId, AIStateType.Combat, LessOrEqual, 0)
            && CharacterAIState(chrEntityId, AIStateType.PassiveAlert, LessOrEqual, 0)
            && CharacterAIState(chrEntityId, AIStateType.ActiveAlert, LessOrEqual, 0)
            && CharacterAIState(chrEntityId, AIStateType.WaitBeforeForget, LessOrEqual, 0))
            && !EntityInRadiusOfEntity(20000, chrEntityId, 30, 1);
        area = EntityInRadiusOfEntity(20000, chrEntityId, 100, 1);
        hp2 = CharacterRatioHPValue(chrEntityId) <= 0;
        WaitFor(chrArea2 || !area || hp2 || CharacterDead(20000));
        RestartIf(!hp2.Passed);
        WaitFixedTimeSeconds(5);
        PlaySE(chrEntityId, SoundType.SFX, 888880000);
        DisplayTextEffectId(textEffectParamId);
    }
L0:
    RecordUserDispLog(userDispLogParamId, entityId, LogObjectType.NpcName, logObjectId);
    IncrementTeamBossesKilled(1);
    if (BossBGMPlaying(bgmBossConvParamId)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
    }
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
    SetWorldMapPointFlag(flagIndex, ON);
    SetWorldMapPointFlag(8, OFF);
    EndEvent();
});

$Event(90015026, Default, function(eventFlagId, targetDistance, eventFlagId2, chrEntityId, chrEntityId2, nameId) {
    DisableNetworkSync();
    if (eventFlagId != 0) {
        WaitFor(EventFlag(eventFlagId));
    }
    chrArea = CharacterAIState(chrEntityId, AIStateType.Combat, GreaterOrEqual, 1)
        && EntityInRadiusOfEntity(20000, chrEntityId, targetDistance, 1);
    chr = CharacterRatioDead(chrEntityId);
    chrAreaFlag |= chrArea || chr;
    if (eventFlagId2 != 0) {
        chrAreaFlag |= EventFlag(eventFlagId2);
    }
    if (eventFlagId != 0) {
        chrAreaFlag |= !EventFlag(eventFlagId);
    }
    WaitFor(chrAreaFlag);
    if (eventFlagId2 != 0) {
        EndIf(EventFlag(eventFlagId2));
    }
    if (eventFlagId != 0) {
        RestartIf(!EventFlag(eventFlagId));
    }
    EndIf(chr.Passed);
    DisplayBossHealthBar(Enabled, chrEntityId2, 1, nameId);
    LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
    chrArea2 = (CharacterAIState(chrEntityId, AIStateType.Recognition, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.Alert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.Combat, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.PassiveAlert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.ActiveAlert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.WaitBeforeForget, LessOrEqual, 0))
        && !EntityInRadiusOfEntity(20000, chrEntityId, targetDistance, 1);
    area = EntityInRadiusOfEntity(20000, chrEntityId, 100, 1);
    chr2 = CharacterRatioDead(chrEntityId);
    chr3 = CharacterDead(20000);
    chrAreaFlag2 |= chrArea2 || !area || InArea(20000, 1043372980) || chr2 || chr3;
    if (eventFlagId2 != 0) {
        chrAreaFlag2 |= EventFlag(eventFlagId2);
    }
    if (eventFlagId != 0) {
        chrAreaFlag2 |= !EventFlag(eventFlagId);
    }
    WaitFor(chrAreaFlag2);
    GotoIf(S0, eventFlagId2 == 0);
    GotoIf(L1, EventFlag(eventFlagId2));
S0:
    GotoIf(S1, eventFlagId == 0);
    GotoIf(L1, !EventFlag(eventFlagId));
S1:
    if (chr2.Passed) {
        WaitFixedTimeSeconds(5);
    } else {
        WaitFixedTimeSeconds(1);
    }
    GotoIf(S2, !chr3.Passed);
    WaitFixedTimeSeconds(2.5);
S2:
L1:
    DisplayBossHealthBar(Disabled, chrEntityId2, 1, nameId);
    if (eventFlagId != 0) {
        RestartIf(!EventFlag(eventFlagId));
    }
    if (eventFlagId2 != 0) {
        EndIf(EventFlag(eventFlagId2));
    }
    EndIf(chr2.Passed);
    WaitFor(!CharacterDead(20000));
    RestartEvent();
});

$Event(90015030, Restart, function(eventFlagId, chrEntityId, targetDistance, bgmBossConvParamId, eventFlagId2) {
    DisableNetworkSync();
    if (eventFlagId != 0) {
        WaitFor(EventFlag(eventFlagId));
    }
    chrAreaBgm = CharacterAIState(chrEntityId, AIStateType.Combat, GreaterOrEqual, 1)
        && EntityInRadiusOfEntity(20000, chrEntityId, targetDistance, 1)
        && CompareBossBGMPriority(LessOrEqual, bgmBossConvParamId);
    chr = CharacterRatioDead(chrEntityId);
    chrAreaBgmFlag |= chrAreaBgm || chr;
    if (eventFlagId2 != 0) {
        chrAreaBgmFlag |= EventFlag(eventFlagId2);
    }
    WaitFor(chrAreaBgmFlag);
    EndIf(chr.Passed);
    if (eventFlagId2 != 0) {
        EndIf(EventFlag(eventFlagId2));
    }
    SetBossBGM(bgmBossConvParamId, BossBGMState.Start);  
    WaitFixedTimeFrames(1);
    chrArea = (CharacterAIState(chrEntityId, AIStateType.Recognition, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.Alert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.Combat, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.PassiveAlert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.ActiveAlert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.WaitBeforeForget, LessOrEqual, 0))
        && !EntityInRadiusOfEntity(20000, chrEntityId, targetDistance, 1);
    area = EntityInRadiusOfEntity(20000, chrEntityId, 100, 1);
    chr2 = CharacterRatioDead(chrEntityId);
    chr3 = CharacterDead(20000);
    chrAreaFlagBgm |= chrArea || !area || chr2 || chr3;
    if (eventFlagId2 != 0) {
        chrAreaFlagBgm |= EventFlag(eventFlagId2);
    }
    chrAreaFlagBgm |= !BossBGMPlaying(bgmBossConvParamId);
    WaitFor(chrAreaFlagBgm);
    if (chr2.Passed) {
        WaitFixedTimeSeconds(5);
        if (BossBGMPlaying(bgmBossConvParamId)) {
            SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
        }
        EndEvent();
    }
    if (eventFlagId2 != 0) {
        if (EventFlag(eventFlagId2)) {
            if (BossBGMPlaying(bgmBossConvParamId)) {
                SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
            }
            EndEvent();
        }
    }
    WaitFixedTimeSeconds(1);
    if (chr3.Passed) {
        WaitFixedTimeSeconds(2.5);
    }
    if (BossBGMPlaying(bgmBossConvParamId)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
    }
    WaitFixedTimeFrames(1);
    WaitFor(!CharacterDead(20000));
    WaitFor(CompareBossBGMPriority(Less, bgmBossConvParamId));
    RestartEvent();
});

$Event(90015031, Default, function(eventFlagId, chrEntityId, areaEntityId, targetDistance, bgmBossConvParamId, eventFlagId2) {
    DisableNetworkSync();
    if (eventFlagId != 0) {
        WaitFor(EventFlag(eventFlagId));
    }
    chrAreaBgm = CharacterAIState(chrEntityId, AIStateType.Combat, GreaterOrEqual, 1)
        && (InArea(20000, areaEntityId)
            || EntityInRadiusOfEntity(20000, chrEntityId, targetDistance, 1))
        && CompareBossBGMPriority(LessOrEqual, bgmBossConvParamId);
    chr = CharacterRatioDead(chrEntityId);
    chrAreaBgmFlag |= chrAreaBgm || chr;
    if (eventFlagId2 != 0) {
        chrAreaBgmFlag |= EventFlag(eventFlagId2);
    }
    WaitFor(chrAreaBgmFlag);
    EndIf(chr.Passed);
    if (eventFlagId2 != 0) {
        EndIf(EventFlag(eventFlagId2));
    }
    SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
    WaitFixedTimeFrames(1);
    chrArea = (CharacterAIState(chrEntityId, AIStateType.Recognition, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.Alert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.Combat, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.PassiveAlert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.ActiveAlert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId, AIStateType.WaitBeforeForget, LessOrEqual, 0))
        && !InArea(20000, areaEntityId)
        && !EntityInRadiusOfEntity(20000, chrEntityId, targetDistance, 1);
    area = EntityInRadiusOfEntity(20000, chrEntityId, 100, 1);
    chr2 = CharacterRatioDead(chrEntityId);
    chr3 = CharacterDead(20000);
    chrAreaFlagBgm |= chrArea || !area || chr2 || chr3;
    if (eventFlagId2 != 0) {
        chrAreaFlagBgm |= EventFlag(eventFlagId2);
    }
    chrAreaFlagBgm |= !BossBGMPlaying(bgmBossConvParamId);
    WaitFor(chrAreaFlagBgm);
    if (chr2.Passed) {
        WaitFixedTimeSeconds(5);
        if (BossBGMPlaying(bgmBossConvParamId)) {
            SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
        }
        EndEvent();
    }
    if (eventFlagId2 != 0) {
        if (EventFlag(eventFlagId2)) {
            if (BossBGMPlaying(bgmBossConvParamId)) {
                SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
            }
            EndEvent();
        }
    }
    WaitFixedTimeSeconds(1);
    if (chr3.Passed) {
        WaitFixedTimeSeconds(2.5);
    }
    if (BossBGMPlaying(bgmBossConvParamId)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
    }
    WaitFixedTimeFrames(1);
    WaitFor(!CharacterDead(20000));
    WaitFor(CompareBossBGMPriority(Less, bgmBossConvParamId));
    RestartEvent();
});

$Event(90015040, Default, function(mutationId) {
    EndIf(!HasEnemyMutation(mutationId, 0, 0));
    SetWorldMapPointFlag(6, ON);
});

$Event(90015041, Default, function(mutationId, unknown, unknown2, eventFlagId) {
    EndIf(!HasEnemyMutation(mutationId, unknown, unknown2));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90015042, Default, function(mutationId, eventFlagId) {
    EndIf(!HasEnemyMutation(mutationId, 0, 0));
    WaitFor(EventFlag(eventFlagId));
    SetWorldMapPointFlag(7, ON);
});

$Event(90015050, Default, function(eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    IncrementNetworkconnectedEventValue(eventFlagId2, 4, 10);
});

$Event(90015060, Restart, function(areaEntityId) {
    DisableNetworkSync();
    WaitFor(InArea(20000, areaEntityId));
    SetSpEffect(20000, 16166);
    WaitFor(!InArea(20000, areaEntityId));
    SetSpEffect(20000, 16167);
    RestartEvent();
});

$Event(90015070, Default, function(attachPointEntityId, mapId, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(SmallBaseAttached(attachPointEntityId, mapId) && IsMapVariation(2));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90015071, Restart, function(chrEntityId) {
    WaitFor(CharacterBackreadStatus(chrEntityId) && InArea(chrEntityId, 1039402650));
    SetSpEffect(chrEntityId, 7796);
});

$Event(90015100, Restart, function(eventFlagId, eventFlagId2, spEffectId, eventFlagId3) {
    DisableNetworkSync();
    EndIf(!EventFlag(eventFlagId));
    SetEventFlagID(eventFlagId2, ON);
    WaitFor(CharacterHasSpEffect(20000, spEffectId));
    SetEventFlagID(eventFlagId3, ON);
});

$Event(90015140, Restart, function(assetEntityId, objactParamId, eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    DisableObjAct(assetEntityId, objactParamId);
    WaitFor(EventFlag(eventFlagId) && AssetBackread(assetEntityId));
    EnableAsset(assetEntityId);
    if (EventFlag(eventFlagId2)) {
        WaitFixedTimeSeconds(1);
        DisableAsset(assetEntityId);
        WaitFixedTimeFrames(3);
        DisableObjAct(assetEntityId, objactParamId);
        EnableAsset(assetEntityId);
        ForceAnimationPlayback(assetEntityId, 1, true, false, false);
        EndEvent();
    }
L0:
    EnableObjAct(assetEntityId, objactParamId);
});

$Event(90015150, Restart, function(chrEntityId, eventFlagId) {
    DisableNetworkSync();
    if (RandomAppearLot(chrEntityId)) {
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
        WaitFor(!RandomAppearLot(chrEntityId));
        SetNetworkconnectedEventFlagID(eventFlagId, OFF);
    }
    WaitFor(RandomAppearLot(chrEntityId));
    RestartEvent();
});

$Event(90015151, Restart, function(chrEntityId, eventFlagId) {
    EndIf(!RandomAppearLot(chrEntityId));
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        !CharacterHasSpEffect(chrEntityId, 12597)
            || CharacterDead(chrEntityId)
            || EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90015152, Restart, function(chrEntityId, eventFlagId) {
    EndIf(!RandomAppearLot(chrEntityId));
    if (EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId);
    }
});

$Event(90015160, Default, function(chrEntityId, eventFlagId) {
    EndIf(!RandomAppearLot(chrEntityId));
    if (EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (EventFlag(8110)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (PlayAreaCurrentTimeInRange(0, 0, 0, 22, 59, 59)) {
        EnableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, false);
        EnableCharacterImmortality(chrEntityId);
        ForceAnimationPlayback(chrEntityId, 0, true, false, false);
        Goto(L0);
    }
    if (PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, false);
        EnableCharacterImmortality(chrEntityId);
        ForceAnimationPlayback(chrEntityId, 30016, true, false, false);
    } else {
        EnableCharacterImmortality(chrEntityId);
L0:
        WaitFor(PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59) || EventFlag(8105));
        EndIf(EventFlag(8105));
        ForceAnimationPlayback(chrEntityId, 20015, false, false, false);
        WaitFor(ElapsedSeconds(2));
        ForceAnimationPlayback(chrEntityId, 30016, true, false, false);
        DisableCharacter(chrEntityId);
        if (EventFlag(7505)) {
            SetCharacterBackreadState(chrEntityId, true);
            SetNetworkconnectedEventFlagID(8110, ON);
            EndEvent();
        }
    }
L1:
    WaitFor(PlayAreaCurrentTimeInRange(0, 0, 0, 22, 59, 59) || EventFlag(8105));
    EndIf(EventFlag(8105));
    EnableCharacter(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20016, false, false, false);
    WaitFor(ElapsedSeconds(2));
    ForceAnimationPlayback(chrEntityId, 0, true, false, false);
    RestartEvent();
});

$Event(90015161, Restart, function(chrEntityId, eventFlagId) {
    DisableNetworkSync();
    EndIf(!RandomAppearLot(chrEntityId));
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        HasDamageType(chrEntityId, 20000, DamageType.Any)
            || EventFlag(19004790)
            || EventFlag(eventFlagId)
            || EventFlag(8105));
    SetEventFlagID(19004790, ON);
    WaitFixedTimeFrames(1);
    WaitFor(
        HasDamageType(chrEntityId, 20000, DamageType.Any)
            || HPRatio(chrEntityId) < 0.7
            || EventFlag(19004791)
            || EventFlag(eventFlagId)
            || EventFlag(8105));
    SetEventFlagID(19004791, ON);
    WaitFixedTimeFrames(1);
    WaitFor(
        HasDamageType(chrEntityId, 20000, DamageType.Any)
            || HPRatio(chrEntityId) < 0.7
            || EventFlag(eventFlagId)
            || EventFlag(8105));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetNetworkconnectedEventFlagID(8105, ON);
});

$Event(90015162, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    EndIf(!RandomAppearLot(chrEntityId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    DisableCharacterHPBarDisplay(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20011, false, true, false);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
});

$Event(90015163, Default, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(!RandomAppearLot(chrEntityId));
    if (EventFlag(eventFlagId3)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (EventFlag(8110)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        SetCharacterBackreadState(chrEntityId, false);
        EnableCharacter(chrEntityId);
        EndEvent();
    }
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    WaitFor(EventFlag(eventFlagId));
    WaitFixedTimeSeconds(3.17);
    EnableCharacter(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20011, false, true, false);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
L0:
    WaitFor(PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59) || CharacterHPValue(chrEntityId) == 0);
    EndIf(CharacterHPValue(chrEntityId) == 0);
    SetSpEffect(chrEntityId, 45831);
    WaitFor(CharacterHasSpEffect(chrEntityId, 45832) || ElapsedSeconds(9));
    WaitFor(ElapsedSeconds(1));
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    SetNetworkconnectedEventFlagID(8110, ON);
    SetWorldMapPointFlag(0, OFF);
});

$Event(90015164, Default, function(chrEntityId, eventFlagId) {
    EndIf(!RandomAppearLot(chrEntityId));
    if (EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    WaitFor(
        !EventFlag(eventFlagId)
            && CharacterBackreadStatus(chrEntityId)
            && PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59));
    ForceAnimationPlayback(chrEntityId, 20015, false, false, false);
    WaitFor(ElapsedSeconds(2));
    ForceAnimationPlayback(chrEntityId, 30016, true, false, false);
    DisableCharacter(chrEntityId);
    WaitFor(
        !EventFlag(eventFlagId)
            && CharacterBackreadStatus(chrEntityId)
            && !PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59));
    EnableCharacter(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20016, false, false, false);
    WaitFor(ElapsedSeconds(2));
    ForceAnimationPlayback(chrEntityId, 0, true, false, false);
    RestartEvent();
});

$Event(90015199, Default, function(chrEntityId) {
    EndIf(EventFlag(7603));
    WaitFor(
        InArea(chrEntityId, 1045392989)
            || InArea(chrEntityId, 1045392988)
            || InArea(chrEntityId, 1044362996)
            || InArea(chrEntityId, 1045382998)
            || InArea(chrEntityId, 1045382997)
            || InArea(chrEntityId, 1045362996)
            || InArea(chrEntityId, 1045362995)
            || InArea(chrEntityId, 1045362994));
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
});

$Event(90015200, Default, function(eventFlagId, mapVariationId) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId));
    EndIf(!IsMapVariation(mapVariationId));
    WaitFor(EventFlag(7512));
    SetEventFlagID(eventFlagId, ON);
});

$Event(90015201, Default, function(eventFlagId, mapVariationId, value) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId));
    EndIf(!IsMapVariation(mapVariationId));
    flag = !EventFlag(150) && !EventFlag(170);
    flag2 = !EventFlag(151) && !EventFlag(171);
    flag3 = !EventFlag(152) && !EventFlag(172);
    flag4 = !EventFlag(153) && !EventFlag(173);
    flag5 = !EventFlag(154) && !EventFlag(174);
    flag6 = !EventFlag(155) && !EventFlag(175);
    flag7 = !EventFlag(156) && !EventFlag(176);
    if (value != 150) {
        EndIf(flag);
    }
    if (value != 151) {
        EndIf(flag2);
    }
    if (value != 152) {
        EndIf(flag3);
    }
    if (value != 153) {
        EndIf(flag4);
    }
    if (value != 154) {
        EndIf(flag5);
    }
    if (value != 155) {
        EndIf(flag6);
    }
    if (value != 156) {
        EndIf(flag7);
    }
    if (value != 160) {
        EndIf(!EventFlag(160));
    }
    WaitFor(EventFlag(7512));
    WaitFixedTimeFrames(1);
    SetEventFlagID(eventFlagId, ON);
});

$Event(90015202, Default, function(eventFlagId, eventFlagId2, eventFlagId3) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId3));
    SetEventFlagID(eventFlagId, ON);
    SetEventFlagID(eventFlagId2, ON);
});

$Event(90015203, Default, function(eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId));
    if (eventFlagId2 != 9193) {
        EndIf(!EventFlag(6210));
    }
    if (eventFlagId2 != 9194) {
        EndIf(!EventFlag(6211));
    }
    if (eventFlagId2 != 9192) {
        EndIf(!EventFlag(6212));
    }
    if (eventFlagId2 != 9191) {
        EndIf(!EventFlag(6213));
    }
    WaitFor(EventFlag(eventFlagId2));
    WaitFixedTimeFrames(1);
    SetEventFlagID(eventFlagId, ON);
});

$Event(90015204, Default, function(eventFlagId, hero) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId));
    EndIf(!IsHero(hero));
    WaitFor(EventFlag(7512));
    SetEventFlagID(eventFlagId, ON);
});

$Event(90015205, Default, function(eventFlagId, value, hero) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId));
    EndIf(!IsHero(hero));
    if (value != 6200) {
        EndIf(!EventFlag(6200));
    }
    if (value != 6201) {
        EndIf(!EventFlag(6201));
    }
    if (value != 6202) {
        EndIf(!EventFlag(6202));
    }
    if (value != 6203) {
        EndIf(!EventFlag(6203));
    }
    if (value != 6204) {
        EndIf(!EventFlag(6204));
    }
    if (value != 6205) {
        EndIf(!EventFlag(6205));
    }
    if (value != 6206) {
        EndIf(!EventFlag(6206));
    }
    if (value != 6207) {
        EndIf(!EventFlag(6207));
    }
    WaitFor(EventFlag(7512));
    SetEventFlagID(eventFlagId, ON);
});

$Event(90015206, Default, function(eventFlagId) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId));
    EndIf(!IsGameMode(2));
    WaitFor(PlayersSoulLevel() >= 15);
    SetEventFlagID(eventFlagId, ON);
});

$Event(90015207, Default, function(eventFlagId, eventFlagId2, eventFlagId3) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId));
    EndIf(!IsGameMode(2));
    StoreItemAmountHeldInEventValue(ItemType.Goods, 1001, eventFlagId3, 4);
    if (EventValue(eventFlagId3, 4) < 7) {
        WaitFor(EventFlag(eventFlagId2));
        WaitFixedTimeFrames(1);
        SetEventFlagID(eventFlagId2, OFF);
        RestartEvent();
    }
L0:
    SetEventFlagID(eventFlagId, ON);
});

$Event(90015208, Default, function(eventFlagId, eventFlagId2, eventFlagId3) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId));
    EndIf(!IsGameMode(2));
    WaitFor(EventFlag(eventFlagId2));
    SetEventFlagID(eventFlagId3, ON);
});

$Event(90015209, Default, function(eventFlagId) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId));
    EndIf(!IsGameMode(2));
    WaitFor(TeamBossesKilled() >= 10);
    SetEventFlagID(eventFlagId, ON);
});

$Event(90015211, Default, function(eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId));
    EndIf(!IsGameMode(2));
    WaitFor(EventFlag(eventFlagId2));
    SetEventFlagID(eventFlagId, ON);
});

$Event(90015212, Default, function(eventFlagId, eventFlagId2, eventFlagId3) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId));
    EndIf(!IsGameMode(2));
    EndIf(!EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId3));
    SetEventFlagID(eventFlagId, ON);
});

$Event(90015300, Default, function(chrEntityId, chrEntityId2, areaEntityId, eventFlagId, eventFlagId2, eventFlagId3, value) {
    if (!IsHotSpot()) {
        DisableCharacter(chrEntityId);
        DisableCharacter(chrEntityId2);
        SetCharacterBackreadState(chrEntityId, true);
        SetCharacterBackreadState(chrEntityId2, true);
        EndEvent();
    }
    if (EventFlag(eventFlagId)) {
        if (EventFlag(eventFlagId2)) {
            EnableCharacter(chrEntityId);
        }
        if (!EventFlag(eventFlagId2)) {
            DisableCharacter(chrEntityId);
        }
        if (value == 2) {
            if (EventFlag(eventFlagId3)) {
                EnableCharacter(chrEntityId2);
            }
            if (!EventFlag(eventFlagId3)) {
                DisableCharacter(chrEntityId2);
            }
            EndEvent();
        }
    }
    DisableCharacter(chrEntityId);
    DisableCharacter(chrEntityId2);
    WaitFor(InArea(20000, areaEntityId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    if (CharacterHasSpEffect(chrEntityId, 4450)) {
        EnableCharacter(chrEntityId);
        ForceAnimationPlayback(chrEntityId, 63020, false, false, false);
    }
    if (value == 2) {
        if (CharacterHasSpEffect(chrEntityId2, 4450)) {
            EnableCharacter(chrEntityId2);
            ForceAnimationPlayback(chrEntityId2, 63020, false, false, false);
        }
    }
    WaitFor(ElapsedSeconds(5));
    RecordUserDispLog(11210, areaEntityId, LogObjectType.None, -1);
});

$Event(90015310, Default, function(chrEntityId, chrEntityId2, value, eventFlagId, eventFlagId2, eventFlagId3, areaEntityId, entityId, entityId2, areaEntityId2, entityId3, entityId4, areaEntityId3, entityId5, entityId6, areaEntityId4, entityId7, entityId8, areaEntityId5) {
    if (!IsHotSpot()) {
        DisableCharacter(chrEntityId);
        DisableCharacter(chrEntityId2);
        SetCharacterBackreadState(chrEntityId, true);
        SetCharacterBackreadState(chrEntityId2, true);
        EndEvent();
    }
    if (EventFlag(eventFlagId)) {
        if (EventFlag(eventFlagId2)) {
            DisableCharacter(chrEntityId);
            SetCharacterBackreadState(chrEntityId, true);
        }
        if (!EventFlag(eventFlagId2)) {
            EnableCharacter(chrEntityId);
        }
        if (value == 2) {
            if (EventFlag(eventFlagId3)) {
                DisableCharacter(chrEntityId2);
                SetCharacterBackreadState(chrEntityId2, true);
            }
            if (!EventFlag(eventFlagId3)) {
                EnableCharacter(chrEntityId2);
            }
        }
        EndEvent();
    }
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    DisableCharacter(chrEntityId2);
    DisableCharacterCollision(chrEntityId2);
    if (areaEntityId != 0) {
        area = InArea(10000, areaEntityId);
        areaFlag |= area;
    }
    if (areaEntityId2 != 0) {
        area2 = InArea(10000, areaEntityId2);
        areaFlag |= area2;
    }
    if (areaEntityId3 != 0) {
        area3 = InArea(10000, areaEntityId3);
        areaFlag |= area3;
    }
    if (areaEntityId4 != 0) {
        area4 = InArea(10000, areaEntityId4);
        areaFlag |= area4;
    }
    areaFlag |= InArea(10000, areaEntityId5) || EventFlag(eventFlagId);
    WaitFor(areaFlag);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    if (areaEntityId != 0) {
        GotoIf(S0, !area.Passed);
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId, TargetEntityType.Area, entityId, -1, chrEntityId, -1, -1);
        if (value == 2) {
            WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Area, entityId2, -1, chrEntityId2, -1, -1);
        }
    } else {
S0:
        if (areaEntityId2 != 0) {
            if (area2.Passed) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId, TargetEntityType.Area, entityId3, -1, chrEntityId, -1, -1);
                if (value == 2) {
                    WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Area, entityId4, -1, chrEntityId2, -1, -1);
                }
                Goto(L0);
            }
        }
        if (areaEntityId3 != 0) {
            if (area3.Passed) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId, TargetEntityType.Area, entityId5, -1, chrEntityId, -1, -1);
                if (value == 2) {
                    WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Area, entityId6, -1, chrEntityId2, -1, -1);
                }
                Goto(L0);
            }
        }
        if (areaEntityId4 != 0) {
            if (area4.Passed) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId, TargetEntityType.Area, entityId7, -1, chrEntityId, -1, -1);
                if (value == 2) {
                    WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Area, entityId8, -1, chrEntityId2, -1, -1);
                }
                Goto(L0);
            }
        }
    }
L0:
    if (CharacterHasSpEffect(chrEntityId, 4450)) {
        EnableCharacter(chrEntityId);
        EnableCharacterCollision(chrEntityId);
        ForceAnimationPlayback(chrEntityId, 63020, false, false, false);
    }
    if (value == 2) {
        if (CharacterHasSpEffect(chrEntityId2, 4450)) {
            EnableCharacter(chrEntityId2);
            EnableCharacterCollision(chrEntityId2);
            ForceAnimationPlayback(chrEntityId2, 63020, false, false, false);
        }
    }
    WaitFor(ElapsedSeconds(5));
    RecordUserDispLog(11210, 0, LogObjectType.None, -1);
});

$Event(90015301, Default, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, value) {
    DisableNetworkSync();
    EndIf(!IsHotSpot());
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    chrArea = CharacterAIState(chrEntityId, AIStateType.Combat, GreaterOrEqual, 1)
        && EntityInRadiusOfEntity(20000, chrEntityId, 30, 1);
    flagCmp = EventFlag(eventFlagId3) && (value == 1 || EventFlag(eventFlagId4));
    WaitFor(chrArea || flagCmp);
    if (flagCmp.Passed) {
        WaitFixedTimeSeconds(1);
    } else {
        chrArea2 = (CharacterAIState(chrEntityId, AIStateType.Recognition, LessOrEqual, 0)
            && CharacterAIState(chrEntityId, AIStateType.Alert, LessOrEqual, 0)
            && CharacterAIState(chrEntityId, AIStateType.Combat, LessOrEqual, 0)
            && CharacterAIState(chrEntityId, AIStateType.PassiveAlert, LessOrEqual, 0)
            && CharacterAIState(chrEntityId, AIStateType.ActiveAlert, LessOrEqual, 0)
            && CharacterAIState(chrEntityId, AIStateType.WaitBeforeForget, LessOrEqual, 0))
            && !EntityInRadiusOfEntity(20000, chrEntityId, 30, 1);
        area = EntityInRadiusOfEntity(20000, chrEntityId, 100, 1);
        flagCmp2 = EventFlag(eventFlagId3) && (value == 1 || EventFlag(eventFlagId4));
        WaitFor(chrArea2 || !area || flagCmp2 || CharacterDead(20000));
        RestartIf(!flagCmp2.Passed);
        WaitFixedTimeSeconds(1);
        DisplayTextEffectId(1100);
    }
L0:
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    EndEvent();
});

$Event(90015302, Default, function(assetEntityId) {
    if (!IsHotSpot()) {
        DisableAsset(assetEntityId);
        EndEvent();
    }
    EnableAsset(assetEntityId);
});

$Event(90015303, Default, function(areaEntityId) {
    DisableNetworkSync();
    EndIf(!IsHotSpot());
    WaitFor(InArea(20000, areaEntityId));
    SetEventFlagID(9025, ON);
    ActivateGparamUnknown201213(0, 3);
    WaitFor(!InArea(20000, areaEntityId) || !EventFlag(9025));
    SetEventFlagID(9025, OFF);
    DeactivateGparamUnknown201214(3);
    RestartEvent();
});

$Event(90015304, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    EndIf(!IsHotSpot());
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterDead(chrEntityId));
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    IncrementNetworkconnectedEventValue(8155, 3, 4);
});

$Event(90015305, Restart, function(areaEntityId, areaEntityId2, areaEntityId3, areaEntityId4) {
    DisableNetworkSync();
    ClearSpEffect(20000, 99175);
    EndIf(!IsHotSpot());
    WaitFor(
        InArea(20000, areaEntityId)
            || InArea(20000, areaEntityId2)
            || InArea(20000, areaEntityId3)
            || InArea(20000, areaEntityId4));
    SetSpEffect(20000, 99175);
    WaitFixedTimeFrames(1);
    WaitFor(
        !InArea(20000, areaEntityId)
            && !InArea(20000, areaEntityId2)
            && !InArea(20000, areaEntityId3)
            && !InArea(20000, areaEntityId4));
    ClearSpEffect(20000, 99175);
    RestartEvent();
});

$Event(90015306, Default, function(assetEntityId) {
    if (!IsHotSpot()) {
        ChangeAssetEnableStateUnknown200510(assetEntityId, Disabled, 1);
        DisableAsset(assetEntityId);
        EndEvent();
    }
    ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 1);
    EnableAsset(assetEntityId);
});

$Event(90015400, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6, eventFlagId7) {
    if (EventFlag(eventFlagId7) && !EventFlag(eventFlagId2)) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        DisableCharacterHPBarDisplay(chrEntityId);
        EnableCharacterImmortality(chrEntityId);
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        EndEvent();
    }
    DisableCharacterHPBarDisplay(chrEntityId);
    EnableCharacterImmortality(chrEntityId);
    GotoIf(S0, eventFlagId6 == 0);
    GotoIf(S1, EventFlag(eventFlagId6));
S0:
    DisableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
S1:
    WaitFor(
        (EventFlag(eventFlagId)
            && !EventFlag(eventFlagId3)
            && !EventFlag(eventFlagId4)
            && !EventFlag(eventFlagId5))
            || EventFlag(eventFlagId7));
    if (EventFlag(eventFlagId7)) {
        if (eventFlagId6 != 0) {
            WaitFixedTimeFrames(1);
            GotoIf(S2, EventFlag(eventFlagId6));
        }
        DisableCharacter(chrEntityId);
S2:
        EndEvent();
    }
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    WaitFixedTimeSeconds(2);
    ForceAnimationPlayback(chrEntityId, 20011, false, false, false);
    EnableCharacter(chrEntityId);
    EnableCharacterAI(chrEntityId);
});

$Event(90015401, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, areaEntityId, eventFlagId5) {
    if (eventFlagId5 != 0) {
        EndIf(EventFlag(eventFlagId5));
    }
    EndIf(!EventFlag(eventFlagId2) && EventFlag(eventFlagId3));
    EndIf(CharacterHPValue(chrEntityId) == 0);
    flagSp &= EventFlag(eventFlagId2) && CharacterHasSpEffect(chrEntityId, 10260);
    if (!flagSp) {
        flagSp &= EventFlag(eventFlagId2) && EventFlag(eventFlagId4);
        if (!flagSp) {
            WaitFor(EventFlag(eventFlagId2) || EventFlag(eventFlagId3));
            EndIf(!EventFlag(eventFlagId2) && EventFlag(eventFlagId3));
            WaitFor(ElapsedSeconds(5));
            hp = CharacterHPValue(chrEntityId) == 0;
            WaitFor(
                CharacterAIState(chrEntityId, AIStateType.Combat) || !EventFlag(eventFlagId) || hp);
            EndIf(hp.Passed);
            if (CharacterAIState(chrEntityId, AIStateType.Combat)) {
                SetNetworkconnectedEventFlagID(eventFlagId4, ON);
            }
            GotoIf(L1, EventFlag(eventFlagId3));
        }
L0:
        chrArea = CharacterAIState(chrEntityId, AIStateType.Combat, LessOrEqual, 0)
            && (!InArea(10002, areaEntityId)
                && !InArea(10003, areaEntityId)
                && !InArea(10004, areaEntityId));
        hp2 = CharacterHPValue(chrEntityId) == 0;
        WaitFor(
            (chrArea || !EventFlag(eventFlagId) || hp2) && CharacterBackreadStatus(chrEntityId));
        EndIf(hp2.Passed);
    }
L1:
    if (eventFlagId5 != 0) {
        EndIf(EventFlag(eventFlagId5));
    }
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
    SetSpEffect(chrEntityId, 10260);
    if (CharacterAIState(chrEntityId, AIStateType.Combat, LessOrEqual, 0)) {
        ForceAnimationPlayback(chrEntityId, 20010, false, false, false);
    }
    hp3 = CharacterHPValue(chrEntityId) == 0;
    WaitFor(CharacterHasSpEffect(chrEntityId, 10278) || hp3);
    EndIf(hp3.Passed);
    SetNetworkconnectedEventFlagID(eventFlagId2, OFF);
    ClearCharactersAITarget(chrEntityId);
    RequestCharacterAIReplan(chrEntityId);
    DisableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
});

$Event(90015402, Restart, function(areaEntityId, eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId2));
    WaitFor((EventFlag(eventFlagId) && InArea(20000, areaEntityId)) || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId2));
    SetSpEffect(20000, 99115);
    WaitFixedTimeSeconds(0.2);
    ActivateGparamOverride(8, 0.5);
    WaitFixedTimeSeconds(0.5);
    ChangeWeather(Weather.Type81, -1, true);
    WaitFixedTimeSeconds(2.5);
    WaitFor(!EventFlag(eventFlagId) || !InArea(20000, areaEntityId) || EventFlag(eventFlagId2));
    ChangeWeather(Weather.Type40, -1, false);
    DeactivateGparamOverride(5);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

$Event(90015403, Restart, function(areaEntityId, eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId) && InArea(20000, areaEntityId));
    SetSpEffect(20000, 99110);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(90015404, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    if (EventFlag(eventFlagId3)) {
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    CreateReferredDamagePair(chrEntityId, 1039100802);
    WaitFor(CharacterHPValue(1039100802) == 0);
    DisableCharacterImmortality(chrEntityId);
    if (EventFlag(eventFlagId)) {
        ForceCharacterDeath(chrEntityId, true);
    }
    GotoIf(S1, EventFlag(eventFlagId));
    GotoIf(S0, eventFlagId2 == 0);
    GotoIf(S1, EventFlag(eventFlagId2));
S0:
    DisableCharacter(chrEntityId);
S1:
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
});

$Event(90015405, Default, function(eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId));
    WaitFor(!EventFlag(eventFlagId2));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90015406, Default, function(eventFlagId, chrEntityId, chrEntityId2, areaEntityId, targetDistance, nameId, bgmBossConvParamId, eventFlagId2) {
    DisableNetworkSync();
    if (eventFlagId != 0) {
        WaitFor(EventFlag(eventFlagId));
    }
    chrArea = CharacterAIState(chrEntityId2, AIStateType.Combat, GreaterOrEqual, 1)
        && (InArea(20000, areaEntityId)
            || EntityInRadiusOfEntity(20000, chrEntityId2, targetDistance, 1));
    chr = CharacterRatioDead(chrEntityId2);
    chrAreaFlag |= chrArea || chr;
    if (eventFlagId2 != 0) {
        chrAreaFlag |= EventFlag(eventFlagId2);
    }
    WaitFor(chrAreaFlag);
    if (eventFlagId2 != 0) {
        EndIf(EventFlag(eventFlagId2));
    }
    SetWorldMapPointFlag(0, ON);
    SetWorldMapPointFlag(8, OFF);
    EndIf(chr.Passed);
    flag = !EventFlag(5000);
    flag2 = !EventFlag(5001);
    flag3 = flag || flag2;
    if (!flag3) {
        WaitFor(flag3);
        RestartEvent();
    }
    if (Signed(bgmBossConvParamId) != 0) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
    }
    WaitFixedTimeSeconds(1);
    if (flag.Passed) {
        SetEventFlagID(5000, ON);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
    } else if (flag2.Passed) {
        SetEventFlagID(5001, ON);
        DisplayBossHealthBar(Enabled, chrEntityId, 1, nameId);
    }
    LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
    chrArea2 = (CharacterAIState(chrEntityId2, AIStateType.Recognition, LessOrEqual, 0)
        && CharacterAIState(chrEntityId2, AIStateType.Alert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId2, AIStateType.Combat, LessOrEqual, 0)
        && CharacterAIState(chrEntityId2, AIStateType.PassiveAlert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId2, AIStateType.ActiveAlert, LessOrEqual, 0)
        && CharacterAIState(chrEntityId2, AIStateType.WaitBeforeForget, LessOrEqual, 0))
        && !InArea(20000, areaEntityId)
        && !EntityInRadiusOfEntity(20000, chrEntityId2, targetDistance, 1);
    area = EntityInRadiusOfEntity(20000, chrEntityId2, 100, 1);
    chr2 = CharacterRatioDead(chrEntityId2);
    chr3 = CharacterDead(20000);
    chrAreaFlag2 |= chrArea2 || !area || chr2 || chr3;
    if (eventFlagId2 != 0) {
        chrAreaFlag2 |= EventFlag(eventFlagId2);
    }
    WaitFor(chrAreaFlag2);
    GotoIf(S0, eventFlagId2 == 0);
    GotoIf(L0, EventFlag(eventFlagId2));
S0:
    if (chr2.Passed) {
        WaitFixedTimeSeconds(5);
    } else {
        WaitFixedTimeSeconds(1);
    }
    GotoIf(S1, !chr3.Passed);
    WaitFixedTimeSeconds(2.5);
S1:
L0:
    if (Signed(bgmBossConvParamId) != 0) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
    }
    if (flag.Passed) {
        SetEventFlagID(5000, OFF);
        DisplayBossHealthBar(Disabled, chrEntityId, 0, nameId);
    } else if (flag2.Passed) {
        SetEventFlagID(5001, OFF);
        DisplayBossHealthBar(Disabled, chrEntityId, 1, nameId);
    }
    if (eventFlagId2 != 0) {
        EndIf(EventFlag(eventFlagId2));
    }
    EndIf(chr2.Passed);
    WaitFor(!CharacterDead(20000));
    RestartEvent();
});

$Event(90015407, Default, function(eventFlagId, eventFlagId2, eventFlagId3, chrEntityId, textEffectParamId, bgmBossConvParamId, userDispLogParamId, logObjectId, eventFlagId4) {
    DisableNetworkSync();
    if (eventFlagId != 0) {
        EndIf(!EventFlag(eventFlagId));
    }
    EndIf(EventFlag(eventFlagId3));
    if (eventFlagId2 != 0) {
        WaitFor(EventFlag(eventFlagId2));
    }
    chrArea = CharacterAIState(chrEntityId, AIStateType.Combat, GreaterOrEqual, 1)
        && EntityInRadiusOfEntity(20000, chrEntityId, 30, 1);
    hp = CharacterRatioHPValue(chrEntityId) <= 0;
    WaitFor(chrArea || hp || EventFlag(eventFlagId4));
    EndIf(EventFlag(eventFlagId4));
    if (hp.Passed) {
        WaitFixedTimeSeconds(5);
    } else {
        chrArea2 = (CharacterAIState(chrEntityId, AIStateType.Recognition, LessOrEqual, 0)
            && CharacterAIState(chrEntityId, AIStateType.Alert, LessOrEqual, 0)
            && CharacterAIState(chrEntityId, AIStateType.Combat, LessOrEqual, 0)
            && CharacterAIState(chrEntityId, AIStateType.PassiveAlert, LessOrEqual, 0)
            && CharacterAIState(chrEntityId, AIStateType.ActiveAlert, LessOrEqual, 0)
            && CharacterAIState(chrEntityId, AIStateType.WaitBeforeForget, LessOrEqual, 0))
            && !EntityInRadiusOfEntity(20000, chrEntityId, 30, 1);
        area = EntityInRadiusOfEntity(20000, chrEntityId, 100, 1);
        hp2 = CharacterRatioHPValue(chrEntityId) <= 0;
        WaitFor(chrArea2 || !area || hp2 || CharacterDead(20000) || EventFlag(eventFlagId4));
        EndIf(EventFlag(eventFlagId4));
        RestartIf(!hp2.Passed);
        WaitFixedTimeSeconds(5);
        PlaySE(chrEntityId, SoundType.SFX, 888880000);
        DisplayTextEffectId(textEffectParamId);
    }
L0:
    RecordUserDispLog(userDispLogParamId, chrEntityId, LogObjectType.NpcName, logObjectId);
    IncrementTeamBossesKilled(1);
    if (BossBGMPlaying(bgmBossConvParamId)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
    }
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
    SetWorldMapPointFlag(2, ON);
    EndEvent();
});

$Event(90015440, Restart, function(assetEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    if (EventFlag(1037400210) && !EventFlag(eventFlagId)) {
        ChangeAssetEnableStateUnknown200510(assetEntityId, Disabled, 0);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        ReproduceAssetDestruction(assetEntityId, 1);
        SetNetworkconnectedEventFlagID(eventFlagId3, ON);
        EndEvent();
    }
    EndIf(EventFlag(1037400205));
    WaitFor(EventFlag(1037400210));
    if (!EventFlag(eventFlagId)) {
        ChangeAssetEnableStateUnknown200510(assetEntityId, Disabled, 0);
        EndEvent();
    }
    CreateAssetfollowingSFX(assetEntityId, 200, 807535);
    WaitFor(
        ActionButtonInArea(107800, assetEntityId)
            || EventFlag(eventFlagId2)
            || EventFlag(1037400205));
    DeleteAssetfollowingSFX(assetEntityId, true);
    EndIf(EventFlag(1037400205));
    RequestAssetDestruction(assetEntityId, 0);
    SpawnOneshotSFX(TargetEntityType.Asset, assetEntityId, -1, 807536);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
    IncrementNetworkconnectedEventValue(1037400200, 5, 31);
    WaitFixedTimeSeconds(4);
    GotoIf(S0, HasMultiplayerState(MultiplayerState.Multiplayer));
    GotoIf(S2, EventValue(1037400200, 5) > 2);
S0:
    GotoIf(S1, HasMultiplayerState(MultiplayerState.Singleplayer));
    GotoIf(S2, EventValue(1037400200, 5) > 3);
S1:
    RecordUserDispLog(110210, assetEntityId, LogObjectType.None, -1);
S2:
    NoOp();
});

$Event(90015441, Restart, function(areaEntityId, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(InArea(20000, areaEntityId) || EventFlag(eventFlagId2));
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90015442, Restart, function(entityId, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    if (EntityInRadiusOfEntity(1028402600, entityId, 15, 1)) {
        WaitFor(EventFlag(1028400200));
    }
    if (EntityInRadiusOfEntity(1028402601, entityId, 15, 1)) {
        WaitFor(EventFlag(1028400205));
    }
    if (EntityInRadiusOfEntity(1028402602, entityId, 15, 1)) {
        WaitFor(EventFlag(1028400210));
    }
    if (EntityInRadiusOfEntity(1056402601, entityId, 15, 1)) {
        WaitFor(EventFlag(1056400200));
    }
    if (EntityInRadiusOfEntity(1056402602, entityId, 15, 1)) {
        WaitFor(EventFlag(1056400205));
    }
    if (EntityInRadiusOfEntity(1056402603, entityId, 15, 1)) {
        WaitFor(EventFlag(1056400210));
    }
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90015443, Restart, function(entityId, eventFlagId) {
    WaitFor(EventFlag(eventFlagId));
    if (EntityInRadiusOfEntity(1028402600, entityId, 15, 1)) {
        SetNetworkconnectedEventFlagID(1028400201, ON);
    }
    if (EntityInRadiusOfEntity(1028402601, entityId, 15, 1)) {
        SetNetworkconnectedEventFlagID(1028400206, ON);
    }
    if (EntityInRadiusOfEntity(1028402602, entityId, 15, 1)) {
        SetNetworkconnectedEventFlagID(1028400211, ON);
    }
    if (EntityInRadiusOfEntity(1056402601, entityId, 15, 1)) {
        SetNetworkconnectedEventFlagID(1056400201, ON);
    }
    if (EntityInRadiusOfEntity(1056402602, entityId, 15, 1)) {
        SetNetworkconnectedEventFlagID(1056400206, ON);
    }
    if (EntityInRadiusOfEntity(1056402603, entityId, 15, 1)) {
        SetNetworkconnectedEventFlagID(1056400211, ON);
    }
});

$Event(90015444, Restart, function(assetEntityId, chrEntityId, eventFlagId) {
    if (EventFlag(eventFlagId)) {
        RegisterBonfire(assetEntityId, 0, 5);
    } else {
        ChangeAssetEnableStateUnknown200510(assetEntityId, Disabled, 0);
        DisableCharacter(chrEntityId);
        WaitFor(EventFlag(eventFlagId));
        SpawnOneshotSFX(TargetEntityType.Asset, assetEntityId, 200, 1060);
        WaitFixedTimeSeconds(0.5);
        ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 1);
        EnableCharacter(chrEntityId);
        RegisterBonfire(assetEntityId, 0, 5);
    }
L0:
    NoOp();
});

$Event(90015445, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, areaEntityId, spEffectId, spEffectId2, entityId, sfxId, userDispLogParamId, eventFlagId4, spEffectId3, spEffectId4) {
    DisableNetworkSync();
    EndIf(AnyBatchEventFlags(eventFlagId, eventFlagId2) && !EventFlag(eventFlagId3));
    if (AnyBatchEventFlags(eventFlagId, eventFlagId2)
        && EventFlag(eventFlagId3)
        && InArea(20000, areaEntityId)) {
        SetSpEffect(20000, spEffectId);
    } else {
        WaitFor(AnyBatchEventFlags(eventFlagId, eventFlagId2));
        EndIf(!EventFlag(eventFlagId3));
        WaitFor(InArea(20000, areaEntityId));
        SpawnOneshotSFX(TargetEntityType.Asset, entityId, -1, sfxId);
        SetSpEffect(20000, spEffectId);
        if (Signed(spEffectId3) != 0) {
            SetSpEffect(20000, spEffectId3);
        }
        WaitFor(ElapsedSeconds(0.5));
        if (!EventFlag(eventFlagId4)) {
            RecordUserDispLog(userDispLogParamId, 20000, LogObjectType.None, -1);
        }
        SetEventFlagID(eventFlagId4, ON);
    }
L0:
    WaitFor(!InArea(20000, areaEntityId));
    SetSpEffect(20000, spEffectId2);
    if (Signed(spEffectId4) != 0) {
        SetSpEffect(20000, spEffectId4);
    }
    RestartEvent();
});

$Event(90015446, Restart, function(chrEntityId, eventFlagId, eventFlagId2, entityId) {
    EndIf(EventFlag(eventFlagId2));
    sp = CharacterRatioHasSpEffect(chrEntityId, 98280, NotEqual, 0)
        || CharacterRatioHasSpEffect(chrEntityId, 98281, NotEqual, 0)
        || CharacterRatioHasSpEffect(chrEntityId, 98282, NotEqual, 0)
        || CharacterRatioHasSpEffect(chrEntityId, 98283, NotEqual, 0)
        || CharacterRatioHasSpEffect(chrEntityId, 98284, NotEqual, 0)
        || CharacterRatioHasSpEffect(chrEntityId, 98285, NotEqual, 0)
        || CharacterRatioHasSpEffect(chrEntityId, 98286, NotEqual, 0)
        || CharacterRatioHasSpEffect(chrEntityId, 98287, NotEqual, 0)
        || CharacterRatioHasSpEffect(chrEntityId, 98288, NotEqual, 0)
        || CharacterRatioHasSpEffect(chrEntityId, 98289, NotEqual, 0);
    if (!sp) {
        WaitFor(EventFlag(eventFlagId));
        area &= EntityInRadiusOfEntity(1028402600, entityId, 15, 1);
        if (area) {
            areaSp &= InArea(10002, 1028402550);
            areaSp2 &= InArea(10003, 1028402550);
            areaSp3 &= InArea(10004, 1028402550);
        }
        area2 &= EntityInRadiusOfEntity(1028402601, entityId, 15, 1);
        if (area2) {
            areaSp &= InArea(10002, 1028402551);
            areaSp2 &= InArea(10003, 1028402551);
            areaSp3 &= InArea(10004, 1028402551);
        }
        area3 &= EntityInRadiusOfEntity(1028402602, entityId, 15, 1);
        if (area3) {
            areaSp &= InArea(10002, 1028402552);
            areaSp2 &= InArea(10003, 1028402552);
            areaSp3 &= InArea(10004, 1028402552);
        }
        area4 &= EntityInRadiusOfEntity(1056402601, entityId, 15, 1);
        if (area4) {
            areaSp &= InArea(10002, 1056402550);
            areaSp2 &= InArea(10003, 1056402550);
            areaSp3 &= InArea(10004, 1056402550);
        }
        area5 &= EntityInRadiusOfEntity(1056402602, entityId, 15, 1);
        if (area5) {
            areaSp &= InArea(10002, 1056402551);
            areaSp2 &= InArea(10003, 1056402551);
            areaSp3 &= InArea(10004, 1056402551);
        }
        area6 &= EntityInRadiusOfEntity(1056402603, entityId, 15, 1);
        if (area6) {
            areaSp &= InArea(10002, 1056402552);
            areaSp2 &= InArea(10003, 1056402552);
            areaSp3 &= InArea(10004, 1056402552);
        }
        sp2 = CharacterHasSpEffect(10002, 98260, NotEqual, 0)
            || CharacterHasSpEffect(10002, 98261, NotEqual, 0)
            || CharacterHasSpEffect(10002, 98262, NotEqual, 0)
            || CharacterHasSpEffect(10002, 98263, NotEqual, 0)
            || CharacterHasSpEffect(10002, 98264, NotEqual, 0)
            || CharacterHasSpEffect(10002, 98265, NotEqual, 0)
            || CharacterHasSpEffect(10002, 98266, NotEqual, 0)
            || CharacterHasSpEffect(10002, 98267, NotEqual, 0)
            || CharacterHasSpEffect(10002, 98268, NotEqual, 0)
            || CharacterHasSpEffect(10002, 98269, NotEqual, 0);
        areaSp &= sp2;
        sp3 = CharacterHasSpEffect(10003, 98260, NotEqual, 0)
            || CharacterHasSpEffect(10003, 98261, NotEqual, 0)
            || CharacterHasSpEffect(10003, 98262, NotEqual, 0)
            || CharacterHasSpEffect(10003, 98263, NotEqual, 0)
            || CharacterHasSpEffect(10003, 98264, NotEqual, 0)
            || CharacterHasSpEffect(10003, 98265, NotEqual, 0)
            || CharacterHasSpEffect(10003, 98266, NotEqual, 0)
            || CharacterHasSpEffect(10003, 98267, NotEqual, 0)
            || CharacterHasSpEffect(10003, 98268, NotEqual, 0)
            || CharacterHasSpEffect(10003, 98269, NotEqual, 0);
        areaSp2 &= sp3;
        sp4 = CharacterHasSpEffect(10004, 98260, NotEqual, 0)
            || CharacterHasSpEffect(10004, 98261, NotEqual, 0)
            || CharacterHasSpEffect(10004, 98262, NotEqual, 0)
            || CharacterHasSpEffect(10004, 98263, NotEqual, 0)
            || CharacterHasSpEffect(10004, 98264, NotEqual, 0)
            || CharacterHasSpEffect(10004, 98265, NotEqual, 0)
            || CharacterHasSpEffect(10004, 98266, NotEqual, 0)
            || CharacterHasSpEffect(10004, 98267, NotEqual, 0)
            || CharacterHasSpEffect(10004, 98268, NotEqual, 0)
            || CharacterHasSpEffect(10004, 98269, NotEqual, 0);
        areaSp3 &= sp4;
        areaSp4 = areaSp || areaSp2 || areaSp3;
        WaitFor(areaSp4);
        if (areaSp.Passed) {
            if (!CharacterHasSpEffect(10002, 98260, Equal, 0)) {
                SetSpEffect(chrEntityId, 98280);
            }
            if (!CharacterHasSpEffect(10002, 98261, Equal, 0)) {
                SetSpEffect(chrEntityId, 98281);
            }
            if (!CharacterHasSpEffect(10002, 98262, Equal, 0)) {
                SetSpEffect(chrEntityId, 98282);
            }
            if (!CharacterHasSpEffect(10002, 98263, Equal, 0)) {
                SetSpEffect(chrEntityId, 98283);
            }
            if (!CharacterHasSpEffect(10002, 98264, Equal, 0)) {
                SetSpEffect(chrEntityId, 98284);
            }
            if (!CharacterHasSpEffect(10002, 98265, Equal, 0)) {
                SetSpEffect(chrEntityId, 98285);
            }
            if (!CharacterHasSpEffect(10002, 98266, Equal, 0)) {
                SetSpEffect(chrEntityId, 98286);
            }
            if (!CharacterHasSpEffect(10002, 98267, Equal, 0)) {
                SetSpEffect(chrEntityId, 98287);
            }
            if (!CharacterHasSpEffect(10002, 98268, Equal, 0)) {
                SetSpEffect(chrEntityId, 98288);
            }
            if (!CharacterHasSpEffect(10002, 98269, Equal, 0)) {
                SetSpEffect(chrEntityId, 98289);
            }
        } else if (areaSp2.Passed) {
            if (!CharacterHasSpEffect(10003, 98260, Equal, 0)) {
                SetSpEffect(chrEntityId, 98280);
            }
            if (!CharacterHasSpEffect(10003, 98261, Equal, 0)) {
                SetSpEffect(chrEntityId, 98281);
            }
            if (!CharacterHasSpEffect(10003, 98262, Equal, 0)) {
                SetSpEffect(chrEntityId, 98282);
            }
            if (!CharacterHasSpEffect(10003, 98263, Equal, 0)) {
                SetSpEffect(chrEntityId, 98283);
            }
            if (!CharacterHasSpEffect(10003, 98264, Equal, 0)) {
                SetSpEffect(chrEntityId, 98284);
            }
            if (!CharacterHasSpEffect(10003, 98265, Equal, 0)) {
                SetSpEffect(chrEntityId, 98285);
            }
            if (!CharacterHasSpEffect(10003, 98266, Equal, 0)) {
                SetSpEffect(chrEntityId, 98286);
            }
            if (!CharacterHasSpEffect(10003, 98267, Equal, 0)) {
                SetSpEffect(chrEntityId, 98287);
            }
            if (!CharacterHasSpEffect(10003, 98268, Equal, 0)) {
                SetSpEffect(chrEntityId, 98288);
            }
            if (!CharacterHasSpEffect(10003, 98269, Equal, 0)) {
                SetSpEffect(chrEntityId, 98289);
            }
        } else if (areaSp3.Passed) {
            if (!CharacterHasSpEffect(10004, 98260, Equal, 0)) {
                SetSpEffect(chrEntityId, 98280);
            }
            if (!CharacterHasSpEffect(10004, 98261, Equal, 0)) {
                SetSpEffect(chrEntityId, 98281);
            }
            if (!CharacterHasSpEffect(10004, 98262, Equal, 0)) {
                SetSpEffect(chrEntityId, 98282);
            }
            if (!CharacterHasSpEffect(10004, 98263, Equal, 0)) {
                SetSpEffect(chrEntityId, 98283);
            }
            if (!CharacterHasSpEffect(10004, 98264, Equal, 0)) {
                SetSpEffect(chrEntityId, 98284);
            }
            if (!CharacterHasSpEffect(10004, 98265, Equal, 0)) {
                SetSpEffect(chrEntityId, 98285);
            }
            if (!CharacterHasSpEffect(10004, 98266, Equal, 0)) {
                SetSpEffect(chrEntityId, 98286);
            }
            if (!CharacterHasSpEffect(10004, 98267, Equal, 0)) {
                SetSpEffect(chrEntityId, 98287);
            }
            if (!CharacterHasSpEffect(10004, 98268, Equal, 0)) {
                SetSpEffect(chrEntityId, 98288);
            }
            if (!CharacterHasSpEffect(10004, 98269, Equal, 0)) {
                SetSpEffect(chrEntityId, 98289);
            }
            Goto(L0);
        }
    }
L0:
    WaitFixedTimeSeconds(0.5);
    area &= EntityInRadiusOfEntity(1028402600, entityId, 15, 1);
    if (area) {
        area7 &= InArea(10002, 1028402570);
        area8 |= !area7 || !InArea(10002, 1028402550);
        area9 &= InArea(10003, 1028402570);
        area10 |= !area9 || !InArea(10003, 1028402550);
        area11 &= InArea(10004, 1028402570);
        area12 |= !area11 || !InArea(10004, 1028402550);
    }
L1:
    area2 &= EntityInRadiusOfEntity(1028402601, entityId, 15, 1);
    if (area2) {
        area7 &= InArea(10002, 1028402570);
        area8 |= !area7 || !InArea(10002, 1028402551);
        area9 &= InArea(10003, 1028402570);
        area10 |= !area9 || !InArea(10003, 1028402551);
        area11 &= InArea(10004, 1028402570);
        area12 |= !area11 || !InArea(10004, 1028402551);
    }
L2:
    area3 &= EntityInRadiusOfEntity(1028402602, entityId, 15, 1);
    if (area3) {
        area7 &= InArea(10002, 1028402570);
        area8 |= !area7 || !InArea(10002, 1028402552);
        area9 &= InArea(10003, 1028402570);
        area10 |= !area9 || !InArea(10003, 1028402552);
        area11 &= InArea(10004, 1028402570);
        area12 |= !area11 || !InArea(10004, 1028402552);
    }
L3:
    area4 &= EntityInRadiusOfEntity(1056402601, entityId, 15, 1);
    if (area4) {
        area7 &= InArea(10002, 1056402570);
        area8 |= !area7 || !InArea(10002, 1056402550);
        area9 &= InArea(10003, 1056402570);
        area10 |= !area9 || !InArea(10003, 1056402550);
        area11 &= InArea(10004, 1056402570);
        area12 |= !area11 || !InArea(10004, 1056402550);
    }
L4:
    area5 &= EntityInRadiusOfEntity(1056402602, entityId, 15, 1);
    if (area5) {
        area7 &= InArea(10002, 1056402570);
        area8 |= !area7 || !InArea(10002, 1056402551);
        area9 &= InArea(10003, 1056402570);
        area10 |= !area9 || !InArea(10003, 1056402551);
        area11 &= InArea(10004, 1056402570);
        area12 |= !area11 || !InArea(10004, 1056402551);
    }
L5:
    area6 &= EntityInRadiusOfEntity(1056402603, entityId, 15, 1);
    if (area6) {
        area7 &= InArea(10002, 1056402570);
        area8 |= !area7 || !InArea(10002, 1056402552);
        area9 &= InArea(10003, 1056402570);
        area10 |= !area9 || !InArea(10003, 1056402552);
        area11 &= InArea(10004, 1056402570);
        area12 |= !area11 || !InArea(10004, 1056402552);
    }
L6:
    area13 = area8 && area10 && area12;
    areaFlag = area13 || EventFlag(eventFlagId2);
    WaitFor(areaFlag);
    SetSpEffect(chrEntityId, 98279);
    WaitFixedTimeSeconds(0.5);
    RestartEvent();
});

$Event(90015447, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6) {
    SetNetworkconnectedEventFlagID(eventFlagId4, OFF);
    SetNetworkconnectedEventFlagID(eventFlagId5, OFF);
    SetNetworkconnectedEventFlagID(eventFlagId6, OFF);
    WaitFor(EventFlag(eventFlagId));
    if (!EventFlag(eventFlagId2)) {
        WaitFixedTimeFrames(5);
        SetNetworkconnectedEventFlagID(eventFlagId4, ON);
        SetNetworkconnectedEventFlagID(eventFlagId5, OFF);
        SetNetworkconnectedEventFlagID(eventFlagId6, OFF);
        WaitFor(EventFlag(eventFlagId2));
    }
    if (!EventFlag(eventFlagId3)) {
        WaitFixedTimeFrames(5);
        SetNetworkconnectedEventFlagID(eventFlagId4, OFF);
        SetNetworkconnectedEventFlagID(eventFlagId5, ON);
        SetNetworkconnectedEventFlagID(eventFlagId6, OFF);
        WaitFor(EventFlag(eventFlagId3));
    }
    WaitFixedTimeFrames(5);
    SetNetworkconnectedEventFlagID(eventFlagId4, OFF);
    SetNetworkconnectedEventFlagID(eventFlagId5, OFF);
    SetNetworkconnectedEventFlagID(eventFlagId6, ON);
});

$Event(90015448, Restart, function(assetEntityId, eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    if (EventFlag(eventFlagId2)) {
        SpawnOneshotSFX(TargetEntityType.Asset, assetEntityId, 90, 806925);
        EndEvent();
    }
    WaitFor(EventFlag(eventFlagId));
    CreateAssetfollowingSFX(assetEntityId, 90, 806920);
    SpawnOneshotSFX(TargetEntityType.Asset, assetEntityId, 90, 806925);
    WaitFor(ActionButtonInArea(109210, assetEntityId));
    RotateCharacter(20000, assetEntityId, -1, true);
    ForceAnimationPlayback(20000, 61040, false, false, false);
    DeleteAssetfollowingSFX(assetEntityId, true);
    WaitFixedTimeSeconds(4);
    SetEventFlagID(eventFlagId2, ON);
});

$Event(90015449, Restart, function(areaEntityId) {
    DisableNetworkSync();
    EndIf(IsGameMode(3));
    WaitFor(InArea(20000, areaEntityId) && !CharacterDead(20000));
    WaitFixedTimeFrames(5);
    if (!CharacterHasSpEffect(20000, 6999610)) {
        SetSpEffect(20000, 98251);
        SetSpEffect(20000, 6999600);
        chrArea |= IsHero(Hero.Duchess)
            || IsHero(Hero.Revenant)
            || IsHero(Hero.Recluse)
            || IsHero(Hero.Undertaker);
        if (chrArea) {
            SetSpEffect(20000, 6999601);
        }
        if (IsHero(Hero.Wylder)
            || IsHero(Hero.Guardian)
            || IsHero(Hero.Ironeye)
            || IsHero(Hero.Executor)
            || IsHero(Hero.Scholar)) {
            SetSpEffect(20000, 6999604);
        }
        if (IsHero(Hero.Raider)) {
            SetSpEffect(20000, 6999605);
        }
        SetEventFlagID(9045, ON);
    }
L0:
    if (CharacterHasSpEffect(20000, 6999610)) {
        SetSpEffect(20000, 98251);
        if (IsHero(Hero.Duchess)
            || IsHero(Hero.Revenant)
            || IsHero(Hero.Recluse)
            || IsHero(Hero.Undertaker)) {
            SetSpEffect(20000, 6999601);
        }
        if (IsHero(Hero.Wylder)
            || IsHero(Hero.Guardian)
            || IsHero(Hero.Ironeye)
            || IsHero(Hero.Executor)
            || IsHero(Hero.Scholar)) {
            SetSpEffect(20000, 6999604);
        }
        if (IsHero(Hero.Raider)) {
            SetSpEffect(20000, 6999605);
        }
    }
L1:
    WaitFixedTimeSeconds(1);
    if (CharacterHasSpEffect(20000, 6999610)) {
        SetSpEffect(20000, 98252);
        SetSpEffect(20000, 6999612);
    }
    chrArea |= !InArea(20000, areaEntityId) || CharacterDead(20000);
    WaitFor(chrArea);
    SetEventFlagID(9045, OFF);
    SetSpEffect(20000, 98252);
    SetSpEffect(20000, 6999602);
    SetSpEffect(20000, 6999603);
    RestartEvent();
});

$Event(90015450, Restart, function(chrEntityId, chrEntityId2) {
    if (EventFlag(chrEntityId)) {
        DisableCharacter(chrEntityId);
        EndEvent();
    }
    EnableCharacterImmortality(chrEntityId);
    WaitFor(HPRatio(chrEntityId2) <= 0.7 || EventFlag(chrEntityId));
    ClearCharactersAITarget(chrEntityId2);
    RequestCharacterAIReplan(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    DisableCharacterCollision(chrEntityId2);
    DisableCharacterHPBarDisplay(chrEntityId2);
    ForceAnimationPlayback(chrEntityId2, 20015, false, false, false);
    WaitFor(ElapsedSeconds(1.4));
    ForceAnimationPlayback(chrEntityId2, 30015, true, false, false);
    SetNetworkconnectedEventFlagID(chrEntityId, ON);
    WaitFor(ElapsedSeconds(2));
    DisableCharacter(chrEntityId2);
});

$Event(90015460, Default, function(entityId, chrEntityId) {
    EndIf(!EventFlag(7604));
    EndIf(chrEntityId == 0);
    area = EntityInRadiusOfEntity(1028402600, entityId, 15, 1)
        || EntityInRadiusOfEntity(1056402601, entityId, 15, 1);
    area2 = EntityInRadiusOfEntity(1028402601, entityId, 15, 1)
        || EntityInRadiusOfEntity(1056402602, entityId, 15, 1);
    area3 = EntityInRadiusOfEntity(1028402602, entityId, 15, 1)
        || EntityInRadiusOfEntity(1056402603, entityId, 15, 1);
    WaitFor(area || area2 || area3);
    WaitFor(
        !CharacterHasSpEffect(chrEntityId, 98330)
            && !CharacterHasSpEffect(chrEntityId, 98331)
            && !CharacterHasSpEffect(chrEntityId, 98332)
            && !CharacterHasSpEffect(chrEntityId, 98333)
            && !CharacterHasSpEffect(chrEntityId, 98334)
            && !CharacterHasSpEffect(chrEntityId, 98335)
            && !CharacterHasSpEffect(chrEntityId, 98340)
            && !CharacterHasSpEffect(chrEntityId, 98341)
            && !CharacterHasSpEffect(chrEntityId, 98342)
            && !CharacterHasSpEffect(chrEntityId, 98343)
            && !CharacterHasSpEffect(chrEntityId, 98344)
            && !CharacterHasSpEffect(chrEntityId, 98345));
    if (chrEntityId == 49290810) {
        SetSpEffect(chrEntityId, 98334);
        if (area.Passed) {
            SetSpEffect(chrEntityId, 98304);
        }
        if (area2.Passed) {
            SetSpEffect(chrEntityId, 98314);
        }
        if (area3.Passed) {
            SetSpEffect(chrEntityId, 98324);
        }
    } else if (chrEntityId == 47800810) {
        SetSpEffect(chrEntityId, 98335);
        if (area.Passed) {
            SetSpEffect(chrEntityId, 98305);
        }
        if (area2.Passed) {
            SetSpEffect(chrEntityId, 98315);
        }
        if (area3.Passed) {
            SetSpEffect(chrEntityId, 98325);
        }
    } else {
        GotoIf(S0, chrEntityId == 48500801);
        GotoIf(S0, chrEntityId == 48500802);
        GotoIf(S0, chrEntityId == 48500805);
        GotoIf(S0, chrEntityId == 48500806);
        GotoIf(S0, chrEntityId == 48600801);
        GotoIf(S0, chrEntityId == 48600802);
        GotoIf(S0, chrEntityId == 48600805);
        GotoIf(S0, chrEntityId == 48600806);
        Goto(S1);
S0:
        SetSpEffect(chrEntityId, 98343);
        if (area.Passed) {
            SetSpEffect(chrEntityId, 98303);
        }
        if (area2.Passed) {
            SetSpEffect(chrEntityId, 98313);
        }
        if (area3.Passed) {
            SetSpEffect(chrEntityId, 98323);
        }
        Goto(L2);
S1:
        if (CharacterHasSpEffect(chrEntityId, 7705)) {
            SetSpEffect(chrEntityId, 98330);
        } else if (CharacterHasSpEffect(chrEntityId, 7706)) {
            SetSpEffect(chrEntityId, 98340);
        } else {
            Goto(S2);
        }
        if (area.Passed) {
            SetSpEffect(chrEntityId, 98300);
        }
        if (area2.Passed) {
            SetSpEffect(chrEntityId, 98310);
        }
        if (area3.Passed) {
            SetSpEffect(chrEntityId, 98320);
        }
        Goto(L2);
S2:
        if (CharacterHasSpEffect(chrEntityId, 7715)) {
            SetSpEffect(chrEntityId, 98331);
        } else if (CharacterHasSpEffect(chrEntityId, 7716)) {
            SetSpEffect(chrEntityId, 98341);
        } else {
            Goto(S3);
        }
        if (area.Passed) {
            SetSpEffect(chrEntityId, 98301);
        }
        if (area2.Passed) {
            SetSpEffect(chrEntityId, 98311);
        }
        if (area3.Passed) {
            SetSpEffect(chrEntityId, 98321);
        }
        Goto(L2);
S3:
        if (CharacterHasSpEffect(chrEntityId, 7725)) {
            SetSpEffect(chrEntityId, 98332);
        } else if (CharacterHasSpEffect(chrEntityId, 7726)) {
            SetSpEffect(chrEntityId, 98342);
        } else {
            Goto(S4);
        }
        if (area.Passed) {
            SetSpEffect(chrEntityId, 98302);
        }
        if (area2.Passed) {
            SetSpEffect(chrEntityId, 98312);
        }
        if (area3.Passed) {
            SetSpEffect(chrEntityId, 98322);
        }
        Goto(L2);
S4:
        if (CharacterHasSpEffect(chrEntityId, 7735)) {
            SetSpEffect(chrEntityId, 98333);
        } else if (CharacterHasSpEffect(chrEntityId, 7736)) {
            SetSpEffect(chrEntityId, 98343);
        } else {
            Goto(S5);
        }
        if (area.Passed) {
            SetSpEffect(chrEntityId, 98303);
        }
        if (area2.Passed) {
            SetSpEffect(chrEntityId, 98313);
        }
        if (area3.Passed) {
            SetSpEffect(chrEntityId, 98323);
        }
        Goto(L2);
S5:
        if (CharacterHasSpEffect(chrEntityId, 7745)) {
            SetSpEffect(chrEntityId, 98334);
        } else if (CharacterHasSpEffect(chrEntityId, 7746)) {
            SetSpEffect(chrEntityId, 98344);
        } else {
            Goto(S6);
        }
        if (area.Passed) {
            SetSpEffect(chrEntityId, 98304);
        }
        if (area2.Passed) {
            SetSpEffect(chrEntityId, 98314);
        }
        if (area3.Passed) {
            SetSpEffect(chrEntityId, 98324);
        }
        Goto(L2);
S6:
        if (CharacterHasSpEffect(chrEntityId, 7755)) {
            SetSpEffect(chrEntityId, 98335);
        } else if (CharacterHasSpEffect(chrEntityId, 7756)) {
            SetSpEffect(chrEntityId, 98345);
        } else {
            Goto(S7);
        }
        if (area.Passed) {
            SetSpEffect(chrEntityId, 98305);
        }
        if (area2.Passed) {
            SetSpEffect(chrEntityId, 98315);
        }
        if (area3.Passed) {
            SetSpEffect(chrEntityId, 98325);
        }
        Goto(L2);
S7:
        EndEvent();
    }
L2:
    WaitFor(ElapsedSeconds(1));
    RestartEvent();
});

$Event(90015461, Default, function(eventFlagId, targetProbability, eventFlagId2, eventFlagId3, eventFlagId4) {
    DisableNetworkSync();
    WaitFor(PlayerIsInOwnWorld());
    WaitFor(
        CompareEventValues(eventFlagId3, 5, Greater, eventFlagId4, 5) || EventFlag(eventFlagId2));
    if (!EventFlag(eventFlagId2)) {
        IncrementNetworkconnectedEventValue(eventFlagId4, 5, 31);
        if (!EventFlagAndRandomCondition(6001, targetProbability)) {
            WaitFor(ElapsedSeconds(1));
            RestartEvent();
        }
    }
L0:
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90015462, Default, function(eventFlagId, eventFlagId2, eventFlagId3, chrEntityId) {
    if (EventFlag(eventFlagId3)) {
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    EndIf(EventFlag(eventFlagId2));
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    WaitFor(EventFlag(eventFlagId));
    ForceRatioAnimationPlayback(chrEntityId, 30027, true, false, false);
    if (eventFlagId == 8240) {
        areaFlag |= InArea(20000, 1039402800);
    }
    if (eventFlagId == 8250) {
        areaFlag |= InArea(20000, 1047402800);
    }
    if (eventFlagId == 8260) {
        areaFlag |= InArea(20000, 1046402810);
    }
    areaFlag |= EventFlag(eventFlagId2);
    WaitFor(areaFlag);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    WaitFor(ElapsedSeconds(1));
    EnableCharacter(chrEntityId);
    EnableCharacterCollision(chrEntityId);
    ForceRatioAnimationPlayback(chrEntityId, 20027, false, false, false);
});

$Event(90015463, Default, function(eventFlagId, eventFlagId2, entityId) {
    if (EventFlag(eventFlagId2)) {
        DeleteMapSFX(entityId, false);
        EndEvent();
    }
    WaitFor(EventFlag(eventFlagId));
    SpawnMapSFX(entityId);
    WaitFor(EventFlag(eventFlagId2));
    DeleteMapSFX(entityId, true);
});

$Event(90015464, Default, function(eventFlagId, eventFlagId2) {
    if (!EventFlag(eventFlagId)) {
        WaitFor(EventFlag(eventFlagId));
        RecordUserDispLog(110222, 0, LogObjectType.None, -1);
    }
    if (!EventFlag(eventFlagId2)) {
        WaitFor(EventFlag(eventFlagId2));
        RecordUserDispLog(110220, 0, LogObjectType.None, -1);
    }
});

$Event(90015465, Default, function(chrEntityId, value, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(CharacterRatioDead(chrEntityId));
    if (value == 0) {
        WaitFor(ElapsedSeconds(3));
    }
    if (value != 0) {
        WaitFor(ElapsedSeconds(6));
    }
    IncrementNetworkconnectedEventValue(eventFlagId, 5, 31);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90015466, Default, function(eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90015467, Default, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6) {
    EndIf(EventFlag(eventFlagId));
    if (eventFlagId2 != 0) {
        flag &= EventFlag(eventFlagId2);
    }
    if (eventFlagId3 != 0) {
        flag &= EventFlag(eventFlagId3);
    }
    if (eventFlagId4 != 0) {
        flag &= EventFlag(eventFlagId4);
    }
    if (eventFlagId5 != 0) {
        flag &= EventFlag(eventFlagId5);
    }
    if (eventFlagId6 != 0) {
        flag &= EventFlag(eventFlagId6);
    }
    WaitFor(flag);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90015468, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(CharacterRatioDead(chrEntityId) && CharacterRatioHasSpEffect(chrEntityId, 7706));
    WaitFor(ElapsedSeconds(6));
    IncrementNetworkconnectedEventValue(eventFlagId, 5, 31);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90015469, Restart, function(eventFlagId, spEffectId, spEffectId2, spEffectId3) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    if (!IsPlayerCount(2)) {
        if (!IsPlayerCount(3)) {
            SetSpEffect(20000, spEffectId);
        }
    }
    if (!IsPlayerCount(1)) {
        if (!IsPlayerCount(3)) {
            SetSpEffect(20000, spEffectId2);
        }
    }
    if (!IsPlayerCount(1)) {
        if (!IsPlayerCount(2)) {
            SetSpEffect(20000, spEffectId3);
        }
    }
});

$Event(90015470, Restart, function(entityId, eventFlagId, eventFlagId2, chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4) {
    DisableNetworkSync();
    if (EventFlag(eventFlagId2)) {
        DisableCharacterInvincibility(chrEntityId);
        ClearSpEffect(chrEntityId, 98295);
        EnableLockOnPoint(chrEntityId, 220);
        EnableLockOnPoint(chrEntityId, 221);
        EnableLockOnPoint(chrEntityId, 222);
        EnableLockOnPoint(chrEntityId, 223);
        EnableLockOnPoint(chrEntityId, 224);
        EnableLockOnPoint(chrEntityId, 225);
        EnableLockOnPoint(chrEntityId, 226);
        EnableLockOnPoint(chrEntityId, 227);
        EnableLockOnPoint(chrEntityId, 228);
        EnableLockOnPoint(chrEntityId, 229);
        if (chrEntityId2 != 0) {
            DisableCharacterInvincibility(chrEntityId2);
            ClearSpEffect(chrEntityId2, 98295);
            EnableLockOnPoint(chrEntityId2, 220);
            EnableLockOnPoint(chrEntityId2, 221);
            EnableLockOnPoint(chrEntityId2, 222);
            EnableLockOnPoint(chrEntityId2, 223);
            EnableLockOnPoint(chrEntityId2, 224);
            EnableLockOnPoint(chrEntityId2, 225);
            EnableLockOnPoint(chrEntityId2, 226);
            EnableLockOnPoint(chrEntityId2, 227);
            EnableLockOnPoint(chrEntityId2, 228);
            EnableLockOnPoint(chrEntityId2, 229);
        }
        if (chrEntityId3 != 0) {
            DisableCharacterInvincibility(chrEntityId3);
            ClearSpEffect(chrEntityId3, 98295);
            EnableLockOnPoint(chrEntityId3, 220);
            EnableLockOnPoint(chrEntityId3, 221);
            EnableLockOnPoint(chrEntityId3, 222);
            EnableLockOnPoint(chrEntityId3, 223);
            EnableLockOnPoint(chrEntityId3, 224);
            EnableLockOnPoint(chrEntityId3, 225);
            EnableLockOnPoint(chrEntityId3, 226);
            EnableLockOnPoint(chrEntityId3, 227);
            EnableLockOnPoint(chrEntityId3, 228);
            EnableLockOnPoint(chrEntityId3, 229);
        }
        EndEvent();
    }
L10:
    WaitFor(EventFlag(eventFlagId));
    if (EntityInRadiusOfEntity(1028402600, entityId, 15, 1)) {
        areaFlagHp |= !InArea(20000, 1028402550);
    }
    if (EntityInRadiusOfEntity(1028402601, entityId, 15, 1)) {
        areaFlagHp |= !InArea(20000, 1028402551);
    }
    if (EntityInRadiusOfEntity(1028402602, entityId, 15, 1)) {
        areaFlagHp |= !InArea(20000, 1028402552);
    }
    if (EntityInRadiusOfEntity(1056402601, entityId, 15, 1)) {
        areaFlagHp |= !InArea(20000, 1056402550);
    }
    if (EntityInRadiusOfEntity(1056402602, entityId, 15, 1)) {
        areaFlagHp |= !InArea(20000, 1056402551);
    }
    if (EntityInRadiusOfEntity(1056402603, entityId, 15, 1)) {
        areaFlagHp |= !InArea(20000, 1056402552);
    }
    areaFlagHp |= EventFlag(eventFlagId2);
    if (chrEntityId4 != 0) {
        hp = CharacterRatioHPValue(chrEntityId4) <= 1;
        areaFlagHp |= hp;
    }
    WaitFor(areaFlagHp);
    if (!EventFlag(eventFlagId2)) {
        if (chrEntityId4 != 0) {
            if (hp.Passed) {
                DisableCharacterInvincibility(chrEntityId);
                ClearSpEffect(chrEntityId, 98295);
                ForceCharacterDeath(chrEntityId, false);
                if (chrEntityId2 != 0) {
                    DisableCharacterInvincibility(chrEntityId2);
                    ClearSpEffect(chrEntityId2, 98295);
                    ForceCharacterDeath(chrEntityId2, false);
                }
                if (chrEntityId3 != 0) {
                    DisableCharacterInvincibility(chrEntityId3);
                    ClearSpEffect(chrEntityId3, 98295);
                    ForceCharacterDeath(chrEntityId3, false);
                }
                EndEvent();
            }
        }
L11:
        EnableCharacterInvincibility(chrEntityId);
        SetSpEffect(chrEntityId, 98295);
        DisableLockOnPoint(chrEntityId, 220);
        DisableLockOnPoint(chrEntityId, 221);
        DisableLockOnPoint(chrEntityId, 222);
        DisableLockOnPoint(chrEntityId, 223);
        DisableLockOnPoint(chrEntityId, 224);
        DisableLockOnPoint(chrEntityId, 225);
        DisableLockOnPoint(chrEntityId, 226);
        DisableLockOnPoint(chrEntityId, 227);
        DisableLockOnPoint(chrEntityId, 228);
        DisableLockOnPoint(chrEntityId, 229);
        if (chrEntityId2 != 0) {
            EnableCharacterInvincibility(chrEntityId2);
            SetSpEffect(chrEntityId2, 98295);
            DisableLockOnPoint(chrEntityId2, 220);
            DisableLockOnPoint(chrEntityId2, 221);
            DisableLockOnPoint(chrEntityId2, 222);
            DisableLockOnPoint(chrEntityId2, 223);
            DisableLockOnPoint(chrEntityId2, 224);
            DisableLockOnPoint(chrEntityId2, 225);
            DisableLockOnPoint(chrEntityId2, 226);
            DisableLockOnPoint(chrEntityId2, 227);
            DisableLockOnPoint(chrEntityId2, 228);
            DisableLockOnPoint(chrEntityId2, 229);
        }
        if (chrEntityId3 != 0) {
            EnableCharacterInvincibility(chrEntityId3);
            SetSpEffect(chrEntityId3, 98295);
            DisableLockOnPoint(chrEntityId3, 220);
            DisableLockOnPoint(chrEntityId3, 221);
            DisableLockOnPoint(chrEntityId3, 222);
            DisableLockOnPoint(chrEntityId3, 223);
            DisableLockOnPoint(chrEntityId3, 224);
            DisableLockOnPoint(chrEntityId3, 225);
            DisableLockOnPoint(chrEntityId3, 226);
            DisableLockOnPoint(chrEntityId3, 227);
            DisableLockOnPoint(chrEntityId3, 228);
            DisableLockOnPoint(chrEntityId3, 229);
        }
        if (EntityInRadiusOfEntity(1028402600, entityId, 15, 1)) {
            areaFlagHp2 |= InArea(20000, 1028402550);
        }
        if (EntityInRadiusOfEntity(1028402601, entityId, 15, 1)) {
            areaFlagHp2 |= InArea(20000, 1028402551);
        }
        if (EntityInRadiusOfEntity(1028402602, entityId, 15, 1)) {
            areaFlagHp2 |= InArea(20000, 1028402552);
        }
        if (EntityInRadiusOfEntity(1056402601, entityId, 15, 1)) {
            areaFlagHp2 |= InArea(20000, 1056402550);
        }
        if (EntityInRadiusOfEntity(1056402602, entityId, 15, 1)) {
            areaFlagHp2 |= InArea(20000, 1056402551);
        }
        if (EntityInRadiusOfEntity(1056402603, entityId, 15, 1)) {
            areaFlagHp2 |= InArea(20000, 1056402552);
        }
        areaFlagHp2 |= EventFlag(eventFlagId2);
        if (chrEntityId4 != 0) {
            hp2 = CharacterRatioHPValue(chrEntityId4) <= 1;
            areaFlagHp2 |= hp2;
        }
        WaitFor(areaFlagHp2);
    }
L0:
    DisableCharacterInvincibility(chrEntityId);
    ClearSpEffect(chrEntityId, 98295);
    EnableLockOnPoint(chrEntityId, 220);
    EnableLockOnPoint(chrEntityId, 221);
    EnableLockOnPoint(chrEntityId, 222);
    EnableLockOnPoint(chrEntityId, 223);
    EnableLockOnPoint(chrEntityId, 224);
    EnableLockOnPoint(chrEntityId, 225);
    EnableLockOnPoint(chrEntityId, 226);
    EnableLockOnPoint(chrEntityId, 227);
    EnableLockOnPoint(chrEntityId, 228);
    EnableLockOnPoint(chrEntityId, 229);
    if (chrEntityId2 != 0) {
        DisableCharacterInvincibility(chrEntityId2);
        ClearSpEffect(chrEntityId2, 98295);
        EnableLockOnPoint(chrEntityId2, 220);
        EnableLockOnPoint(chrEntityId2, 221);
        EnableLockOnPoint(chrEntityId2, 222);
        EnableLockOnPoint(chrEntityId2, 223);
        EnableLockOnPoint(chrEntityId2, 224);
        EnableLockOnPoint(chrEntityId2, 225);
        EnableLockOnPoint(chrEntityId2, 226);
        EnableLockOnPoint(chrEntityId2, 227);
        EnableLockOnPoint(chrEntityId2, 228);
        EnableLockOnPoint(chrEntityId2, 229);
    }
    if (chrEntityId3 != 0) {
        DisableCharacterInvincibility(chrEntityId3);
        ClearSpEffect(chrEntityId3, 98295);
        EnableLockOnPoint(chrEntityId3, 220);
        EnableLockOnPoint(chrEntityId3, 221);
        EnableLockOnPoint(chrEntityId3, 222);
        EnableLockOnPoint(chrEntityId3, 223);
        EnableLockOnPoint(chrEntityId3, 224);
        EnableLockOnPoint(chrEntityId3, 225);
        EnableLockOnPoint(chrEntityId3, 226);
        EnableLockOnPoint(chrEntityId3, 227);
        EnableLockOnPoint(chrEntityId3, 228);
        EnableLockOnPoint(chrEntityId3, 229);
    }
    EndIf(EventFlag(eventFlagId2));
    if (chrEntityId4 != 0) {
        if (hp2.Passed) {
            ForceCharacterDeath(chrEntityId, false);
            if (chrEntityId2 != 0) {
                ForceCharacterDeath(chrEntityId2, false);
            }
            if (chrEntityId3 != 0) {
                ForceCharacterDeath(chrEntityId3, false);
            }
            EndEvent();
        }
    }
L12:
    RestartEvent();
});

$Event(90015471, Restart, function(entityId, eventFlagId, eventFlagId2, chrEntityId, chrEntityId2, chrEntityId3, spEffectId, spEffectId2, spEffectId3, spEffectId4) {
    DisableNetworkSync();
    if (EventFlag(eventFlagId2)) {
        DisableCharacterInvincibility(chrEntityId);
        ClearSpEffect(chrEntityId, 98295);
        EnableLockOnPoint(chrEntityId, 220);
        EnableLockOnPoint(chrEntityId, 221);
        EnableLockOnPoint(chrEntityId, 222);
        EnableLockOnPoint(chrEntityId, 223);
        EnableLockOnPoint(chrEntityId, 224);
        EnableLockOnPoint(chrEntityId, 225);
        EnableLockOnPoint(chrEntityId, 226);
        EnableLockOnPoint(chrEntityId, 227);
        EnableLockOnPoint(chrEntityId, 228);
        EnableLockOnPoint(chrEntityId, 229);
        if (chrEntityId2 != 0) {
            DisableCharacterInvincibility(chrEntityId2);
            ClearSpEffect(chrEntityId2, 98295);
            EnableLockOnPoint(chrEntityId2, 220);
            EnableLockOnPoint(chrEntityId2, 221);
            EnableLockOnPoint(chrEntityId2, 222);
            EnableLockOnPoint(chrEntityId2, 223);
            EnableLockOnPoint(chrEntityId2, 224);
            EnableLockOnPoint(chrEntityId2, 225);
            EnableLockOnPoint(chrEntityId2, 226);
            EnableLockOnPoint(chrEntityId2, 227);
            EnableLockOnPoint(chrEntityId2, 228);
            EnableLockOnPoint(chrEntityId2, 229);
        }
        if (chrEntityId3 != 0) {
            DisableCharacterInvincibility(chrEntityId3);
            ClearSpEffect(chrEntityId3, 98295);
            EnableLockOnPoint(chrEntityId3, 220);
            EnableLockOnPoint(chrEntityId3, 221);
            EnableLockOnPoint(chrEntityId3, 222);
            EnableLockOnPoint(chrEntityId3, 223);
            EnableLockOnPoint(chrEntityId3, 224);
            EnableLockOnPoint(chrEntityId3, 225);
            EnableLockOnPoint(chrEntityId3, 226);
            EnableLockOnPoint(chrEntityId3, 227);
            EnableLockOnPoint(chrEntityId3, 228);
            EnableLockOnPoint(chrEntityId3, 229);
        }
        EndEvent();
    }
L10:
    WaitFor(EventFlag(eventFlagId));
    if (EntityInRadiusOfEntity(1028402600, entityId, 15, 1)) {
        areaFlag |= !InArea(20000, 1028402550);
    }
    if (EntityInRadiusOfEntity(1028402601, entityId, 15, 1)) {
        areaFlag |= !InArea(20000, 1028402551);
    }
    if (EntityInRadiusOfEntity(1028402602, entityId, 15, 1)) {
        areaFlag |= !InArea(20000, 1028402552);
    }
    if (EntityInRadiusOfEntity(1056402601, entityId, 15, 1)) {
        areaFlag |= !InArea(20000, 1056402550);
    }
    if (EntityInRadiusOfEntity(1056402602, entityId, 15, 1)) {
        areaFlag |= !InArea(20000, 1056402551);
    }
    if (EntityInRadiusOfEntity(1056402603, entityId, 15, 1)) {
        areaFlag |= !InArea(20000, 1056402552);
    }
    areaFlag |= EventFlag(eventFlagId2);
    WaitFor(areaFlag);
    if (!EventFlag(eventFlagId2)) {
        EnableCharacterInvincibility(chrEntityId);
        SetSpEffect(chrEntityId, 98295);
        DisableLockOnPoint(chrEntityId, 220);
        DisableLockOnPoint(chrEntityId, 221);
        DisableLockOnPoint(chrEntityId, 222);
        DisableLockOnPoint(chrEntityId, 223);
        DisableLockOnPoint(chrEntityId, 224);
        DisableLockOnPoint(chrEntityId, 225);
        DisableLockOnPoint(chrEntityId, 226);
        DisableLockOnPoint(chrEntityId, 227);
        DisableLockOnPoint(chrEntityId, 228);
        DisableLockOnPoint(chrEntityId, 229);
        if (chrEntityId2 != 0) {
            EnableCharacterInvincibility(chrEntityId2);
            SetSpEffect(chrEntityId2, 98295);
            DisableLockOnPoint(chrEntityId2, 220);
            DisableLockOnPoint(chrEntityId2, 221);
            DisableLockOnPoint(chrEntityId2, 222);
            DisableLockOnPoint(chrEntityId2, 223);
            DisableLockOnPoint(chrEntityId2, 224);
            DisableLockOnPoint(chrEntityId2, 225);
            DisableLockOnPoint(chrEntityId2, 226);
            DisableLockOnPoint(chrEntityId2, 227);
            DisableLockOnPoint(chrEntityId2, 228);
            DisableLockOnPoint(chrEntityId2, 229);
        }
        if (chrEntityId3 != 0) {
            EnableCharacterInvincibility(chrEntityId3);
            SetSpEffect(chrEntityId3, 98295);
            DisableLockOnPoint(chrEntityId3, 220);
            DisableLockOnPoint(chrEntityId3, 221);
            DisableLockOnPoint(chrEntityId3, 222);
            DisableLockOnPoint(chrEntityId3, 223);
            DisableLockOnPoint(chrEntityId3, 224);
            DisableLockOnPoint(chrEntityId3, 225);
            DisableLockOnPoint(chrEntityId3, 226);
            DisableLockOnPoint(chrEntityId3, 227);
            DisableLockOnPoint(chrEntityId3, 228);
            DisableLockOnPoint(chrEntityId3, 229);
        }
        if (EntityInRadiusOfEntity(1028402600, entityId, 15, 1)) {
            areaFlag2 |= InArea(20000, 1028402550);
        }
        if (EntityInRadiusOfEntity(1028402601, entityId, 15, 1)) {
            areaFlag2 |= InArea(20000, 1028402551);
        }
        if (EntityInRadiusOfEntity(1028402602, entityId, 15, 1)) {
            areaFlag2 |= InArea(20000, 1028402552);
        }
        if (EntityInRadiusOfEntity(1056402601, entityId, 15, 1)) {
            areaFlag2 |= InArea(20000, 1056402550);
        }
        if (EntityInRadiusOfEntity(1056402602, entityId, 15, 1)) {
            areaFlag2 |= InArea(20000, 1056402551);
        }
        if (EntityInRadiusOfEntity(1056402603, entityId, 15, 1)) {
            areaFlag2 |= InArea(20000, 1056402552);
        }
        areaFlag2 |= EventFlag(eventFlagId2);
        WaitFor(areaFlag2);
    }
L0:
    flagSp &= EventFlag(6001);
    if (Signed(spEffectId) != 0) {
        flagSp &= !CharacterHasSpEffect(chrEntityId, spEffectId);
    }
    if (Signed(spEffectId3) != 0) {
        flagSp &= CharacterHasSpEffect(chrEntityId, spEffectId3);
    }
    flagSp2 &= EventFlag(6001);
    if (Signed(spEffectId2) != 0) {
        flagSp2 &= !CharacterHasSpEffect(chrEntityId, spEffectId2);
    }
    if (Signed(spEffectId4) != 0) {
        flagSp2 &= CharacterHasSpEffect(chrEntityId, spEffectId4);
    }
    DisableCharacterInvincibility(chrEntityId);
    ClearSpEffect(chrEntityId, 98295);
    EnableLockOnPoint(chrEntityId, 220);
    if (flagSp) {
        EnableLockOnPoint(chrEntityId, 221);
    }
    if (flagSp2) {
        EnableLockOnPoint(chrEntityId, 222);
    }
    EnableLockOnPoint(chrEntityId, 223);
    EnableLockOnPoint(chrEntityId, 224);
    EnableLockOnPoint(chrEntityId, 225);
    EnableLockOnPoint(chrEntityId, 226);
    EnableLockOnPoint(chrEntityId, 227);
    EnableLockOnPoint(chrEntityId, 228);
    EnableLockOnPoint(chrEntityId, 229);
    if (chrEntityId2 != 0) {
        DisableCharacterInvincibility(chrEntityId2);
        ClearSpEffect(chrEntityId2, 98295);
        EnableLockOnPoint(chrEntityId2, 220);
        EnableLockOnPoint(chrEntityId2, 221);
        EnableLockOnPoint(chrEntityId2, 222);
        EnableLockOnPoint(chrEntityId2, 223);
        EnableLockOnPoint(chrEntityId2, 224);
        EnableLockOnPoint(chrEntityId2, 225);
        EnableLockOnPoint(chrEntityId2, 226);
        EnableLockOnPoint(chrEntityId2, 227);
        EnableLockOnPoint(chrEntityId2, 228);
        EnableLockOnPoint(chrEntityId2, 229);
    }
    if (chrEntityId3 != 0) {
        DisableCharacterInvincibility(chrEntityId3);
        ClearSpEffect(chrEntityId3, 98295);
        EnableLockOnPoint(chrEntityId3, 220);
        EnableLockOnPoint(chrEntityId3, 221);
        EnableLockOnPoint(chrEntityId3, 222);
        EnableLockOnPoint(chrEntityId3, 223);
        EnableLockOnPoint(chrEntityId3, 224);
        EnableLockOnPoint(chrEntityId3, 225);
        EnableLockOnPoint(chrEntityId3, 226);
        EnableLockOnPoint(chrEntityId3, 227);
        EnableLockOnPoint(chrEntityId3, 228);
        EnableLockOnPoint(chrEntityId3, 229);
    }
    EndIf(EventFlag(eventFlagId2));
    RestartEvent();
});

$Event(90015472, Default, function() {
    DisableNetworkSync();
    WaitFor(
        (CharacterHasSpEffect(20000, 98260)
            || CharacterHasSpEffect(20000, 98261)
            || CharacterHasSpEffect(20000, 98262)
            || CharacterHasSpEffect(20000, 98263)
            || CharacterHasSpEffect(20000, 98264)
            || CharacterHasSpEffect(20000, 98265)
            || CharacterHasSpEffect(20000, 98266)
            || CharacterHasSpEffect(20000, 98267)
            || CharacterHasSpEffect(20000, 98268)
            || CharacterHasSpEffect(20000, 98269))
            && !EventFlag(9024)
            && !EventFlag(9037));
    SetEventFlagID(9023, ON);
    if (CharacterHasSpEffect(20000, 98260)) {
        ActivateGparamOverride(16, 3);
        sp &= !CharacterHasSpEffect(20000, 98260);
    }
    if (CharacterHasSpEffect(20000, 98261)) {
        ActivateGparamOverride(17, 3);
        sp &= !CharacterHasSpEffect(20000, 98261);
    }
    if (CharacterHasSpEffect(20000, 98262)) {
        ActivateGparamOverride(18, 3);
        sp &= !CharacterHasSpEffect(20000, 98262);
    }
    if (CharacterHasSpEffect(20000, 98263)) {
        ActivateGparamOverride(19, 3);
        sp &= !CharacterHasSpEffect(20000, 98263);
    }
    if (CharacterHasSpEffect(20000, 98264)) {
        ActivateGparamOverride(20, 3);
        sp &= !CharacterHasSpEffect(20000, 98264);
    }
    if (CharacterHasSpEffect(20000, 98265)) {
        ActivateGparamOverride(21, 3);
        sp &= !CharacterHasSpEffect(20000, 98265);
    }
    if (CharacterHasSpEffect(20000, 98266)) {
        ActivateGparamOverride(22, 3);
        sp &= !CharacterHasSpEffect(20000, 98266);
    }
    if (CharacterHasSpEffect(20000, 98267)) {
        ActivateGparamOverride(23, 3);
        sp &= !CharacterHasSpEffect(20000, 98267);
    }
    if (CharacterHasSpEffect(20000, 98268)) {
        ActivateGparamOverride(24, 3);
        sp &= !CharacterHasSpEffect(20000, 98268);
    }
    if (CharacterHasSpEffect(20000, 98269)) {
        ActivateGparamOverride(25, 3);
        sp &= !CharacterHasSpEffect(20000, 98269);
    }
    WaitFor(sp || EventFlag(9024) || EventFlag(9037));
    if (!EventFlag(9024)) {
        if (!EventFlag(9037)) {
            DeactivateGparamOverride(3);
        }
    }
    WaitFixedTimeFrames(1);
    SetEventFlagID(9023, OFF);
    RestartEvent();
});

$Event(90015473, Default, function() {
    DisableNetworkSync();
    WaitFor(
        CharacterHasSpEffect(20000, 98250)
            && !EventFlag(9024)
            && !EventFlag(9037)
            && !EventFlag(9023));
    SetEventFlagID(9022, ON);
    ActivateGparamOverride(12, 3);
    WaitFor(
        !CharacterHasSpEffect(20000, 98250) || EventFlag(9024) || EventFlag(9037) || EventFlag(9023));
    if (!EventFlag(9024)) {
        if (!EventFlag(9037)) {
            if (!EventFlag(9023)) {
                DeactivateGparamOverride(3);
            }
        }
    }
    WaitFixedTimeFrames(1);
    SetEventFlagID(9022, OFF);
    RestartEvent();
});

$Event(90015474, Restart, function(entityId, eventFlagId, eventFlagId2, chrEntityId, value, value2, value3) {
    DisableNetworkSync();
    if (EventFlag(eventFlagId2)) {
        DisableCharacterInvincibility(chrEntityId);
        ClearSpEffect(chrEntityId, 98295);
        if (value != 220) {
            if (value2 != 220) {
                if (value3 != 220) {
                    EnableLockOnPoint(chrEntityId, 220);
                }
            }
        }
        if (value != 221) {
            if (value2 != 221) {
                if (value3 != 221) {
                    EnableLockOnPoint(chrEntityId, 221);
                }
            }
        }
        if (value != 222) {
            if (value2 != 222) {
                if (value3 != 222) {
                    EnableLockOnPoint(chrEntityId, 222);
                }
            }
        }
        if (value != 223) {
            if (value2 != 223) {
                if (value3 != 223) {
                    EnableLockOnPoint(chrEntityId, 223);
                }
            }
        }
        if (value != 224) {
            if (value2 != 224) {
                if (value3 != 224) {
                    EnableLockOnPoint(chrEntityId, 224);
                }
            }
        }
        if (value != 225) {
            if (value2 != 225) {
                if (value3 != 225) {
                    EnableLockOnPoint(chrEntityId, 225);
                }
            }
        }
        if (value != 226) {
            if (value2 != 226) {
                if (value3 != 226) {
                    EnableLockOnPoint(chrEntityId, 226);
                }
            }
        }
        if (value != 227) {
            if (value2 != 227) {
                if (value3 != 227) {
                    EnableLockOnPoint(chrEntityId, 227);
                }
            }
        }
        if (value != 228) {
            if (value2 != 228) {
                if (value3 != 228) {
                    EnableLockOnPoint(chrEntityId, 228);
                }
            }
        }
        if (value != 229) {
            if (value2 != 229) {
                if (value3 != 229) {
                    EnableLockOnPoint(chrEntityId, 229);
                }
            }
        }
        EndEvent();
    }
L10:
    WaitFor(EventFlag(eventFlagId));
    if (EntityInRadiusOfEntity(1028402600, entityId, 15, 1)) {
        areaFlag |= !InArea(20000, 1028402550);
    }
    if (EntityInRadiusOfEntity(1028402601, entityId, 15, 1)) {
        areaFlag |= !InArea(20000, 1028402551);
    }
    if (EntityInRadiusOfEntity(1028402602, entityId, 15, 1)) {
        areaFlag |= !InArea(20000, 1028402552);
    }
    if (EntityInRadiusOfEntity(1056402601, entityId, 15, 1)) {
        areaFlag |= !InArea(20000, 1056402550);
    }
    if (EntityInRadiusOfEntity(1056402602, entityId, 15, 1)) {
        areaFlag |= !InArea(20000, 1056402551);
    }
    if (EntityInRadiusOfEntity(1056402603, entityId, 15, 1)) {
        areaFlag |= !InArea(20000, 1056402552);
    }
    areaFlag |= EventFlag(eventFlagId2);
    WaitFor(areaFlag);
    if (!EventFlag(eventFlagId2)) {
        EnableCharacterInvincibility(chrEntityId);
        SetSpEffect(chrEntityId, 98295);
        if (value != 220) {
            if (value2 != 220) {
                if (value3 != 220) {
                    DisableLockOnPoint(chrEntityId, 220);
                }
            }
        }
        if (value != 221) {
            if (value2 != 221) {
                if (value3 != 221) {
                    DisableLockOnPoint(chrEntityId, 221);
                }
            }
        }
        if (value != 222) {
            if (value2 != 222) {
                if (value3 != 222) {
                    DisableLockOnPoint(chrEntityId, 222);
                }
            }
        }
        if (value != 223) {
            if (value2 != 223) {
                if (value3 != 223) {
                    DisableLockOnPoint(chrEntityId, 223);
                }
            }
        }
        if (value != 224) {
            if (value2 != 224) {
                if (value3 != 224) {
                    DisableLockOnPoint(chrEntityId, 224);
                }
            }
        }
        if (value != 225) {
            if (value2 != 225) {
                if (value3 != 225) {
                    DisableLockOnPoint(chrEntityId, 225);
                }
            }
        }
        if (value != 226) {
            if (value2 != 226) {
                if (value3 != 226) {
                    DisableLockOnPoint(chrEntityId, 226);
                }
            }
        }
        if (value != 227) {
            if (value2 != 227) {
                if (value3 != 227) {
                    DisableLockOnPoint(chrEntityId, 227);
                }
            }
        }
        if (value != 228) {
            if (value2 != 228) {
                if (value3 != 228) {
                    DisableLockOnPoint(chrEntityId, 228);
                }
            }
        }
        if (value != 229) {
            if (value2 != 229) {
                if (value3 != 229) {
                    DisableLockOnPoint(chrEntityId, 229);
                }
            }
        }
        if (EntityInRadiusOfEntity(1028402600, entityId, 15, 1)) {
            areaFlag2 |= InArea(20000, 1028402550);
        }
        if (EntityInRadiusOfEntity(1028402601, entityId, 15, 1)) {
            areaFlag2 |= InArea(20000, 1028402551);
        }
        if (EntityInRadiusOfEntity(1028402602, entityId, 15, 1)) {
            areaFlag2 |= InArea(20000, 1028402552);
        }
        if (EntityInRadiusOfEntity(1056402601, entityId, 15, 1)) {
            areaFlag2 |= InArea(20000, 1056402550);
        }
        if (EntityInRadiusOfEntity(1056402602, entityId, 15, 1)) {
            areaFlag2 |= InArea(20000, 1056402551);
        }
        if (EntityInRadiusOfEntity(1056402603, entityId, 15, 1)) {
            areaFlag2 |= InArea(20000, 1056402552);
        }
        areaFlag2 |= EventFlag(eventFlagId2);
        WaitFor(areaFlag2);
    }
L0:
    DisableCharacterInvincibility(chrEntityId);
    ClearSpEffect(chrEntityId, 98295);
    if (value != 220) {
        if (value2 != 220) {
            if (value3 != 220) {
                EnableLockOnPoint(chrEntityId, 220);
            }
        }
    }
    if (value != 221) {
        if (value2 != 221) {
            if (value3 != 221) {
                EnableLockOnPoint(chrEntityId, 221);
            }
        }
    }
    if (value != 222) {
        if (value2 != 222) {
            if (value3 != 222) {
                EnableLockOnPoint(chrEntityId, 222);
            }
        }
    }
    if (value != 223) {
        if (value2 != 223) {
            if (value3 != 223) {
                EnableLockOnPoint(chrEntityId, 223);
            }
        }
    }
    if (value != 224) {
        if (value2 != 224) {
            if (value3 != 224) {
                EnableLockOnPoint(chrEntityId, 224);
            }
        }
    }
    if (value != 225) {
        if (value2 != 225) {
            if (value3 != 225) {
                EnableLockOnPoint(chrEntityId, 225);
            }
        }
    }
    if (value != 226) {
        if (value2 != 226) {
            if (value3 != 226) {
                EnableLockOnPoint(chrEntityId, 226);
            }
        }
    }
    if (value != 227) {
        if (value2 != 227) {
            if (value3 != 227) {
                EnableLockOnPoint(chrEntityId, 227);
            }
        }
    }
    if (value != 228) {
        if (value2 != 228) {
            if (value3 != 228) {
                EnableLockOnPoint(chrEntityId, 228);
            }
        }
    }
    if (value != 229) {
        if (value2 != 229) {
            if (value3 != 229) {
                EnableLockOnPoint(chrEntityId, 229);
            }
        }
    }
    EndIf(EventFlag(eventFlagId2));
    RestartEvent();
});

$Event(90015475, Default, function(entityId, chrEntityId) {
    EndIf(!EventFlag(7800));
    EndIf(!EventFlag(7604));
    EndIf(chrEntityId == 0);
    WaitFor(
        ((EntityInRadiusOfEntity(1028402600, entityId, 15, 1)
            || EntityInRadiusOfEntity(1056402601, entityId, 15, 1))
            || (EntityInRadiusOfEntity(1028402601, entityId, 15, 1)
                || EntityInRadiusOfEntity(1056402602, entityId, 15, 1))
            || (EntityInRadiusOfEntity(1028402602, entityId, 15, 1)
                || EntityInRadiusOfEntity(1056402603, entityId, 15, 1)))
            && IsPlayMode(2));
    WaitFor(
        !CharacterHasSpEffect(chrEntityId, 98380)
            && !CharacterHasSpEffect(chrEntityId, 98381)
            && !CharacterHasSpEffect(chrEntityId, 98382)
            && !CharacterHasSpEffect(chrEntityId, 98383)
            && !CharacterHasSpEffect(chrEntityId, 98384)
            && !CharacterHasSpEffect(chrEntityId, 98385)
            && !CharacterHasSpEffect(chrEntityId, 98386)
            && !CharacterHasSpEffect(chrEntityId, 98387)
            && !CharacterHasSpEffect(chrEntityId, 98388)
            && !CharacterHasSpEffect(chrEntityId, 98389));
    if (CharacterHasSpEffect(chrEntityId, 877551)) {
        SetSpEffect(chrEntityId, 98380);
        Goto(S0);
    }
    GotoIf(S1, !CharacterHasSpEffect(chrEntityId, 877561));
    SetSpEffect(chrEntityId, 98385);
S0:
    Goto(S2);
S1:
    Goto(S3);
S2:
    SetSpEffect(chrEntityId, 98370);
    Goto(L2);
S3:
    if (CharacterHasSpEffect(chrEntityId, 877552)) {
        SetSpEffect(chrEntityId, 98381);
    } else {
        GotoIf(S4, !CharacterHasSpEffect(chrEntityId, 877562));
        SetSpEffect(chrEntityId, 98386);
    }
    Goto(S5);
S4:
    Goto(S6);
S5:
    SetSpEffect(chrEntityId, 98371);
    Goto(L2);
S6:
    if (CharacterHasSpEffect(chrEntityId, 877553)) {
        SetSpEffect(chrEntityId, 98382);
    } else {
        GotoIf(S7, !CharacterHasSpEffect(chrEntityId, 877563));
        SetSpEffect(chrEntityId, 98387);
    }
    Goto(S8);
S7:
    Goto(S9);
S8:
    SetSpEffect(chrEntityId, 98372);
    Goto(L2);
S9:
    if (CharacterHasSpEffect(chrEntityId, 877554)) {
        SetSpEffect(chrEntityId, 98383);
    } else {
        GotoIf(S10, !CharacterHasSpEffect(chrEntityId, 877564));
        SetSpEffect(chrEntityId, 98388);
    }
    Goto(S11);
S10:
    Goto(S12);
S11:
    SetSpEffect(chrEntityId, 98373);
    Goto(L2);
S12:
    if (CharacterHasSpEffect(chrEntityId, 877555)) {
        SetSpEffect(chrEntityId, 98384);
    } else {
        GotoIf(S13, !CharacterHasSpEffect(chrEntityId, 877565));
        SetSpEffect(chrEntityId, 98389);
    }
    Goto(S14);
S13:
    Goto(S15);
S14:
    SetSpEffect(chrEntityId, 98374);
    Goto(L2);
S15:
    EndEvent();
L2:
    WaitFor(ElapsedSeconds(1));
    RestartEvent();
});

$Event(90015476, Default, function(chrEntityId, entityId) {
    EndIf(!IsMapVariation(2));
    spArea &= CharacterHasSpEffect(chrEntityId, 508);
    if (EntityInRadiusOfEntity(1028402600, entityId, 15, 1)) {
        spArea &= !InArea(chrEntityId, 1028402550);
    }
    if (EntityInRadiusOfEntity(1028402601, entityId, 15, 1)) {
        spArea &= !InArea(chrEntityId, 1028402551);
    }
    if (EntityInRadiusOfEntity(1028402602, entityId, 15, 1)) {
        spArea &= !InArea(chrEntityId, 1028402552);
    }
    if (EntityInRadiusOfEntity(1056402601, entityId, 15, 1)) {
        spArea &= !InArea(chrEntityId, 1056402550);
    }
    if (EntityInRadiusOfEntity(1056402602, entityId, 15, 1)) {
        spArea &= !InArea(chrEntityId, 1056402551);
    }
    if (EntityInRadiusOfEntity(1056402603, entityId, 15, 1)) {
        spArea &= !InArea(chrEntityId, 1056402552);
    }
    WaitFor(spArea);
    SetSpEffect(chrEntityId, 509);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(90015477, Restart, function() {
    DisableNetworkSync();
    EndIf(!EventFlag(7604));
    if (!InArea(20000, 1039402550) && !InArea(20000, 1047402550)) {
        SetSpEffect(20000, 98252);
        SetSpEffect(20000, 6999602);
        SetSpEffect(20000, 6999603);
    }
    WaitFor(EventFlag(9052));
    SetSpEffect(20000, 98252);
    SetSpEffect(20000, 6999602);
    SetSpEffect(20000, 6999603);
});

$Event(90015478, Default, function(chrEntityId, eventFlagId) {
    EndIf(!IsMapVariation(2));
    EndIf(EventFlag(eventFlagId));
    WaitFor(CharacterHPValue(chrEntityId) <= 1);
    DisableCharacterInvincibility(chrEntityId);
    ForceCharacterDeath(chrEntityId, false);
});

$Event(90015500, Restart, function(areaEntityId) {
    EndIf(!EventFlag(7811));
    WaitFor(InArea(20000, areaEntityId));
    SetWorldMapPointFlag(8, OFF);
});

$Event(90015501, Restart, function(areaEntityId, eventFlagId) {
    EndIf(!EventFlag(7811));
    WaitFor(InArea(20000, areaEntityId));
    SetNetworkconnectedEventFlagID(eventFlagId, OFF);
});

$Event(90025000, Default, function(areaEntityId, eventFlagId, gparamSubId) {
    DisableNetworkSync();
    EndIf(IsHotSpot());
    WaitFor(InArea(20000, areaEntityId) && !EventFlag(9024) && !EventFlag(9037));
    SetEventFlagID(eventFlagId, ON);
    WaitFor(ElapsedFrames(1));
    if (!EventFlag(9025)) {
        ActivateGparamOverride(gparamSubId, 3);
    }
    WaitFor(
        !InArea(20000, areaEntityId)
            || !EventFlag(eventFlagId)
            || EventFlag(9024)
            || EventFlag(9037));
    SetEventFlagID(eventFlagId, OFF);
    WaitFor(ElapsedFrames(1));
    if (!EventFlag(9037)) {
        if (!EventFlag(9024)) {
            if (!EventFlag(9025)) {
                DeactivateGparamOverride(3);
            }
        }
    }
    RestartEvent();
});

$Event(90025010, Default, function(areaEntityId, eventFlagId, dummy) {
    DisableNetworkSync();
    EndIf(!IsHotSpot());
    WaitFor(InArea(20000, areaEntityId));
    SetEventFlagID(eventFlagId, ON);
    ActivateGparamUnknown201213(dummy, 3);
    WaitFor(!InArea(20000, areaEntityId) || !EventFlag(eventFlagId));
    SetEventFlagID(eventFlagId, OFF);
    DeactivateGparamUnknown201214(3);
    RestartEvent();
});

$Event(90035000, Restart, function(eventFlagId) {
    EndIf(!EventFlag(7700) && !EventFlag(7720));
    EndIf(EventFlag(8035));
    WaitFor(EventFlag(8035));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90035001, Restart, function(chrEntityId) {
    EndIf(!EventFlag(7700) && !EventFlag(7720));
    EndIf(EventFlag(8035));
    WaitFor(EventFlag(8035));
    WaitFixedTimeSeconds(1);
    SetSpEffect(chrEntityId, 99180);
    SetSpEffect(chrEntityId, 99181);
});

$Event(90035010, Default, function(eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(!EventFlag(7701) && !EventFlag(7721));
    if (!EventFlag(7721)) {
        EndIf(EventFlag(7505));
    }
    EndIf(EventFlag(8042));
    WaitFor(EventFlag(8040));
    if (IsPlayerNo(1)) {
        WaitFor(ElapsedSeconds(0));
    }
    if (IsPlayerNo(2)) {
        WaitFor(ElapsedSeconds(1.5));
    }
    if (IsPlayerNo(3)) {
        WaitFor(ElapsedSeconds(3));
    }
    if (!EventFlag(9999)) {
        EndIf(!(PlayAreaCurrentTimeInRange(0, 0, 0, 20, 29, 59) && InsidePlayArea(0, -75)));
    }
    EndIf(EventFlag(8042) && !EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    if (!EventFlag(7721)) {
        EndIf(EventFlag(7505));
    }
    if (EventFlagAndRandomCondition(6001, 0.3)) {
        SetNetworkconnectedEventFlagID(8042, ON);
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
        SetWorldMapPointFlag(0, ON);
        SetWorldMapPointFlag(4, ON);
        EndEvent();
    }
    WaitFor(EventFlag(8041));
    if (IsPlayerNo(1)) {
        WaitFor(ElapsedSeconds(0));
    }
    if (IsPlayerNo(2)) {
        WaitFor(ElapsedSeconds(1.5));
    }
    if (IsPlayerNo(3)) {
        WaitFor(ElapsedSeconds(3));
    }
    EndIf(EventFlag(8042) && !EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    if (!EventFlag(7721)) {
        EndIf(EventFlag(7505));
    }
    SetNetworkconnectedEventFlagID(8042, ON);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetWorldMapPointFlag(0, ON);
    SetWorldMapPointFlag(4, ON);
});

$Event(90035011, Default, function(chrEntityId, assetEntityId, entityId, entityId2, assetEntityId2, hitEntityId, eventFlagId) {
    EndIf(!EventFlag(7701) && !EventFlag(7721));
    EndIf(EventFlag(8042) && !EventFlag(eventFlagId));
    if (EventFlag(8043)) {
        CreateBulletOwner(chrEntityId);
        SpawnMapSFX(entityId);
        SpawnMapSFX(entityId2);
        DisableAsset(assetEntityId);
        DisableAsset(assetEntityId2);
        EndEvent();
    }
    CreateBulletOwner(chrEntityId);
    WaitFor(EventFlag(8042));
    EndIf(EventFlag(8042) && !EventFlag(eventFlagId));
    RecordUserDispLog(11160, chrEntityId, LogObjectType.None, -1);
    ForceAnimationPlayback(assetEntityId, 0, true, false, false);
    WaitFixedTimeFrames(10);
    if (!EventFlag(20700200)) {
        ForceAnimationPlayback(assetEntityId, 1, false, false, false);
    } else {
        ForceAnimationPlayback(assetEntityId, 1000001, true, false, false);
    }
    WaitFor(ElapsedSeconds(9));
    ShootBullet(chrEntityId, chrEntityId, -1, 190000, 0, 0, 0);
    SpawnOneshotSFX(TargetEntityType.Asset, assetEntityId, 200, 807060);
    SpawnMapSFX(entityId);
    SpawnMapSFX(entityId2);
    WaitFixedTimeSeconds(0.1);
    DisableAsset(assetEntityId2);
    if (hitEntityId != 0) {
        DisableHit(hitEntityId);
    }
    SetNetworkconnectedEventFlagID(8043, ON);
    WaitFixedTimeSeconds(3.5);
    DisableAsset(assetEntityId);
    EndEvent();
});

$Event(90035012, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    if (!EventFlag(7701) && !EventFlag(7721)) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        EndEvent();
    }
    if (EventFlag(8042) && !EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        EndEvent();
    }
    if (EventFlag(8021)) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        EndEvent();
    }
    EndIf(EventFlag(8044));
    DisableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    WaitFor(EventFlag(8043));
    EndIf(!EventFlag(eventFlagId));
    EnableCharacter(chrEntityId);
    EnableCharacterAI(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 30009, true, false, false);
    WaitFor(ElapsedSeconds(5) && EntityInRadiusOfEntity(chrEntityId, 20000, 20, 1));
    ForceAnimationPlayback(chrEntityId, 20009, false, true, false);
    EnableCharacterAI(chrEntityId);
    SetNetworkconnectedEventFlagID(8044, ON);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    EndEvent();
});

$Event(90035013, Default, function(eventFlagId, chrEntityId, eventFlagId2) {
    EndIf(!EventFlag(7701) && !EventFlag(7721));
    EndIf(EventFlag(8042) && !EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(8043));
    EndIf(!EventFlag(eventFlagId2));
    WaitFor(CharacterHPValue(chrEntityId) <= 0);
    WaitFixedTimeSeconds(5);
    PlaySE(chrEntityId, SoundType.SFX, 888880000);
    DisplayTextEffectId(1020);
    RecordUserDispLog(11161, chrEntityId, LogObjectType.None, -1);
    IncrementTeamBossesKilled(1);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetNetworkconnectedEventFlagID(8021, ON);
    SetWorldMapPointFlag(4, OFF);
    SetWorldMapPointFlag(2, ON);
    EndEvent();
});

$Event(90035020, Default, function(eventFlagId) {
    EndIf(!EventFlag(7702) && !EventFlag(7722));
    EndIf(EventFlag(8047));
    WaitFor(EventFlag(8045));
    EndIf(EventFlag(8047) && !EventFlag(eventFlagId));
    if (PlayerIsInOwnWorld() && EventFlagAndRandomCondition(6001, 0.3)) {
        if (PlayerIsInOwnWorld()) {
            SetNetworkconnectedEventFlagID(8047, ON);
            SetNetworkconnectedEventFlagID(eventFlagId, ON);
        }
        EndEvent();
    }
    WaitFor(EventFlag(8046));
    EndIf(EventFlag(8047) && !EventFlag(eventFlagId));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(8047, ON);
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
    }
});

$Event(90035021, Restart, function(assetEntityId, chrEntityId, eventFlagId) {
    if (!EventFlag(7702) && !EventFlag(7722)) {
        DisableAsset(assetEntityId);
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (EventFlag(8047) && !EventFlag(eventFlagId)) {
        DisableAsset(assetEntityId);
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    DisableAsset(assetEntityId);
    DisableCharacter(chrEntityId);
    WaitFor(EventFlag(8047));
    if (!EventFlag(eventFlagId)) {
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    EnableAsset(assetEntityId);
    EnableCharacter(chrEntityId);
});

$Event(90035022, Restart, function(chrEntityId, eventFlagId) {
    DisableNetworkSync();
    EndIf(!EventFlag(7702) && !EventFlag(7722));
    EndIf(EventFlag(8047) && !EventFlag(eventFlagId));
    if (EventFlag(9030)) {
        SetWorldMapPointFlag(0, OFF);
        SetWorldMapPointFlag(4, OFF);
        SetSpEffect(chrEntityId, 99841);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(8047));
    EndIf(!EventFlag(eventFlagId));
    SetWorldMapPointFlag(0, ON);
    SetWorldMapPointFlag(4, ON);
    SetSpEffect(chrEntityId, 99840);
    WaitFor(EventFlag(9030));
    SetWorldMapPointFlag(0, OFF);
    SetWorldMapPointFlag(4, OFF);
    SetSpEffect(chrEntityId, 99841);
});

$Event(90035030, Default, function(assetEntityId, eventFlagId) {
    if (!EventFlag(eventFlagId)) {
        DisableAsset(assetEntityId);
        EndEvent();
    }
    EnableAsset(assetEntityId);
    ForceAnimationPlayback(assetEntityId, 0, true, false, false);
    WaitFor(EventFlag(8023));
    ForceAnimationPlayback(assetEntityId, 1, true, false, false);
    EndEvent();
});

$Event(90035031, Default, function(chrEntityId, eventFlagId) {
    if (!EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId);
        EndEvent();
    }
    if (EventFlag(8023)) {
        DisableCharacter(chrEntityId);
        EndEvent();
    }
    EndEvent();
});

$Event(90035032, Default, function(entityId, chrEntityId, eventFlagId) {
    EndIf(!EventFlag(eventFlagId));
    EndIf(EventFlag(8023));
    WaitFor(CharacterRatioDead(chrEntityId));
    SetNetworkconnectedEventFlagID(8023, ON);
    RecordUserDispLog(10120, entityId, LogObjectType.None, -1);
    EndEvent();
});

$Event(90035033, End, function(entityId, entityId2, eventFlagId) {
    EndIf(!EventFlag(eventFlagId));
    EndIf(EventFlag(8050));
    WaitFor(EntityInRadiusOfEntity(20000, entityId2, 30, 1));
    SetNetworkconnectedEventFlagID(8050, ON);
    RecordUserDispLog(10119, entityId, LogObjectType.None, -1);
    EndEvent();
});

$Event(90035040, Default, function(chrEntityId, areaEntityId, entityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, entityId2) {
    EndIf(!EventFlag(7704) && !EventFlag(7724));
    EndIf(EventFlag(8056) && !EventFlag(chrEntityId));
    EndIf(EventFlag(8024));
    if (EventFlag(chrEntityId)) {
        SpawnMapSFX(entityId);
        CreateBulletOwner(chrEntityId);
        ShootBullet(chrEntityId, entityId, -1, 806800000, 0, 0, 0);
        ShootBullet(chrEntityId, chrEntityId2, -1, 806800000, 0, 0, 0);
        ShootBullet(chrEntityId, chrEntityId3, -1, 806800000, 0, 0, 0);
        SetSpEffect(chrEntityId2, 0);
        SetSpEffect(chrEntityId3, 0);
        SetSpEffect(chrEntityId4, 0);
        SetSpEffect(chrEntityId5, 0);
        EndEvent();
    }
    WaitFor(EventFlag(8055));
    WaitFor(InArea(entityId2, areaEntityId) || EventFlag(8056));
    if (!EventFlag(9999)) {
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            WaitFixedTimeSeconds(1);
            RestartEvent();
        }
L1:
        NoOp();
    }
L0:
    EndIf(EventFlag(8056) && !EventFlag(chrEntityId));
    SpawnMapSFX(entityId);
    CreateBulletOwner(chrEntityId);
    ShootBullet(chrEntityId, entityId, -1, 806800000, 0, 0, 0);
    ShootBullet(chrEntityId, chrEntityId2, -1, 806800000, 0, 0, 0);
    ShootBullet(chrEntityId, chrEntityId3, -1, 806800000, 0, 0, 0);
    SetSpEffect(chrEntityId2, 0);
    SetSpEffect(chrEntityId3, 0);
    SetSpEffect(chrEntityId4, 0);
    SetSpEffect(chrEntityId5, 0);
    SetNetworkconnectedEventFlagID(8056, ON);
    SetNetworkconnectedEventFlagID(chrEntityId, ON);
});

$Event(90035041, Default, function(eventFlagId, entityId, entityId2, chrEntityId, chrEntityId2, chrEntityId3) {
    EndIf(!EventFlag(7704) && !EventFlag(7724));
    EndIf(EventFlag(8056) && !EventFlag(eventFlagId));
    if (EventFlag(8024)) {
        DeleteMapSFX(entityId, false);
        DeleteMapSFX(entityId2, false);
        SetSpEffect(chrEntityId, 0);
        SetSpEffect(chrEntityId2, 0);
        SetSpEffect(chrEntityId3, 0);
        EndEvent();
    }
    WaitFor(EventFlag(8056));
    EndIf(!EventFlag(eventFlagId));
    WaitFor(EventFlag(8057));
});

$Event(90035042, Default, function(chrEntityId, entityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, mapVariationId, chrEntityId6) {
    if (!IsMapVariation(mapVariationId)) {
        DisableCharacter(chrEntityId6);
        DisableCharacterCollision(chrEntityId6);
        EndEvent();
    }
    if (!EventFlag(7704) && !EventFlag(7724)) {
        DisableCharacter(chrEntityId6);
        DisableCharacterCollision(chrEntityId6);
        EndEvent();
    }
    if (EventFlag(8056) && !EventFlag(chrEntityId)) {
        DisableCharacter(chrEntityId6);
        DisableCharacterCollision(chrEntityId6);
        EndEvent();
    }
    if (EventFlag(8024)) {
        DisableCharacter(chrEntityId6);
        DisableCharacterCollision(chrEntityId6);
        EndEvent();
    }
    EndIf(EventFlag(8057));
    DisableCharacter(chrEntityId6);
    DisableCharacterCollision(chrEntityId6);
    WaitFor(EventFlag(8056));
    EndIf(!EventFlag(chrEntityId));
    ForceRatioAnimationPlayback(chrEntityId6, 30027, true, false, false);
    WaitFor(EntityInRadiusOfEntity(20000, chrEntityId6, 20, 1) || EventFlag(8057));
    SpawnMapSFX(entityId);
    CreateBulletOwner(chrEntityId);
    ShootBullet(chrEntityId, entityId, -1, 806800000, 0, 0, 0);
    ShootBullet(chrEntityId, chrEntityId2, -1, 806800000, 0, 0, 0);
    ShootBullet(chrEntityId, chrEntityId3, -1, 806800000, 0, 0, 0);
    SetSpEffect(chrEntityId2, 0);
    SetSpEffect(chrEntityId3, 0);
    SetSpEffect(chrEntityId4, 0);
    SetSpEffect(chrEntityId5, 0);
    PlaySE(chrEntityId, SoundType.EnvironmentalSound, 600080100);
    WaitFor(ElapsedSeconds(1));
    EnableCharacter(chrEntityId6);
    EnableCharacterCollision(chrEntityId6);
    ForceRatioAnimationPlayback(chrEntityId6, 20027, false, false, false);
    SetNetworkconnectedEventFlagID(8057, ON);
});

$Event(90035043, Default, function(eventFlagId, mapVariationId, chrEntityId, entityId) {
    EndIf(!IsMapVariation(mapVariationId));
    EndIf(!EventFlag(7704) && !EventFlag(7724));
    EndIf(EventFlag(8056) && !EventFlag(eventFlagId));
    EndIf(EventFlag(8024));
    WaitFor(EventFlag(8056));
    EndIf(!EventFlag(eventFlagId));
    WaitFor(EventFlag(8057));
    WaitFor(CharacterRatioDead(chrEntityId, GreaterOrEqual, 0.9));
    ForceCharacterDeath(chrEntityId, true);
    DeleteMapSFX(entityId, true);
    WaitFor(ElapsedSeconds(3));
    SetNetworkconnectedEventFlagID(8024, ON);
});

$Event(90035044, Restart, function(chrEntityId, chrEntityId2, entityId, entityId2, entityId3, entityId4, entityId5, entityId6) {
    EndIf(!EventFlag(7704) && !EventFlag(7724));
    EndIf(EventFlag(8056) && !EventFlag(chrEntityId));
    EndIf(EventFlag(8024));
    WaitFor(EventFlag(8056));
    EndIf(!EventFlag(chrEntityId));
    WaitFor(EventFlag(8057));
    CreateBulletOwner(chrEntityId);
    ShootBullet(chrEntityId, entityId, -1, 806800000, 0, 0, 0);
    ShootBullet(chrEntityId, entityId2, -1, 806800000, 0, 0, 0);
    ShootBullet(chrEntityId, entityId3, -1, 806800000, 0, 0, 0);
    ShootBullet(chrEntityId, entityId4, -1, 806800000, 0, 0, 0);
    ShootBullet(chrEntityId, entityId5, -1, 806800000, 0, 0, 0);
    ShootBullet(chrEntityId, entityId6, -1, 806800000, 0, 0, 0);
    SetSpEffect(chrEntityId2, 0);
    WaitFor(ElapsedSeconds(1));
    if (EventFlag(8024)) {
        EndEvent();
    }
    RestartEvent();
});

$Event(90035045, Default, function(eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(EventFlag(8056));
    EndIf(EventFlag(8058));
    EndIf(EventFlag(8059));
    WaitFor(EventFlag(8056) || EventFlag(eventFlagId));
    EndIf(EventFlag(8056));
    EndIf(!MapHasPermissionToUpdate(false, 0, 0, 0, 0));
    cond = EventFlagAndRandomCondition(6001, 0.2);
    if (cond) {
        SetNetworkconnectedEventFlagID(8058, ON);
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
        SetNetworkconnectedEventFlagID(8055, ON);
        SetNetworkconnectedEventFlagID(8056, ON);
        WaitFixedTimeFrames(1);
        SetNetworkconnectedEventFlagID(8057, ON);
        EndEvent();
    }
    if (!cond) {
        SetNetworkconnectedEventFlagID(8059, ON);
        EndEvent();
    }
});

$Event(90035046, Default, function(eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(8057));
    WaitFor(EventFlag(8057));
    EndIf(EventFlag(8058));
    EndIf(!EventFlag(eventFlagId3));
    UploadSmallBaseEvent(eventFlagId);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90035047, Default, function(eventFlagId, chrEntityId) {
    EndIf(EventFlag(8024));
    WaitFor(EventFlag(8057));
    EndIf(!EventFlag(8058));
    EndIf(!EventFlag(eventFlagId));
    EndIf(CharacterHasSpEffect(chrEntityId, 99185, GreaterOrEqual, 1));
    EndIf(CharacterHasSpEffect(chrEntityId, 99186, GreaterOrEqual, 1));
    WaitFixedTimeSeconds(2);
    SetSpEffect(chrEntityId, 99185);
});

$Event(90035048, Default, function(eventFlagId, eventFlagId2, entityId) {
    EndIf(EventFlag(8024));
    EndIf(EventFlag(8056) && !EventFlag(eventFlagId2));
    if (!EventFlag(8057)) {
        WaitFor(EventFlag(8057));
        EndIf(!EventFlag(eventFlagId2));
        SetWorldMapPointFlag(0, ON);
        SetWorldMapPointFlag(2, ON);
        if (!EventFlag(8058)) {
            RecordUserDispLog(11170, entityId, LogObjectType.None, -1);
        }
        if (EventFlag(8058)) {
            RecordUserDispLog(11171, entityId, LogObjectType.None, -1);
        }
        WaitFor(ElapsedSeconds(3));
        if (EventFlag(8058)) {
            RecordUserDispLogUnknown2003119(11174, 11173, eventFlagId, 0);
        }
    }
L0:
    WaitFor(EventFlag(8024));
    DisplayTextEffectId(2200);
    SetWorldMapPointFlag(0, OFF);
    SetWorldMapPointFlag(2, OFF);
    RecordUserDispLog(11172, 20000, LogObjectType.None, -1);
});

$Event(90035050, Default, function(chrEntityId, eventFlagId) {
    DisableNetworkSync();
    EndIf(EventFlag(8062));
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    hpDmg = CharacterHPValue(20000) <= 0 && HasDamageType(20000, chrEntityId, DamageType.Any);
    flagHpDmg = EventFlag(8062) && !hpDmg;
    WaitFor(hpDmg || flagHpDmg);
    EndIf(flagHpDmg.Passed);
    WaitFor(CharacterHasTeamType(20000, TeamType.Unknown77) || CharacterDead(20000));
    WaitFor(!CharacterHasTeamType(20000, TeamType.Unknown77));
    if (CharacterDead(20000)) {
        EndIf(CharacterHPValue(chrEntityId) <= 0);
        SetEventFlagID(9056, ON);
        WaitFor(CharacterDead(20000, Equal, 0) || CharacterHPValue(chrEntityId) <= 0);
        WaitFor(ElapsedSeconds(3) || CharacterHPValue(chrEntityId) <= 0);
        if (CharacterHPValue(chrEntityId) <= 0) {
            SetEventFlagID(9056, OFF);
        }
        EndEvent();
    }
L0:
    RestartEvent();
});

$Event(90035070, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId) {
    if (!EventFlag(7707)) {
        if (!EventFlag(7727)) {
            DisableCharacter(chrEntityId);
            SetNetworkUpdateRate(chrEntityId, false, CharacterUpdateFrequency.NoUpdate);
            DeleteAssetfollowingSFX(assetEntityId, true);
            SetCharacterBackreadState(chrEntityId2, true);
            EndEvent();
        }
    }
    if (!EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId);
        SetNetworkUpdateRate(chrEntityId, false, CharacterUpdateFrequency.NoUpdate);
        DeleteAssetfollowingSFX(assetEntityId, true);
        SetCharacterBackreadState(chrEntityId2, true);
        EndEvent();
    }
    if (EventFlag(8072)) {
        DisableCharacter(chrEntityId);
        SetNetworkUpdateRate(chrEntityId, false, CharacterUpdateFrequency.NoUpdate);
        DeleteAssetfollowingSFX(assetEntityId, true);
        EndEvent();
    }
    DisableCharacter(chrEntityId);
    SetNetworkUpdateRate(chrEntityId, false, CharacterUpdateFrequency.NoUpdate);
    DeleteAssetfollowingSFX(assetEntityId, true);
    WaitFor(EventFlag(8070) || EventFlag(8072));
    EndIf(EventFlag(8072));
    CreateAssetfollowingSFX(assetEntityId, 100, 806740);
    if (InsidePlayArea(chrEntityId, 0)) {
        EnableCharacter(chrEntityId);
        SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
        SetSpEffect(chrEntityId, 16630);
    }
    cond = !InsidePlayArea(chrEntityId, 0);
    WaitFor(!EventFlag(8070) || EventFlag(8072) || cond);
    if (cond) {
        DisableCharacter(chrEntityId);
        SetNetworkUpdateRate(chrEntityId, false, CharacterUpdateFrequency.NoUpdate);
        WaitFor(!EventFlag(8070) || EventFlag(8072));
    }
L0:
    RestartEvent();
});

$Event(90035071, Default, function(chrEntityId, eventFlagId) {
    if (!EventFlag(7707)) {
        if (!EventFlag(7727)) {
            SetNetworkconnectedEventFlagID(8070, OFF);
            EndEvent();
        }
    }
    EndIf(!EventFlag(eventFlagId));
    if (EventFlag(8072)) {
        SetNetworkconnectedEventFlagID(8070, OFF);
        EndEvent();
    }
    SetNetworkconnectedEventFlagID(8070, ON);
    WaitFor(ElapsedSeconds(7) || !EventFlag(8070) || EventFlag(8072));
    SetNetworkconnectedEventFlagID(8070, OFF);
    WaitFor(ElapsedSeconds(5) || EventFlag(8070) || EventFlag(8072));
    RestartEvent();
    SetSpEffect(chrEntityId, 0);
});

$Event(90035072, Default, function(chrEntityId) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    DisableCharacterGravity(chrEntityId);
});

$Event(90035073, Default, function(eventFlagId) {
    if (!EventFlag(7707)) {
        if (!EventFlag(7727)) {
            EndEvent();
        }
    }
    EndIf(!EventFlag(eventFlagId));
    EndIf(EventFlag(8071));
    WaitFor(CharacterHasSpEffect(20000, 16611));
    WaitFor(ElapsedSeconds(1));
    SetNetworkconnectedEventFlagID(8071, ON);
});

$Event(90035074, Default, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2) {
    if (!EventFlag(7707)) {
        if (!EventFlag(7727)) {
            EndEvent();
        }
    }
    EndIf(!EventFlag(eventFlagId2));
    EndIf(EventFlag(8027));
    WaitFor(CharacterRatioDead(chrEntityId) || EventFlag(8072));
    SetNetworkconnectedEventFlagID(8072, ON);
    WaitFor(ElapsedSeconds(3));
    EndIf(EventFlag(8027));
    ForceCharacterTreasure(chrEntityId2);
    RecordUserDispLog(11181, 20000, LogObjectType.None, -1);
    SetNetworkconnectedEventFlagID(8027, ON);
    SetNetworkconnectedEventFlagID(eventFlagId, OFF);
});

$Event(90035075, Default, function(eventFlagId, assetEntityId) {
    DisableNetworkSync();
    if (!((EventFlag(7707) || EventFlag(7727)) && EventFlag(eventFlagId) && !EventFlag(8027))) {
        DeleteAssetfollowingSFX(assetEntityId, false);
        DisableAsset(assetEntityId);
        ChangeAssetEnableStateUnknown200510(assetEntityId, Disabled, 0);
        EndEvent();
    }
    ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 1);
    EnableAsset(assetEntityId);
    CreateAssetfollowingSFX(assetEntityId, 100, 807520);
    WaitFor(EventFlag(8027));
    DeleteAssetfollowingSFX(assetEntityId, true);
    WaitFixedTimeSeconds(7);
    DisableAsset(assetEntityId);
    ChangeAssetEnableStateUnknown200510(assetEntityId, Disabled, 0);
});

$Event(90035076, Default, function(eventFlagId, assetEntityId) {
    DisableNetworkSync();
    if (!((EventFlag(7707) || EventFlag(7727)) && EventFlag(eventFlagId) && !EventFlag(8027))) {
        DeleteAssetfollowingSFX(assetEntityId, false);
        DisableAsset(assetEntityId);
        ChangeAssetEnableStateUnknown200510(assetEntityId, Disabled, 0);
        EndEvent();
    }
    DeleteAssetfollowingSFX(assetEntityId, true);
    WaitFor(EventFlag(8027) || EventFlag(9036));
    if (!EventFlag(8027)) {
        CreateAssetfollowingSFX(assetEntityId, 100, 807521);
        WaitFor(EventFlag(8027) || !EventFlag(9036));
        DeleteAssetfollowingSFX(assetEntityId, true);
        RestartIf(!EventFlag(8027));
        WaitFixedTimeSeconds(3);
    }
L0:
    DisableAsset(assetEntityId);
    ChangeAssetEnableStateUnknown200510(assetEntityId, Disabled, 0);
});

$Event(90035077, Default, function(eventFlagId, entityId, entityId2, entityId3, entityId4) {
    DisableNetworkSync();
    if (!((EventFlag(7707) || EventFlag(7727)) && EventFlag(eventFlagId) && !EventFlag(8027))) {
        DeleteMapSFX(entityId, false);
        DeleteMapSFX(entityId2, false);
        DeleteMapSFX(entityId3, false);
        DeleteMapSFX(entityId4, false);
        if (EventFlag(1044360220)) {
            DisableAsset(1044361290);
        }
        if (EventFlag(1044380230)) {
            DisableAsset(1044381290);
        }
        if (EventFlag(1046400230)) {
            DisableAsset(1046401290);
        }
        if (EventFlag(1038400230)) {
            DisableAsset(1038401290);
        }
        EndEvent();
    }
    SpawnMapSFX(entityId);
    SpawnMapSFX(entityId2);
    SpawnMapSFX(entityId3);
    SpawnMapSFX(entityId4);
    if (EventFlag(1044360220)) {
        EnableAsset(1044361290);
    }
    if (EventFlag(1044380230)) {
        EnableAsset(1044381290);
    }
    if (EventFlag(1046400230)) {
        EnableAsset(1046401290);
    }
    if (EventFlag(1038400230)) {
        EnableAsset(1038401290);
    }
    WaitFor(EventFlag(8027) || EventFlag(8073));
    DeleteMapSFX(entityId, true);
    DeleteMapSFX(entityId2, true);
    DeleteMapSFX(entityId3, true);
    DeleteMapSFX(entityId4, true);
    if (EventFlag(1044360220)) {
        DisableAsset(1044361290);
    }
    if (EventFlag(1044380230)) {
        DisableAsset(1044381290);
    }
    if (EventFlag(1046400230)) {
        DisableAsset(1046401290);
    }
    if (EventFlag(1038400230)) {
        DisableAsset(1038401290);
    }
    EndIf(EventFlag(8027));
    WaitFor(!EventFlag(8073));
    RestartEvent();
});

$Event(90035078, Default, function(eventFlagId, assetEntityId) {
    if (!((EventFlag(7707) || EventFlag(7727)) && EventFlag(eventFlagId) && !EventFlag(8027))) {
        DisableAsset(assetEntityId);
        ChangeAssetEnableStateUnknown200510(assetEntityId, Disabled, 0);
        EndEvent();
    }
    ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 1);
    EnableAsset(assetEntityId);
});

$Event(90035079, Default, function(eventFlagId, areaEntityId, entityId) {
    DisableNetworkSync();
    EndIf(!((EventFlag(7707) || EventFlag(7727)) && EventFlag(eventFlagId) && !EventFlag(8027)));
    WaitFor((InArea(20000, areaEntityId) && !EventFlag(8073)) || EventFlag(8027));
    EndIf(EventFlag(8027));
    SetEventFlagID(9035, ON);
    SetSpEffect(20000, 99165);
    SetSpEffect(20000, 99167);
    PlaySE(entityId, SoundType.SFX, 806740);
    WaitFor(!InArea(20000, areaEntityId) || EventFlag(8073) || EventFlag(8027));
    SetEventFlagID(9035, OFF);
    SetSpEffect(20000, 99166);
    PlaySE(entityId, SoundType.SFX, 806741);
    RestartIf(!EventFlag(8027));
    PlaySE(entityId, SoundType.SFX, 806742);
});

$Event(90035080, Default, function(eventFlagId, chrEntityId, entityId) {
    EndIf(!((EventFlag(7707) || EventFlag(7727)) && EventFlag(eventFlagId) && !EventFlag(8074)));
    WaitFor(CharacterRatioDead(chrEntityId, GreaterOrEqual, 0.75) || EventFlag(8072));
    ForceCharacterDeath(chrEntityId, true);
    SetNetworkconnectedEventFlagID(8072, ON);
    WaitFor(ElapsedSeconds(2));
    EndIf(EventFlag(8074));
    SetNetworkconnectedEventFlagID(8027, ON);
    WaitFor(ElapsedSeconds(3.5));
    SpawnMapSFX(entityId);
    WaitFor(ElapsedSeconds(1));
    DeleteMapSFX(entityId, false);
    RecordUserDispLog(11181, 10000, LogObjectType.None, -1);
    SetNetworkconnectedEventFlagID(8074, ON);
});

$Event(90035081, Default, function(eventFlagId) {
    EndIf(!((EventFlag(7707) || EventFlag(7727)) && EventFlag(eventFlagId) && !EventFlag(8071)));
    WaitFor(CharacterHasSpEffect(20000, 16611));
    WaitFor(ElapsedSeconds(1));
    RecordUserDispLog(11180, 20000, LogObjectType.None, -1);
    SetNetworkconnectedEventFlagID(8071, ON);
});

$Event(90035082, Default, function(eventFlagId, chrEntityId, chrEntityId2, chrEntityId3) {
    if (!((EventFlag(7707) || EventFlag(7727)) && EventFlag(eventFlagId) && !EventFlag(8027))) {
        SetCharacterBackreadState(chrEntityId, true);
        SetCharacterBackreadState(chrEntityId2, true);
        SetCharacterBackreadState(chrEntityId3, true);
        EndEvent();
    }
    SetCharacterBackreadState(chrEntityId, false);
    SetCharacterBackreadState(chrEntityId2, false);
    SetCharacterBackreadState(chrEntityId3, false);
    SetCharacterEventTarget(chrEntityId, 10002);
    CreateBulletOwner(chrEntityId);
    SetCharacterEventTarget(chrEntityId2, 10003);
    CreateBulletOwner(chrEntityId2);
    SetCharacterEventTarget(chrEntityId3, 10004);
    CreateBulletOwner(chrEntityId3);
});

$Event(90035083, Default, function(eventFlagId, playerNo) {
    DisableNetworkSync();
    EndIf(!((EventFlag(7707) || EventFlag(7727)) && EventFlag(eventFlagId) && !EventFlag(8027)));
    EndIf(!IsPlayerNo(playerNo));
    SetEventFlagID(9036, OFF);
    WaitFor(EventFlag(9035) && !EventFlag(8073));
    SetEventFlagID(9036, ON);
    WaitFor(!EventFlag(9035) || EventFlag(8073) || EventFlag(8072));
    SetEventFlagID(9036, OFF);
    RestartEvent();
});

$Event(90035084, Default, function(eventFlagId, bulletProducerEntityId, chrEntityId, playerNo) {
    DisableNetworkSync();
    EndIf(!((EventFlag(7707) || EventFlag(7727)) && EventFlag(eventFlagId) && !EventFlag(8027)));
    EndIf(!IsPlayerNo(playerNo));
    WaitFor(EventFlag(9036));
    ShootBulletUnknown2003125(chrEntityId, bulletProducerEntityId, 100, 201200210, true, 0, 0, 0);
    WaitFixedTimeSeconds(0.25);
    RestartEvent();
});

$Event(90035085, Default, function(eventFlagId, areaEntityId, gparamSubId) {
    DisableNetworkSync();
    EndIf(!((EventFlag(7707) || EventFlag(7727)) && EventFlag(eventFlagId) && !EventFlag(8027)));
    WaitFor((InArea(20000, areaEntityId) && !EventFlag(8073)) || EventFlag(8027));
    EndIf(EventFlag(8027));
    SetEventFlagID(9037, ON);
    ActivateGparamOverride(gparamSubId, 3);
    WaitFor(!InArea(20000, areaEntityId) || EventFlag(8073) || EventFlag(8027));
    SetEventFlagID(9037, OFF);
    if (EventFlag(8027)) {
        WaitFor(ElapsedSeconds(1.5));
    }
    DeactivateGparamOverride(3);
    RestartIf(!EventFlag(8027));
});

$Event(90035086, Default, function() {
    DisableNetworkSync();
    EndIf(EventFlag(8074));
    WaitFor(EventFlag(8074));
    WaitFor(ElapsedSeconds(1));
    EndIf(EventFlag(9038));
    SetSpEffect(20000, 99262);
    SetEventFlagID(9038, ON);
});

$Event(90035087, Default, function(eventFlagId, entityId) {
    EndIf(!((EventFlag(7707) || EventFlag(7727)) && EventFlag(eventFlagId) && !EventFlag(8027)));
    if (!EventFlag(8073)) {
        WaitFor(!InsidePlayArea(entityId, 0));
        SetNetworkconnectedEventFlagID(8073, ON);
    }
L0:
    WaitFor(InsidePlayArea(entityId, 0));
    SetNetworkconnectedEventFlagID(8073, OFF);
    RestartEvent();
});

$Event(90035088, Default, function(eventFlagId, chrEntityId) {
    DisableNetworkSync();
    if (!((EventFlag(7707) || EventFlag(7727)) && EventFlag(eventFlagId) && !EventFlag(8069))) {
        DisableCharacterDefaultBackread(chrEntityId);
        SetCharacterEnableDistance(chrEntityId, -1);
        EnableCharacterDisableOnHitUnload(chrEntityId);
        SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Normal);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    WaitFor(MapHasPermissionToUpdate(false, 0, 0, 0, 0));
    EnableCharacterDefaultBackread(chrEntityId);
    SetCharacterEnableDistance(chrEntityId, 600);
    DisableCharacterDisableOnHitUnload(chrEntityId);
    DisableCharacterGravity(chrEntityId);
    SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
    WaitFor(EventFlag(8074) && ElapsedSeconds(8.5));
    ForceCharacterTreasure(chrEntityId);
    DisableCharacterDefaultBackread(chrEntityId);
    SetCharacterEnableDistance(chrEntityId, -1);
    EnableCharacterDisableOnHitUnload(chrEntityId);
    SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Normal);
    SetNetworkconnectedEventFlagID(8069, ON);
});

$Event(90035200, Default, function(chrEntityId, eventFlagId, eventFlagId2, targetDistance) {
    DisableNetworkSync();
    EndIf(!EventFlag(8075));
    EndIf(AnyBatchEventFlags(8085, 8087));
    WaitFor(EventFlag(eventFlagId2));
    if (IsPlayerNo(1)) {
        WaitFor(ElapsedSeconds(0));
    }
    if (IsPlayerNo(2)) {
        WaitFor(ElapsedSeconds(1.5));
    }
    if (IsPlayerNo(3)) {
        WaitFor(ElapsedSeconds(3));
    }
    if (!EventFlag(9999)) {
        EndIf(
            !(PlayAreaCurrentTimeInRange(0, 0, 0, 20, 29, 59) && InsidePlayArea(chrEntityId, -75)));
        EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    }
    EndIf(
        !((EntityInRadiusOfEntity(10002, chrEntityId, targetDistance, 1)
            && CharacterBackreadStatus(10002)
            && CharacterBackreadStatus(chrEntityId))
            || (EntityInRadiusOfEntity(10003, chrEntityId, targetDistance, 1)
                && CharacterBackreadStatus(10003)
                && CharacterBackreadStatus(chrEntityId))
            || (EntityInRadiusOfEntity(10004, chrEntityId, targetDistance, 1)
                && CharacterBackreadStatus(10004)
                && CharacterBackreadStatus(chrEntityId))));
    if (EventFlag(9999)) {
        SetNetworkconnectedEventFlagID(8085, ON);
    } else if (EntityInRadiusOfEntity(10002, chrEntityId, targetDistance, 1)
        && CharacterBackreadStatus(10002)
        && CharacterBackreadStatus(chrEntityId)) {
        SetNetworkconnectedEventFlagID(8085, ON);
    } else if (EntityInRadiusOfEntity(10003, chrEntityId, targetDistance, 1)
        && CharacterBackreadStatus(10003)
        && CharacterBackreadStatus(chrEntityId)) {
        SetNetworkconnectedEventFlagID(8086, ON);
    } else if (EntityInRadiusOfEntity(10004, chrEntityId, targetDistance, 1)
        && CharacterBackreadStatus(10004)
        && CharacterBackreadStatus(chrEntityId)) {
        SetNetworkconnectedEventFlagID(8087, ON);
        Goto(L0);
    }
L0:
    WaitFor(AnyBatchEventFlags(8085, 8087));
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(8061, ON);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90035201, Default, function(eventFlagId) {
    EndIf(!EventFlag(8075));
    EndIf(AnyBatchEventFlags(8085, 8087));
    WaitFor(EventFlag(8060));
    WaitFor(EventFlag(8089) || EventFlag(8061));
    WaitFor(ElapsedFrames(1));
    EndIf(EventFlag(8061));
    chr |= EventFlagAndRandomCondition(6001, 0.3);
    if (!chr) {
        WaitFor(ElapsedFrames(1));
        EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    }
    if (PlayerIsInOwnWorld()) {
        chr |= CharacterHasTeamType(10002, TeamType.Human)
            || CharacterHasTeamType(10002, TeamType.WhitePhantom);
        if (chr) {
            if (EventFlagAndRandomCondition(6001, 0.3)) {
                SetNetworkconnectedEventFlagID(8085, ON);
                Goto(L0);
            }
        }
        chr2 = CharacterHasTeamType(10003, TeamType.Human)
            || CharacterHasTeamType(10003, TeamType.WhitePhantom);
        if (chr2) {
            if (EventFlagAndRandomCondition(6001, 0.3)) {
                SetNetworkconnectedEventFlagID(8086, ON);
                Goto(L0);
            }
        }
        chr3 = CharacterHasTeamType(10004, TeamType.Human)
            || CharacterHasTeamType(10004, TeamType.WhitePhantom);
        if (chr3) {
            if (EventFlagAndRandomCondition(6001, 0.3)) {
                SetNetworkconnectedEventFlagID(8087, ON);
                Goto(L0);
            }
        }
        if (chr) {
            SetNetworkconnectedEventFlagID(8085, ON);
        } else if (chr2) {
            SetNetworkconnectedEventFlagID(8086, ON);
        } else if (chr3) {
            SetNetworkconnectedEventFlagID(8087, ON);
            Goto(L0);
        }
    }
L0:
    WaitFor(AnyBatchEventFlags(8085, 8087));
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(8061, ON);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90035202, Default, function(chrEntityId, eventFlagId) {
    if (!EventFlag(8075)) {
        DisableCharacter(chrEntityId);
        EndEvent();
    }
    if (EventFlag(8062)) {
        DisableCharacter(chrEntityId);
        EndEvent();
    }
    cond &= EventFlag(8061) && !EventFlag(eventFlagId);
    if (cond) {
        DisableCharacter(chrEntityId);
        EndEvent();
    }
    if (EventFlag(8061) && EventFlag(eventFlagId)) {
        EnableCharacterDefaultBackread(chrEntityId);
        SetCharacterEnableDistance(chrEntityId, 1200);
        DisableCharacterDisableOnHitUnload(chrEntityId);
        DisableCharacterHPBarDisplay(chrEntityId);
        EndEvent();
    }
    DisableCharacterHPBarDisplay(chrEntityId);
    EnableCharacterDefaultBackread(chrEntityId);
    SetCharacterEnableDistance(chrEntityId, 1200);
    DisableCharacterDisableOnHitUnload(chrEntityId);
    DisableCharacter(chrEntityId);
    WaitFor(EventFlag(8061));
    if (!EventFlag(eventFlagId)) {
        if (EventFlag(9999)) {
            cond &= IsPlayerNo(1) && CharacterHasSpEffect(10000, 99171);
            WaitFor(cond);
        } else {
            if (EventFlag(8085)) {
                cond &= IsPlayerNo(1) && CharacterHasSpEffect(10002, 99171);
                WaitFor(cond);
            }
            if (EventFlag(8086)) {
                cond &= IsPlayerNo(2) && CharacterHasSpEffect(10003, 99171);
                WaitFor(cond);
            }
            if (EventFlag(8087)) {
                cond &= IsPlayerNo(3) && CharacterHasSpEffect(10004, 99171);
                WaitFor(cond);
            }
        }
        DisableCharacterDefaultBackread(chrEntityId);
        SetCharacterEnableDistance(chrEntityId, -1);
        EnableCharacterDisableOnHitUnload(chrEntityId);
        EndEvent();
    }
    if (EventFlag(8085)) {
        if (!IsPlayerNo(1)) {
            DisableCharacterDefaultBackread(chrEntityId);
            SetCharacterEnableDistance(chrEntityId, -1);
            EnableCharacterDisableOnHitUnload(chrEntityId);
        }
    }
    if (EventFlag(8086)) {
        if (!IsPlayerNo(2)) {
            DisableCharacterDefaultBackread(chrEntityId);
            SetCharacterEnableDistance(chrEntityId, -1);
            EnableCharacterDisableOnHitUnload(chrEntityId);
        }
    }
    if (EventFlag(8087)) {
        if (!IsPlayerNo(3)) {
            DisableCharacterDefaultBackread(chrEntityId);
            SetCharacterEnableDistance(chrEntityId, -1);
            EnableCharacterDisableOnHitUnload(chrEntityId);
        }
    }
    if (EventFlag(8085)) {
        if (IsPlayerNo(1)) {
            SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
        }
    }
    if (EventFlag(8086)) {
        if (IsPlayerNo(2)) {
            SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
        }
    }
    if (EventFlag(8087)) {
        if (IsPlayerNo(3)) {
            SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
        }
    }
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetWorldMapPointFlag(0, ON);
    SetWorldMapPointFlag(4, ON);
    RecordUserDispLog(11110, chrEntityId, LogObjectType.None, -1);
    SetCharacterTalkRange(chrEntityId, 9999);
    WaitFor(ElapsedSeconds(1));
    if (EventFlag(9999)) {
        SetSpEffect(10000, 99170);
    } else {
        if (EventFlag(8085)) {
            SetSpEffect(10002, 99170);
        }
        if (EventFlag(8086)) {
            SetSpEffect(10003, 99170);
        }
        if (EventFlag(8087)) {
            SetSpEffect(10004, 99170);
        }
    }
    WaitFor(ElapsedSeconds(2));
    ForceAnimationPlayback(chrEntityId, 20024, false, false, false);
    EnableCharacter(chrEntityId);
    WaitFor(ElapsedSeconds(0.5));
    if (EventFlag(9999)) {
        WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Character, 10000, 900, 10002);
    } else {
        if (EventFlag(8085)) {
            WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Character, 10002, 900, 10002);
        }
        if (EventFlag(8086)) {
            WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Character, 10003, 900, 10003);
        }
        if (EventFlag(8087)) {
            WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Character, 10004, 900, 10004);
        }
    }
    WaitFor(ElapsedSeconds(0.25));
    if (EventFlag(9999)) {
        SetSpEffect(10000, 99171);
    } else {
        if (EventFlag(8085)) {
            SetSpEffect(10002, 99171);
        }
        if (EventFlag(8086)) {
            SetSpEffect(10003, 99171);
        }
        if (EventFlag(8087)) {
            SetSpEffect(10004, 99171);
        }
    }
    SetNetworkUpdateRate(chrEntityId, false, CharacterUpdateFrequency.AlwaysUpdate);
    EnableCharacterDefaultBackread(chrEntityId);
    SetCharacterEnableDistance(chrEntityId, 1200);
    DisableCharacterDisableOnHitUnload(chrEntityId);
});

$Event(90035203, Default, function(eventFlagId) {
    EndIf(!EventFlag(8075));
    if (EventFlag(8062)) {
        SetSpEffect(10000, 99156);
        SetSpEffect(10000, 509);
        SetSpEffect(10002, 99156);
        SetSpEffect(10002, 509);
        SetSpEffect(10003, 99156);
        SetSpEffect(10003, 509);
        SetSpEffect(10004, 99156);
        SetSpEffect(10004, 509);
        EndEvent();
    }
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    if (EventFlag(9999)) {
        SetSpEffect(10000, 99191);
        SetSpEffect(10000, 508);
    } else {
        if (EventFlag(8085)) {
            SetSpEffect(10002, 99191);
            SetSpEffect(10002, 508);
        }
        if (EventFlag(8086)) {
            SetSpEffect(10003, 99191);
            SetSpEffect(10003, 508);
        }
        if (EventFlag(8087)) {
            SetSpEffect(10004, 99191);
            SetSpEffect(10004, 508);
        }
    }
    if (EventFlag(9999)) {
        spFlag |= !CharacterHasSpEffect(10000, 99191) || !CharacterHasSpEffect(10000, 508);
    } else {
        if (EventFlag(8085)) {
            spFlag |= !CharacterHasSpEffect(10002, 99191) || !CharacterHasSpEffect(10002, 508);
        }
        if (EventFlag(8086)) {
            spFlag |= !CharacterHasSpEffect(10003, 99191) || !CharacterHasSpEffect(10003, 508);
        }
        if (EventFlag(8087)) {
            spFlag |= !CharacterHasSpEffect(10004, 99191) || !CharacterHasSpEffect(10004, 508);
        }
    }
    spFlag |= EventFlag(8062);
    WaitFor(spFlag);
    RestartEvent();
});

$Event(90035204, Default, function(chrEntityId, eventFlagId) {
    EndIf(!EventFlag(8075));
    EndIf(EventFlag(8062));
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    if (EventFlag(9999)) {
        chrSp &= IsPlayerNo(1) && CharacterHasSpEffect(10000, 99171);
    } else {
        if (EventFlag(8085)) {
            chrSp &= IsPlayerNo(1) && CharacterHasSpEffect(10002, 99171);
        }
        if (EventFlag(8086)) {
            chrSp &= IsPlayerNo(2) && CharacterHasSpEffect(10003, 99171);
        }
        if (EventFlag(8087)) {
            chrSp &= IsPlayerNo(3) && CharacterHasSpEffect(10004, 99171);
        }
    }
L0:
    WaitFor(chrSp);
    if (!EventFlag(9999)) {
        if (EventFlag(8085)) {
            chrSpHpArea &= IsPlayerNo(1);
        }
        if (EventFlag(8086)) {
            chrSpHpArea &= IsPlayerNo(2);
        }
        if (EventFlag(8087)) {
            chrSpHpArea &= IsPlayerNo(3);
        }
    }
L1:
    chrSpHpArea &= CharacterHasSpEffect(chrEntityId, 16165) || CharacterHasSpEffect(chrEntityId, 16176);
    if (EventFlag(9999)) {
        chrSpHpArea &= CharacterHPValue(10000) != 0;
    } else {
        if (EventFlag(8085)) {
            chrSpHpArea &= CharacterHPValue(10002) != 0;
        }
        if (EventFlag(8086)) {
            chrSpHpArea &= CharacterHPValue(10003) != 0;
        }
        if (EventFlag(8087)) {
            chrSpHpArea &= CharacterHPValue(10004) != 0;
        }
    }
L2:
    if (EventFlag(9999)) {
        areaSp |= !EntityInRadiusOfEntity(10000, chrEntityId, 25, 1);
    } else {
        if (EventFlag(8085)) {
            areaSp |= !EntityInRadiusOfEntity(10002, chrEntityId, 25, 1);
        }
        if (EventFlag(8086)) {
            areaSp |= !EntityInRadiusOfEntity(10003, chrEntityId, 25, 1);
        }
        if (EventFlag(8087)) {
            areaSp |= !EntityInRadiusOfEntity(10004, chrEntityId, 25, 1);
        }
    }
L3:
    areaSp |= CharacterHasSpEffect(chrEntityId, 16165);
    chrSpHpArea &= areaSp;
    WaitFor(chrSpHpArea || EventFlag(8062));
    EndIf(EventFlag(8062));
    ForceAnimationPlayback(chrEntityId, 20025, false, false, false);
    WaitFor(ElapsedSeconds(0.5));
    if (EventFlag(9999)) {
        sp |= CharacterHasSpEffect(10000, 32)
            || CharacterHasSpEffect(10000, 99200)
            || CharacterHasSpEffect(10000, 99201)
            || CharacterHasSpEffect(10000, 102610)
            || CharacterHasSpEffect(10000, 16166);
    } else {
        if (EventFlag(8085)) {
            sp |= CharacterHasSpEffect(10002, 32)
                || CharacterHasSpEffect(10002, 99200)
                || CharacterHasSpEffect(10002, 99201)
                || CharacterHasSpEffect(10002, 102610)
                || CharacterHasSpEffect(10002, 16166);
        }
        if (EventFlag(8086)) {
            sp |= CharacterHasSpEffect(10003, 32)
                || CharacterHasSpEffect(10003, 99200)
                || CharacterHasSpEffect(10003, 99201)
                || CharacterHasSpEffect(10003, 102610)
                || CharacterHasSpEffect(10003, 16166);
        }
        if (EventFlag(8087)) {
            sp |= CharacterHasSpEffect(10004, 32)
                || CharacterHasSpEffect(10004, 99200)
                || CharacterHasSpEffect(10004, 99201)
                || CharacterHasSpEffect(10004, 102610)
                || CharacterHasSpEffect(10004, 16166);
        }
    }
L4:
    if (sp) {
        DisableCharacter(chrEntityId);
        SetNetworkconnectedEventFlagID(8097, ON);
        if (EventFlag(9999)) {
            sp2 &= !CharacterHasSpEffect(10000, 32)
                && !CharacterHasSpEffect(10000, 99200)
                && !CharacterHasSpEffect(10000, 99201)
                && !CharacterHasSpEffect(10000, 102610)
                && !CharacterHasSpEffect(10000, 16166);
        } else {
            if (EventFlag(8085)) {
                sp2 &= !CharacterHasSpEffect(10002, 32)
                    && !CharacterHasSpEffect(10002, 99200)
                    && !CharacterHasSpEffect(10002, 99201)
                    && !CharacterHasSpEffect(10002, 102610)
                    && !CharacterHasSpEffect(10002, 16166);
            }
            if (EventFlag(8086)) {
                sp2 &= !CharacterHasSpEffect(10003, 32)
                    && !CharacterHasSpEffect(10003, 99200)
                    && !CharacterHasSpEffect(10003, 99201)
                    && !CharacterHasSpEffect(10003, 102610)
                    && !CharacterHasSpEffect(10003, 16166);
            }
            if (EventFlag(8087)) {
                sp2 &= !CharacterHasSpEffect(10004, 32)
                    && !CharacterHasSpEffect(10004, 99200)
                    && !CharacterHasSpEffect(10004, 99201)
                    && !CharacterHasSpEffect(10004, 102610)
                    && !CharacterHasSpEffect(10004, 16166);
            }
        }
L6:
        WaitFor(sp2);
        SetNetworkconnectedEventFlagID(8097, OFF);
        EnableCharacter(chrEntityId);
        EndIf(EventFlag(8062));
        ForceAnimationPlayback(chrEntityId, 20025, false, false, false);
        WaitFor(ElapsedSeconds(0.5));
    }
L5:
    if (EventFlag(9999)) {
        WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Character, 10000, 900, 10002);
        RestartEvent();
    }
    if (EventFlag(8085)) {
        WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Character, 10002, 900, 10002);
    }
    if (EventFlag(8086)) {
        WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Character, 10003, 900, 10003);
    }
    if (EventFlag(8087)) {
        WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Character, 10004, 900, 10004);
    }
    RestartEvent();
});

$Event(90035205, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    EndIf(!EventFlag(8075));
    EndIf(EventFlag(8062));
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId2));
    hp = CharacterHPValue(chrEntityId) == 0;
    if (EventFlag(9999)) {
        chr |= CharacterDead(10000);
        chr2 |= CharacterHasTeamType(10000, TeamType.Human)
            || CharacterHasTeamType(10000, TeamType.WhitePhantom)
            || CharacterHasTeamType(10000, TeamType.Unknown77)
            || CharacterHasTeamType(10000, TeamType.Disabled);
        chr |= !chr2;
    } else {
        if (EventFlag(8085)) {
            chr |= CharacterDead(10002);
            chr2 |= CharacterHasTeamType(10002, TeamType.Human)
                || CharacterHasTeamType(10002, TeamType.WhitePhantom)
                || CharacterHasTeamType(10002, TeamType.Unknown77)
                || CharacterHasTeamType(10002, TeamType.Disabled);
            chr |= !chr2;
        }
        if (EventFlag(8086)) {
            chr |= CharacterDead(10003);
            chr2 |= CharacterHasTeamType(10003, TeamType.Human)
                || CharacterHasTeamType(10003, TeamType.WhitePhantom)
                || CharacterHasTeamType(10003, TeamType.Unknown77)
                || CharacterHasTeamType(10003, TeamType.Disabled);
            chr |= !chr2;
        }
        if (EventFlag(8087)) {
            chr |= CharacterDead(10004);
            chr2 |= CharacterHasTeamType(10004, TeamType.Human)
                || CharacterHasTeamType(10004, TeamType.WhitePhantom)
                || CharacterHasTeamType(10004, TeamType.Unknown77)
                || CharacterHasTeamType(10004, TeamType.Disabled);
            chr |= !chr2;
        }
    }
    WaitFor(hp || chr || PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59));
    SetNetworkconnectedEventFlagID(8062, ON);
    SetWorldMapPointFlag(0, OFF);
    SetWorldMapPointFlag(4, OFF);
    DisableCharacterDefaultBackread(chrEntityId);
    SetCharacterEnableDistance(chrEntityId, -1);
    EnableCharacterDisableOnHitUnload(chrEntityId);
    if (!hp.Passed) {
        if (chr) {
            SetNetworkconnectedEventFlagID(8095, ON);
        }
        WaitFor(ElapsedSeconds(5));
        RecordUserDispLog(11113, chrEntityId, LogObjectType.None, -1);
        EndEvent();
    }
    WaitFor(EventFlag(eventFlagId));
    WaitFor(ElapsedSeconds(5));
    DisplayTextEffectId(2200);
    RecordUserDispLog(11111, chrEntityId, LogObjectType.None, -1);
    SetNetworkconnectedEventFlagID(8025, ON);
});

$Event(90035206, Default, function(chrEntityId, chrEntityId2, eventFlagId) {
    EndIf(!EventFlag(8075));
    EndIf(EventFlag(8062));
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    if (EventFlag(9999)) {
        hpFlag |= CharacterHPValue(10000) == 0;
    } else {
        if (EventFlag(8085)) {
            hpFlag |= CharacterHPValue(10002) == 0;
        }
        if (EventFlag(8086)) {
            hpFlag |= CharacterHPValue(10003) == 0;
        }
        if (EventFlag(8087)) {
            hpFlag |= CharacterHPValue(10004) == 0;
        }
    }
    hpFlag |= EventFlag(8062);
    WaitFor(hpFlag);
    EndIf(EventFlag(8062));
    if (EventFlag(9999)) {
        IssueShortWarpRequest(chrEntityId2, TargetEntityType.Character, 10000, 220);
    } else {
        if (EventFlag(8085)) {
            IssueShortWarpRequest(chrEntityId2, TargetEntityType.Character, 10002, 220);
        }
        if (EventFlag(8086)) {
            IssueShortWarpRequest(chrEntityId2, TargetEntityType.Character, 10003, 220);
        }
        if (EventFlag(8087)) {
            IssueShortWarpRequest(chrEntityId2, TargetEntityType.Character, 10004, 220);
        }
    }
    SetCharacterEventTarget(chrEntityId, chrEntityId2);
    if (EventFlag(9999)) {
        WaitFor(CharacterHPValue(10000) != 0);
    } else {
        if (EventFlag(8085)) {
            WaitFor(CharacterHPValue(10002) != 0);
        }
        if (EventFlag(8086)) {
            WaitFor(CharacterHPValue(10003) != 0);
        }
        if (EventFlag(8087)) {
            WaitFor(CharacterHPValue(10004) != 0);
        }
    }
    RestartEvent();
});

$Event(90035207, Default, function(chrEntityId, eventFlagId) {
    EndIf(!EventFlag(8075));
    EndIf(EventFlag(8062));
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    WaitFor(EventFlag(8062));
    EndIf(CharacterHPValue(chrEntityId) == 0);
    DisableLockOnPoint(chrEntityId, 220);
    EnableCharacterInvincibility(chrEntityId);
    WaitFixedTimeFrames(1);
    SetSpEffect(chrEntityId, 16175);
    WaitFor(ElapsedSeconds(8));
    DisableCharacter(chrEntityId);
    ClearCharactersAITarget(chrEntityId);
    DisableCharacterAI(chrEntityId);
});

$Event(90035208, Default, function(eventFlagId, eventFlagId2) {
    EndIf(!EventFlag(8075));
    EndIf(EventFlag(8062));
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    WaitFor(EventFlag(8096));
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90035209, Default, function(eventFlagId) {
    DisableNetworkSync();
    EndIf(!EventFlag(8075));
    EndIf(EventFlag(8062));
    EndIf(EventFlag(8061));
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    if (EventFlag(9999)) {
        SetBossBGM(213021, BossBGMState.Start);
    } else {
        if (EventFlag(8085)) {
            if (IsPlayerNo(1)) {
                SetBossBGM(213021, BossBGMState.Start);
            }
        }
        if (EventFlag(8086)) {
            if (IsPlayerNo(2)) {
                SetBossBGM(213021, BossBGMState.Start);
            }
        }
        if (EventFlag(8087)) {
            if (IsPlayerNo(3)) {
                SetBossBGM(213021, BossBGMState.Start);
            }
        }
        if (EventFlag(8085)) {
            area |= EntityInRadiusOfEntity(20000, 10002, 30, 1);
            if (area) {
                SetBossBGM(213021, BossBGMState.Start);
            }
        }
        if (EventFlag(8086)) {
            area |= EntityInRadiusOfEntity(20000, 10003, 30, 1);
            if (area) {
                SetBossBGM(213021, BossBGMState.Start);
            }
        }
        if (EventFlag(8087)) {
            area |= EntityInRadiusOfEntity(20000, 10004, 30, 1);
            if (area) {
                SetBossBGM(213021, BossBGMState.Start);
            }
        }
        if (EventFlag(8085)) {
            EndIf(!IsPlayerNo(1));
        }
        if (EventFlag(8086)) {
            EndIf(!IsPlayerNo(2));
        }
        if (EventFlag(8087)) {
            EndIf(!IsPlayerNo(3));
        }
    }
L0:
    WaitFor(EventFlag(8062));
    WaitFor(ElapsedSeconds(10));
    if (BossBGMPlaying(213021)) {
        SetBossBGM(213021, BossBGMState.Stop2);
    }
});

$Event(90035210, Default, function(entityId, eventFlagId, eventFlagId2, targetDistance) {
    EndIf(!EventFlag(8076));
    EndIf(EventFlag(8061));
    WaitFor(EventFlag(eventFlagId2));
    if (IsPlayerNo(1)) {
        WaitFor(ElapsedSeconds(0));
    }
    if (IsPlayerNo(2)) {
        WaitFor(ElapsedSeconds(1.5));
    }
    if (IsPlayerNo(3)) {
        WaitFor(ElapsedSeconds(3));
    }
    if (!EventFlag(9999)) {
        EndIf(
            !(PlayAreaCurrentTimeInRange(0, 0, 0, 20, 29, 59)
                && InsidePlayArea(entityId, -75)
                && !InsidePlayAreaByTime(entityId, 0, 23, 59, 0)));
        flag = EventFlag(8061) && !EventFlag(eventFlagId);
    }
    EndIf(flag);
    EndIf(!EntityInRadiusOfEntity(10000, entityId, targetDistance, 1));
    SetNetworkconnectedEventFlagID(8061, ON);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetWorldMapPointFlag(0, ON);
    SetWorldMapPointFlag(4, ON);
    RecordUserDispLog(11120, entityId, LogObjectType.None, -1);
});

$Event(9005211, Default, function(eventFlagId) {
    DisableNetworkSync();
    EndIf(!EventFlag(8076));
    EndIf(EventFlag(8061));
    WaitFor(EventFlag(8060));
    WaitFor(EventFlag(8094) || EventFlag(8061));
    WaitFor(ElapsedFrames(1));
    if (IsPlayerNo(1)) {
        WaitFor(ElapsedSeconds(0));
    }
    if (IsPlayerNo(2)) {
        WaitFor(ElapsedSeconds(1.5));
    }
    if (IsPlayerNo(3)) {
        WaitFor(ElapsedSeconds(3));
    }
    EndIf(EventFlag(8061));
    if (!EventFlag(9999)) {
        EndIf(
            !(PlayAreaCurrentTimeInRange(0, 0, 0, 20, 29, 59)
                && InsidePlayArea(0, -75)
                && !InsidePlayAreaByTime(0, 0, 23, 59, 0)));
    }
    if (!EventFlagAndRandomCondition(6001, 0.3)) {
        WaitFor(ElapsedFrames(1));
        EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    }
    SetNetworkconnectedEventFlagID(8061, ON);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetWorldMapPointFlag(0, ON);
    SetWorldMapPointFlag(4, ON);
    RecordUserDispLog(11120, eventFlagId, LogObjectType.None, -1);
});

$Event(90035212, Default, function(chrEntityId, assetEntityId, eventFlagId) {
    if (!EventFlag(8076)) {
        DisableCharacter(chrEntityId);
        DisableAsset(assetEntityId);
        DisableHit(45524800);
        SetNetworkconnectedEventFlagID(45522900, OFF);
        EndEvent();
    }
    if (EventFlag(8062)) {
        DisableCharacter(chrEntityId);
        DisableAsset(assetEntityId);
        DisableHit(45524800);
        SetNetworkconnectedEventFlagID(45522900, OFF);
        EndEvent();
    }
    if (EventFlag(8061) && !EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId);
        DisableAsset(assetEntityId);
        DisableHit(45524800);
        SetNetworkconnectedEventFlagID(45522900, OFF);
        EndEvent();
    }
    if (EventFlag(8061) && EventFlag(assetEntityId)) {
        DisableCharacterHPBarDisplay(chrEntityId);
        EnableCharacter(chrEntityId);
        EnableAsset(assetEntityId);
        EnableHit(45524800);
        SetNetworkconnectedEventFlagID(45522900, ON);
        EndEvent();
    }
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacter(chrEntityId);
    DisableAsset(assetEntityId);
    DisableHit(45524800);
    SetNetworkconnectedEventFlagID(45522900, OFF);
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    WaitFor(ElapsedSeconds(3));
    EnableCharacter(chrEntityId);
    EnableAsset(assetEntityId);
    SetNetworkconnectedEventFlagID(45522900, ON);
    EnableHit(45524800);
    ForceAnimationPlayback(assetEntityId, 100, false, true, false);
    ForceAnimationPlayback(assetEntityId, 110, true, false, false);
});

$Event(90035213, Default, function(chrEntityId, assetEntityId, chrEntityId2, chrEntityId3, chrEntityId4, assetEntityId2, assetEntityId3, assetEntityId4, areaEntityId, eventFlagId) {
    if (!EventFlag(8076)) {
        DisableCharacter(chrEntityId);
        DisableAsset(assetEntityId);
        EndEvent();
    }
    if (EventFlag(8062)) {
        DisableCharacter(chrEntityId);
        DisableAsset(assetEntityId);
        EndEvent();
    }
    if (EventFlag(8061) && !EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId);
        DisableAsset(assetEntityId);
        EndEvent();
    }
    if (EventFlag(8061) && EventFlag(eventFlagId)) {
        EnableCharacterDefaultBackread(chrEntityId);
        SetAlwaysDrawCharacter(chrEntityId, ON);
        SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
        AttachAssetToCharacter(chrEntityId2, 220, assetEntityId2);
        AttachAssetToCharacter(chrEntityId3, 220, assetEntityId3);
        AttachAssetToCharacter(chrEntityId4, 220, assetEntityId4);
        if (IsPlayerNo(1)) {
            WaitFor(CharacterBackreadStatus(chrEntityId2));
        }
        if (IsPlayerNo(2)) {
            WaitFor(CharacterBackreadStatus(chrEntityId3));
        }
        if (IsPlayerNo(3)) {
            WaitFor(CharacterBackreadStatus(chrEntityId4));
        }
        EnableCharacter(chrEntityId);
        EnableAsset(assetEntityId);
        WaitFor(ElapsedFrames(1));
        ForceAnimationPlayback(chrEntityId, 20000, false, false, false);
        WaitFor(ElapsedFrames(11));
        ReproduceAssetAnimation(assetEntityId, 100);
        WaitFixedTimeFrames(1);
        ForceAnimationPlayback(assetEntityId, 110, true, false, false);
    } else {
L0:
        DisableCharacter(chrEntityId);
        DisableAsset(assetEntityId);
        WaitFor(EventFlag(8061));
        EndIf(!EventFlag(eventFlagId));
        EnableCharacterDefaultBackread(chrEntityId);
        SetAlwaysDrawCharacter(chrEntityId, ON);
        SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
        SetCharacterEnableDistance(chrEntityId2, 1200);
        DisableCharacterDisableOnHitUnload(chrEntityId2);
        SetCharacterEnableDistance(chrEntityId3, 1200);
        DisableCharacterDisableOnHitUnload(chrEntityId3);
        SetCharacterEnableDistance(chrEntityId4, 1200);
        DisableCharacterDisableOnHitUnload(chrEntityId4);
        if (IsPlayerNo(1)) {
            SetNetworkUpdateAuthority(chrEntityId2, AuthorityLevel.Forced);
        }
        if (IsPlayerNo(2)) {
            SetNetworkUpdateAuthority(chrEntityId3, AuthorityLevel.Forced);
        }
        if (IsPlayerNo(3)) {
            SetNetworkUpdateAuthority(chrEntityId4, AuthorityLevel.Forced);
        }
        AttachAssetToCharacter(chrEntityId2, 220, assetEntityId2);
        AttachAssetToCharacter(chrEntityId3, 220, assetEntityId3);
        AttachAssetToCharacter(chrEntityId4, 220, assetEntityId4);
        if (IsPlayerNo(1)) {
            WaitFor(CharacterBackreadStatus(chrEntityId2));
        }
        if (IsPlayerNo(2)) {
            WaitFor(CharacterBackreadStatus(chrEntityId3));
        }
        if (IsPlayerNo(3)) {
            WaitFor(CharacterBackreadStatus(chrEntityId4));
        }
        WaitFor(ElapsedSeconds(3));
        if (!InArea(10002, areaEntityId)) {
            WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, 10002, 220, 10002);
        }
        if (!InArea(10003, areaEntityId)) {
            WarpCharacterAndCopyFloor(chrEntityId3, TargetEntityType.Character, 10003, 220, 10003);
        }
        if (!InArea(10004, areaEntityId)) {
            WarpCharacterAndCopyFloor(chrEntityId4, TargetEntityType.Character, 10004, 220, 10004);
        }
        EnableCharacter(chrEntityId);
        EnableAsset(assetEntityId);
        WaitFor(ElapsedFrames(1));
        ForceAnimationPlayback(chrEntityId, 20000, false, false, false);
        WaitFor(ElapsedFrames(11));
        ForceAnimationPlayback(assetEntityId, 100, false, false, false);
        WaitFor(ElapsedSeconds(14));
        ForceAnimationPlayback(assetEntityId, 110, true, false, false);
    }
L1:
    WaitFor(EventFlag(8062));
    ForceAnimationPlayback(assetEntityId, 200, false, false, false);
    WaitFor(ElapsedSeconds(1.5));
    ForceAnimationPlayback(assetEntityId, 210, false, false, false);
    DisableCharacterDefaultBackread(chrEntityId);
    SetAlwaysDrawCharacter(chrEntityId, OFF);
    SetNetworkUpdateRate(chrEntityId, false, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterEnableDistance(chrEntityId2, -1);
    EnableCharacterDisableOnHitUnload(chrEntityId2);
    SetCharacterEnableDistance(chrEntityId3, -1);
    EnableCharacterDisableOnHitUnload(chrEntityId3);
    SetCharacterEnableDistance(chrEntityId4, -1);
    EnableCharacterDisableOnHitUnload(chrEntityId4);
    DisableCharacter(chrEntityId);
    DisableAsset(assetEntityId);
});

$Event(90035214, Default, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    EndIf(!EventFlag(8076));
    EndIf(EventFlag(8062));
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId4));
    if (!(EventFlag(8061) && EventFlag(eventFlagId4))) {
        DisableCharacterAI(chrEntityId);
        WaitFor(EventFlag(8061));
        EndIf(!EventFlag(eventFlagId4));
        SetSpEffect(0, 0);
    }
L0:
    EnableCharacterAI(chrEntityId);
    WaitFor(
        (EventFlag(eventFlagId) || EventFlag(eventFlagId2) || EventFlag(eventFlagId3))
            || EventFlag(8062));
    DisableCharacterAI(chrEntityId);
    EndIf(EventFlag(8062));
    WaitFor(
        (!EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && !EventFlag(eventFlagId3))
            || EventFlag(8062));
    EndIf(EventFlag(8062));
    RestartEvent();
});

$Event(90035215, Default, function(chrEntityId, areaEntityId, areaEntityId2, entityId, eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(!EventFlag(8076));
    EndIf(EventFlag(8062));
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId2));
    if (!(EventFlag(8061) && EventFlag(eventFlagId2))) {
        WaitFor(EventFlag(8061));
        EndIf(!EventFlag(eventFlagId2));
        WaitFor(InArea(10000, areaEntityId) || ElapsedSeconds(14));
        EndIf(EventFlag(8062));
        GotoIf(L1, InArea(10000, areaEntityId));
    }
L0:
    WaitFor(!InArea(10000, areaEntityId));
    SetNetworkconnectedEventFlagID(eventFlagId, OFF);
    WaitFor(
        InArea(10000, areaEntityId2)
            || EntityInRadiusOfEntity(10000, entityId, 10, 1)
            || EventFlag(8062)
            || EventFlag(9998));
    EndIf(EventFlag(8062));
    RestartIf(InArea(10000, areaEntityId));
L1:
    PlaySE(20000, SoundType.GeometrySet, 596517099);
    FadeToBlack(1, 1, true, -1);
    EnableCharacterInvincibility(20000);
    WaitFor(ElapsedSeconds(0.9));
    SetSpEffect(20000, 99280);
    WaitFor(ElapsedSeconds(0.1));
    chr = CharacterBackreadStatus(chrEntityId);
    if (!chr) {
        DisableCharacterGravity(20000);
    }
    WarpCharacterAndCopyFloorUnknown200489(10000, TargetEntityType.Area, areaEntityId2, -1, chrEntityId, -1, -1);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    UnknownTalk2003121();
    PlaySE(20000, SoundType.CharacterMotion, 754009520);
    if (!chr) {
        Unknown2003128(true);
        WaitFor(CharacterBackreadStatus(chrEntityId));
        EnableCharacterGravity(20000);
        EnableCharacterGravity(areaEntityId);
        WaitFor(ElapsedFrames(1));
        WarpCharacterAndCopyFloorUnknown200489(10000, TargetEntityType.Area, areaEntityId2, -1, chrEntityId, -1, -1);
        UnknownTalk2003121();
        PlaySE(20000, SoundType.CharacterMotion, 754009520);
        Unknown2003128(false);
    }
    WaitFor(ElapsedSeconds(2));
    FadeToBlack(0, 1, false, -1);
    WaitFor(ElapsedSeconds(2));
    DisableCharacterInvincibility(20000);
    RestartEvent();
});

$Event(90035216, Default, function(areaEntityId, eventFlagId) {
    DisableNetworkSync();
    EndIf(!EventFlag(8076));
    if (EventFlag(8062)) {
        if (WeatherActive(Weather.Type83, 0, 1)) {
            if (InArea(20000, 1045372400)) {
                ChangeWeather(Weather.Type51, 1, false);
            } else if (InArea(20000, 1029102400)) {
                ChangeWeather(Weather.Type40, 1, false);
            } else {
                ChangeWeather(Weather.Type00, 1, false);
            }
        }
L11:
        SetEventFlagID(9055, OFF);
        EndEvent();
    }
L10:
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    if (InArea(10000, areaEntityId)) {
        ChangeWeather(Weather.Type83, -1, true);
        SetEventFlagID(9055, ON);
        areaFlag |= !InArea(10000, areaEntityId) || EventFlag(8062);
        WaitFor(areaFlag);
    }
    areaFlag |= WeatherActive(Weather.Type83, 0, 1);
    if (areaFlag) {
        if (InArea(20000, 1045372400)) {
            ChangeWeather(Weather.Type51, 1, false);
        } else if (InArea(20000, 1029102400)) {
            ChangeWeather(Weather.Type40, 1, false);
        } else {
            ChangeWeather(Weather.Type00, 1, false);
        }
    }
L0:
    SetEventFlagID(9055, OFF);
    WaitFor(InArea(10000, areaEntityId) || EventFlag(8062));
    RestartEvent();
});

$Event(90035217, Default, function(chrEntityId, assetEntityId, areaEntityId, eventFlagId, eventFlagId2) {
    EndIf(!EventFlag(8076));
    EndIf(EventFlag(8062));
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId2));
    hpFlag = CharacterHPValue(chrEntityId) == 0 || EventFlag(eventFlagId);
    if (!EventFlag(9999)) {
        cond = !InsidePlayArea(chrEntityId, 50);
    }
    time = PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59);
    areaChr = InArea(20000, areaEntityId, 0) && CharacterDead(20000);
    hpFlagTimeAreaChr |= hpFlag;
    if (!EventFlag(9999)) {
        hpFlagTimeAreaChr |= cond;
    }
    hpFlagTimeAreaChr |= time || areaChr;
    WaitFor(hpFlagTimeAreaChr);
    if (hpFlag.Passed) {
        WaitFor(EventFlag(eventFlagId) || ElapsedSeconds(30));
    } else {
L1:
        DisableLockOnPoint(chrEntityId, 220);
        DisableLockOnPoint(chrEntityId, 221);
        EnableCharacterInvincibility(chrEntityId);
        Goto(L2);
    }
L2:
    SetNetworkconnectedEventFlagID(8062, ON);
    SetWorldMapPointFlag(0, OFF);
    SetWorldMapPointFlag(4, OFF);
    ForceAnimationPlayback(assetEntityId, 200, false, false, false);
    SetSpEffect(chrEntityId, 45655);
    PlaySE(chrEntityId, SoundType.CharacterMotion, 754009530);
    WaitFor(ElapsedSeconds(5.2));
    DisableAsset(assetEntityId);
    DisableHit(45524800);
    SetNetworkconnectedEventFlagID(45522900, OFF);
    if (!hpFlag.Passed) {
        WaitFor(CharacterHasSpEffect(chrEntityId, 45656) || ElapsedSeconds(5));
        DisableCharacter(chrEntityId);
        RecordUserDispLog(11124, chrEntityId, LogObjectType.None, -1);
        EndEvent();
    }
    DisplayTextEffectId(2200);
    RecordUserDispLog(11123, chrEntityId, LogObjectType.None, -1);
    SetNetworkconnectedEventFlagID(8025, ON);
});

$Event(90035219, Default, function(eventFlagId, eventFlagId2, chrEntityId, nameId) {
    DisableNetworkSync();
    if (eventFlagId != 0) {
        WaitFor(EventFlag(eventFlagId));
    }
    WaitFor(EventFlag(eventFlagId2));
    flag = !EventFlag(5000);
    flag2 = !EventFlag(5001);
    cond |= flag || flag2;
    if (!cond) {
        WaitFor(cond);
        RestartEvent();
    }
    WaitFixedTimeSeconds(1);
    if (flag.Passed) {
        SetEventFlagID(5000, ON);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
    } else if (flag2.Passed) {
        SetEventFlagID(5001, ON);
        DisplayBossHealthBar(Enabled, chrEntityId, 1, nameId);
    }
    LinkToBossHealthBar(Enabled, nameId, chrEntityId);
    WaitFor(!EventFlag(eventFlagId2));
    cond |= CharacterDead(chrEntityId);
    if (!cond) {
        WaitFixedTimeSeconds(5);
    } else {
        WaitFixedTimeSeconds(1);
    }
    if (flag.Passed) {
        SetEventFlagID(5000, OFF);
        DisplayBossHealthBar(Disabled, chrEntityId, 0, nameId);
    } else if (flag2.Passed) {
        SetEventFlagID(5001, OFF);
        DisplayBossHealthBar(Disabled, chrEntityId, 1, nameId);
    }
    EndIf(or5.Passed);
    RestartEvent();
});

$Event(90035220, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    if (!EventFlag(8077)) {
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (EventFlag(8061) && !EventFlag(eventFlagId)) {
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (EventFlag(8061) && EventFlag(eventFlagId)) {
        SetCharacterBackreadState(chrEntityId, false);
        EnableCharacter(chrEntityId);
        EnableCharacterDefaultBackread(chrEntityId);
        SetCharacterEnableDistance(chrEntityId, 1200);
    }
L10:
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacterDefaultBackread(chrEntityId);
    SetCharacterEnableDistance(chrEntityId, 1200);
    ForceAnimationPlayback(chrEntityId, 20025, false, true, false);
});

$Event(90035221, Default, function(chrEntityId, eventFlagId, eventFlagId2, chrEntityId2, playerNo, eventFlagId3, value, animationId) {
    if (!EventFlag(8077)) {
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (EventFlag(8062)) {
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (EventFlag(8061) && !EventFlag(eventFlagId)) {
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (EventFlag(8061) && EventFlag(eventFlagId) && EventFlag(eventFlagId2)) {
        SetCharacterBackreadState(chrEntityId, false);
        EnableCharacter(chrEntityId);
        if (IsPlayerNo(playerNo)) {
            EnableCharacterDefaultBackread(chrEntityId);
            SetCharacterEnableDistance(chrEntityId, 1200);
            DisableCharacterDisableOnHitUnload(chrEntityId);
            SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
        }
    }
L10:
    if (!EventFlag(eventFlagId3)) {
        WaitFor(EventFlag(eventFlagId));
        SetCharacterBackreadState(chrEntityId, false);
        DisableCharacter(chrEntityId);
        if (IsPlayerNo(playerNo)) {
            EnableCharacterDefaultBackread(chrEntityId);
            SetCharacterEnableDistance(chrEntityId, 1200);
            DisableCharacterDisableOnHitUnload(chrEntityId);
            SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
        }
        WaitFor(EventFlag(8061));
        WaitFor(
            (CharacterHasTeamType(chrEntityId2, TeamType.Human)
                || CharacterHasTeamType(chrEntityId2, TeamType.WhitePhantom)
                || CharacterHasTeamType(chrEntityId2, TeamType.Indiscriminate)
                || CharacterHasTeamType(chrEntityId2, TeamType.Unknown77)
                || CharacterHasTeamType(chrEntityId2, TeamType.Disabled))
                && EventFlag(8221));
        SetEventFlagID(eventFlagId3, ON);
    }
L6:
    WaitFor(
        !CharacterHasSpEffect(chrEntityId2, 32)
            && !CharacterHasSpEffect(chrEntityId2, 99200)
            && !CharacterHasSpEffect(chrEntityId2, 99201)
            && !CharacterHasSpEffect(chrEntityId2, 102610)
            && !CharacterHasSpEffect(chrEntityId2, 16166)
            && !CharacterHasSpEffect(chrEntityId2, 99211)
            && !CharacterHasSpEffect(chrEntityId2, 102450));
    WaitFor(ElapsedSeconds(0.5));
    RestartIf(
        !(!CharacterHasSpEffect(chrEntityId2, 32)
            && !CharacterHasSpEffect(chrEntityId2, 99200)
            && !CharacterHasSpEffect(chrEntityId2, 99201)
            && !CharacterHasSpEffect(chrEntityId2, 102610)
            && !CharacterHasSpEffect(chrEntityId2, 16166)
            && !CharacterHasSpEffect(chrEntityId2, 99211)
            && !CharacterHasSpEffect(chrEntityId2, 102450)));
    SetEventFlagID(eventFlagId3, OFF);
    EndIf(EventFlag(8062));
    if (value != 1) {
        WaitFor(ElapsedFrames(1));
    }
    if (IsPlayerNo(playerNo)) {
        WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Character, chrEntityId2, 900, chrEntityId2);
    }
    WaitFor(ElapsedSeconds(1));
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    EnableCharacter(chrEntityId);
    EnableCharacterGravity(chrEntityId);
    ClearCharactersAITarget(chrEntityId);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90035223, Default, function(eventFlagId, chrEntityId, eventFlagId2) {
    EndIf(EventFlag(8062));
    WaitFor(EventFlag(8077) && EventFlag(8061) && EventFlag(eventFlagId));
    WaitFor(
        !EventFlag(eventFlagId2)
            && CharacterHPValue(chrEntityId) >= 1
            && (!InsidePlayArea(chrEntityId, 50) || PlayAreaCurrentTimeInRange(22, 40, 0, 23, 59, 59)));
    SetNetworkconnectedEventFlagID(8062, ON);
});

$Event(90035224, Default, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(8062));
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    WaitFor(EventFlag(8062));
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    if (EventFlag(8025)) {
        ForceCharacterDeath(chrEntityId2, false);
        WaitFor(ElapsedSeconds(5));
        SetCharacterBackreadState(chrEntityId2, true);
        EndEvent();
    }
    SetSpEffect(chrEntityId, 51230);
    SetSpEffect(chrEntityId2, 51230);
    EnableCharacterInvincibility(chrEntityId);
    WaitFor(ElapsedSeconds(5));
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
});

$Event(90035225, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    WaitFor(CharacterHPValue(chrEntityId) <= 0);
    WaitFor(ElapsedSeconds(5));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90035227, Default, function(chrEntityId, chrEntityId2, targetDistance, playerNo, targetDistance2, eventFlagId, eventFlagId2, value) {
    if (!EventFlag(eventFlagId2)) {
        WaitFor(EventFlag(8061));
        EndIf(!IsPlayerNo(playerNo));
        spFlagArea &= !CharacterHasSpEffect(chrEntityId, 51221) && !EventFlag(eventFlagId);
        if (!IsPlayerNo(1)) {
            area |= EntityInRadiusOfEntity(10002, chrEntityId, targetDistance2, 1);
        }
        if (!IsPlayerNo(2)) {
            area |= EntityInRadiusOfEntity(10003, chrEntityId, targetDistance2, 1);
        }
        if (!IsPlayerNo(3)) {
            area |= EntityInRadiusOfEntity(10004, chrEntityId, targetDistance2, 1);
        }
        spFlagArea &= !area
            && (CharacterHasSpEffect(51225, -1)
                || (CharacterHasSpEffect(chrEntityId, 51220)
                    && !EntityInRadiusOfEntity(chrEntityId2, chrEntityId, targetDistance, 1)));
        WaitFor(spFlagArea);
        ForceAnimationPlayback(chrEntityId, 20026, false, false, false);
        WaitFor(ElapsedSeconds(0.5));
        DisableCharacter(chrEntityId);
        DisableCharacterGravity(chrEntityId);
        SetEventFlagID(eventFlagId2, ON);
    }
L6:
    WaitFor(
        !CharacterHasSpEffect(chrEntityId2, 32)
            && !CharacterHasSpEffect(chrEntityId2, 99200)
            && !CharacterHasSpEffect(chrEntityId2, 99201)
            && !CharacterHasSpEffect(chrEntityId2, 102610)
            && !CharacterHasSpEffect(chrEntityId2, 16166)
            && !CharacterHasSpEffect(chrEntityId2, 99211)
            && !CharacterHasSpEffect(chrEntityId2, 102450));
    WaitFor(ElapsedSeconds(0.5));
    RestartIf(
        !(!CharacterHasSpEffect(chrEntityId2, 32)
            && !CharacterHasSpEffect(chrEntityId2, 99200)
            && !CharacterHasSpEffect(chrEntityId2, 99201)
            && !CharacterHasSpEffect(chrEntityId2, 102610)
            && !CharacterHasSpEffect(chrEntityId2, 16166)
            && !CharacterHasSpEffect(chrEntityId2, 99211)
            && !CharacterHasSpEffect(chrEntityId2, 102450)));
    SetEventFlagID(eventFlagId2, OFF);
    EndIf(EventFlag(8062));
    if (value != 1) {
        WaitFor(ElapsedFrames(1));
    }
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Character, chrEntityId2, 900, chrEntityId2);
    WaitFor(ElapsedSeconds(1));
    ForceAnimationPlayback(chrEntityId, 20025, false, false, false);
    EnableCharacter(chrEntityId);
    EnableCharacterGravity(chrEntityId);
    ClearCharactersAITarget(chrEntityId);
    WaitFor(ElapsedSeconds(1));
    RestartEvent();
});

$Event(90035228, Default, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, targetDistance, targetDistance2) {
    DisableNetworkSync();
    EndIf(!EventFlag(8077));
    EndIf(EventFlag(8062));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    SetEventFlagID(eventFlagId3, OFF);
    WaitFor(
        EventFlag(eventFlagId2)
            || EventFlag(8062)
            || (!EventFlag(8224) && EntityInRadiusOfEntity(entityId, 20000, targetDistance, 1))
            || (EventFlag(8224) && EntityInRadiusOfEntity(entityId, 20000, targetDistance2, 1)));
    EndIf(EventFlag(eventFlagId2));
    EndIf(EventFlag(8062));
    SetEventFlagID(eventFlagId3, ON);
    WaitFor(
        EventFlag(eventFlagId2)
            || EventFlag(8062)
            || (!EventFlag(8224) && !EntityInRadiusOfEntity(entityId, 20000, targetDistance, 1))
            || (EventFlag(8224) && !EntityInRadiusOfEntity(entityId, 20000, targetDistance2, 1)));
    SetEventFlagID(eventFlagId3, OFF);
    RestartEvent();
});

$Event(90035229, Default, function(eventFlagId, chrEntityId, eventFlagId2, generatorEntityId, chrEntityId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6, eventFlagId7, eventFlagId8, eventFlagId9, eventFlagId10, eventFlagId11, value) {
    EndIf(!EventFlag(8077));
    EndIf(EventFlag(8062));
    if (!EventFlag(eventFlagId11)) {
        if (!EventFlag(eventFlagId10)) {
            if (!EventFlag(eventFlagId6)) {
                WaitFor(EventFlag(8061));
                EndIf(!EventFlag(eventFlagId));
                WaitFor(EventFlag(eventFlagId2));
                WaitFor(CharacterDead(chrEntityId));
                if (!EventFlag(eventFlagId6)) {
                    if (IsPlayerNo(1)) {
                        WaitFor(!CharacterBackreadStatus(chrEntityId));
                        SetNetworkconnectedEventFlagID(eventFlagId3, ON);
                    } else if (IsPlayerNo(2)) {
                        WaitFor(!CharacterBackreadStatus(chrEntityId));
                        SetNetworkconnectedEventFlagID(eventFlagId4, ON);
                    } else if (IsPlayerNo(3)) {
                        WaitFor(!CharacterBackreadStatus(chrEntityId));
                        SetNetworkconnectedEventFlagID(eventFlagId5, ON);
                        Goto(L0);
                    }
L0:
                    chrFlag &= (!(CharacterHasTeamType(10002, TeamType.Human)
                        || CharacterHasTeamType(10002, TeamType.WhitePhantom)
                        || CharacterHasTeamType(10002, TeamType.Indiscriminate)
                        || CharacterHasTeamType(10002, TeamType.Unknown77)
                        || CharacterHasTeamType(10002, TeamType.Disabled))
                        || EventFlag(eventFlagId3))
                        && (!(CharacterHasTeamType(10003, TeamType.Human)
                            || CharacterHasTeamType(10003, TeamType.WhitePhantom)
                            || CharacterHasTeamType(10003, TeamType.Indiscriminate)
                            || CharacterHasTeamType(10003, TeamType.Unknown77)
                            || CharacterHasTeamType(10003, TeamType.Disabled))
                            || EventFlag(eventFlagId4))
                        && (!(CharacterHasTeamType(10004, TeamType.Human)
                            || CharacterHasTeamType(10004, TeamType.WhitePhantom)
                            || CharacterHasTeamType(10004, TeamType.Indiscriminate)
                            || CharacterHasTeamType(10004, TeamType.Unknown77)
                            || CharacterHasTeamType(10004, TeamType.Disabled))
                            || EventFlag(eventFlagId5));
                    WaitFor(chrFlag);
                    SetNetworkconnectedEventFlagID(eventFlagId6, ON);
                }
            }
L1:
            InvokeEnemyGenerator(generatorEntityId);
            if (IsPlayerNo(1)) {
                WaitFor(!CharacterDead(chrEntityId));
                SetNetworkconnectedEventFlagID(eventFlagId7, ON);
            } else if (IsPlayerNo(2)) {
                WaitFor(!CharacterDead(chrEntityId));
                SetNetworkconnectedEventFlagID(eventFlagId8, ON);
            } else if (IsPlayerNo(3)) {
                WaitFor(!CharacterDead(chrEntityId));
                SetNetworkconnectedEventFlagID(eventFlagId9, ON);
                Goto(L2);
            }
L2:
            DisableCharacter(chrEntityId);
            chrFlag &= (!(CharacterHasTeamType(10002, TeamType.Human)
                || CharacterHasTeamType(10002, TeamType.WhitePhantom)
                || CharacterHasTeamType(10002, TeamType.Indiscriminate)
                || CharacterHasTeamType(10002, TeamType.Unknown77)
                || CharacterHasTeamType(10002, TeamType.Disabled))
                || EventFlag(eventFlagId7))
                && (!(CharacterHasTeamType(10003, TeamType.Human)
                    || CharacterHasTeamType(10003, TeamType.WhitePhantom)
                    || CharacterHasTeamType(10003, TeamType.Indiscriminate)
                    || CharacterHasTeamType(10003, TeamType.Unknown77)
                    || CharacterHasTeamType(10003, TeamType.Disabled))
                    || EventFlag(eventFlagId8))
                && (!(CharacterHasTeamType(10004, TeamType.Human)
                    || CharacterHasTeamType(10004, TeamType.WhitePhantom)
                    || CharacterHasTeamType(10004, TeamType.Indiscriminate)
                    || CharacterHasTeamType(10004, TeamType.Unknown77)
                    || CharacterHasTeamType(10004, TeamType.Disabled))
                    || EventFlag(eventFlagId9));
            WaitFor(chrFlag || ElapsedSeconds(5));
            RestartIf(!chrFlag.Passed);
            SetNetworkconnectedEventFlagID(eventFlagId10, ON);
        }
L3:
        WaitFor(
            (CharacterHasTeamType(chrEntityId2, TeamType.Human)
                || CharacterHasTeamType(chrEntityId2, TeamType.WhitePhantom)
                || CharacterHasTeamType(chrEntityId2, TeamType.Indiscriminate)
                || CharacterHasTeamType(chrEntityId2, TeamType.Unknown77)
                || CharacterHasTeamType(chrEntityId2, TeamType.Disabled))
                && EventFlag(8221));
        SetEventFlagID(eventFlagId11, ON);
    }
L6:
    WaitFor(
        !CharacterHasSpEffect(chrEntityId2, 32)
            && !CharacterHasSpEffect(chrEntityId2, 99200)
            && !CharacterHasSpEffect(chrEntityId2, 99201)
            && !CharacterHasSpEffect(chrEntityId2, 102610)
            && !CharacterHasSpEffect(chrEntityId2, 16166)
            && !CharacterHasSpEffect(chrEntityId2, 99211)
            && !CharacterHasSpEffect(chrEntityId2, 102450));
    WaitFor(ElapsedSeconds(0.5));
    RestartIf(
        !(!CharacterHasSpEffect(chrEntityId2, 32)
            && !CharacterHasSpEffect(chrEntityId2, 99200)
            && !CharacterHasSpEffect(chrEntityId2, 99201)
            && !CharacterHasSpEffect(chrEntityId2, 102610)
            && !CharacterHasSpEffect(chrEntityId2, 16166)
            && !CharacterHasSpEffect(chrEntityId2, 99211)
            && !CharacterHasSpEffect(chrEntityId2, 102450)));
    SetEventFlagID(eventFlagId11, OFF);
    EndIf(EventFlag(8062));
    if (value != 1) {
        WaitFor(ElapsedFrames(1));
    }
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Character, chrEntityId2, 900, chrEntityId2);
    WaitFor(ElapsedSeconds(1));
    ForceAnimationPlayback(chrEntityId, 20025, false, false, false);
    EnableCharacter(chrEntityId);
    EnableCharacterGravity(chrEntityId);
    ClearCharactersAITarget(chrEntityId);
    SetNetworkconnectedEventFlagID(eventFlagId3, OFF);
    SetNetworkconnectedEventFlagID(eventFlagId4, OFF);
    SetNetworkconnectedEventFlagID(eventFlagId5, OFF);
    SetNetworkconnectedEventFlagID(eventFlagId6, OFF);
    SetNetworkconnectedEventFlagID(eventFlagId7, OFF);
    SetNetworkconnectedEventFlagID(eventFlagId8, OFF);
    SetNetworkconnectedEventFlagID(eventFlagId9, OFF);
    SetNetworkconnectedEventFlagID(eventFlagId10, OFF);
    WaitFor(ElapsedSeconds(1));
    RestartEvent();
});

$Event(90035230, Default, function(entityId, eventFlagId, eventFlagId2, targetDistance, targetDistance2) {
    DisableNetworkSync();
    EndIf(!EventFlag(8078));
    EndIf(EventFlag(8061));
    WaitFor(EventFlag(eventFlagId2));
    if (IsPlayerNo(1)) {
        WaitFor(ElapsedSeconds(0));
    }
    if (IsPlayerNo(2)) {
        WaitFor(ElapsedSeconds(1.5));
    }
    if (IsPlayerNo(3)) {
        WaitFor(ElapsedSeconds(3));
    }
    if (EventFlag(9999)) {
        WaitFixedTimeFrames(1);
    }
    if (!EventFlag(9999)) {
        EndIf(
            !(PlayAreaCurrentTimeInRange(0, 0, 0, 20, 29, 59)
                && InsidePlayArea(entityId, -75)
                && !InsidePlayAreaByTime(entityId, 0, 23, 59, 0)));
        EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    }
    EndIf(
        !((!EntityInRadiusOfEntity(entityId, 10002, targetDistance, 1)
            && !EntityInRadiusOfEntity(entityId, 10003, targetDistance, 1)
            && !EntityInRadiusOfEntity(entityId, 10004, targetDistance, 1))
            && (EntityInRadiusOfEntity(entityId, 10002, targetDistance2, 1)
                || EntityInRadiusOfEntity(entityId, 10003, targetDistance2, 1)
                || EntityInRadiusOfEntity(entityId, 10004, targetDistance2, 1))));
    SetNetworkconnectedEventFlagID(8061, ON);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    RecordUserDispLog(11140, entityId, LogObjectType.None, -1);
});

$Event(90035231, Default, function(entityId, eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    WaitFor(EventFlag(eventFlagId2) || EventFlag(8061));
    if (IsPlayerNo(1)) {
        WaitFor(ElapsedSeconds(0));
    }
    if (IsPlayerNo(2)) {
        WaitFor(ElapsedSeconds(1.5));
    }
    if (IsPlayerNo(3)) {
        WaitFor(ElapsedSeconds(3));
    }
    EndIf(EventFlag(8061));
    if (!EventFlag(9999)) {
        EndIf(
            !(PlayAreaCurrentTimeInRange(0, 0, 0, 20, 29, 59)
                && InsidePlayArea(entityId, -75)
                && !InsidePlayAreaByTime(entityId, 0, 23, 59, 0)));
    }
    if (!EventFlagAndRandomCondition(6001, 0.3)) {
        WaitFor(ElapsedFrames(1));
        EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    }
    SetNetworkconnectedEventFlagID(8061, ON);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    RecordUserDispLog(11140, entityId, LogObjectType.None, -1);
});

$Event(90035232, Default, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, eventFlagId) {
    if (!EventFlag(8078)) {
        DisableCharacter(chrEntityId);
        DisableCharacter(chrEntityId2);
        EndEvent();
    }
    if (EventFlag(8062)) {
        DisableCharacter(chrEntityId);
        DisableCharacter(chrEntityId2);
        EndEvent();
    }
    if (EventFlag(8061) && !EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId);
        DisableCharacter(chrEntityId2);
        EndEvent();
    }
    if (EventFlag(8061) && EventFlag(chrEntityId2)) {
        DisableCharacterHPBarDisplay(chrEntityId);
        EnableCharacterDefaultBackread(chrEntityId);
        SetCharacterEnableDistance(chrEntityId, 1200);
        DisableCharacterDisableOnHitUnload(chrEntityId);
        DisableCharacterGravity(chrEntityId);
        EnableCharacter(chrEntityId);
        SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
        SetAlwaysDrawCharacter(chrEntityId, ON);
        EnableCharacter(chrEntityId2);
        SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
        SetAlwaysDrawCharacter(chrEntityId2, ON);
        if (IsPlayerNo(1)) {
            EnableCharacterDefaultBackread(chrEntityId3);
            SetCharacterEnableDistance(chrEntityId3, 1200);
            DisableCharacterDisableOnHitUnload(chrEntityId3);
            SetNetworkUpdateAuthority(chrEntityId3, AuthorityLevel.Forced);
            DisableCharacterFadeOnEnable(chrEntityId3);
        }
        if (IsPlayerNo(2)) {
            EnableCharacterDefaultBackread(chrEntityId4);
            SetCharacterEnableDistance(chrEntityId4, 1200);
            DisableCharacterDisableOnHitUnload(chrEntityId4);
            SetNetworkUpdateAuthority(chrEntityId4, AuthorityLevel.Forced);
            DisableCharacterFadeOnEnable(chrEntityId4);
        }
        if (IsPlayerNo(3)) {
            EnableCharacterDefaultBackread(chrEntityId5);
            SetCharacterEnableDistance(chrEntityId5, 1200);
            DisableCharacterDisableOnHitUnload(chrEntityId5);
            SetNetworkUpdateAuthority(chrEntityId5, AuthorityLevel.Forced);
            DisableCharacterFadeOnEnable(chrEntityId5);
        }
        ForceAnimationPlayback(chrEntityId, 30005, true, false, false);
        EndEvent();
    }
L10:
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacter(chrEntityId);
    DisableCharacter(chrEntityId2);
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    WaitFor(ElapsedSeconds(3));
    EnableCharacterDefaultBackread(chrEntityId);
    SetCharacterEnableDistance(chrEntityId, 1200);
    DisableCharacterDisableOnHitUnload(chrEntityId);
    DisableCharacterGravity(chrEntityId);
    EnableCharacter(chrEntityId);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetAlwaysDrawCharacter(chrEntityId, ON);
    EnableCharacter(chrEntityId2);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetAlwaysDrawCharacter(chrEntityId2, ON);
    if (IsPlayerNo(1)) {
        EnableCharacterDefaultBackread(chrEntityId3);
        SetCharacterEnableDistance(chrEntityId3, 1200);
        DisableCharacterDisableOnHitUnload(chrEntityId3);
        SetNetworkUpdateAuthority(chrEntityId3, AuthorityLevel.Forced);
        DisableCharacterFadeOnEnable(chrEntityId3);
    }
    if (IsPlayerNo(2)) {
        EnableCharacterDefaultBackread(chrEntityId4);
        SetCharacterEnableDistance(chrEntityId4, 1200);
        DisableCharacterDisableOnHitUnload(chrEntityId4);
        SetNetworkUpdateAuthority(chrEntityId4, AuthorityLevel.Forced);
        DisableCharacterFadeOnEnable(chrEntityId4);
    }
    if (IsPlayerNo(3)) {
        EnableCharacterDefaultBackread(chrEntityId5);
        SetCharacterEnableDistance(chrEntityId5, 1200);
        DisableCharacterDisableOnHitUnload(chrEntityId5);
        SetNetworkUpdateAuthority(chrEntityId4, AuthorityLevel.Forced);
        DisableCharacterFadeOnEnable(chrEntityId5);
    }
    ForceAnimationPlayback(chrEntityId, 20003, false, true, false);
    ForceAnimationPlayback(chrEntityId, 30005, true, false, false);
});

$Event(90035233, Default, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, eventFlagId) {
    EndIf(!EventFlag(8078));
    EndIf(EventFlag(8062));
    EndIf(HPRatio(chrEntityId) <= 0);
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    if (!(EventFlag(8061) && EventFlag(eventFlagId))) {
        WaitFor(EventFlag(8061));
        EndIf(!EventFlag(eventFlagId));
        WaitFor(ElapsedSeconds(3));
        EndIf(EventFlag(8062));
        EndIf(HPRatio(chrEntityId) <= 0);
    }
L0:
    EndIf(EventFlag(8062));
    hp = HPRatio(chrEntityId) <= 0;
    if (hp) {
        ShootBullet(chrEntityId2, 10002, -1, 201200099, 0, 0, 0);
        ShootBullet(chrEntityId3, 10003, -1, 201200099, 0, 0, 0);
        ShootBullet(chrEntityId4, 10004, -1, 201200099, 0, 0, 0);
    }
    EndIf(hp);
    if (IsPlayerNo(1)) {
        SetCharacterEventTarget(chrEntityId2, chrEntityId);
        IssueShortWarpRequest(chrEntityId2, TargetEntityType.Character, 10002, 210);
        WaitFor(CharacterBackreadStatus(chrEntityId2));
        SetSpEffect(chrEntityId2, 16641);
    }
    if (IsPlayerNo(2)) {
        SetCharacterEventTarget(chrEntityId3, chrEntityId);
        IssueShortWarpRequest(chrEntityId3, TargetEntityType.Character, 10003, 210);
        WaitFor(CharacterBackreadStatus(chrEntityId3));
        SetSpEffect(chrEntityId3, 16641);
    }
    if (IsPlayerNo(3)) {
        SetCharacterEventTarget(chrEntityId4, chrEntityId);
        IssueShortWarpRequest(chrEntityId4, TargetEntityType.Character, 10004, 210);
        WaitFor(CharacterBackreadStatus(chrEntityId4));
        SetSpEffect(chrEntityId4, 16641);
    }
    WaitFor(ElapsedSeconds(10));
    RestartEvent();
});

$Event(90035234, Default, function(chrEntityId, chrEntityId2, eventFlagId) {
    EndIf(!EventFlag(8078));
    EndIf(EventFlag(8062));
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    WaitFor(
        CharacterHasSpEffect(chrEntityId2, 16641, GreaterOrEqual, 1)
            || CharacterHasSpEffect(chrEntityId2, 16642, GreaterOrEqual, 1));
    WaitFor(ElapsedSeconds(5));
    EndIf(EventFlag(8062));
    SetSpEffect(chrEntityId, 45928);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 45928));
    RestartEvent();
});

$Event(90035235, Default, function(eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(!EventFlag(8078));
    EndIf(EventFlag(8062));
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId2));
    if (!(EventFlag(8061) && EventFlag(eventFlagId2))) {
        WaitFor(EventFlag(8061));
        EndIf(!EventFlag(eventFlagId2));
        WaitFor(CharacterHasSpEffect(20000, 45949) || ElapsedSeconds(10));
        if (CharacterHasSpEffect(20000, 45949)) {
            if (PlayersSoulLevel() > 1) {
                StealPlayerLevel(1);
                SetEventFlagID(eventFlagId, ON);
                DisplayTextEffectId(3108);
            }
            WaitFor(!CharacterHasSpEffect(20000, 45949));
        }
    }
L0:
    WaitFor(CharacterHasSpEffect(20000, 45949));
    if (PlayersSoulLevel() > 1) {
        StealPlayerLevel(1);
        SetEventFlagID(eventFlagId, ON);
        DisplayTextEffectId(3108);
        WaitFor(ElapsedSeconds(0.5));
        RecordUserDispLog(11144, 20000, LogObjectType.None, -1);
    }
    WaitFor(!CharacterHasSpEffect(20000, 45949));
    RestartEvent();
});

$Event(90035236, Default, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2) {
    EndIf(!EventFlag(8078));
    EndIf(EventFlag(8062));
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId2));
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId2));
    flagHp = EventFlag(eventFlagId) || CharacterHPValue(chrEntityId) == 0;
    if (!EventFlag(9999)) {
        cond = !InsidePlayArea(chrEntityId, 50);
    }
    time = PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59);
    flagHpTime |= flagHp;
    if (!EventFlag(9999)) {
        flagHpTime |= cond;
    }
    flagHpTime |= time;
    WaitFor(flagHpTime);
    if (CharacterHasSpEffect(10002, 16643)) {
        SetSpEffect(10002, 16644);
    }
    if (CharacterHasSpEffect(10003, 16643)) {
        SetSpEffect(10003, 16644);
    }
    if (CharacterHasSpEffect(10004, 16643)) {
        SetSpEffect(10004, 16644);
    }
    DisableCharacterDefaultBackread(chrEntityId);
    SetCharacterEnableDistance(chrEntityId, -1);
    EnableCharacterDisableOnHitUnload(chrEntityId);
    DisableCharacterDefaultBackread(chrEntityId2);
    SetCharacterEnableDistance(chrEntityId2, -1);
    EnableCharacterDisableOnHitUnload(chrEntityId2);
    SetNetworkUpdateAuthority(chrEntityId2, AuthorityLevel.Normal);
    if (!flagHp.Passed) {
        SetNetworkconnectedEventFlagID(8062, ON);
        ForceAnimationPlayback(chrEntityId, 20004, false, true, false);
        DisableCharacter(chrEntityId);
        DisableCharacter(chrEntityId2);
        RecordUserDispLog(11143, chrEntityId, LogObjectType.None, -1);
        SetWorldMapPointFlag(0, OFF);
        EndEvent();
    }
    EnableCharacterGravity(chrEntityId);
    WaitFor(EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(8062, ON);
    WaitFor(ElapsedSeconds(3.2));
    SetNetworkconnectedEventFlagID(8025, ON);
    ForceAnimationPlayback(chrEntityId, 20005, false, true, false);
    DisplayTextEffectId(2200);
    DisableCharacter(chrEntityId2);
    RecordUserDispLog(11142, chrEntityId, LogObjectType.None, -1);
    SetWorldMapPointFlag(0, OFF);
});

$Event(90035237, Default, function(eventFlagId, eventFlagId2, eventFlagId3) {
    DisableNetworkSync();
    EndIf(!EventFlag(8078));
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId3));
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId3));
    WaitFor(EventFlag(8062));
    WaitFor(EventFlag(8025) || ElapsedSeconds(20));
    EndIf(!EventFlag(8025));
    EndIf(!EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    GainSoulsFromStolenLevels(1);
    SetEventFlagID(eventFlagId2, ON);
    SpawnOneshotSFX(TargetEntityType.Character, 20000, 220, 43);
});

$Event(90035238, Default, function(eventFlagId, chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4) {
    EndIf(!EventFlag(8078));
    EndIf(EventFlag(8062));
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    WaitFor(HPRatio(chrEntityId) <= 0);
    ShootBullet(chrEntityId2, 10002, 220, 201200099, 0, 0, 0);
    ShootBullet(chrEntityId3, 10003, 220, 201200099, 0, 0, 0);
    ShootBullet(chrEntityId4, 10004, 220, 201200099, 0, 0, 0);
});

$Event(90035240, Default, function(entityId, eventFlagId, eventFlagId2, targetDistance, targetDistance2) {
    DisableNetworkSync();
    EndIf(!EventFlag(8079));
    EndIf(EventFlag(8061));
    WaitFor(EventFlag(eventFlagId2));
    if (IsPlayerNo(1)) {
        WaitFor(ElapsedSeconds(0));
    }
    if (IsPlayerNo(2)) {
        WaitFor(ElapsedSeconds(1.5));
    }
    if (IsPlayerNo(3)) {
        WaitFor(ElapsedSeconds(3));
    }
    if (!EventFlag(9999)) {
        time &= PlayAreaCurrentTimeInRange(0, 0, 0, 20, 29, 59);
        time2 = (PlayAreaCurrentTimeInRange(0, 0, 0, 10, 38, 42)
            && InsidePlayAreaByTime(entityId, 0, 13, 4, 30))
            || (PlayAreaCurrentTimeInRange(10, 38, 42, 23, 59, 59)
                && InsidePlayAreaByTime(entityId, 0, 16, 30, 0));
    }
    time &= time2 && !InsidePlayAreaByTime(entityId, 0, 23, 59, 0);
    EndIf(!time);
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    EndIf(
        !((!EntityInRadiusOfEntity(entityId, 10002, targetDistance, 1)
            && !EntityInRadiusOfEntity(entityId, 10003, targetDistance, 1)
            && !EntityInRadiusOfEntity(entityId, 10004, targetDistance, 1))
            && (EntityInRadiusOfEntity(entityId, 10002, targetDistance2, 1)
                || EntityInRadiusOfEntity(entityId, 10003, targetDistance2, 1)
                || EntityInRadiusOfEntity(entityId, 10004, targetDistance2, 1))));
    SetNetworkconnectedEventFlagID(8061, ON);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetWorldMapPointFlag(0, ON);
    SetWorldMapPointFlag(4, ON);
    RecordUserDispLog(11130, entityId, LogObjectType.None, -1);
    PlaySE(20000, SoundType.EnvironmentalSound, 600080020);
});

$Event(90035241, Default, function(eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(!EventFlag(8079));
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    if (EventFlag(eventFlagId2)) {
        if (CharacterHasSpEffect(20000, 46250)) {
            SpawnOneshotSFX(TargetEntityType.Character, 20000, 220, 675727);
            WaitFixedTimeSeconds(0.75);
            SpawnOneshotSFX(TargetEntityType.Character, 20000, 220, 675729);
            WaitFixedTimeSeconds(0.1);
            SetSpEffect(20000, 46251);
        }
        EndEvent();
    }
    if (EventFlag(8025)) {
        if (CharacterHasSpEffect(20000, 46250)) {
            SpawnOneshotSFX(TargetEntityType.Character, 20000, 220, 675727);
            WaitFixedTimeSeconds(0.75);
            SpawnOneshotSFX(TargetEntityType.Character, 20000, 220, 675729);
            WaitFixedTimeSeconds(0.1);
            SetSpEffect(20000, 46251);
        }
        EndEvent();
    }
    if (EventFlag(8061) && EventFlag(eventFlagId)) {
        if (!CharacterHasSpEffect(20000, 46250)) {
            SetSpEffect(20000, 46250);
        }
    } else {
        WaitFor(EventFlag(8061));
        EndIf(!EventFlag(eventFlagId));
        if (!CharacterHasSpEffect(20000, 46250)) {
            WaitFixedTimeSeconds(1);
            SpawnOneshotSFX(TargetEntityType.Character, 20000, 220, 675726);
            WaitFixedTimeSeconds(0.5);
            SpawnOneshotSFX(TargetEntityType.Character, 20000, 220, 675728);
            SetSpEffect(20000, 46250);
        }
    }
L0:
    WaitFor(!CharacterHasSpEffect(20000, 46250) || EventFlag(eventFlagId2) || EventFlag(8025));
    RestartEvent();
});

$Event(90035242, Default, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    DisableNetworkSync();
    EndIf(!EventFlag(8079));
    EndIf(EventFlag(8106));
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId2) || EventFlag(8106) || EventFlag(8062));
    if (EventFlag(eventFlagId2)) {
        if (IsPlayerNo(1)) {
            SetNetworkconnectedEventFlagID(eventFlagId3, ON);
        }
        if (IsPlayerNo(2)) {
            SetNetworkconnectedEventFlagID(eventFlagId4, ON);
        }
        if (IsPlayerNo(3)) {
            SetNetworkconnectedEventFlagID(eventFlagId5, ON);
        }
        RecordUserDispLog(11131, eventFlagId, LogObjectType.None, -1);
    }
});

$Event(90035243, Default, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    EndIf(!EventFlag(8079));
    EndIf(EventFlag(8106));
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    flag = EventFlag(eventFlagId2) || EventFlag(eventFlagId3) || EventFlag(eventFlagId4);
    WaitFor(flag || EventFlag(8106) || EventFlag(8062));
    if (flag.Passed) {
        SetNetworkconnectedEventFlagID(8106, ON);
    }
});

$Event(90035244, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    if (!EventFlag(8079)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (EventFlag(8061) && !EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (EventFlag(8110)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (EventFlag(8062) && !EventFlag(8025)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (EventFlag(7505) && PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (EventFlag(8061) && EventFlag(eventFlagId) && !EventFlag(8062)) {
        EnableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, false);
        EnableCharacterImmortality(chrEntityId);
        ForceAnimationPlayback(chrEntityId, 30015, true, false, false);
        Goto(L0);
    }
    if (EventFlag(8061)
        && EventFlag(eventFlagId)
        && EventFlag(8025)
        && PlayAreaCurrentTimeInRange(0, 0, 0, 22, 59, 59)) {
        EnableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, false);
        EnableCharacterImmortality(chrEntityId);
        ForceAnimationPlayback(chrEntityId, 0, true, false, false);
        Goto(L1);
    }
    if (EventFlag(8061)
        && EventFlag(eventFlagId)
        && EventFlag(8025)
        && PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, false);
        EnableCharacterImmortality(chrEntityId);
        ForceAnimationPlayback(chrEntityId, 30016, true, false, false);
    } else {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, false);
        WaitFor(EventFlag(8061));
        EndIf(!EventFlag(eventFlagId));
        WaitFor(ElapsedSeconds(3));
        EnableCharacter(chrEntityId);
        EnableCharacterImmortality(chrEntityId);
        ForceAnimationPlayback(chrEntityId, 30015, true, false, false);
L0:
        WaitFor(EventFlag(8062) || EventFlag(8105));
        EndIf(EventFlag(8105));
        if (!EventFlag(8025)) {
            ForceAnimationPlayback(chrEntityId, 20015, false, false, false);
            WaitFor(ElapsedSeconds(2));
            ForceAnimationPlayback(chrEntityId, 30016, true, false, false);
            DisableCharacter(chrEntityId);
            SetCharacterBackreadState(chrEntityId, true);
            SetNetworkconnectedEventFlagID(8110, ON);
            EndEvent();
        }
        ForceAnimationPlayback(chrEntityId, 0, true, false, false);
L1:
        WaitFor(PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59) || EventFlag(8105));
        EndIf(EventFlag(8105));
        ForceAnimationPlayback(chrEntityId, 20015, false, false, false);
        WaitFor(ElapsedSeconds(2));
        ForceAnimationPlayback(chrEntityId, 30016, true, false, false);
        DisableCharacter(chrEntityId);
        if (EventFlag(7505)) {
            SetCharacterBackreadState(chrEntityId, true);
            SetNetworkconnectedEventFlagID(8110, ON);
            EndEvent();
        }
    }
L2:
    WaitFor(PlayAreaCurrentTimeInRange(0, 0, 0, 22, 59, 59) || EventFlag(8105));
    EndIf(EventFlag(8105));
    EnableCharacter(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20016, false, false, false);
    WaitFor(ElapsedSeconds(2));
    ForceAnimationPlayback(chrEntityId, 0, true, false, false);
    RestartEvent();
});

$Event(90035245, Default, function(chrEntityId, eventFlagId) {
    DisableNetworkSync();
    EndIf(!EventFlag(8079));
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    EndIf(EventFlag(8105));
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    WaitFor(
        HasDamageType(chrEntityId, 20000, DamageType.Any) || EventFlag(19004790) || EventFlag(8105));
    SetEventFlagID(19004790, ON);
    WaitFixedTimeFrames(1);
    WaitFor(
        HasDamageType(chrEntityId, 20000, DamageType.Any)
            || HPRatio(chrEntityId) < 0.7
            || EventFlag(19004791)
            || EventFlag(8105));
    SetEventFlagID(19004791, ON);
    WaitFixedTimeFrames(1);
    WaitFor(
        HasDamageType(chrEntityId, 20000, DamageType.Any)
            || HPRatio(chrEntityId) < 0.7
            || EventFlag(8105));
    SetNetworkconnectedEventFlagID(8105, ON);
});

$Event(90035246, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    EndIf(!EventFlag(8079));
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    WaitFor(EventFlag(8105));
    DisableCharacterHPBarDisplay(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20011, false, true, false);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
});

$Event(90035247, Default, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    if (!EventFlag(8079)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    flag &= EventFlag(8061) && !EventFlag(eventFlagId);
    if (flag) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (EventFlag(8061) && EventFlag(eventFlagId3)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (EventFlag(8110)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (EventFlag(eventFlagId2) && EventFlag(eventFlagId)) {
        DisableCharacterHPBarDisplay(chrEntityId);
        SetCharacterBackreadState(chrEntityId, false);
        EnableCharacter(chrEntityId);
    } else {
        DisableCharacterHPBarDisplay(chrEntityId);
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, false);
        WaitFor(EventFlag(8061));
        EndIf(!EventFlag(eventFlagId));
        WaitFor(EventFlag(8105));
        WaitFixedTimeSeconds(3.17);
        EnableCharacter(chrEntityId);
        ForceAnimationPlayback(chrEntityId, 20011, false, true, false);
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
        if (!EventFlag(8062)) {
            RecordUserDispLog(11132, chrEntityId, LogObjectType.None, -1);
        }
    }
L0:
    flag &= EventFlag(8062) && !EventFlag(8025);
    WaitFor(
        PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59)
            || flag
            || CharacterHPValue(chrEntityId) == 0);
    EndIf(CharacterHPValue(chrEntityId) == 0);
    SetSpEffect(chrEntityId, 45831);
    WaitFor(CharacterHasSpEffect(chrEntityId, 45832) || ElapsedSeconds(9));
    WaitFor(ElapsedSeconds(1));
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    SetNetworkconnectedEventFlagID(8110, ON);
});

$Event(90035248, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    EndIf(!EventFlag(8079));
    EndIf(EventFlag(8062));
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId2));
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId2));
    WaitFor(
        EventFlag(eventFlagId)
            || EventFlag(8106)
            || PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59));
    WaitFor(ElapsedSeconds(2));
    SetNetworkconnectedEventFlagID(8062, ON);
    SetWorldMapPointFlag(4, OFF);
    if (!EventFlag(eventFlagId)) {
        if (!EventFlag(8106)) {
            RecordUserDispLog(11134, chrEntityId, LogObjectType.None, -1);
            EndEvent();
        }
    }
L0:
    DisplayTextEffectId(2200);
    SetSpEffect(chrEntityId, 46241);
    if (EventFlag(eventFlagId)) {
        RecordUserDispLog(11133, chrEntityId, LogObjectType.None, -1);
    }
    SetNetworkconnectedEventFlagID(8025, ON);
    SetNetworkconnectedEventFlagID(8106, ON);
});

$Event(90035249, Default, function(eventFlagId) {
    EndIf(!EventFlag(8079));
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    WaitFor(EventFlag(8062));
    if (!EventFlag(8025)) {
        SetNetworkconnectedEventFlagID(8107, ON);
        EndEvent();
    }
    WaitFor(EventFlag(8110));
    SetNetworkconnectedEventFlagID(8107, ON);
});

$Event(90035250, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    if (!EventFlag(8079)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (EventFlag(8061) && !EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    WaitFor(
        EventFlag(8061)
            && !EventFlag(eventFlagId2)
            && PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59)
            && CharacterBackreadStatus(chrEntityId));
    EndIf(!EventFlag(eventFlagId));
    ForceAnimationPlayback(chrEntityId, 20015, false, false, false);
    WaitFor(ElapsedSeconds(2));
    ForceAnimationPlayback(chrEntityId, 30016, true, false, false);
    DisableCharacter(chrEntityId);
    WaitFor(
        !EventFlag(eventFlagId2)
            && CharacterBackreadStatus(chrEntityId)
            && !PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59));
    EnableCharacter(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20016, false, false, false);
    WaitFor(ElapsedSeconds(2));
    ForceAnimationPlayback(chrEntityId, 0, true, false, false);
    RestartEvent();
});

$Event(90035251, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    if (!EventFlag(8079)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (EventFlag(8061) && !EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    WaitFor(
        EventFlag(8061)
            && EventFlag(8062)
            && EventFlag(eventFlagId2)
            && PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59)
            && CharacterBackreadStatus(chrEntityId));
    EndIf(!EventFlag(eventFlagId));
    SetSpEffect(chrEntityId, 45831);
    WaitFor(CharacterHasSpEffect(chrEntityId, 45832) || ElapsedSeconds(10));
    DisableCharacter(chrEntityId);
    RestartEvent();
});

$Event(90035252, Default, function(entityId, eventFlagId) {
    DisableNetworkSync();
    WaitFor(EventFlag(8109) || EventFlag(8061));
    WaitFor(ElapsedFrames(1));
    if (IsPlayerNo(1)) {
        WaitFor(ElapsedSeconds(0));
    }
    if (IsPlayerNo(2)) {
        WaitFor(ElapsedSeconds(1.5));
    }
    if (IsPlayerNo(3)) {
        WaitFor(ElapsedSeconds(3));
    }
    EndIf(EventFlag(8061));
    if (!EventFlag(9999)) {
        time &= PlayAreaCurrentTimeInRange(0, 0, 0, 20, 29, 59);
        time2 |= PlayAreaCurrentTimeInRange(0, 0, 0, 10, 38, 42)
            && InsidePlayAreaByTime(entityId, 0, 13, 4, 30);
    }
    time2 |= PlayAreaCurrentTimeInRange(10, 38, 42, 23, 59, 59)
        && InsidePlayAreaByTime(entityId, 0, 16, 30, 0);
    time &= time2 && !InsidePlayAreaByTime(entityId, 0, 23, 59, 0);
    EndIf(!time);
    if (!EventFlagAndRandomCondition(6001, 0.3)) {
        WaitFor(ElapsedFrames(1));
        EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    }
    SetNetworkconnectedEventFlagID(8061, ON);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetWorldMapPointFlag(0, ON);
    SetWorldMapPointFlag(4, ON);
    RecordUserDispLog(11130, entityId, LogObjectType.None, -1);
    PlaySE(20000, SoundType.EnvironmentalSound, 600080020);
});

$Event(90035253, Default, function(eventFlagId, eventFlagId2, eventFlagId3) {
    if (!EventFlag(8079)) {
        SetNetworkconnectedEventFlagID(eventFlagId, OFF);
        EndEvent();
    }
    if (EventFlag(8061) && !EventFlag(eventFlagId2)) {
        SetNetworkconnectedEventFlagID(eventFlagId, OFF);
        EndEvent();
    }
    if (EventFlag(eventFlagId3)) {
        SetNetworkconnectedEventFlagID(eventFlagId, OFF);
        EndEvent();
    }
    if (EventFlag(8110)) {
        SetNetworkconnectedEventFlagID(eventFlagId, OFF);
        EndEvent();
    }
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId2));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    WaitFor(
        (EventFlag(8062) && !EventFlag(8025))
            || PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59)
            || EventFlag(8110)
            || EventFlag(eventFlagId3));
    SetNetworkconnectedEventFlagID(eventFlagId, OFF);
    EndIf(EventFlag(8062) && !EventFlag(8025));
    EndIf(EventFlag(8110));
    EndIf(EventFlag(eventFlagId3));
    EndIf(EventFlag(7505));
    WaitFor(PlayAreaCurrentTimeInRange(0, 0, 0, 22, 59, 59));
    RestartEvent();
});

$Event(90035260, Default, function(entityId, eventFlagId, eventFlagId2, targetDistance, targetDistance2) {
    DisableNetworkSync();
    EndIf(!EventFlag(8080));
    EndIf(EventFlag(8061));
    WaitFor(EventFlag(eventFlagId2));
    if (IsPlayerNo(1)) {
        WaitFor(ElapsedSeconds(0));
    }
    if (IsPlayerNo(2)) {
        WaitFor(ElapsedSeconds(1.5));
    }
    if (IsPlayerNo(3)) {
        WaitFor(ElapsedSeconds(3));
    }
    if (EventFlag(9999)) {
        WaitFixedTimeFrames(1);
    }
    if (!EventFlag(9999)) {
        EndIf(
            !(PlayAreaCurrentTimeInRange(0, 0, 0, 20, 29, 59)
                && InsidePlayAreaByTime(0, 0, 17, 0, 0)
                && !InsidePlayAreaByTime(0, 0, 23, 59, 0)));
        EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    }
    EndIf(
        !((!EntityInRadiusOfEntity(entityId, 10002, targetDistance, 1)
            && !EntityInRadiusOfEntity(entityId, 10003, targetDistance, 1)
            && !EntityInRadiusOfEntity(entityId, 10004, targetDistance, 1))
            && (EntityInRadiusOfEntity(entityId, 10002, targetDistance2, 1)
                || EntityInRadiusOfEntity(entityId, 10003, targetDistance2, 1)
                || EntityInRadiusOfEntity(entityId, 10004, targetDistance2, 1))));
    SetNetworkconnectedEventFlagID(8061, ON);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetWorldMapPointFlag(0, ON);
    SetWorldMapPointFlag(4, ON);
    RecordUserDispLog(110200, entityId, LogObjectType.None, -1);
});

$Event(90035261, Default, function(entityId, eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    WaitFor(EventFlag(eventFlagId2) || EventFlag(8061));
    WaitFor(ElapsedSeconds(5));
    if (IsPlayerNo(1)) {
        WaitFor(ElapsedSeconds(0));
    }
    if (IsPlayerNo(2)) {
        WaitFor(ElapsedSeconds(1.5));
    }
    if (IsPlayerNo(3)) {
        WaitFor(ElapsedSeconds(3));
    }
    EndIf(EventFlag(8061));
    if (!EventFlag(9999)) {
        EndIf(
            !(PlayAreaCurrentTimeInRange(0, 0, 0, 20, 29, 59)
                && InsidePlayAreaByTime(0, 0, 17, 0, 0)
                && !InsidePlayAreaByTime(0, 0, 23, 59, 0)));
    }
    if (!EventFlagAndRandomCondition(6001, 0.3)) {
        WaitFor(ElapsedFrames(1));
        EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    }
    SetNetworkconnectedEventFlagID(8061, ON);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetWorldMapPointFlag(0, ON);
    SetWorldMapPointFlag(4, ON);
    RecordUserDispLog(110200, entityId, LogObjectType.None, -1);
});

$Event(90035262, Default, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, eventFlagId) {
    EndIf(!EventFlag(8080));
    if (!EventFlag(8062)) {
        if (!(EventFlag(8061) && !EventFlag(eventFlagId))) {
            if (EventFlag(8061) && EventFlag(eventFlagId)) {
                EnableCharacterDefaultBackread(chrEntityId);
                DisableCharacterHPBarDisplay(chrEntityId);
                if (IsPlayerNo(1)) {
                    EnableCharacterDefaultBackread(chrEntityId2);
                    SetCharacterEnableDistance(chrEntityId2, 1200);
                    DisableCharacterDisableOnHitUnload(chrEntityId2);
                    SetNetworkUpdateAuthority(chrEntityId2, AuthorityLevel.Forced);
                    DisableCharacterFadeOnEnable(chrEntityId2);
                }
                if (IsPlayerNo(2)) {
                    EnableCharacterDefaultBackread(chrEntityId3);
                    SetCharacterEnableDistance(chrEntityId3, 1200);
                    DisableCharacterDisableOnHitUnload(chrEntityId3);
                    SetNetworkUpdateAuthority(chrEntityId3, AuthorityLevel.Forced);
                    DisableCharacterFadeOnEnable(chrEntityId3);
                }
                if (IsPlayerNo(3)) {
                    EnableCharacterDefaultBackread(chrEntityId4);
                    SetCharacterEnableDistance(chrEntityId4, 1200);
                    DisableCharacterDisableOnHitUnload(chrEntityId4);
                    SetNetworkUpdateAuthority(chrEntityId4, AuthorityLevel.Forced);
                    DisableCharacterFadeOnEnable(chrEntityId4);
                }
                DisableCharacterCollision(chrEntityId2);
                DisableCharacterCollision(chrEntityId3);
                DisableCharacterCollision(chrEntityId4);
                DisableCharacterGravity(chrEntityId2);
                DisableCharacterGravity(chrEntityId3);
                DisableCharacterGravity(chrEntityId4);
                if (HPRatio(chrEntityId) < 1) {
                    WaitFor(CharacterBackreadStatus(chrEntityId));
                    ForceAnimationPlayback(chrEntityId, 30020, false, false, false);
                }
                EndEvent();
            }
L10:
            DisableCharacter(chrEntityId);
            DisableCharacter(chrEntityId2);
            DisableCharacter(chrEntityId3);
            DisableCharacter(chrEntityId4);
            WaitFor(EventFlag(8061));
            if (EventFlag(eventFlagId)) {
                WaitFor(ElapsedSeconds(3));
                EnableCharacterDefaultBackread(chrEntityId);
                EnableCharacter(chrEntityId);
                DisableCharacterHPBarDisplay(chrEntityId);
                if (IsPlayerNo(1)) {
                    EnableCharacterDefaultBackread(chrEntityId2);
                    EnableCharacter(chrEntityId2);
                    SetCharacterEnableDistance(chrEntityId2, 1200);
                    DisableCharacterDisableOnHitUnload(chrEntityId2);
                    SetNetworkUpdateAuthority(chrEntityId2, AuthorityLevel.Forced);
                    DisableCharacterFadeOnEnable(chrEntityId2);
                }
                if (IsPlayerNo(2)) {
                    EnableCharacterDefaultBackread(chrEntityId3);
                    EnableCharacter(chrEntityId3);
                    SetCharacterEnableDistance(chrEntityId3, 1200);
                    DisableCharacterDisableOnHitUnload(chrEntityId3);
                    SetNetworkUpdateAuthority(chrEntityId3, AuthorityLevel.Forced);
                    DisableCharacterFadeOnEnable(chrEntityId3);
                }
                if (IsPlayerNo(3)) {
                    EnableCharacterDefaultBackread(chrEntityId4);
                    EnableCharacter(chrEntityId4);
                    SetCharacterEnableDistance(chrEntityId4, 1200);
                    DisableCharacterDisableOnHitUnload(chrEntityId4);
                    SetNetworkUpdateAuthority(chrEntityId4, AuthorityLevel.Forced);
                    DisableCharacterFadeOnEnable(chrEntityId4);
                }
                DisableCharacterCollision(chrEntityId2);
                DisableCharacterCollision(chrEntityId3);
                DisableCharacterCollision(chrEntityId4);
                DisableCharacterGravity(chrEntityId2);
                DisableCharacterGravity(chrEntityId3);
                DisableCharacterGravity(chrEntityId4);
                WaitFor(CharacterBackreadStatus(chrEntityId));
                ForceAnimationPlayback(chrEntityId, 30020, false, false, false);
                EndEvent();
            }
        }
    }
L20:
    DisableCharacter(chrEntityId);
    DisableCharacter(chrEntityId2);
    DisableCharacter(chrEntityId3);
    DisableCharacter(chrEntityId4);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId3, true);
    SetCharacterBackreadState(chrEntityId4, true);
});

$Event(90035263, Default, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, eventFlagId) {
    EndIf(!EventFlag(8080));
    EndIf(EventFlag(8062));
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    hp = HPRatio(chrEntityId) < 0.99;
    hpTime |= hp;
    if (!EventFlag(9999)) {
        time |= !InsidePlayArea(chrEntityId, 50);
    }
    time |= PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59);
    hpTime |= time;
    WaitFor(hpTime);
    DisableCharacterDefaultBackread(chrEntityId);
    DisableCharacterDefaultBackread(chrEntityId2);
    SetCharacterEnableDistance(chrEntityId2, -1);
    EnableCharacterDisableOnHitUnload(chrEntityId2);
    SetNetworkUpdateAuthority(chrEntityId2, AuthorityLevel.Normal);
    DisableCharacterDefaultBackread(chrEntityId3);
    SetCharacterEnableDistance(chrEntityId3, -1);
    EnableCharacterDisableOnHitUnload(chrEntityId3);
    SetNetworkUpdateAuthority(chrEntityId3, AuthorityLevel.Normal);
    DisableCharacterDefaultBackread(chrEntityId4);
    SetCharacterEnableDistance(chrEntityId4, -1);
    EnableCharacterDisableOnHitUnload(chrEntityId4);
    SetNetworkUpdateAuthority(chrEntityId4, AuthorityLevel.Normal);
    if (!hp.Passed) {
        SetNetworkconnectedEventFlagID(8062, ON);
        ForceAnimationPlayback(chrEntityId, 20021, false, false, false);
        WaitFor(ElapsedSeconds(10));
        DisableCharacter(chrEntityId);
        DisableCharacter(chrEntityId2);
        DisableCharacter(chrEntityId3);
        DisableCharacter(chrEntityId4);
        SetCharacterBackreadState(chrEntityId, true);
        SetCharacterBackreadState(chrEntityId2, true);
        SetCharacterBackreadState(chrEntityId3, true);
        SetCharacterBackreadState(chrEntityId4, true);
        RecordUserDispLog(110202, chrEntityId, LogObjectType.None, -1);
        SetWorldMapPointFlag(0, OFF);
        SetWorldMapPointFlag(4, OFF);
        EndEvent();
    }
L0:
    ForceAnimationPlayback(chrEntityId, 20021, false, false, false);
    WaitFor(ElapsedSeconds(5));
    PlaySE(20000, SoundType.EnvironmentalSound, 600081102);
    WaitFor(ElapsedSeconds(1));
    SetWorldMapPointFlag(0, OFF);
    SetWorldMapPointFlag(4, OFF);
    SetNetworkconnectedEventFlagID(8062, ON);
    SetNetworkconnectedEventFlagID(8025, ON);
    DisplayTextEffectId(2200);
    RecordUserDispLog(110201, chrEntityId, LogObjectType.None, -1);
    if (!IsPlayerCount(1)) {
        if (!IsPlayerCount(2)) {
            SetSpEffect(20000, 98800);
        }
    }
    if (!IsPlayerCount(1)) {
        if (!IsPlayerCount(3)) {
            SetSpEffect(20000, 98801);
        }
    }
    if (!IsPlayerCount(2)) {
        if (!IsPlayerCount(3)) {
            SetSpEffect(20000, 98802);
        }
    }
    WaitFor(ElapsedSeconds(10));
    DisableCharacter(chrEntityId);
    DisableCharacter(chrEntityId2);
    DisableCharacter(chrEntityId3);
    DisableCharacter(chrEntityId4);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId3, true);
    SetCharacterBackreadState(chrEntityId4, true);
});

$Event(90035264, Default, function(eventFlagId) {
    EndIf(!EventFlag(8080));
    EndIf(EventFlag(8062));
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    if (!(EventFlag(8061) && EventFlag(eventFlagId))) {
        WaitFor(EventFlag(8061));
        EndIf(!EventFlag(eventFlagId));
        if (PlayerIsInOwnWorld()) {
            SetNetworkconnectedEventFlagID(80003, ON);
        }
        WaitFor(ElapsedSeconds(18));
        if (PlayerIsInOwnWorld()) {
            SetNetworkconnectedEventFlagID(80003, OFF);
        }
    }
L0:
    WaitFor((ElapsedSeconds(49) && PlayerIsInOwnWorld()) || EventFlag(80002) || EventFlag(8062));
    EndIf(EventFlag(8062));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(80002, ON);
    }
    WaitFor((ElapsedSeconds(18) && PlayerIsInOwnWorld()) || !EventFlag(80002) || EventFlag(8062));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(80002, OFF);
    }
    EndIf(EventFlag(8062));
    RestartEvent();
});

$Event(90035265, Default, function(chrEntityId, eventFlagId) {
    DisableNetworkSync();
    EndIf(!EventFlag(8080));
    EndIf(EventFlag(8062));
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    if (!(EventFlag(8061) && EventFlag(eventFlagId))) {
        WaitFor(EventFlag(8061));
        EndIf(!EventFlag(eventFlagId));
        WaitFor(ElapsedSeconds(1));
        DisableCharacterCollision(chrEntityId);
        DisableCharacterGravity(chrEntityId);
        WaitFor(ElapsedFrames(1));
        WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Character, 20000, 210, 20000);
        CreateBulletOwner(chrEntityId);
        PlaySE(20000, SoundType.EnvironmentalSound, 600081100);
        WaitFor(ElapsedSeconds(6));
        PlaySE(20000, SoundType.EnvironmentalSound, 600081101);
        WaitFor(ElapsedSeconds(4));
        if (!EventFlag(8062)) {
            WaitFor(RandomElapsedSeconds(0, 0.3));
            if (!CharacterHasSpEffect(20000, 16166)) {
                if (!CharacterHasSpEffect(20000, 99200)) {
                    if (!CharacterHasSpEffect(20000, 99201)) {
                        if (!CharacterHasSpEffect(20000, 99211)) {
                            if (!CharacterHasSpEffect(20000, 102610)) {
                                ShootBullet(chrEntityId, 20000, -1, 802001040, 0, 0, 0);
                                WaitFixedTimeFrames(1);
                                ShootBullet(chrEntityId, 20000, -1, 802001130, 0, 0, 0);
                            }
                        }
                    }
                }
            }
            WaitFor(ElapsedSeconds(0.1));
            if (!EventFlag(8062)) {
                if (!CharacterHasSpEffect(20000, 16166)) {
                    if (!CharacterHasSpEffect(20000, 99200)) {
                        if (!CharacterHasSpEffect(20000, 99201)) {
                            if (!CharacterHasSpEffect(20000, 99211)) {
                                if (!CharacterHasSpEffect(20000, 102610)) {
                                    ShootBullet(chrEntityId, 20000, -1, 802001050, 0, 0, 0);
                                }
                            }
                        }
                    }
                }
                WaitFor(ElapsedSeconds(0.1));
                if (!EventFlag(8062)) {
                    if (!CharacterHasSpEffect(20000, 16166)) {
                        if (!CharacterHasSpEffect(20000, 99200)) {
                            if (!CharacterHasSpEffect(20000, 99201)) {
                                if (!CharacterHasSpEffect(20000, 99211)) {
                                    if (!CharacterHasSpEffect(20000, 102610)) {
                                        ShootBullet(chrEntityId, 20000, -1, 802001060, 0, 0, 0);
                                    }
                                }
                            }
                        }
                    }
                    WaitFor(ElapsedSeconds(0.1));
                    if (!EventFlag(8062)) {
                        if (!CharacterHasSpEffect(20000, 16166)) {
                            if (!CharacterHasSpEffect(20000, 99200)) {
                                if (!CharacterHasSpEffect(20000, 99201)) {
                                    if (!CharacterHasSpEffect(20000, 99211)) {
                                        if (!CharacterHasSpEffect(20000, 102610)) {
                                            ShootBullet(chrEntityId, 20000, -1, 802001070, 0, 0, 0);
                                        }
                                    }
                                }
                            }
                        }
                        WaitFor(ElapsedSeconds(0.1));
                        if (!EventFlag(8062)) {
                            if (!CharacterHasSpEffect(20000, 16166)) {
                                if (!CharacterHasSpEffect(20000, 99200)) {
                                    if (!CharacterHasSpEffect(20000, 99201)) {
                                        if (!CharacterHasSpEffect(20000, 99211)) {
                                            if (!CharacterHasSpEffect(20000, 102610)) {
                                                ShootBullet(chrEntityId, 20000, -1, 802001080, 0, 0, 0);
                                            }
                                        }
                                    }
                                }
                            }
                            WaitFor(ElapsedSeconds(0.2));
                            if (!EventFlag(8062)) {
                                if (!CharacterHasSpEffect(20000, 16166)) {
                                    if (!CharacterHasSpEffect(20000, 99200)) {
                                        if (!CharacterHasSpEffect(20000, 99201)) {
                                            if (!CharacterHasSpEffect(20000, 99211)) {
                                                if (!CharacterHasSpEffect(20000, 102610)) {
                                                    ShootBullet(chrEntityId, 20000, -1, 802001090, 0, 0, 0);
                                                }
                                            }
                                        }
                                    }
                                }
                                WaitFor(ElapsedSeconds(0.1));
                                if (!EventFlag(8062)) {
                                    if (!CharacterHasSpEffect(20000, 16166)) {
                                        if (!CharacterHasSpEffect(20000, 99200)) {
                                            if (!CharacterHasSpEffect(20000, 99201)) {
                                                if (!CharacterHasSpEffect(20000, 99211)) {
                                                    if (!CharacterHasSpEffect(20000, 102610)) {
                                                        ShootBullet(chrEntityId, 20000, -1, 802001100, 0, 0, 0);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    WaitFor(ElapsedSeconds(0.1));
                                    if (!EventFlag(8062)) {
                                        if (!CharacterHasSpEffect(20000, 16166)) {
                                            if (!CharacterHasSpEffect(20000, 99200)) {
                                                if (!CharacterHasSpEffect(20000, 99201)) {
                                                    if (!CharacterHasSpEffect(20000, 99211)) {
                                                        if (!CharacterHasSpEffect(20000, 102610)) {
                                                            ShootBullet(chrEntityId, 20000, -1, 802001110, 0, 0, 0);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        WaitFor(ElapsedSeconds(0.1));
                                        if (!EventFlag(8062)) {
                                            if (!CharacterHasSpEffect(20000, 16166)) {
                                                if (!CharacterHasSpEffect(20000, 99200)) {
                                                    if (!CharacterHasSpEffect(20000, 99201)) {
                                                        if (!CharacterHasSpEffect(20000, 99211)) {
                                                            if (!CharacterHasSpEffect(20000, 102610)) {
                                                                ShootBullet(chrEntityId, 20000, -1, 802001120, 0, 0, 0);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            WaitFor(RandomElapsedSeconds(0.1, 0.5));
                                            if (!EventFlag(8062)) {
                                                if (!CharacterHasSpEffect(20000, 16166)) {
                                                    if (!CharacterHasSpEffect(20000, 99200)) {
                                                        if (!CharacterHasSpEffect(20000, 99201)) {
                                                            if (!CharacterHasSpEffect(20000, 99211)) {
                                                                if (!CharacterHasSpEffect(20000, 102610)) {
                                                                    ShootBullet(chrEntityId, 20000, -1, 802001040, 0, 0, 0);
                                                                    WaitFixedTimeFrames(1);
                                                                    ShootBullet(chrEntityId, 20000, -1, 802001130, 0, 0, 0);
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                WaitFor(ElapsedSeconds(0.1));
                                                if (!EventFlag(8062)) {
                                                    if (!CharacterHasSpEffect(20000, 16166)) {
                                                        if (!CharacterHasSpEffect(20000, 99200)) {
                                                            if (!CharacterHasSpEffect(20000, 99201)) {
                                                                if (!CharacterHasSpEffect(20000, 99211)) {
                                                                    if (!CharacterHasSpEffect(20000, 102610)) {
                                                                        ShootBullet(chrEntityId, 20000, -1, 802001050, 0, 0, 0);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                    WaitFor(ElapsedSeconds(0.1));
                                                    if (!EventFlag(8062)) {
                                                        if (!CharacterHasSpEffect(20000, 16166)) {
                                                            if (!CharacterHasSpEffect(20000, 99200)) {
                                                                if (!CharacterHasSpEffect(20000, 99201)) {
                                                                    if (!CharacterHasSpEffect(20000, 99211)) {
                                                                        if (!CharacterHasSpEffect(20000, 102610)) {
                                                                            ShootBullet(chrEntityId, 20000, -1, 802001060, 0, 0, 0);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        WaitFor(ElapsedSeconds(0.1));
                                                        if (!EventFlag(8062)) {
                                                            if (!CharacterHasSpEffect(20000, 16166)) {
                                                                if (!CharacterHasSpEffect(20000, 99200)) {
                                                                    if (!CharacterHasSpEffect(20000, 99201)) {
                                                                        if (!CharacterHasSpEffect(20000, 99211)) {
                                                                            if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                ShootBullet(chrEntityId, 20000, -1, 802001070, 0, 0, 0);
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            WaitFor(ElapsedSeconds(0.1));
                                                            if (!EventFlag(8062)) {
                                                                if (!CharacterHasSpEffect(20000, 16166)) {
                                                                    if (!CharacterHasSpEffect(20000, 99200)) {
                                                                        if (!CharacterHasSpEffect(20000, 99201)) {
                                                                            if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                    ShootBullet(chrEntityId, 20000, -1, 802001080, 0, 0, 0);
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                                WaitFor(ElapsedSeconds(0.2));
                                                                if (!EventFlag(8062)) {
                                                                    if (!CharacterHasSpEffect(20000, 16166)) {
                                                                        if (!CharacterHasSpEffect(20000, 99200)) {
                                                                            if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                    if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                        ShootBullet(chrEntityId, 20000, -1, 802001090, 0, 0, 0);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                    WaitFor(ElapsedSeconds(0.1));
                                                                    if (!EventFlag(8062)) {
                                                                        if (!CharacterHasSpEffect(20000, 16166)) {
                                                                            if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                    if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                        if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                            ShootBullet(chrEntityId, 20000, -1, 802001100, 0, 0, 0);
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                        WaitFor(
                                                                            ElapsedSeconds(0.1));
                                                                        if (!EventFlag(8062)) {
                                                                            if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                    if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                        if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                            if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                ShootBullet(chrEntityId, 20000, -1, 802001110, 0, 0, 0);
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                            WaitFor(
                                                                                ElapsedSeconds(0.1));
                                                                            if (!EventFlag(8062)) {
                                                                                if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                    if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                        if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                            if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                    ShootBullet(chrEntityId, 20000, -1, 802001120, 0, 0, 0);
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                                WaitFor(
                                                                                    RandomElapsedSeconds(0.1, 0.5));
                                                                                if (!EventFlag(8062)) {
                                                                                    if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                        if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                            if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                    if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                        ShootBullet(chrEntityId, 20000, -1, 802001040, 0, 0, 0);
                                                                                                        WaitFixedTimeFrames(1);
                                                                                                        ShootBullet(chrEntityId, 20000, -1, 802001130, 0, 0, 0);
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                    WaitFor(
                                                                                        ElapsedSeconds(0.1));
                                                                                    if (!EventFlag(8062)) {
                                                                                        if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                            if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                    if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                        if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                            ShootBullet(chrEntityId, 20000, -1, 802001050, 0, 0, 0);
                                                                                                            ShootBullet(chrEntityId, 20000, -1, 802001060, 0, 0, 0);
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                        WaitFor(
                                                                                            ElapsedSeconds(0.1));
                                                                                        if (!EventFlag(8062)) {
                                                                                            if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                    if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                        if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                            if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                ShootBullet(chrEntityId, 20000, -1, 802001070, 0, 0, 0);
                                                                                                                ShootBullet(chrEntityId, 20000, -1, 802001080, 0, 0, 0);
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                            WaitFor(
                                                                                                ElapsedSeconds(0.4));
                                                                                            if (!EventFlag(8062)) {
                                                                                                if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                    if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                        if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                            if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                    ShootBullet(chrEntityId, 20000, -1, 802001090, 0, 0, 0);
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                                WaitFor(
                                                                                                    ElapsedSeconds(0.1));
                                                                                                if (!EventFlag(8062)) {
                                                                                                    if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                        if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                            if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                    if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                        ShootBullet(chrEntityId, 20000, -1, 802001100, 0, 0, 0);
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                    WaitFor(
                                                                                                        ElapsedSeconds(0.1));
                                                                                                    if (!EventFlag(8062)) {
                                                                                                        if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                            if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                    if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                        if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                            ShootBullet(chrEntityId, 20000, -1, 802001110, 0, 0, 0);
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                        WaitFor(
                                                                                                            ElapsedSeconds(0.1));
                                                                                                        if (!EventFlag(8062)) {
                                                                                                            if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                    if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                        if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                            if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                ShootBullet(chrEntityId, 20000, -1, 802001120, 0, 0, 0);
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                            WaitFor(
                                                                                                                RandomElapsedSeconds(0.1, 0.5));
                                                                                                            if (!EventFlag(8062)) {
                                                                                                                if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                    if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                        if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                            if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                    ShootBullet(chrEntityId, 20000, -1, 802001040, 0, 0, 0);
                                                                                                                                    WaitFixedTimeFrames(1);
                                                                                                                                    ShootBullet(chrEntityId, 20000, -1, 802001130, 0, 0, 0);
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                                WaitFor(
                                                                                                                    ElapsedSeconds(0.1));
                                                                                                                if (!EventFlag(8062)) {
                                                                                                                    if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                        if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                            if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                    if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                        ShootBullet(chrEntityId, 20000, -1, 802001050, 0, 0, 0);
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                    WaitFor(
                                                                                                                        ElapsedSeconds(0.1));
                                                                                                                    if (!EventFlag(8062)) {
                                                                                                                        if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                            if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                    if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                        if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                            ShootBullet(chrEntityId, 20000, -1, 802001060, 0, 0, 0);
                                                                                                                                            ShootBullet(chrEntityId, 20000, -1, 802001070, 0, 0, 0);
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                        WaitFor(
                                                                                                                            ElapsedSeconds(0.1));
                                                                                                                        if (!EventFlag(8062)) {
                                                                                                                            if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                    if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                        if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                            if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                ShootBullet(chrEntityId, 20000, -1, 802001080, 0, 0, 0);
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                            WaitFor(
                                                                                                                                ElapsedSeconds(0.3));
                                                                                                                            if (!EventFlag(8062)) {
                                                                                                                                if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                    if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                        if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                            if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                    ShootBullet(chrEntityId, 20000, -1, 802001090, 0, 0, 0);
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                                WaitFor(
                                                                                                                                    ElapsedSeconds(0.1));
                                                                                                                                if (!EventFlag(8062)) {
                                                                                                                                    if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                        if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                            if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                                if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                    if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                        ShootBullet(chrEntityId, 20000, -1, 802001100, 0, 0, 0);
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                    WaitFor(
                                                                                                                                        ElapsedSeconds(0.1));
                                                                                                                                    if (!EventFlag(8062)) {
                                                                                                                                        if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                            if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                                if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                                    if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                        if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                            ShootBullet(chrEntityId, 20000, -1, 802001110, 0, 0, 0);
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                        WaitFor(
                                                                                                                                            ElapsedSeconds(0.1));
                                                                                                                                        if (!EventFlag(8062)) {
                                                                                                                                            if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                                if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                                    if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                                        if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                            if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                                ShootBullet(chrEntityId, 20000, -1, 802001120, 0, 0, 0);
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                            WaitFor(
                                                                                                                                                RandomElapsedSeconds(0.1, 0.5));
                                                                                                                                            if (!EventFlag(8062)) {
                                                                                                                                                if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                                    if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                                        if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                                            if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                                if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                                    ShootBullet(chrEntityId, 20000, -1, 802001040, 0, 0, 0);
                                                                                                                                                                    WaitFixedTimeFrames(1);
                                                                                                                                                                    ShootBullet(chrEntityId, 20000, -1, 802001130, 0, 0, 0);
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                                WaitFor(
                                                                                                                                                    ElapsedSeconds(0.1));
                                                                                                                                                if (!EventFlag(8062)) {
                                                                                                                                                    if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                                        if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                                            if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                                                if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                                    if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                                        ShootBullet(chrEntityId, 20000, -1, 802001050, 0, 0, 0);
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    WaitFor(
                                                                                                                                                        ElapsedSeconds(0.1));
                                                                                                                                                    if (!EventFlag(8062)) {
                                                                                                                                                        if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                                            if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                                                if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                                                    if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                                        if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                                            ShootBullet(chrEntityId, 20000, -1, 802001060, 0, 0, 0);
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                        WaitFor(
                                                                                                                                                            ElapsedSeconds(0.1));
                                                                                                                                                        if (!EventFlag(8062)) {
                                                                                                                                                            if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                                                if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                                                    if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                                                        if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                                            if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                                                ShootBullet(chrEntityId, 20000, -1, 802001070, 0, 0, 0);
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                            WaitFor(
                                                                                                                                                                ElapsedSeconds(0.1));
                                                                                                                                                            if (!EventFlag(8062)) {
                                                                                                                                                                if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                                                    if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                                                        if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                                                            if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                                                if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                                                    ShootBullet(chrEntityId, 20000, -1, 802001080, 0, 0, 0);
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                                WaitFor(
                                                                                                                                                                    ElapsedSeconds(0.2));
                                                                                                                                                                if (!EventFlag(8062)) {
                                                                                                                                                                    if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                                                        if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                                                            if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                                                                if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                                                    if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                                                        ShootBullet(chrEntityId, 20000, -1, 802001090, 0, 0, 0);
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                    WaitFor(
                                                                                                                                                                        ElapsedSeconds(0.1));
                                                                                                                                                                    if (!EventFlag(8062)) {
                                                                                                                                                                        if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                                                            if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                                                                if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                                                                    if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                                                        if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                                                            ShootBullet(chrEntityId, 20000, -1, 802001100, 0, 0, 0);
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                        WaitFor(
                                                                                                                                                                            ElapsedSeconds(0.1));
                                                                                                                                                                        if (!EventFlag(8062)) {
                                                                                                                                                                            if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                                                                if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                                                                    if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                                                                        if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                                                            if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                                                                ShootBullet(chrEntityId, 20000, -1, 802001110, 0, 0, 0);
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                            WaitFor(
                                                                                                                                                                                ElapsedSeconds(0.1));
                                                                                                                                                                            if (!EventFlag(8062)) {
                                                                                                                                                                                if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                                                                    if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                                                                        if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                                                                            if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                                                                if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                                                                    ShootBullet(chrEntityId, 20000, -1, 802001120, 0, 0, 0);
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                                WaitFor(
                                                                                                                                                                                    ElapsedSeconds(3));
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
L0:
        NoOp();
    }
L1:
    DisableCharacterCollision(chrEntityId);
    DisableCharacterGravity(chrEntityId);
    WaitFor(EventFlag(80002) || EventFlag(8062));
    EndIf(EventFlag(8062));
    WaitFor(ElapsedSeconds(7));
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Character, 20000, 210, 20000);
    CreateBulletOwner(chrEntityId);
    PlaySE(20000, SoundType.EnvironmentalSound, 600081101);
    WaitFor(ElapsedSeconds(4));
    if (!EventFlag(8062)) {
        WaitFor(RandomElapsedSeconds(0, 0.3));
        if (!CharacterHasSpEffect(20000, 16166)) {
            if (!CharacterHasSpEffect(20000, 99200)) {
                if (!CharacterHasSpEffect(20000, 99201)) {
                    if (!CharacterHasSpEffect(20000, 99211)) {
                        if (!CharacterHasSpEffect(20000, 102610)) {
                            ShootBullet(chrEntityId, 20000, -1, 802001040, 0, 0, 0);
                            WaitFixedTimeFrames(1);
                            ShootBullet(chrEntityId, 20000, -1, 802001130, 0, 0, 0);
                        }
                    }
                }
            }
        }
        WaitFor(ElapsedSeconds(0.1));
        if (!EventFlag(8062)) {
            if (!CharacterHasSpEffect(20000, 16166)) {
                if (!CharacterHasSpEffect(20000, 99200)) {
                    if (!CharacterHasSpEffect(20000, 99201)) {
                        if (!CharacterHasSpEffect(20000, 99211)) {
                            if (!CharacterHasSpEffect(20000, 102610)) {
                                ShootBullet(chrEntityId, 20000, -1, 802001050, 0, 0, 0);
                            }
                        }
                    }
                }
            }
            WaitFor(ElapsedSeconds(0.1));
            if (!EventFlag(8062)) {
                if (!CharacterHasSpEffect(20000, 16166)) {
                    if (!CharacterHasSpEffect(20000, 99200)) {
                        if (!CharacterHasSpEffect(20000, 99201)) {
                            if (!CharacterHasSpEffect(20000, 99211)) {
                                if (!CharacterHasSpEffect(20000, 102610)) {
                                    ShootBullet(chrEntityId, 20000, -1, 802001060, 0, 0, 0);
                                }
                            }
                        }
                    }
                }
                WaitFor(ElapsedSeconds(0.1));
                if (!EventFlag(8062)) {
                    if (!CharacterHasSpEffect(20000, 16166)) {
                        if (!CharacterHasSpEffect(20000, 99200)) {
                            if (!CharacterHasSpEffect(20000, 99201)) {
                                if (!CharacterHasSpEffect(20000, 99211)) {
                                    if (!CharacterHasSpEffect(20000, 102610)) {
                                        ShootBullet(chrEntityId, 20000, -1, 802001070, 0, 0, 0);
                                    }
                                }
                            }
                        }
                    }
                    WaitFor(ElapsedSeconds(0.1));
                    if (!EventFlag(8062)) {
                        if (!CharacterHasSpEffect(20000, 16166)) {
                            if (!CharacterHasSpEffect(20000, 99200)) {
                                if (!CharacterHasSpEffect(20000, 99201)) {
                                    if (!CharacterHasSpEffect(20000, 99211)) {
                                        if (!CharacterHasSpEffect(20000, 102610)) {
                                            ShootBullet(chrEntityId, 20000, -1, 802001080, 0, 0, 0);
                                        }
                                    }
                                }
                            }
                        }
                        WaitFor(ElapsedSeconds(0.2));
                        if (!EventFlag(8062)) {
                            if (!CharacterHasSpEffect(20000, 16166)) {
                                if (!CharacterHasSpEffect(20000, 99200)) {
                                    if (!CharacterHasSpEffect(20000, 99201)) {
                                        if (!CharacterHasSpEffect(20000, 99211)) {
                                            if (!CharacterHasSpEffect(20000, 102610)) {
                                                ShootBullet(chrEntityId, 20000, -1, 802001090, 0, 0, 0);
                                            }
                                        }
                                    }
                                }
                            }
                            WaitFor(ElapsedSeconds(0.1));
                            if (!EventFlag(8062)) {
                                if (!CharacterHasSpEffect(20000, 16166)) {
                                    if (!CharacterHasSpEffect(20000, 99200)) {
                                        if (!CharacterHasSpEffect(20000, 99201)) {
                                            if (!CharacterHasSpEffect(20000, 99211)) {
                                                if (!CharacterHasSpEffect(20000, 102610)) {
                                                    ShootBullet(chrEntityId, 20000, -1, 802001100, 0, 0, 0);
                                                }
                                            }
                                        }
                                    }
                                }
                                WaitFor(ElapsedSeconds(0.1));
                                if (!EventFlag(8062)) {
                                    if (!CharacterHasSpEffect(20000, 16166)) {
                                        if (!CharacterHasSpEffect(20000, 99200)) {
                                            if (!CharacterHasSpEffect(20000, 99201)) {
                                                if (!CharacterHasSpEffect(20000, 99211)) {
                                                    if (!CharacterHasSpEffect(20000, 102610)) {
                                                        ShootBullet(chrEntityId, 20000, -1, 802001110, 0, 0, 0);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    WaitFor(ElapsedSeconds(0.1));
                                    if (!EventFlag(8062)) {
                                        if (!CharacterHasSpEffect(20000, 16166)) {
                                            if (!CharacterHasSpEffect(20000, 99200)) {
                                                if (!CharacterHasSpEffect(20000, 99201)) {
                                                    if (!CharacterHasSpEffect(20000, 99211)) {
                                                        if (!CharacterHasSpEffect(20000, 102610)) {
                                                            ShootBullet(chrEntityId, 20000, -1, 802001120, 0, 0, 0);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        WaitFor(RandomElapsedSeconds(0.1, 0.5));
                                        if (!EventFlag(8062)) {
                                            if (!CharacterHasSpEffect(20000, 16166)) {
                                                if (!CharacterHasSpEffect(20000, 99200)) {
                                                    if (!CharacterHasSpEffect(20000, 99201)) {
                                                        if (!CharacterHasSpEffect(20000, 99211)) {
                                                            if (!CharacterHasSpEffect(20000, 102610)) {
                                                                ShootBullet(chrEntityId, 20000, -1, 802001040, 0, 0, 0);
                                                                WaitFixedTimeFrames(1);
                                                                ShootBullet(chrEntityId, 20000, -1, 802001130, 0, 0, 0);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            WaitFor(ElapsedSeconds(0.1));
                                            if (!EventFlag(8062)) {
                                                if (!CharacterHasSpEffect(20000, 16166)) {
                                                    if (!CharacterHasSpEffect(20000, 99200)) {
                                                        if (!CharacterHasSpEffect(20000, 99201)) {
                                                            if (!CharacterHasSpEffect(20000, 99211)) {
                                                                if (!CharacterHasSpEffect(20000, 102610)) {
                                                                    ShootBullet(chrEntityId, 20000, -1, 802001050, 0, 0, 0);
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                WaitFor(ElapsedSeconds(0.1));
                                                if (!EventFlag(8062)) {
                                                    if (!CharacterHasSpEffect(20000, 16166)) {
                                                        if (!CharacterHasSpEffect(20000, 99200)) {
                                                            if (!CharacterHasSpEffect(20000, 99201)) {
                                                                if (!CharacterHasSpEffect(20000, 99211)) {
                                                                    if (!CharacterHasSpEffect(20000, 102610)) {
                                                                        ShootBullet(chrEntityId, 20000, -1, 802001060, 0, 0, 0);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                    WaitFor(ElapsedSeconds(0.1));
                                                    if (!EventFlag(8062)) {
                                                        if (!CharacterHasSpEffect(20000, 16166)) {
                                                            if (!CharacterHasSpEffect(20000, 99200)) {
                                                                if (!CharacterHasSpEffect(20000, 99201)) {
                                                                    if (!CharacterHasSpEffect(20000, 99211)) {
                                                                        if (!CharacterHasSpEffect(20000, 102610)) {
                                                                            ShootBullet(chrEntityId, 20000, -1, 802001070, 0, 0, 0);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        WaitFor(ElapsedSeconds(0.1));
                                                        if (!EventFlag(8062)) {
                                                            if (!CharacterHasSpEffect(20000, 16166)) {
                                                                if (!CharacterHasSpEffect(20000, 99200)) {
                                                                    if (!CharacterHasSpEffect(20000, 99201)) {
                                                                        if (!CharacterHasSpEffect(20000, 99211)) {
                                                                            if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                ShootBullet(chrEntityId, 20000, -1, 802001080, 0, 0, 0);
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            WaitFor(ElapsedSeconds(0.2));
                                                            if (!EventFlag(8062)) {
                                                                if (!CharacterHasSpEffect(20000, 16166)) {
                                                                    if (!CharacterHasSpEffect(20000, 99200)) {
                                                                        if (!CharacterHasSpEffect(20000, 99201)) {
                                                                            if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                    ShootBullet(chrEntityId, 20000, -1, 802001090, 0, 0, 0);
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                                WaitFor(ElapsedSeconds(0.1));
                                                                if (!EventFlag(8062)) {
                                                                    if (!CharacterHasSpEffect(20000, 16166)) {
                                                                        if (!CharacterHasSpEffect(20000, 99200)) {
                                                                            if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                    if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                        ShootBullet(chrEntityId, 20000, -1, 802001100, 0, 0, 0);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                    WaitFor(ElapsedSeconds(0.1));
                                                                    if (!EventFlag(8062)) {
                                                                        if (!CharacterHasSpEffect(20000, 16166)) {
                                                                            if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                    if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                        if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                            ShootBullet(chrEntityId, 20000, -1, 802001110, 0, 0, 0);
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                        WaitFor(
                                                                            ElapsedSeconds(0.1));
                                                                        if (!EventFlag(8062)) {
                                                                            if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                    if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                        if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                            if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                ShootBullet(chrEntityId, 20000, -1, 802001120, 0, 0, 0);
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                            WaitFor(
                                                                                RandomElapsedSeconds(0.1, 0.5));
                                                                            if (!EventFlag(8062)) {
                                                                                if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                    if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                        if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                            if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                    ShootBullet(chrEntityId, 20000, -1, 802001040, 0, 0, 0);
                                                                                                    WaitFixedTimeFrames(1);
                                                                                                    ShootBullet(chrEntityId, 20000, -1, 802001130, 0, 0, 0);
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                                WaitFor(
                                                                                    ElapsedSeconds(0.1));
                                                                                if (!EventFlag(8062)) {
                                                                                    if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                        if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                            if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                    if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                        ShootBullet(chrEntityId, 20000, -1, 802001050, 0, 0, 0);
                                                                                                        ShootBullet(chrEntityId, 20000, -1, 802001060, 0, 0, 0);
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                    WaitFor(
                                                                                        ElapsedSeconds(0.1));
                                                                                    if (!EventFlag(8062)) {
                                                                                        if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                            if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                    if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                        if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                            ShootBullet(chrEntityId, 20000, -1, 802001070, 0, 0, 0);
                                                                                                            ShootBullet(chrEntityId, 20000, -1, 802001080, 0, 0, 0);
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                        WaitFor(
                                                                                            ElapsedSeconds(0.4));
                                                                                        if (!EventFlag(8062)) {
                                                                                            if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                    if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                        if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                            if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                ShootBullet(chrEntityId, 20000, -1, 802001090, 0, 0, 0);
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                            WaitFor(
                                                                                                ElapsedSeconds(0.1));
                                                                                            if (!EventFlag(8062)) {
                                                                                                if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                    if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                        if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                            if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                    ShootBullet(chrEntityId, 20000, -1, 802001100, 0, 0, 0);
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                                WaitFor(
                                                                                                    ElapsedSeconds(0.1));
                                                                                                if (!EventFlag(8062)) {
                                                                                                    if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                        if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                            if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                    if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                        ShootBullet(chrEntityId, 20000, -1, 802001110, 0, 0, 0);
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                    WaitFor(
                                                                                                        ElapsedSeconds(0.1));
                                                                                                    if (!EventFlag(8062)) {
                                                                                                        if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                            if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                    if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                        if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                            ShootBullet(chrEntityId, 20000, -1, 802001120, 0, 0, 0);
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                        WaitFor(
                                                                                                            RandomElapsedSeconds(0.1, 0.5));
                                                                                                        if (!EventFlag(8062)) {
                                                                                                            if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                    if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                        if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                            if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                ShootBullet(chrEntityId, 20000, -1, 802001040, 0, 0, 0);
                                                                                                                                WaitFixedTimeFrames(1);
                                                                                                                                ShootBullet(chrEntityId, 20000, -1, 802001130, 0, 0, 0);
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                            WaitFor(
                                                                                                                ElapsedSeconds(0.1));
                                                                                                            if (!EventFlag(8062)) {
                                                                                                                if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                    if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                        if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                            if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                    ShootBullet(chrEntityId, 20000, -1, 802001050, 0, 0, 0);
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                                WaitFor(
                                                                                                                    ElapsedSeconds(0.1));
                                                                                                                if (!EventFlag(8062)) {
                                                                                                                    if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                        if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                            if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                    if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                        ShootBullet(chrEntityId, 20000, -1, 802001060, 0, 0, 0);
                                                                                                                                        ShootBullet(chrEntityId, 20000, -1, 802001070, 0, 0, 0);
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                    WaitFor(
                                                                                                                        ElapsedSeconds(0.1));
                                                                                                                    if (!EventFlag(8062)) {
                                                                                                                        if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                            if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                    if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                        if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                            ShootBullet(chrEntityId, 20000, -1, 802001080, 0, 0, 0);
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                        WaitFor(
                                                                                                                            ElapsedSeconds(0.3));
                                                                                                                        if (!EventFlag(8062)) {
                                                                                                                            if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                    if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                        if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                            if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                ShootBullet(chrEntityId, 20000, -1, 802001090, 0, 0, 0);
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                            WaitFor(
                                                                                                                                ElapsedSeconds(0.1));
                                                                                                                            if (!EventFlag(8062)) {
                                                                                                                                if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                    if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                        if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                            if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                    ShootBullet(chrEntityId, 20000, -1, 802001100, 0, 0, 0);
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                                WaitFor(
                                                                                                                                    ElapsedSeconds(0.1));
                                                                                                                                if (!EventFlag(8062)) {
                                                                                                                                    if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                        if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                            if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                                if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                    if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                        ShootBullet(chrEntityId, 20000, -1, 802001110, 0, 0, 0);
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                    WaitFor(
                                                                                                                                        ElapsedSeconds(0.1));
                                                                                                                                    if (!EventFlag(8062)) {
                                                                                                                                        if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                            if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                                if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                                    if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                        if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                            ShootBullet(chrEntityId, 20000, -1, 802001120, 0, 0, 0);
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                        WaitFor(
                                                                                                                                            RandomElapsedSeconds(0.1, 0.5));
                                                                                                                                        if (!EventFlag(8062)) {
                                                                                                                                            if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                                if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                                    if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                                        if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                            if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                                ShootBullet(chrEntityId, 20000, -1, 802001040, 0, 0, 0);
                                                                                                                                                                WaitFixedTimeFrames(1);
                                                                                                                                                                ShootBullet(chrEntityId, 20000, -1, 802001130, 0, 0, 0);
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                            WaitFor(
                                                                                                                                                ElapsedSeconds(0.1));
                                                                                                                                            if (!EventFlag(8062)) {
                                                                                                                                                if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                                    if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                                        if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                                            if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                                if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                                    ShootBullet(chrEntityId, 20000, -1, 802001050, 0, 0, 0);
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                                WaitFor(
                                                                                                                                                    ElapsedSeconds(0.1));
                                                                                                                                                if (!EventFlag(8062)) {
                                                                                                                                                    if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                                        if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                                            if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                                                if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                                    if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                                        ShootBullet(chrEntityId, 20000, -1, 802001060, 0, 0, 0);
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    WaitFor(
                                                                                                                                                        ElapsedSeconds(0.1));
                                                                                                                                                    if (!EventFlag(8062)) {
                                                                                                                                                        if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                                            if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                                                if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                                                    if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                                        if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                                            ShootBullet(chrEntityId, 20000, -1, 802001070, 0, 0, 0);
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                        WaitFor(
                                                                                                                                                            ElapsedSeconds(0.1));
                                                                                                                                                        if (!EventFlag(8062)) {
                                                                                                                                                            if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                                                if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                                                    if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                                                        if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                                            if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                                                ShootBullet(chrEntityId, 20000, -1, 802001080, 0, 0, 0);
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                            WaitFor(
                                                                                                                                                                ElapsedSeconds(0.2));
                                                                                                                                                            if (!EventFlag(8062)) {
                                                                                                                                                                if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                                                    if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                                                        if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                                                            if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                                                if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                                                    ShootBullet(chrEntityId, 20000, -1, 802001090, 0, 0, 0);
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                                WaitFor(
                                                                                                                                                                    ElapsedSeconds(0.1));
                                                                                                                                                                if (!EventFlag(8062)) {
                                                                                                                                                                    if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                                                        if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                                                            if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                                                                if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                                                    if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                                                        ShootBullet(chrEntityId, 20000, -1, 802001100, 0, 0, 0);
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                    WaitFor(
                                                                                                                                                                        ElapsedSeconds(0.1));
                                                                                                                                                                    if (!EventFlag(8062)) {
                                                                                                                                                                        if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                                                            if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                                                                if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                                                                    if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                                                        if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                                                            ShootBullet(chrEntityId, 20000, -1, 802001110, 0, 0, 0);
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                        WaitFor(
                                                                                                                                                                            ElapsedSeconds(0.1));
                                                                                                                                                                        if (!EventFlag(8062)) {
                                                                                                                                                                            if (!CharacterHasSpEffect(20000, 16166)) {
                                                                                                                                                                                if (!CharacterHasSpEffect(20000, 99200)) {
                                                                                                                                                                                    if (!CharacterHasSpEffect(20000, 99201)) {
                                                                                                                                                                                        if (!CharacterHasSpEffect(20000, 99211)) {
                                                                                                                                                                                            if (!CharacterHasSpEffect(20000, 102610)) {
                                                                                                                                                                                                ShootBullet(chrEntityId, 20000, -1, 802001120, 0, 0, 0);
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                            WaitFor(
                                                                                                                                                                                ElapsedSeconds(7));
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
L2:
    WaitFor(!EventFlag(80002));
    RestartEvent();
});

$Event(90035266, Default, function(entityId, targetDistance, eventFlagId) {
    DisableNetworkSync();
    EndIf(!EventFlag(8080));
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    if (!EventFlag(8062)) {
        GotoIf(L10, !(EventFlag(8061) && EventFlag(eventFlagId)));
        SetEventFlagID(9024, ON);
        GotoIf(L0, CharacterHasSpEffect(20000, 16166));
        GotoIf(L2, EntityInRadiusOfEntity(entityId, 20000, targetDistance, 1));
        if (!EventFlag(80002)) {
            GotoIf(L1, EventFlag(80003));
            Goto(L0);
L10:
            WaitFor(EventFlag(8061));
            EndIf(!EventFlag(eventFlagId));
            WaitFor(ElapsedSeconds(1));
            SetEventFlagID(9024, ON);
            if (!CharacterHasSpEffect(20000, 16166)) {
                if (!EventFlag(7604)) {
                    ActivateGparamOverride(11, 4);
                }
                if (EventFlag(7604)) {
                    ActivateGparamOverride(37, 4);
                }
                WaitFor(ElapsedSeconds(4));
                WaitFor(!EventFlag(80003) || CharacterHasSpEffect(20000, 16166) || EventFlag(8062));
                GotoIf(L3, EventFlag(8062));
                RestartEvent();
            }
L0:
            if (!EventFlag(7604)) {
                ActivateGparamOverride(10, 3);
            }
            if (EventFlag(7604)) {
                ActivateGparamOverride(36, 3);
            }
            WaitFor(
                (!CharacterHasSpEffect(20000, 16166)
                    && (EventFlag(80002)
                        || EventFlag(80003)
                        || EntityInRadiusOfEntity(entityId, 20000, targetDistance, 1)))
                    || EventFlag(8062));
            GotoIf(L3, EventFlag(8062));
            RestartEvent();
        }
L1:
        if (!EventFlag(7604)) {
            ActivateGparamOverride(11, 10);
        }
        if (EventFlag(7604)) {
            ActivateGparamOverride(37, 10);
        }
        WaitFor(ElapsedSeconds(10));
        WaitFor(
            (!EventFlag(80002) && !EventFlag(80003))
                || CharacterHasSpEffect(20000, 16166)
                || EventFlag(8062));
        GotoIf(L3, EventFlag(8062));
        RestartEvent();
L2:
        if (!EventFlag(7604)) {
            ActivateGparamOverride(11, 4);
        }
        if (EventFlag(7604)) {
            ActivateGparamOverride(37, 4);
        }
        WaitFor(ElapsedSeconds(4));
        WaitFor(
            !EntityInRadiusOfEntity(entityId, 20000, targetDistance, 1)
                || CharacterHasSpEffect(20000, 16166)
                || EventFlag(8062));
        if (!EventFlag(8062)) {
            RestartEvent();
        }
    }
L3:
    DeactivateGparamOverride(10);
    WaitFixedTimeFrames(1);
    SetEventFlagID(9024, OFF);
});

$Event(90035267, Default, function(eventFlagId) {
    DisableNetworkSync();
    EndIf(!EventFlag(8080));
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    GotoIf(L3, EventFlag(8062));
    GotoIf(L10, !(EventFlag(8061) && EventFlag(eventFlagId)));
    GotoIf(L2, CharacterHasSpEffect(20000, 16166));
    if (!EventFlag(80002)) {
        if (!EventFlag(80003)) {
            Goto(L0);
L10:
            WaitFor(EventFlag(8061));
            EndIf(!EventFlag(eventFlagId));
            WaitFor(ElapsedSeconds(1));
            if (!CharacterHasSpEffect(20000, 16166)) {
                SetSpEffect(20000, 63010);
            }
            WaitFor(ElapsedSeconds(4));
            WaitFor(!EventFlag(80003) || !CharacterHasSpEffect(20000, 16166));
            if (!CharacterHasSpEffect(20000, 16166)) {
                if (!CharacterHasSpEffect(20000, 63010)) {
                    SetSpEffect(20000, 63010);
                }
                SetSpEffect(20000, 63000);
            }
            WaitFor(!EventFlag(80003) || CharacterHasSpEffect(20000, 16166) || EventFlag(8062));
            GotoIf(L3, EventFlag(8062));
            RestartEvent();
L0:
            SetSpEffect(20000, 63010);
            WaitFor(
                CharacterHasSpEffect(20000, 16166)
                    || EventFlag(80002)
                    || EventFlag(80003)
                    || EventFlag(8062));
            GotoIf(L3, EventFlag(8062));
            RestartEvent();
        }
    }
L1:
    WaitFor(ElapsedSeconds(10));
    if (!CharacterHasSpEffect(20000, 16166)) {
        SetSpEffect(20000, 63000);
    }
    WaitFor(
        CharacterHasSpEffect(20000, 16166)
            || (!EventFlag(80002) && !EventFlag(80003))
            || EventFlag(8062));
    GotoIf(L3, EventFlag(8062));
    RestartEvent();
L2:
    SetSpEffect(20000, 63011);
    WaitFor(!CharacterHasSpEffect(20000, 16166) || EventFlag(8062));
    GotoIf(L3, EventFlag(8062));
    RestartEvent();
L3:
    SetSpEffect(20000, 63011);
});

$Event(90035268, Default, function(chrEntityId, eventFlagId) {
    DisableNetworkSync();
    EndIf(!EventFlag(8080));
    EndIf(EventFlag(8062));
    EndIf(EventFlag(8061) && !EventFlag(eventFlagId));
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    WaitFor(CharacterBackreadStatus(chrEntityId));
    WaitFor(ElapsedSeconds(1));
    WaitFor(
        (CharacterBackreadStatus(chrEntityId)
            && !CharacterHasSpEffect(chrEntityId, 63030, GreaterOrEqual, 1))
            || EventFlag(8062));
    EndIf(EventFlag(8062));
    if (!CharacterHasSpEffect(chrEntityId, 63030, GreaterOrEqual, 1)) {
        ForceAnimationPlayback(chrEntityId, 30020, false, false, false);
    }
    WaitFor(ElapsedSeconds(0.5));
    RestartEvent();
});

$Event(90035270, Default, function(chrEntityId, eventFlagId) {
    DisableNetworkSync();
    EndIf(EventFlag(8062));
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Normal)
            || CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Alert)
            || CharacterAIState(chrEntityId, AIStateType.Combat)
            || CharacterAIState(chrEntityId, AIStateType.PassiveAlert)
            || CharacterAIState(chrEntityId, AIStateType.ActiveAlert)
            || CharacterAIState(chrEntityId, AIStateType.WaitBeforeForget));
    DisableCharacterGravity(chrEntityId);
    areaChr |= EntityInRadiusOfEntity(10002, chrEntityId, 330, 1)
        || EntityInRadiusOfEntity(10003, chrEntityId, 330, 1)
        || EntityInRadiusOfEntity(10004, chrEntityId, 330, 1);
    area &= areaChr && IsEventMapStable();
    if (area) {
        EnableCharacterGravity(chrEntityId);
    } else {
        chr = CharacterAIState(chrEntityId, AIStateType.Normal)
            || CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Alert)
            || CharacterAIState(chrEntityId, AIStateType.Combat)
            || CharacterAIState(chrEntityId, AIStateType.PassiveAlert)
            || CharacterAIState(chrEntityId, AIStateType.ActiveAlert)
            || CharacterAIState(chrEntityId, AIStateType.WaitBeforeForget);
        areaChr |= !chr;
        area &= (EntityInRadiusOfEntity(10002, chrEntityId, 300, 1)
            || EntityInRadiusOfEntity(10003, chrEntityId, 300, 1)
            || EntityInRadiusOfEntity(10004, chrEntityId, 300, 1))
            && IsEventMapStable();
        areaChr |= area;
        WaitFor(areaChr);
        RestartIf(!chr.Passed);
        EnableCharacterGravity(chrEntityId);
    }
L0:
    WaitFor(
        !(CharacterAIState(chrEntityId, AIStateType.Normal)
            || CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Alert)
            || CharacterAIState(chrEntityId, AIStateType.Combat)
            || CharacterAIState(chrEntityId, AIStateType.PassiveAlert)
            || CharacterAIState(chrEntityId, AIStateType.ActiveAlert)
            || CharacterAIState(chrEntityId, AIStateType.WaitBeforeForget))
            || !(EntityInRadiusOfEntity(10002, chrEntityId, 330, 1)
                || EntityInRadiusOfEntity(10003, chrEntityId, 330, 1)
                || EntityInRadiusOfEntity(10004, chrEntityId, 330, 1)));
    RestartEvent();
});

$Event(90035272, Default, function(eventFlagId, chrEntityId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    if (!EventFlag(8224)) {
        WaitFor(EventFlag(8223));
        EndIf(EventFlag(eventFlagId2));
        SetSpEffect(chrEntityId, 98180);
        WaitFor(EventFlag(8224));
        EndIf(EventFlag(eventFlagId2));
    }
L0:
    SetSpEffect(chrEntityId, 98181);
});

$Event(90035273, Default, function(eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    if (!EventFlag(53002900)) {
        timeFlag = PlayAreaCurrentTimeInRange(21, 0, 0, 23, 59, 59) || EventFlag(eventFlagId2);
        WaitFor(EntityInRadiusOfEntity(20000, 53002830, 70, 1) || timeFlag);
        EndIf(timeFlag.Passed);
        SetEventFlagID(53002900, ON);
    }
L0:
    timeFlag2 = PlayAreaCurrentTimeInRange(21, 0, 0, 23, 59, 59) || EventFlag(eventFlagId2);
    WaitFor(!EntityInRadiusOfEntity(20000, 53002830, 70, 1) || timeFlag2);
    SetEventFlagID(53002900, OFF);
    EndIf(timeFlag2.Passed);
    RestartEvent();
});

$Event(90035280, Default, function(entityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, value, eventFlagId5, eventFlagId6, eventFlagId7, eventFlagId8, eventFlagId9) {
    DisableNetworkSync();
    EndIf(!EventFlag(8081));
    EndIf(EventFlag(8061));
    WaitFor(EventFlag(eventFlagId4));
    if (IsPlayerNo(1)) {
        WaitFor(ElapsedSeconds(0));
    }
    if (IsPlayerNo(2)) {
        WaitFor(ElapsedSeconds(3));
    }
    if (IsPlayerNo(3)) {
        WaitFor(ElapsedSeconds(6));
    }
    if (EventFlag(9999)) {
        WaitFixedTimeFrames(1);
    }
    if (!EventFlag(9999)) {
        timeFlag &= PlayAreaCurrentTimeInRange(0, 0, 0, 20, 29, 59) && InsidePlayAreaByTime(0, 0, 17, 0, 0);
    }
    timeFlag &= !EventFlag(eventFlagId5)
        && !EventFlag(eventFlagId6)
        && !EventFlag(eventFlagId7)
        && !EventFlag(eventFlagId8)
        && !EventFlag(eventFlagId9)
        && !IsHotSpot()
        && !AnyBatchEventFlags(eventFlagId, eventFlagId3);
    EndIf(!timeFlag);
    if (IsPlayerNo(1)) {
        EndIf(EventFlag(80012));
    }
    if (IsPlayerNo(2)) {
        EndIf(EventFlag(80013));
    }
    if (IsPlayerNo(3)) {
        EndIf(EventFlag(80014));
    }
    if (value == 0) {
        EndIf(!EventFlagAndRandomCondition(6001, 0.3));
    }
    if (IsPlayerNo(1)) {
        SetNetworkconnectedEventFlagID(80012, ON);
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
    }
    if (IsPlayerNo(2)) {
        SetNetworkconnectedEventFlagID(80013, ON);
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    }
    if (IsPlayerNo(3)) {
        SetNetworkconnectedEventFlagID(80014, ON);
        SetNetworkconnectedEventFlagID(eventFlagId3, ON);
    }
    WaitFor(EventFlag(8061) || PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59));
    EndIf(!EventFlag(8061));
    RecordUserDispLog(110050, entityId, LogObjectType.None, -1);
});

$Event(90035281, Default, function(entityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6, eventFlagId7, eventFlagId8, eventFlagId9) {
    DisableNetworkSync();
    EndIf(!EventFlag(8081));
    EndIf(EventFlag(8061));
    WaitFor((EventFlag(eventFlagId4) && PlayerIsInOwnWorld()) || EventFlag(8061));
    WaitFor(ElapsedSeconds(15));
    EndIf(EventFlag(8061));
    if (!EventFlag(9999)) {
        timeFlag &= PlayAreaCurrentTimeInRange(0, 0, 0, 20, 29, 59) && InsidePlayAreaByTime(0, 0, 17, 0, 0);
    }
    timeFlag &= !EventFlag(eventFlagId5)
        && !EventFlag(eventFlagId6)
        && !EventFlag(eventFlagId7)
        && !EventFlag(eventFlagId8)
        && !EventFlag(eventFlagId9)
        && !IsHotSpot()
        && !AnyBatchEventFlags(eventFlagId, eventFlagId3);
    EndIf(!timeFlag);
    if (!EventFlag(80012)) {
        SetNetworkconnectedEventFlagID(80012, ON);
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
    } else if (!EventFlag(80013)) {
        SetNetworkconnectedEventFlagID(80013, ON);
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    } else {
        if (!IsPlayerCount(1)) {
            if (!EventFlag(80014)) {
                SetNetworkconnectedEventFlagID(80014, ON);
                SetNetworkconnectedEventFlagID(eventFlagId3, ON);
                Goto(L0);
            }
        }
        EndEvent();
    }
L0:
    WaitFor(EventFlag(8061) || PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59));
    EndEvent();
    RecordUserDispLog(110050, entityId, LogObjectType.None, -1);
});

$Event(90035282, Default, function(chrEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    DisableNetworkSync();
    EndIf(!EventFlag(8081));
    EndIf(EventFlag(8062));
    EndIf(EventFlag(8061));
    WaitFor(EventFlag(8061));
    if (IsPlayerNo(1)) {
        EndIf(!EventFlag(eventFlagId));
    }
    if (IsPlayerNo(2)) {
        EndIf(!EventFlag(eventFlagId2));
    }
    if (IsPlayerNo(3)) {
        EndIf(!EventFlag(eventFlagId3));
    }
    WaitFor(ElapsedSeconds(3));
    SetSpEffect(20000, 63101);
    WaitFor(ElapsedSeconds(8));
    SetSpEffect(20000, 63105);
    WaitFor(ElapsedSeconds(2));
    FadeToBlack(1, 1, true, -1);
    DisableCharacterInvincibility(20000);
    SetSpEffect(20000, 98205);
    WaitFor(ElapsedSeconds(0.9));
    SetSpEffect(20000, 99280);
    WaitFor(ElapsedSeconds(0.1));
    chr = CharacterBackreadStatus(chrEntityId);
    if (!chr) {
        DisableCharacterGravity(20000);
    }
    WarpCharacterAndCopyFloorUnknown200489(20000, TargetEntityType.Area, entityId, -1, chrEntityId, -1, -1);
    UnknownTalk2003121();
    SetSpEffect(20000, 63103);
    if (!chr) {
        Unknown2003128(true);
        WaitFor(CharacterBackreadStatus(chrEntityId));
        EnableCharacterGravity(20000);
        WaitFor(ElapsedFrames(1));
        WarpCharacterAndCopyFloorUnknown200489(20000, TargetEntityType.Area, entityId, -1, chrEntityId, -1, -1);
        UnknownTalk2003121();
        Unknown2003128(false);
    }
    ResetCameraAngle();
    WaitFor(ElapsedSeconds(2));
    SetSpEffect(20000, 63106);
    WaitFixedTimeFrames(1);
    FadeToBlack(0, 1, false, -1);
    WaitFor(ElapsedSeconds(2));
    DisableCharacterInvincibility(20000);
    SetSpEffect(20000, 98206);
    EndEvent();
    SetNetworkconnectedEventFlagID(eventFlagId4, ON);
});

$Event(90035283, Default, function(chrEntityId, areaEntityId, assetEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6) {
    EndIf(!EventFlag(8081));
    EndIf(EventFlag(8061) && !AnyBatchEventFlags(eventFlagId, eventFlagId3));
    if (EventFlag(eventFlagId5) || EventFlag(eventFlagId6)) {
        ChangeAssetEnableStateUnknown200510(assetEntityId, Disabled, 3);
        SetWorldMapPointFlag(4, OFF);
        EndEvent();
    }
    if (EventFlag(eventFlagId4)) {
        SetCharacterBackreadState(chrEntityId, false);
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 3);
        SetWorldMapPointFlag(4, ON);
    } else {
L10:
        WaitFor(EventFlag(8061));
        EndIf(!AnyBatchEventFlags(eventFlagId, eventFlagId3));
        WaitFor(ElapsedSeconds(3));
        SetCharacterBackreadState(chrEntityId, false);
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        WaitFor(ElapsedSeconds(11));
        if (EventFlag(eventFlagId)) {
            areaFlagTime |= InArea(10002, areaEntityId) || !EventFlag(7005);
        }
        if (EventFlag(eventFlagId2)) {
            areaFlagTime |= InArea(10003, areaEntityId) || !EventFlag(7006);
        }
        if (EventFlag(eventFlagId3)) {
            areaFlagTime |= InArea(10004, areaEntityId) || !EventFlag(7007);
        }
        areaFlagTime |= ElapsedSeconds(5);
        WaitFor(areaFlagTime);
        SetCharacterBackreadState(chrEntityId, false);
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 3);
        SetWorldMapPointFlag(4, ON);
        WaitFor(
            CharacterBackreadStatus(chrEntityId)
                || EventFlag(eventFlagId5)
                || EventFlag(eventFlagId6));
        if (!(EventFlag(eventFlagId5) || EventFlag(eventFlagId6))) {
            WaitFor(ElapsedSeconds(1));
            EnableCharacter(chrEntityId);
            ForceAnimationPlayback(chrEntityId, 20030, false, false, false);
            EnableCharacterAI(chrEntityId);
            SetNetworkconnectedEventFlagID(eventFlagId4, ON);
        }
    }
L0:
    WaitFor(EventFlag(eventFlagId5) || EventFlag(eventFlagId6));
    ChangeAssetEnableStateUnknown200510(assetEntityId, Disabled, 3);
    SetWorldMapPointFlag(4, OFF);
});

$Event(90035284, Default, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    EndIf(!EventFlag(8081));
    EndIf(EventFlag(eventFlagId3));
    EndIf(EventFlag(eventFlagId4));
    EndIf(EventFlag(8061) && !AnyBatchEventFlags(eventFlagId, eventFlagId2));
    if (EventFlag(8061)) {
        SetSpEffect(chrEntityId2, 4487);
        SetSpEffect(chrEntityId2, 7247);
        SetSpEffect(chrEntityId, 63113);
        SetSpEffect(chrEntityId, 63115);
        SetSpEffect(chrEntityId2, 63111);
    } else {
        WaitFor(EventFlag(8061));
        EndIf(!AnyBatchEventFlags(eventFlagId, eventFlagId2));
        WaitFor(ElapsedSeconds(6));
        SetSpEffect(chrEntityId, 63113);
        SetSpEffect(chrEntityId, 63115);
        SetSpEffect(chrEntityId2, 63111);
        SetSpEffect(chrEntityId2, 4487);
        SetSpEffect(chrEntityId2, 7247);
    }
L0:
    WaitFor(EventFlag(eventFlagId3) || EventFlag(eventFlagId4));
    EndIf(EventFlag(eventFlagId4));
    SetSpEffect(chrEntityId, 63116);
    SetSpEffect(chrEntityId2, 4488);
    SetSpEffect(chrEntityId2, 7248);
    WaitFixedTimeFrames(1);
    SetSpEffect(chrEntityId, 63117);
    WaitFixedTimeSeconds(5.5);
    SetSpEffect(chrEntityId, 63117);
});

$Event(90035285, Default, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    EndIf(!EventFlag(8081));
    EndIf(EventFlag(eventFlagId4));
    EndIf(EventFlag(eventFlagId5));
    EndIf(EventFlag(8061) && !AnyBatchEventFlags(eventFlagId, eventFlagId3));
    WaitFor(EventFlag(8061));
    EndIf(!AnyBatchEventFlags(eventFlagId, eventFlagId3));
    WaitFor(CharacterHPValue(chrEntityId) <= 0 || EventFlag(eventFlagId5));
    EndIf(EventFlag(eventFlagId5));
    if (CharacterHPValue(chrEntityId) <= 0) {
        WaitFor(EventFlag(eventFlagId4));
        if (!IsPlayerCount(2)) {
            GotoIf(S0, IsPlayerCount(3));
            if (CountEventFlags(TargetEventFlagType.EventFlag, 80018, 80020) < 1) {
                RecordUserDispLog(110052, chrEntityId, LogObjectType.None, -1);
            }
        } else {
S0:
            if (!IsPlayerCount(1)) {
                if (CountEventFlags(TargetEventFlagType.EventFlag, 80018, 80020) < 2) {
                    RecordUserDispLog(110052, chrEntityId, LogObjectType.None, -1);
                }
                Goto(L1);
            }
        }
L1:
        if (EventFlag(eventFlagId)) {
            SetNetworkconnectedEventFlagID(80018, ON);
        }
        if (EventFlag(eventFlagId2)) {
            SetNetworkconnectedEventFlagID(80019, ON);
        }
        if (EventFlag(eventFlagId3)) {
            SetNetworkconnectedEventFlagID(80020, ON);
        }
        EndEvent();
    }
L0:
    NoOp();
});

$Event(90035286, Default, function(chrEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    EndIf(!EventFlag(8081));
    EndIf(EventFlag(eventFlagId4));
    EndIf(EventFlag(eventFlagId5));
    EndIf(EventFlag(8061) && !AnyBatchEventFlags(eventFlagId, eventFlagId3));
    WaitFor(EventFlag(8061));
    EndIf(!AnyBatchEventFlags(eventFlagId, eventFlagId3));
    EndIf(EventFlag(9999));
    WaitFor(
        PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59)
            || CharacterHPValue(chrEntityId) <= 0
            || EventFlag(eventFlagId4));
    EndIf(CharacterHPValue(chrEntityId) <= 0 || EventFlag(eventFlagId4));
    SetSpEffect(chrEntityId, 63150);
    WaitFor(CharacterHasSpEffect(chrEntityId, 63151) || ElapsedSeconds(20));
    EndIf(CharacterHPValue(chrEntityId) <= 0 || EventFlag(eventFlagId4));
    if (!CharacterHasSpEffect(chrEntityId, 63150)) {
        ForceAnimationPlayback(chrEntityId, 20031, false, false, false);
        WaitFor(CharacterHasSpEffect(chrEntityId, 63151) || ElapsedSeconds(20));
    }
    EndIf(CharacterHPValue(chrEntityId) <= 0 || EventFlag(eventFlagId4));
    WaitFor(ElapsedSeconds(5));
    if (EventFlag(eventFlagId)) {
        SetNetworkconnectedEventFlagID(80015, ON);
    }
    if (EventFlag(eventFlagId2)) {
        SetNetworkconnectedEventFlagID(80016, ON);
    }
    if (EventFlag(eventFlagId3)) {
        SetNetworkconnectedEventFlagID(80017, ON);
    }
    SetNetworkconnectedEventFlagID(eventFlagId5, ON);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    Goto(S0);
    RecordUserDispLog(110054, entityId, LogObjectType.None, -1);
S0:
    NoOp();
});

$Event(90035287, Default, function() {
    DisableNetworkSync();
    EndIf(!EventFlag(8081));
    GotoIf(S0, !EventFlag(8061));
    GotoIf(L0, !EventFlag(8062));
    GotoIf(L1, EventFlag(8062));
S0:
    WaitFor(EventFlag(8061));
    WaitFor(ElapsedSeconds(10) || CharacterHasSpEffect(20000, 448));
L0:
    SetSpEffect(20000, 448);
    WaitFor(EventFlag(8062) || !CharacterHasSpEffect(20000, 448));
    RestartEvent();
L1:
    SetSpEffect(20000, 449);
});

$Event(90035288, Default, function(areaEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    DisableNetworkSync();
    EndIf(!EventFlag(8081));
    EndIf(EventFlag(eventFlagId3));
    EndIf(EventFlag(eventFlagId4));
    EndIf(EventFlag(8061) && !AnyBatchEventFlags(eventFlagId, eventFlagId2));
    WaitFor(EventFlag(8061));
    EndIf(!AnyBatchEventFlags(eventFlagId, eventFlagId2));
    WaitFor(
        EventFlag(eventFlagId3)
            || EventFlag(eventFlagId4)
            || (InArea(20000, areaEntityId)
                && CompareBossBGMPriority(Less, 762020)
                && !BossBGMPlaying(762020)));
    EndIf(EventFlag(eventFlagId3) || EventFlag(eventFlagId4));
    SetBossBGM(762020, BossBGMState.Start);
    WaitFixedTimeFrames(1);
    WaitFor(
        EventFlag(eventFlagId3)
            || EventFlag(eventFlagId4)
            || !InArea(20000, areaEntityId)
            || !BossBGMPlaying(762020));
    if (BossBGMPlaying(762020)) {
        SetBossBGM(762020, BossBGMState.Stop2);
    }
    EndIf(EventFlag(eventFlagId3) || EventFlag(eventFlagId4));
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(90035300, Default, function(eventFlagId, eventFlagId2, eventFlagId3) {
    DisableNetworkSync();
    if (!EventFlag(8075)) {
        SetEventFlagID(9060, ON);
        SetEventFlagID(9061, ON);
        SetEventFlagID(9062, ON);
        SetEventFlagID(9063, ON);
        EndEvent();
    }
    if (EventFlag(8062)) {
        SetEventFlagID(9060, ON);
        SetEventFlagID(9061, ON);
        SetEventFlagID(9062, ON);
        SetEventFlagID(9063, ON);
        EndEvent();
    }
    WaitFor(EventFlag(8061));
    EndIf(!EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId2));
    if (EventFlag(eventFlagId3)) {
        SetEventFlagID(9060, ON);
        SetEventFlagID(9061, ON);
        SetEventFlagID(9062, ON);
    } else {
        SetEventFlagID(9060, ON);
        SetEventFlagID(9062, ON);
        SetEventFlagID(9063, ON);
    }
    WaitFor(EventFlag(8062));
    WaitFor(ElapsedSeconds(5));
    SetEventFlagID(9060, ON);
    SetEventFlagID(9061, ON);
    SetEventFlagID(9062, ON);
    SetEventFlagID(9063, ON);
});

$Event(90045000, Default, function(eventFlagId, entityId, mapVariationId, logObjectId) {
    DisableNetworkSync();
    EndIf(!IsMapVariation(mapVariationId));
    EndIf(EventFlag(eventFlagId));
    WaitFor(ActionButtonInArea(9231, entityId) || EventFlag(eventFlagId) || EventFlag(7509));
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(7509));
    if (!PlayerHasItem(ItemType.Goods, 8000)) {
        RecordUserDispLog(10108, entityId, LogObjectType.Goods, 8000);
        WaitFixedTimeSeconds(3);
        RestartEvent();
    }
    if (IsPlayerNo(2)) {
        WaitFor(ElapsedSeconds(0.1));
    }
    if (IsPlayerNo(3)) {
        WaitFor(ElapsedSeconds(0.2));
    }
    EndIf(EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    RemoveItemFromPlayer(ItemType.Goods, 8000, 1);
    RecordUserDispLog(11240, 10000, LogObjectType.NpcName, logObjectId);
    SetWorldMapPointFlag(6, ON);
    ForceAnimationPlayback(20000, 60810, false, false, false);
    EndEvent();
});

$Event(90045001, Default, function(eventFlagId, eventFlagId2, mapVariationId, chrEntityId, entityId, value) {
    if (IsMapVariation(mapVariationId)) {
        if (!EventFlag(eventFlagId)) {
            EndIf(EventFlag(eventFlagId2));
            ForceAnimationPlayback(chrEntityId, 30025, true, false, false);
            DisableCharacter(chrEntityId);
            DisableCharacterAI(chrEntityId);
            WaitFor(EventFlag(eventFlagId2));
            ForceAnimationPlayback(chrEntityId, 20025, true, false, false);
            EnableCharacter(chrEntityId);
            EnableCharacterAI(chrEntityId);
            SetFieldBattleBGMHeatUp(28, false);
            if (value != 0) {
                DisableCharacterHPBarDisplay(chrEntityId);
            }
            PlaySE(entityId, SoundType.CharacterMotion, 999997300);
            EndEvent();
        }
    }
L0:
    ForceCharacterDeath(chrEntityId, false);
    EndEvent();
});

$Event(90045002, Default, function(eventFlagId, mapVariationId, chrEntityId, eventFlagId2, textEffectParamId, userDispLogParamId, logObjectId, entityId) {
    EndIf(!IsMapVariation(mapVariationId));
    EndIf(EventFlag(eventFlagId));
    WaitFor(CharacterRatioHPValue(chrEntityId) <= 0);
    WaitFixedTimeSeconds(5);
    PlaySE(chrEntityId, SoundType.SFX, 888880000);
    DisplayTextEffectId(textEffectParamId);
    RecordUserDispLog(userDispLogParamId, entityId, LogObjectType.NpcName, logObjectId);
    IncrementTeamBossesKilled(1);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    SetWorldMapPointFlag(2, ON);
    SetWorldMapPointFlag(8, OFF);
    IncrementNetworkconnectedEventValue(8145, 4, 7);
    EndEvent();
});

$Event(90045004, Default, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6, mapVariationId, chrEntityId) {
    EndIf(!IsMapVariation(mapVariationId));
    EndIf(EventFlag(eventFlagId3));
    EndIf(CharacterHasSpEffect(chrEntityId, 99150, NotEqual, 0));
    EndIf(CharacterHasSpEffect(chrEntityId, 99152, NotEqual, 0));
    EndIf(CharacterHasSpEffect(chrEntityId, 99153, NotEqual, 0));
    GotoIf(L0, EventFlag(eventFlagId4));
    GotoIf(L1, EventFlag(eventFlagId5));
    GotoIf(L2, EventFlag(eventFlagId6));
    WaitFor(EventFlag(eventFlagId));
    if (!EventFlag(7505)) {
        SetNetworkconnectedEventFlagID(eventFlagId4, ON);
    } else if (EventFlag(7505) && PlayAreaCurrentTimeInRange(0, 0, 0, 16, 9, 0)) {
        SetNetworkconnectedEventFlagID(eventFlagId5, ON);
    } else {
        SetNetworkconnectedEventFlagID(eventFlagId6, ON);
        Goto(L3);
    }
L3:
    WaitFor(EventFlag(eventFlagId2));
    GotoIf(L0, EventFlag(eventFlagId4));
    GotoIf(L1, EventFlag(eventFlagId5));
    Goto(L2);
L0:
    SetSpEffect(chrEntityId, 99150);
    if (chrEntityId != 46800810) {
        SetSpEffect(chrEntityId, 99145);
    }
    if (chrEntityId == 46800810) {
        SetSpEffect(chrEntityId, 99146);
    }
    EndEvent();
L1:
    SetSpEffect(chrEntityId, 99152);
    if (chrEntityId != 46800810) {
        SetSpEffect(chrEntityId, 99145);
    }
    if (chrEntityId == 46800810) {
        SetSpEffect(chrEntityId, 99146);
    }
    EndEvent();
L2:
    SetSpEffect(chrEntityId, 99153);
    EndEvent();
});

$Event(90045005, Default, function(eventFlagId, eventFlagId2, eventFlagId3, entityId, mapVariationId, eventFlagId4, eventFlagId5) {
    DisableNetworkSync();
    EndIf(!IsMapVariation(mapVariationId));
    if (!EventFlag(eventFlagId3)) {
        if (!EventFlag(7509)) {
            if (EventFlag(eventFlagId)) {
                ForceAnimationPlayback(entityId, 1, true, false, false);
            } else {
                WaitFor(EventFlag(eventFlagId) || EventFlag(7509));
                if (!EventFlag(7509)) {
                    ForceAnimationPlayback(entityId, 1, true, false, false);
                    WaitFor(EventFlag(eventFlagId2) || EventFlag(7509));
                    GotoIf(L1, EventFlag(7509));
                    if (EventFlag(eventFlagId4)) {
                        SpawnOneshotSFX(TargetEntityType.Asset, entityId, 100, 807253);
                    }
                    if (EventFlag(eventFlagId5)) {
                        SpawnOneshotSFX(TargetEntityType.Asset, entityId, 100, 807253);
                    }
                }
            }
L0:
            WaitFor(EventFlag(eventFlagId3) || EventFlag(7509));
        }
    }
L1:
    ForceAnimationPlayback(entityId, 10, true, false, false);
});

$Event(90045006, Default, function(eventFlagId, eventFlagId2, eventFlagId3, mapVariationId) {
    EndIf(!IsMapVariation(mapVariationId));
    EndIf(EventFlag(eventFlagId3));
    if (!EventFlag(eventFlagId2)) {
        WaitFor(EventFlag(eventFlagId));
        WaitFor(ElapsedSeconds(2) || EventFlag(eventFlagId2));
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    }
L0:
    WaitFor(ElapsedSeconds(2) || EventFlag(eventFlagId3));
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
});

$Event(9045010, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4) {
    WaitFor(
        HPRatio(chrEntityId) <= 0.5 || (CharacterDead(chrEntityId2) && CharacterDead(chrEntityId3)));
    SetSpEffect(chrEntityId4, 5023);
    EndEvent();
});

$Event(9045011, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4) {
    WaitFor(HPRatio(chrEntityId) <= 0.5);
    SetSpEffect(chrEntityId, 5023);
    SetSpEffect(chrEntityId2, 5023);
    SetSpEffect(chrEntityId3, 5023);
    SetSpEffect(chrEntityId4, 5023);
    EndEvent();
});

$Event(90045020, Restart, function(eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    WaitFor(MapHasPermissionToUpdate(false, 0, 0, 0, 0));
    EndIf(AnyBatchEventFlags(eventFlagId, eventFlagId2));
    RandomlySetNetworkconnectedEventFlagInRange(eventFlagId, eventFlagId2, ON);
});

$Event(90045021, Restart, function(eventFlagId, assetEntityId, assetEntityId2, assetEntityId3, eventFlagId2, eventFlagId3, eventFlagId4) {
    WaitFor(EventFlag(eventFlagId));
    ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 0);
    ChangeAssetEnableStateUnknown200510(assetEntityId2, Enabled, 0);
    ChangeAssetEnableStateUnknown200510(assetEntityId3, Enabled, 0);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
    SetNetworkconnectedEventFlagID(eventFlagId4, ON);
});

$Event(90045022, Restart, function(assetEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    DisableNetworkSync();
    WaitFor(EventFlag(eventFlagId2));
    if (EventFlag(eventFlagId3)) {
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
    }
    if (EventFlag(eventFlagId)) {
        CreateAssetfollowingSFX(assetEntityId, 200, 803292);
        EndEvent();
    }
L0:
    CreateAssetfollowingSFX(assetEntityId, 200, 807015);
    WaitFor(
        ActionButtonInArea(109200, assetEntityId)
            || EventFlag(eventFlagId)
            || EventFlag(eventFlagId3));
    DeleteAssetfollowingSFX(assetEntityId, false);
    CreateAssetfollowingSFX(assetEntityId, 200, 803292);
    PlaySE(assetEntityId, SoundType.EnvironmentalSound, 600100000);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90045023, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, entityId) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(CountEventFlags(TargetEventFlagType.EventFlag, eventFlagId2, eventFlagId3) >= 1);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    RecordUserDispLog(110100, entityId, LogObjectType.None, -1);
});

$Event(90045024, Restart, function(assetEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId3));
    if (!EventFlag(eventFlagId2)) {
        if (!EventFlag(eventFlagId)) {
            CreateAssetfollowingSFX(assetEntityId, 200, 807025);
            WaitFor(EventFlag(eventFlagId));
            DeleteAssetfollowingSFX(assetEntityId, true);
        }
L0:
        CreateAssetfollowingSFX(assetEntityId, 200, 807026);
        WaitFor(EventFlag(eventFlagId2));
        DeleteAssetfollowingSFX(assetEntityId, true);
    }
L1:
    CreateAssetfollowingSFX(assetEntityId, 200, 807027);
    WaitFor(EventFlag(eventFlagId3));
    DeleteAssetfollowingSFX(assetEntityId, true);
});

$Event(90045025, Default, function(eventFlagId, areaEntityId) {
    DisableNetworkSync();
    HideFloatingMessage(600, areaEntityId);
    EndIf(EventFlag(eventFlagId));
    WaitFor(InArea(20000, areaEntityId) || EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId));
    ShowFloatingMessage(600, areaEntityId);
    WaitFor(!InArea(20000, areaEntityId) || EventFlag(eventFlagId));
    HideFloatingMessage(600, areaEntityId);
    EndIf(EventFlag(eventFlagId));
    RestartEvent();
});

$Event(90045030, Default, function(areaEntityId, spEffectId, spEffectId2) {
    DisableNetworkSync();
    SetSpEffect(20000, spEffectId2);
    WaitFixedTimeSeconds(0.1);
    WaitFor(InArea(20000, areaEntityId));
    SetSpEffect(20000, spEffectId);
    WaitFixedTimeSeconds(0.1);
    WaitFor(!InArea(20000, areaEntityId));
    RestartEvent();
});

$Event(90045040, Default, function(mapVariationId, eventFlagId) {
    DisableNetworkSync();
    EndIf(!IsMapVariation(mapVariationId));
    WaitFor(EventFlag(8230) && HasMultiplayerState(MultiplayerState.Host));
    WaitFor(RandomElapsedFrames(1, 10));
    EndIf(EventFlag(8231));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetNetworkconnectedEventFlagID(8231, ON);
});

$Event(90045041, Default, function(mapVariationId, eventFlagId, chrEntityId, chrEntityId2) {
    EndIf(!IsMapVariation(mapVariationId));
    SetCharacterBackreadState(chrEntityId, true);
    WaitFor(EventFlag(eventFlagId));
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId, false);
});

$Event(90045050, Restart, function(chrEntityId, chrEntityId2, areaEntityId, areaEntityId2, areaEntityId3, areaEntityId4, areaEntityId5, areaEntityId6, areaEntityId7, areaEntityId8, areaEntityId9, areaEntityId10, areaEntityId11, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6, eventFlagId7, eventFlagId8, eventFlagId9) {
    EndIf(CharacterHPValue(chrEntityId) <= 0);
    if (!AnyBatchEventFlags(areaEntityId11, eventFlagId9)) {
        RandomlySetNetworkconnectedEventFlagInRange(areaEntityId11, eventFlagId9, ON);
    }
    WaitFor(
        (CharacterAIState(chrEntityId, AIStateType.Combat)
            && CharacterHasSpEffect(chrEntityId, 15042)
            && !CharacterHasSpEffect(chrEntityId, 15044)
            && !CharacterRatioDead(chrEntityId2, Greater, 0)
            && (CharacterHasSpEffect(chrEntityId, 15046)
                || (!InArea(chrEntityId, areaEntityId)
                    && !InArea(chrEntityId, areaEntityId2)
                    && !InArea(chrEntityId, areaEntityId3)
                    && !InArea(chrEntityId, areaEntityId4)
                    && !InArea(chrEntityId, areaEntityId5)
                    && !InArea(chrEntityId, areaEntityId6)
                    && !InArea(chrEntityId, areaEntityId7)
                    && !InArea(chrEntityId, areaEntityId8)
                    && !InArea(chrEntityId, areaEntityId9)
                    && !InArea(chrEntityId, areaEntityId10)
                    && !InArea(chrEntityId, areaEntityId11))))
            || CharacterHPValue(chrEntityId) <= 0);
    EndIf(CharacterHPValue(chrEntityId) <= 0);
    WaitFor(ElapsedSeconds(0.5));
    GotoIf(S0, !EventFlag(areaEntityId11));
    GotoIf(S1, InArea(chrEntityId, areaEntityId));
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, areaEntityId, -1);
    Goto(L0);
S0:
    GotoIf(S2, !EventFlag(eventFlagId));
    GotoIf(S3, InArea(chrEntityId, areaEntityId2));
S1:
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, areaEntityId2, -1);
    Goto(L0);
S2:
    GotoIf(S4, !EventFlag(eventFlagId2));
    GotoIf(S5, InArea(chrEntityId, areaEntityId3));
S3:
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, areaEntityId3, -1);
    Goto(L0);
S4:
    GotoIf(S6, !EventFlag(eventFlagId3));
    GotoIf(S7, InArea(chrEntityId, areaEntityId4));
S5:
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, areaEntityId4, -1);
    Goto(L0);
S6:
    GotoIf(S8, !EventFlag(eventFlagId4));
    GotoIf(S9, InArea(chrEntityId, areaEntityId5));
S7:
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, areaEntityId5, -1);
    Goto(L0);
S8:
    GotoIf(S10, !EventFlag(eventFlagId5));
    GotoIf(S11, InArea(chrEntityId, areaEntityId6));
S9:
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, areaEntityId6, -1);
    Goto(L0);
S10:
    GotoIf(S12, !EventFlag(eventFlagId6));
    GotoIf(S13, InArea(chrEntityId, areaEntityId7));
S11:
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, areaEntityId7, -1);
    Goto(L0);
S12:
    GotoIf(S14, !EventFlag(eventFlagId7));
    GotoIf(S15, InArea(chrEntityId, areaEntityId8));
S13:
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, areaEntityId8, -1);
    Goto(L0);
S14:
    GotoIf(S16, !EventFlag(eventFlagId8));
    GotoIf(S17, InArea(chrEntityId, areaEntityId9));
S15:
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, areaEntityId9, -1);
    Goto(L0);
S16:
    GotoIf(S18, !EventFlag(eventFlagId9));
    if (!InArea(chrEntityId, areaEntityId10)) {
S17:
        IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, areaEntityId10, -1);
        Goto(L0);
    }
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, areaEntityId, -1);
    Goto(L0);
S18:
L0:
    BatchSetNetworkconnectedEventFlags(areaEntityId11, eventFlagId9, OFF);
    WaitFor(ElapsedSeconds(5));
    RestartEvent();
});

$Event(90045051, Restart, function(chrEntityId, chrEntityId2, generatorEntityId, areaEntityId) {
    if (CharacterHPValue(chrEntityId) <= 0) {
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (InArea(chrEntityId, areaEntityId)) {
        SetSpEffect(chrEntityId, 15044);
    }
    WaitFor(
        (CharacterAIState(chrEntityId, AIStateType.Combat)
            && (CharacterRatioDead(chrEntityId2, GreaterOrEqual, 1)
                || InArea(chrEntityId, areaEntityId)))
            || CharacterHPValue(chrEntityId) <= 0);
    if (CharacterHPValue(chrEntityId) <= 0) {
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (!InArea(chrEntityId, areaEntityId)) {
        WaitFor(ElapsedSeconds(1));
    }
    SetSpEffect(chrEntityId, 15044);
    WaitFor(CharacterHasSpEffect(chrEntityId, 15007));
    InvokeEnemyGenerator(generatorEntityId);
    WaitFor(!CharacterRatioDead(chrEntityId2, GreaterOrEqual, 1));
    SetSpEffect(chrEntityId, 15045);
    WaitFor(ElapsedSeconds(5) || CharacterHPValue(chrEntityId) <= 0);
    RestartEvent();
});

$Event(90055000, Restart, function(chrEntityId, value, areaEntityId, eventFlagId) {
    if (value != 1) {
        if (value != 2) {
            EndEvent();
        }
    }
    if (value == 1) {
        if (EventFlag(7505)) {
            DisableCharacter(chrEntityId);
            DisableCharacterAI(chrEntityId);
            EndEvent();
        }
    }
    if (value == 2) {
        if (EventFlag(7510)) {
            DisableCharacter(chrEntityId);
            DisableCharacterAI(chrEntityId);
            EndEvent();
        }
    }
    if (value == 1) {
        if (EventFlag(7501)) {
            EnableCharacter(chrEntityId);
            EnableCharacterAI(chrEntityId);
            WaitFor(ElapsedSeconds(120));
            SetEventFlagID(eventFlagId, ON);
            EndEvent();
        }
    }
    if (value == 2) {
        if (EventFlag(7506)) {
            EnableCharacter(chrEntityId);
            EnableCharacterAI(chrEntityId);
            WaitFor(ElapsedSeconds(120));
            SetEventFlagID(eventFlagId, ON);
            EndEvent();
        }
    }
    EndIf(EventFlag(7506));
    if (value == 1) {
        flag |= !EventFlag(7505);
    }
    if (value == 2) {
        flag |= EventFlag(7505);
    }
    if (flag) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
    } else {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        if (value == 1) {
            flagTime &= !EventFlag(7505);
        }
        if (value == 2) {
            flagTime &= EventFlag(7505);
        }
        flagTime &= PlayAreaCurrentTimeInRange(0, 0, 0, 22, 59, 59);
        WaitFor(flagTime);
        WaitFor(ElapsedSeconds(30));
    }
L0:
    if (value == 1) {
        flagTimeArea &= !EventFlag(7505);
    }
    if (value == 2) {
        flagTimeArea &= EventFlag(7505);
    }
    flagTimeArea &= PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59)
        && (InArea(20000, areaEntityId) || PlayAreaCurrentTimeInRange(23, 59, 0, 23, 59, 59));
    WaitFor(flagTimeArea);
    if (value == 1) {
        SetNetworkconnectedEventFlagID(7501, ON);
    }
    if (value == 2) {
        SetNetworkconnectedEventFlagID(7506, ON);
    }
    PlaySE(areaEntityId, SoundType.CharacterMotion, 999997310);
    WaitFor(ElapsedSeconds(2));
    // Fix for Elder Albinaurics being put in a cage
    if (0 != 0)
        ForceAnimationPlayback(chrEntityId, 20026, false, false, false);
    EnableCharacter(chrEntityId);
    EnableCharacterAI(chrEntityId);
    WaitFor(ElapsedSeconds(120));
    SetEventFlagID(eventFlagId, ON);
});

$Event(90055001, Restart, function(chrEntityId, value, eventFlagId, eventFlagId2) {
    if (value != 1) {
        if (value != 2) {
            EndEvent();
        }
    }
    EndIf(EventFlag(eventFlagId2));
    if (value == 1) {
        flagTimeChr &= EventFlag(7501);
    }
    if (value == 2) {
        flagTimeChr &= EventFlag(7506);
    }
    flagTimeChr &= PlayAreaCurrentTimeInRange(23, 59, 0, 23, 59, 59)
        && (CharacterRatioDead(chrEntityId) || EventFlag(eventFlagId));
    WaitFor(flagTimeChr);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    if (value == 1) {
        SetNetworkconnectedEventFlagID(7504, ON);
    }
    if (value == 2) {
        SetNetworkconnectedEventFlagID(7509, ON);
    }
});

$Event(90065000, Restart, function(chrEntityId, chrEntityId2) {
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterCollision(chrEntityId2);
    DisableLockOnPoint(chrEntityId2, 220);
    DisableCharacterGravity(chrEntityId2);
    DisableLockOnPoint(chrEntityId2, 220);
    DisableCharacter(chrEntityId2);
    EnableCharacterImmortality(chrEntityId2);
    DisableCharacterHPBarDisplay(chrEntityId2);
});

$Event(90065001, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, eventFlagId, eventFlagId2, eventFlagId3, bgmBossConvParamId, eventFlagId4) {
    if (EventFlag(eventFlagId3)) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        DisableCharacter(chrEntityId4);
        DisableCharacter(chrEntityId5);
        DisableCharacterAI(chrEntityId4);
        DisableCharacterAI(chrEntityId5);
        ForceCharacterDeath(chrEntityId4, false);
        ForceCharacterDeath(chrEntityId5, false);
        DisableCharacter(chrEntityId6);
        DisableCharacterAI(chrEntityId6);
        ForceCharacterDeath(chrEntityId6, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        if (EventFlag(eventFlagId)) {
            EnableCharacter(chrEntityId3);
            EnableCharacterAI(chrEntityId3);
        } else {
            DisableCharacter(chrEntityId3);
            DisableCharacterAI(chrEntityId3);
        }
        SetCharacterEventTarget(chrEntityId2, chrEntityId6);
        EnableCharacter(chrEntityId4);
        EnableCharacter(chrEntityId5);
        EnableCharacterAI(chrEntityId4);
        EnableCharacterAI(chrEntityId5);
        EnableCharacter(chrEntityId6);
        DisableCharacterCollision(chrEntityId6);
        EnableCharacterAI(chrEntityId6);
        EndIf(IsMapVariation(2));
        DisplayBossHealthBar(Enabled, chrEntityId2, 1, 904950600);
        DisplayBossHealthBar(Enabled, chrEntityId6, 0, 904950604);
        LinkToBossHealthBar(Disabled, 904950600, 0);
        LinkToBossHealthBar(Enabled, 904950600, chrEntityId);
        LinkToBossHealthBar(Enabled, 904980600, chrEntityId3);
        LinkToBossHealthBar(Enabled, 904950604, chrEntityId4);
        LinkToBossHealthBar(Enabled, 904950604, chrEntityId5);
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
        EndEvent();
    }
L10:
    DisableCharacter(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    DisableCharacter(chrEntityId3);
    DisableCharacterAI(chrEntityId3);
    DisableCharacter(chrEntityId4);
    DisableCharacter(chrEntityId5);
    DisableCharacterAI(chrEntityId4);
    DisableCharacterAI(chrEntityId5);
    DisableCharacter(chrEntityId6);
    DisableCharacterAI(chrEntityId6);
    WaitFor(EventFlag(eventFlagId2));
    if (IsMapVariation(1)) {
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, 690050);
        WaitFor(ElapsedSeconds(2.5));
    }
    if (!IsMapVariation(2)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
    }
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, 690047);
    WaitFor(ElapsedSeconds(4));
    ForceAnimationPlayback(chrEntityId2, 20026, false, false, false);
    ForceAnimationPlayback(chrEntityId4, 20026, false, false, false);
    ForceAnimationPlayback(chrEntityId5, 20026, false, false, false);
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    SetSpEffect(chrEntityId2, 15319);
    SetSpEffect(chrEntityId2, 42223);
    SetSpEffect(chrEntityId2, 42224);
    SetSpEffect(chrEntityId2, 42225);
    SetSpEffect(chrEntityId2, 42241);
    SetSpEffect(chrEntityId2, 42242);
    SetCharacterEventTarget(chrEntityId2, chrEntityId6);
    EnableCharacter(chrEntityId4);
    EnableCharacter(chrEntityId5);
    EnableCharacterAI(chrEntityId4);
    EnableCharacterAI(chrEntityId5);
    SetSpEffect(chrEntityId4, 12559);
    SetSpEffect(chrEntityId5, 12559);
    SetSpEffect(chrEntityId4, 12554);
    SetSpEffect(chrEntityId5, 12555);
    EnableCharacter(chrEntityId6);
    DisableCharacterCollision(chrEntityId6);
    EnableCharacterAI(chrEntityId6);
    if (!IsMapVariation(2)) {
        LinkToBossHealthBar(Disabled, 904950600, 0);
    }
    if (!IsMapVariation(2)) {
        DisplayBossHealthBar(Enabled, chrEntityId2, 1, 904950600);
        DisplayBossHealthBar(Enabled, chrEntityId6, 0, 904950604);
        LinkToBossHealthBar(Enabled, 904950600, chrEntityId);
        LinkToBossHealthBar(Enabled, 904980600, chrEntityId3);
        LinkToBossHealthBar(Enabled, 904950604, chrEntityId4);
        LinkToBossHealthBar(Enabled, 904950604, chrEntityId5);
    }
    SetNetworkconnectedEventFlagID(eventFlagId4, ON);
});

$Event(90065002, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    if (EventFlag(eventFlagId)) {
        WaitFor(
            CharacterBackreadStatus(chrEntityId3)
                && CharacterBackreadStatus(chrEntityId2, GreaterOrEqual, 1));
        WaitFor(ElapsedSeconds(10));
    }
L0:
    WaitFor(EventFlag(eventFlagId));
    WaitFor(
        CharacterHPValue(chrEntityId) <= 0
            && (CharacterRatioHPValue(chrEntityId2) <= 0
                || !CharacterRatioBackreadStatus(chrEntityId2))
            && InsidePlayArea(20000, 10));
    ForceCharacterDeath(chrEntityId2, false);
    DisableCharacterImmortality(chrEntityId3);
    DisableCharacter(chrEntityId3);
    ForceCharacterDeath(chrEntityId3, false);
    if (!CharacterHasSpEffect(chrEntityId4, 15335)) {
        DisableCharacter(chrEntityId4);
    }
    ForceCharacterDeath(chrEntityId4, false);
    ForceCharacterDeath(chrEntityId5, false);
    SetSpEffect(10000, 509);
    SetSpEffect(10001, 509);
    SetSpEffect(10002, 509);
    SetSpEffect(10003, 509);
    SetSpEffect(10004, 509);
    SetSpEffect(10005, 509);
    SetSpEffect(10006, 509);
    SetSpEffect(10007, 509);
    SetSpEffect(10008, 509);
    SetSpEffect(10009, 509);
    SetSpEffect(10010, 509);
    WaitFor(CharacterDead(chrEntityId));
    WaitFixedTimeSeconds(4);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    DisplayBossHealthBar(Disabled, chrEntityId, 1, 0);
    DisplayBossHealthBar(Disabled, chrEntityId3, 0, 0);
});

$Event(90065003, Restart, function(chrEntityId, spEffectId, generatorEntityId, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(
        (CharacterHasSpEffect(chrEntityId, 42220)
            && !CharacterHasSpEffect(chrEntityId, 42221)
            && !CharacterHasSpEffect(chrEntityId, 42222)
            && CharacterHasSpEffect(chrEntityId, spEffectId))
            || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId2));
    EnableGenerator(generatorEntityId);
    SetSpEffect(chrEntityId, 42226);
    WaitFor(ElapsedSeconds(2));
    DisableGenerator(generatorEntityId);
    RestartEvent();
});

$Event(90065004, Restart, function(chrEntityId, spEffectId, generatorEntityId, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(
        (CharacterHasSpEffect(chrEntityId, 42221) && CharacterHasSpEffect(chrEntityId, spEffectId))
            || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId2));
    EnableGenerator(generatorEntityId);
    SetSpEffect(chrEntityId, 42226);
    SetSpEffect(chrEntityId, 42227);
    WaitFor(ElapsedSeconds(2));
    DisableGenerator(generatorEntityId);
    RestartEvent();
});

$Event(90065005, Restart, function(chrEntityId, spEffectId, generatorEntityId, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(
        (CharacterHasSpEffect(chrEntityId, 42222) && CharacterHasSpEffect(chrEntityId, spEffectId))
            || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId2));
    EnableGenerator(generatorEntityId);
    SetSpEffect(chrEntityId, 42226);
    SetSpEffect(chrEntityId, 42227);
    SetSpEffect(chrEntityId, 42228);
    WaitFor(ElapsedSeconds(2));
    DisableGenerator(generatorEntityId);
    RestartEvent();
});

$Event(90065006, Restart, function(chrEntityId, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId, 42232) || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId2));
    ClearSpEffect(chrEntityId, 42234);
    ClearSpEffect(chrEntityId, 42235);
    ClearSpEffect(chrEntityId, 42236);
    ClearSpEffect(chrEntityId, 42237);
    ClearSpEffect(chrEntityId, 42238);
    ClearSpEffect(chrEntityId, 42239);
    ClearSpEffect(chrEntityId, 42240);
    SetSpEffect(chrEntityId, 42243);
    SetSpEffect(chrEntityId, 42244);
    SetSpEffect(chrEntityId, 42226);
    SetSpEffect(chrEntityId, 42227);
    SetSpEffect(chrEntityId, 42228);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(90065007, Restart, function(chrEntityId, areaEntityId, spEffectId, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(InArea(chrEntityId, areaEntityId) || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId2));
    SetSpEffect(chrEntityId, spEffectId);
    WaitFor(ElapsedSeconds(1));
    WaitFor(
        InArea(chrEntityId, areaEntityId, 0)
            || !CharacterHasSpEffect(chrEntityId, spEffectId)
            || EventFlag(0));
    RestartEvent();
});

$Event(90065008, Restart, function(chrEntityId, spEffectId, spEffectId2, spEffectId3, spEffectId4, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6, eventFlagId7, eventFlagId8, eventFlagId9, eventFlagId10) {
    EndIf(EventFlag(eventFlagId10));
    WaitFor(EventFlag(eventFlagId9));
    WaitFor(CharacterHasSpEffect(chrEntityId, 15302) || EventFlag(eventFlagId10));
    EndIf(EventFlag(eventFlagId10));
    if (PlayerIsInOwnWorld()) {
        BatchSetNetworkconnectedEventFlags(eventFlagId, eventFlagId3, OFF);
        RandomlySetNetworkconnectedEventFlagInRange(eventFlagId, eventFlagId3, ON);
    }
    WaitFor(AnyBatchEventFlags(eventFlagId, eventFlagId3));
    if (PlayerIsInOwnWorld()) {
        if (CharacterHasSpEffect(chrEntityId, spEffectId)) {
            if (EventFlag(eventFlagId)) {
                SetNetworkconnectedEventFlagID(eventFlagId6, ON);
            }
            if (EventFlag(eventFlagId2)) {
                SetNetworkconnectedEventFlagID(eventFlagId7, ON);
            }
            if (EventFlag(eventFlagId3)) {
                SetNetworkconnectedEventFlagID(eventFlagId8, ON);
            }
        }
        if (CharacterHasSpEffect(chrEntityId, spEffectId2)) {
            if (EventFlag(eventFlagId)) {
                SetNetworkconnectedEventFlagID(eventFlagId5, ON);
            }
            if (EventFlag(eventFlagId2)) {
                SetNetworkconnectedEventFlagID(eventFlagId7, ON);
            }
            if (EventFlag(eventFlagId3)) {
                SetNetworkconnectedEventFlagID(eventFlagId8, ON);
            }
        }
        if (CharacterHasSpEffect(chrEntityId, spEffectId3)) {
            if (EventFlag(eventFlagId)) {
                SetNetworkconnectedEventFlagID(eventFlagId5, ON);
            }
            if (EventFlag(eventFlagId2)) {
                SetNetworkconnectedEventFlagID(eventFlagId6, ON);
            }
            if (EventFlag(eventFlagId3)) {
                SetNetworkconnectedEventFlagID(eventFlagId8, ON);
            }
        }
        if (CharacterHasSpEffect(chrEntityId, spEffectId4)) {
            if (EventFlag(eventFlagId)) {
                SetNetworkconnectedEventFlagID(eventFlagId5, ON);
            }
            if (EventFlag(eventFlagId2)) {
                SetNetworkconnectedEventFlagID(eventFlagId6, ON);
            }
            if (EventFlag(eventFlagId3)) {
                SetNetworkconnectedEventFlagID(eventFlagId7, ON);
            }
        }
        if (!AnyBatchEventFlags(eventFlagId5, eventFlagId8)) {
            SetNetworkconnectedEventFlagID(eventFlagId4, ON);
        }
    }
L0:
    WaitFor(EventFlag(eventFlagId4) || AnyBatchEventFlags(eventFlagId5, eventFlagId8));
    WaitFor(!CharacterHasSpEffect(chrEntityId, 15302));
    if (PlayerIsInOwnWorld()) {
        BatchSetNetworkconnectedEventFlags(eventFlagId, eventFlagId3, OFF);
    }
    RestartEvent();
});

$Event(90065009, Restart, function(chrEntityId, eventFlagId, entityId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId3));
    WaitFor(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId) || EventFlag(eventFlagId3));
    EndIf(EventFlag(eventFlagId3));
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    WarpCharacterAndCopyFloorUnknown200489(chrEntityId, TargetEntityType.Area, entityId, -1, chrEntityId, -1, -1);
    EnableCharacter(chrEntityId);
    EnableCharacterCollision(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 3022, true, false, false);
    RequestCharacterAIReplan(chrEntityId);
    SetNetworkconnectedEventFlagID(eventFlagId, OFF);
    WaitFor(ElapsedSeconds(5) && !EventFlag(eventFlagId));
    RestartEvent();
});

$Event(90065010, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(HPRatio(chrEntityId) < 0.4 || HPRatio(chrEntityId2) < 0.4 || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId2));
    ClearSpEffect(chrEntityId, 15317);
    SetSpEffect(chrEntityId, 15316);
});

$Event(90065011, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(HPRatio(chrEntityId2) == 0 || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId2));
    SetSpEffect(chrEntityId, 42216);
});

$Event(90065012, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(HPRatio(chrEntityId2) == 0 || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId2));
    SetSpEffect(chrEntityId, 42217);
});

$Event(90065013, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId, 17691) || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId2));
    EnableCharacter(chrEntityId2);
    EnableCharacterHPBarDisplay(chrEntityId2);
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 120, chrEntityId);
    EnableCharacterAI(chrEntityId2);
    ForceAnimationPlayback(chrEntityId2, 20008, false, false, false);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 17691));
    RestartEvent();
});

$Event(90065014, Restart, function(chrEntityId, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId, 17692) || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId2));
    ClearSpEffect(chrEntityId, 17692);
    DisableCharacter(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterAI(chrEntityId);
    WaitFor(CharacterHasSpEffect(chrEntityId, 17692));
    RestartEvent();
});

$Event(90065015, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId3));
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId2));
    WaitFor(
        (HPRatio(chrEntityId) == 0
            && CharacterHPValue(chrEntityId2) > 100
            && HPRatio(chrEntityId3) > 0
            && !CharacterHasSpEffect(chrEntityId3, 42256))
            || EventFlag(eventFlagId3));
    EndIf(EventFlag(eventFlagId3));
    SetSpEffect(chrEntityId, 42219);
    WaitFixedTimeFrames(120);
    EnableCharacter(chrEntityId3);
    EnableCharacterHPBarDisplay(chrEntityId3);
    EnableCharacterAI(chrEntityId3);
    WarpCharacterAndCopyFloor(chrEntityId3, TargetEntityType.Character, chrEntityId, 220, chrEntityId);
    ForceAnimationPlayback(chrEntityId3, 20007, false, false, false);
});

$Event(90065016, Restart, function(chrEntityId, chrEntityId2, spEffectId, spEffectId2, spEffectId3, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId3));
    if (HPRatio(chrEntityId2) > 0) {
        WaitFor(EventFlag(eventFlagId2));
        WaitFor((HPRatio(chrEntityId2) <= 0 || EventFlag(eventFlagId3)) && PlayerIsInOwnWorld());
        EndIf(EventFlag(eventFlagId3));
        SetSpEffect(chrEntityId, spEffectId);
        ClearSpEffect(chrEntityId2, spEffectId3);
        if (PlayerIsInOwnWorld()) {
            SetNetworkconnectedEventFlagID(eventFlagId, ON);
        }
        WaitFor(EventFlag(eventFlagId));
        WaitFor(CharacterHasSpEffect(chrEntityId2, 42215));
    }
L0:
    WaitFor((HPRatio(chrEntityId2) > 0 || EventFlag(eventFlagId3)) && PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId3));
    SetSpEffect(chrEntityId, spEffectId2);
    SetSpEffect(chrEntityId2, spEffectId3);
    SetSpEffect(chrEntityId2, 12559);
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(eventFlagId, OFF);
    }
    WaitFor(!EventFlag(eventFlagId));
    RestartEvent();
});

$Event(90065030, Restart, function(chrEntityId, spEffectId, npcPartId, npcPartGroupIdx, lockOnDummypolyId, spEffectId2, animationId, eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId2));
    if (EventFlag(eventFlagId)) {
        WaitFor(CharacterBackreadStatus(chrEntityId));
        GotoIf(S0, !CharacterHasSpEffect(chrEntityId, spEffectId));
        CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, 150, 1, 1, false, false);
        SetNPCPartSEAndSFX(chrEntityId, npcPartId, 109, 109, 139, 123, 0);
        EnableLockOnPoint(chrEntityId, lockOnDummypolyId);
        Goto(L1);
S0:
        DisableLockOnPoint(chrEntityId, lockOnDummypolyId);
        Goto(L0);
    }
    DisableLockOnPoint(chrEntityId, lockOnDummypolyId);
    WaitFor(EventFlag(eventFlagId));
L0:
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId) || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId2));
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, 150, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 109, 109, 139, 123, 0);
    EnableLockOnPoint(chrEntityId, lockOnDummypolyId);
L1:
    WaitFor(
        NPCPartHP(chrEntityId, npcPartId) <= 0
            || !CharacterHasSpEffect(chrEntityId, spEffectId)
            || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId2));
    SetSpEffect(chrEntityId, spEffectId2);
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId2));
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    DisableLockOnPoint(chrEntityId, lockOnDummypolyId);
    WaitFor(!CharacterHasSpEffect(chrEntityId, spEffectId) || EventFlag(eventFlagId2));
    RestartEvent();
});

$Event(90065031, Restart, function(chrEntityId, spEffectId, spEffectId2, generatorEntityId, chrEntityId2, dummypolyId, eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId2));
    if (EventFlag(eventFlagId)) {
        WaitFor(CharacterBackreadStatus(chrEntityId));
        GotoIf(S0, !CharacterHasSpEffect(chrEntityId, spEffectId2));
        Goto(L1);
S0:
        EnableCharacterCollision(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        Goto(L0);
    }
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFor(EventFlag(eventFlagId));
L0:
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId2) || CharacterHPValue(chrEntityId) <= 0);
    if (CharacterHPValue(chrEntityId) <= 0) {
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
L1:
    InvokeEnemyGenerator(generatorEntityId);
    ForceAnimationPlayback(chrEntityId2, 30000, false, false, false);
    DisableCharacterCollision(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId) || CharacterHPValue(chrEntityId) <= 0);
    if (CharacterHPValue(chrEntityId) <= 0) {
        DisableCharacter(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    EnableCharacterCollision(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, dummypolyId, chrEntityId);
    ForceAnimationPlayback(chrEntityId2, 20000, true, false, false);
    WaitFor(CharacterHPValue(chrEntityId2) != 0);
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, dummypolyId, chrEntityId);
    WaitFixedTimeSeconds(0.5);
    if (!EntityInRadiusOfEntity(chrEntityId, chrEntityId2, 10, 1)) {
        WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, dummypolyId, chrEntityId);
    }
    RestartEvent();
});

$Event(90065032, Restart, function(chrEntityId, chrEntityId2, spEffectId, eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId2));
    GotoIf(S0, !EventFlag(eventFlagId));
    WaitFor(CharacterBackreadStatus(chrEntityId));
    GotoIf(L1, HPRatio(chrEntityId2) > 0);
    Goto(L0);
    WaitFor(EventFlag(eventFlagId));
L0:
    WaitFor(HPRatio(chrEntityId2) > 0 || EventFlag(eventFlagId2));
S0:
    EndIf(EventFlag(eventFlagId2));
L1:
    WaitFor(HPRatio(chrEntityId2) <= 0 || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId2));
    SetSpEffect(chrEntityId, spEffectId);
    RestartEvent();
});

$Event(90065040, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2) {
    if (EventFlag(eventFlagId2)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (CharacterHasSpEffect(chrEntityId, 10583)) {
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        EndEvent();
    }
    DisableCharacter(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId, 10583));
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    ForceRatioAnimationPlayback(chrEntityId2, 20026, false, false, false);
});

$Event(90065041, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    EndIf(CharacterHasSpEffect(chrEntityId, 10581));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterDead(chrEntityId2));
    EndIf(CharacterHasSpEffect(chrEntityId, 10581));
    SetSpEffect(chrEntityId, 10565);
});

$Event(90065050, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, bgmBossConvParamId, chrEntityId, chrEntityId2, nameId, chrEntityId3, nameId2, chrEntityId4, nameId3, chrEntityId5, chrEntityId6) {
    if (EventFlag(eventFlagId3)) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
        SetNetworkUpdateRate(chrEntityId3, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetNetworkUpdateRate(chrEntityId4, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetNetworkUpdateRate(chrEntityId5, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetNetworkUpdateRate(chrEntityId6, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        DisableCharacterHPBarDisplay(chrEntityId);
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        EnableCharacter(chrEntityId5);
        EnableCharacter(chrEntityId6);
        EndIf(IsMapVariation(2));
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
        DisplayBossHealthBar(Enabled, chrEntityId2, 2, nameId);
        DisplayBossHealthBar(Enabled, chrEntityId3, 1, nameId2);
        DisplayBossHealthBar(Enabled, chrEntityId4, 0, nameId3);
        LinkToBossHealthBar(Disabled, nameId, 0);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        LinkToBossHealthBar(Enabled, nameId2, chrEntityId3);
        LinkToBossHealthBar(Enabled, nameId3, chrEntityId4);
        EndEvent();
    }
L10:
    WaitFor(ElapsedSeconds(1));
    DisableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    EnableCharacterInvincibility(chrEntityId5);
    EnableCharacterInvincibility(chrEntityId6);
    WaitFor(EventFlag(eventFlagId));
    if (IsMapVariation(1)) {
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, 690050);
        WaitFor(ElapsedSeconds(2.5));
    }
    if (!IsMapVariation(2)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
    }
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, 690047);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId3, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(chrEntityId4, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(chrEntityId5, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(chrEntityId6, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    DisableCharacterHPBarDisplay(chrEntityId);
    WaitFor(ElapsedSeconds(3.5));
    SetSpEffect(chrEntityId3, 13748);
    SetSpEffect(chrEntityId4, 13748);
    SetSpEffect(chrEntityId5, 13748);
    SetSpEffect(chrEntityId6, 13748);
    WaitFor(ElapsedSeconds(0.5));
    ForceAnimationPlayback(chrEntityId2, 20026, false, false, false);
    EnableCharacter(chrEntityId5);
    EnableCharacter(chrEntityId6);
    EnableCharacter(chrEntityId);
    EnableCharacterAI(chrEntityId);
    DisableCharacterInvincibility(chrEntityId5);
    DisableCharacterInvincibility(chrEntityId6);
    if (!IsMapVariation(2)) {
        LinkToBossHealthBar(Disabled, nameId, 0);
    }
    if (!IsMapVariation(2)) {
        DisplayBossHealthBar(Enabled, chrEntityId2, 2, nameId);
        DisplayBossHealthBar(Enabled, chrEntityId3, 1, nameId2);
        DisplayBossHealthBar(Enabled, chrEntityId4, 0, nameId3);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        LinkToBossHealthBar(Enabled, nameId2, chrEntityId3);
        LinkToBossHealthBar(Enabled, nameId3, chrEntityId4);
    }
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    DisableNetworkSync();
    EndIf(!AnyBatchEventFlags(5000, 5001));
    WaitFor(!AnyBatchEventFlags(5000, 5001));
    WaitFor(ElapsedFrames(1));
    DisplayBossHealthBar(Enabled, chrEntityId4, 0, nameId3);
});

$Event(90065051, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, eventFlagId) {
    if (EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    EnableCharacterImmortality(chrEntityId2);
    EnableCharacterImmortality(chrEntityId3);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(chrEntityId3, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    DisableCharacter(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    EnableCharacterInvincibility(chrEntityId3);
    WaitFor(CharacterHPValue(chrEntityId) <= 0);
    SetSpEffect(chrEntityId2, 13796);
    SetSpEffect(chrEntityId3, 13796);
    DisableCharacterImmortality(chrEntityId2);
    DisableCharacterImmortality(chrEntityId3);
    DisableCharacterInvincibility(chrEntityId3);
    WaitFixedTimeFrames(1);
    ForceCharacterDeath(chrEntityId2, false);
    ForceCharacterDeath(chrEntityId3, false);
});

$Event(90065052, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, spEffectId, dummypolyId, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId, 13744));
    if (!CharacterHasSpEffect(chrEntityId, spEffectId)) {
        WaitFor(!CharacterHasSpEffect(chrEntityId, 13744) || EventFlag(eventFlagId2));
        RestartEvent();
    }
    WarpCharacterAndCopyFloorUnknown200489(chrEntityId3, TargetEntityType.Character, chrEntityId, dummypolyId, chrEntityId, -1, -1);
    SetSpEffect(chrEntityId2, 13745);
    SetSpEffect(chrEntityId3, 13745);
    EnableCharacter(chrEntityId3);
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    DisableCharacterInvincibility(chrEntityId3);
    WaitFixedTimeFrames(1);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 13744) || EventFlag(eventFlagId2));
    RestartEvent();
});

$Event(90065053, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId, 13731) || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId2));
    WaitFixedTimeSeconds(0.5);
    DisableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    EnableCharacterInvincibility(chrEntityId2);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 13731) || EventFlag(eventFlagId2));
    RestartEvent();
});

$Event(90065054, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId, 13736));
    ForceCharacterDeath(chrEntityId2, false);
});

$Event(90065055, Restart, function(chrEntityId, chrEntityId2, spEffectId, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(HPRatio(chrEntityId2) <= 0);
    SetSpEffect(chrEntityId, spEffectId);
});

$Event(90065056, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, spEffectId, dummypolyId, areaEntityId, entityId, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId, 13744));
    if (!CharacterHasSpEffect(chrEntityId, spEffectId)) {
        WaitFor(!CharacterHasSpEffect(chrEntityId, 13744) || EventFlag(eventFlagId2));
        RestartEvent();
    }
    if (InArea(chrEntityId, areaEntityId)) {
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId3, TargetEntityType.Character, chrEntityId, dummypolyId, chrEntityId, -1, -1);
    }
    if (!InArea(chrEntityId, areaEntityId)) {
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId3, TargetEntityType.Area, entityId, -1, 0, -1, -1);
    }
    SetSpEffect(chrEntityId2, 13745);
    SetSpEffect(chrEntityId3, 13745);
    EnableCharacter(chrEntityId3);
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    DisableCharacterInvincibility(chrEntityId3);
    WaitFixedTimeFrames(1);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 13744) || EventFlag(eventFlagId2));
    RestartEvent();
});

$Event(90065057, Default, function(chrEntityId, eventFlagId) {
    EndIf(!IsMapVariation(2));
    EndIf(EventFlag(eventFlagId));
    WaitFor(CharacterHPValue(chrEntityId) <= 1);
    DisableCharacterInvincibility(chrEntityId);
    ForceCharacterDeath(chrEntityId, false);
});

$Event(90065060, Restart, function(entityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId3));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(ElapsedSeconds(1.66));
    ForceAnimationPlayback(entityId, 20010, false, false, false);
});

$Event(90065061, Restart, function(chrEntityId, chrEntityId2, animationId, dummypolyId, spEffectId, eventFlagId, eventFlagId2, eventFlagId3) {
    if (EventFlag(eventFlagId3)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId)) {
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        EndEvent();
    }
    DisableCharacter(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    WaitFor(EventFlag(eventFlagId2));
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId) && !CharacterDead(chrEntityId));
    WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId, dummypolyId, 0, -1, -1);
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    ForceAnimationPlayback(chrEntityId2, animationId, false, false, false);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90065062, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterDead(chrEntityId));
    ForceAnimationPlayback(chrEntityId2, 20016, false, false, true);
    WaitFixedTimeSeconds(3);
    DisableCharacter(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    ForceCharacterDeath(chrEntityId2, false);
});

$Event(90065063, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterRatioDead(chrEntityId2));
    SetSpEffect(chrEntityId, 11135);
});

$Event(90065064, Restart, function(chrEntityId, chrEntityId2, animationId, dummypolyId, spEffectId, areaEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3) {
    if (EventFlag(eventFlagId3)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (CharacterHasSpEffect(chrEntityId, spEffectId)) {
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        EndEvent();
    }
    DisableCharacter(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    WaitFor(EventFlag(eventFlagId2));
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId) && !CharacterDead(chrEntityId));
    GotoIf(S0, areaEntityId == 0);
    GotoIf(S1, !InArea(chrEntityId, areaEntityId));
S0:
    WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId, dummypolyId, 0, -1, -1);
S1:
    if (areaEntityId != 0) {
        if (!InArea(chrEntityId, areaEntityId)) {
            WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Area, entityId, -1, 0, -1, -1);
        }
    }
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    ForceAnimationPlayback(chrEntityId2, animationId, false, false, false);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90065070, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2) {
    if (EventFlag(eventFlagId2)) {
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId)) {
        if (CharacterHasSpEffect(chrEntityId, 46550)) {
            DisableLockOnPoint(chrEntityId, 221);
            ForceCharacterDeath(chrEntityId2, false);
            EndEvent();
        }
    }
    SetCharacterBackreadState(chrEntityId2, false);
    DisableCharacterCollision(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    WaitFor(EventFlag(eventFlagId));
    CreateNPCPart(chrEntityId, 50, NPCPartType.Part6, 510, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, 50, 109, 109, 139, 139, 0);
    WaitFor(NPCPartHP(chrEntityId, 50) <= 0);
    ForceAnimationPlayback(chrEntityId, 20000, true, false, false);
    DisableLockOnPoint(chrEntityId, 221);
    WaitFor(ElapsedFrames(2));
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 30, chrEntityId);
    WaitFor(ElapsedFrames(1));
    ForceCharacterDeath(chrEntityId2, true);
});

$Event(90065071, Restart, function(eventFlagId, chrEntityId) {
    DisableNetworkSync();
    WaitFor(EventFlag(eventFlagId));
    EndIf(!CharacterHasSpEffect(chrEntityId, 46551));
    ClearSpEffect(chrEntityId, 46551);
    EndIf(!CharacterHasSpEffect(chrEntityId, 46551));
    ClearSpEffect(chrEntityId, 46551);
    EndIf(!CharacterHasSpEffect(chrEntityId, 46551));
    ClearSpEffect(chrEntityId, 46551);
    EndIf(!CharacterHasSpEffect(chrEntityId, 46551));
    ClearSpEffect(chrEntityId, 46551);
    EndIf(!CharacterHasSpEffect(chrEntityId, 46551));
    ClearSpEffect(chrEntityId, 46551);
    EndIf(!CharacterHasSpEffect(chrEntityId, 46551));
    ClearSpEffect(chrEntityId, 46551);
    EndIf(!CharacterHasSpEffect(chrEntityId, 46551));
    ClearSpEffect(chrEntityId, 46551);
    EndIf(!CharacterHasSpEffect(chrEntityId, 46551));
    ClearSpEffect(chrEntityId, 46551);
    RestartEvent();
});

$Event(90065080, Restart, function(chrEntityId, npcPartId, npcPartGroupIdx, spEffectId, spEffectId2, lockOnDummypolyId, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    if (EventFlag(eventFlagId)) {
        if (CharacterHasSpEffect(chrEntityId, spEffectId2)) {
            DisableLockOnPoint(chrEntityId, lockOnDummypolyId);
            EndEvent();
        }
    }
    if (EventFlag(eventFlagId)) {
        if (CharacterHasSpEffect(chrEntityId, spEffectId)) {
            WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId2));
            DisableLockOnPoint(chrEntityId, lockOnDummypolyId);
            EndEvent();
        }
    }
    WaitFor(EventFlag(eventFlagId));
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, 564, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 125, 146, 139, 123, 0);
    WaitFor(NPCPartHP(chrEntityId, npcPartId) <= 0);
    SetSpEffect(chrEntityId, spEffectId);
    SetSpEffect(chrEntityId, 42310);
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId2));
    DisableLockOnPoint(chrEntityId, lockOnDummypolyId);
});

$Event(90065081, Restart, function(chrEntityId, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId, 42301) && CharacterHasSpEffect(chrEntityId, 42303));
    ForceCharacterDeath(chrEntityId, true);
});

$Event(90065082, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    if (EventFlag(eventFlagId3)) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        EndEvent();
    }
    DisableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    WaitFor(EventFlag(eventFlagId));
    if (IsMapVariation(1)) {
        WaitFor(ElapsedSeconds(2.5));
    }
    WaitFor(ElapsedSeconds(4));
    ForceAnimationPlayback(chrEntityId, 20026, false, false, false);
    EnableCharacter(chrEntityId);
    EnableCharacterAI(chrEntityId);
});

$Event(90065083, Restart, function(chrEntityId, generatorEntityId, generatorEntityId2, eventFlagId, eventFlagId2) {
    DisableGenerator(generatorEntityId);
    DisableGenerator(generatorEntityId2);
    WaitFor(EventFlag(eventFlagId));
    EnableGenerator(generatorEntityId);
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 42311)
            || CharacterHPValue(chrEntityId) <= 0
            || EventFlag(eventFlagId2));
    DisableGenerator(generatorEntityId);
    EnableGenerator(generatorEntityId2);
    WaitFor(CharacterHPValue(chrEntityId) <= 0);
    DisableGenerator(generatorEntityId);
    DisableGenerator(generatorEntityId2);
});

$Event(90065084, Restart, function(chrEntityId, eventFlagId, eventFlagId2) {
    if (EventFlag(eventFlagId2)) {
        ClearSpEffect(10000, 42312);
        ClearSpEffect(10002, 42312);
        ClearSpEffect(10003, 42312);
        ClearSpEffect(10004, 42312);
        EndEvent();
    }
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId, 42311));
    SetSpEffect(10000, 42312);
    SetSpEffect(10002, 42312);
    SetSpEffect(10003, 42312);
    SetSpEffect(10004, 42312);
    WaitFor(EventFlag(eventFlagId2));
    ClearSpEffect(10000, 42312);
    ClearSpEffect(10002, 42312);
    ClearSpEffect(10003, 42312);
    ClearSpEffect(10004, 42312);
});

$Event(90065085, Restart, function(chrEntityId) {
    DisableNetworkSync();
    WaitFor(CharacterBackreadStatus(chrEntityId));
    DisableLockOnPoint(chrEntityId, 220);
});

$Event(90065090, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    if (EventFlag(eventFlagId4)) {
        DisableCharacter(chrEntityId);
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId);
        DisableCharacterAI(chrEntityId2);
        ForceCharacterDeath(chrEntityId, false);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId3)) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisableCharacterHPBarDisplay(chrEntityId2);
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        SetBossBGM(790000, BossBGMState.Start);
        SetBossBGM(790000, BossBGMState.HeatUp);
        DisplayBossHealthBar(Enabled, chrEntityId2, 0, 907900000);
        LinkToBossHealthBar(Disabled, 907900000, 0);
        LinkToBossHealthBar(Enabled, 907900000, chrEntityId);
        LinkToBossHealthBar(Enabled, 907900000, chrEntityId2);
        ChangeCamera(7912);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
        SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisableCharacterHPBarDisplay(chrEntityId);
        DisableCharacterHPBarDisplay(chrEntityId2);
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        SetBossBGM(790000, BossBGMState.Start);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, 907900000);
        LinkToBossHealthBar(Disabled, 907900000, 0);
        LinkToBossHealthBar(Enabled, 907900000, chrEntityId);
        LinkToBossHealthBar(Enabled, 907900000, chrEntityId2);
        ChangeCamera(7912);
        EndEvent();
    }
    DisableCharacter(chrEntityId);
    DisableCharacter(chrEntityId2);
    DisableCharacterAI(chrEntityId);
    DisableCharacterAI(chrEntityId2);
    WaitFor(EventFlag(eventFlagId));
    if (IsMapVariation(1)) {
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId, 900, 690050);
        WaitFor(ElapsedSeconds(2.5));
    }
    SetBossBGM(790000, BossBGMState.Start);
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId, 900, 690048);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId2);
    WaitFor(ElapsedSeconds(4));
    ForceAnimationPlayback(chrEntityId, 20026, false, false, false);
    ChangeCamera(7912);
    EnableCharacter(chrEntityId);
    EnableCharacterAI(chrEntityId);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907900000);
    LinkToBossHealthBar(Disabled, 907900000, 0);
    LinkToBossHealthBar(Enabled, 907900000, chrEntityId);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90065091, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId3));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId, 44100));
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    WaitFor(ElapsedSeconds(1.5));
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 66, chrEntityId);
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    ForceAnimationPlayback(chrEntityId2, 20000, true, false, false);
    DisplayBossHealthBar(Disabled, chrEntityId, 0, 907900000);
    WaitFor(ElapsedSeconds(1));
    SetBossBGM(790000, BossBGMState.HeatUp);
    DisplayBossHealthBar(Enabled, chrEntityId2, 0, 907900000);
    LinkToBossHealthBar(Disabled, 907900000, 0);
    LinkToBossHealthBar(Enabled, 907900000, chrEntityId2);
});

$Event(90065092, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    EndIf(EventFlag(eventFlagId4));
    EndIf(EventFlag(eventFlagId3));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    CreateNPCPart(chrEntityId, 50, NPCPartType.Part1, 600, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, 50, 125, 110, 106, 110, 106);
    WaitFor(NPCPartHP(chrEntityId, 50) <= 0);
    SetSpEffect(chrEntityId, 44101);
    ForceAnimationPlayback(chrEntityId, 20000, true, false, false);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90065100, Restart, function(chrEntityId, chrEntityId2, generatorEntityId, generatorEntityId2, generatorEntityId3, generatorEntityId4, generatorEntityId5, generatorEntityId6, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId3));
    DisableCharacter(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId, 5030) || EventFlag(eventFlagId2));
    EnableGenerator(generatorEntityId);
    EnableGenerator(generatorEntityId2);
    EnableGenerator(generatorEntityId3);
    EnableGenerator(generatorEntityId4);
    EnableGenerator(generatorEntityId5);
    EnableGenerator(generatorEntityId6);
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    ForceAnimationPlayback(chrEntityId2, 20022, false, false, false);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    WaitFor(EventFlag(eventFlagId3));
    DisableGenerator(generatorEntityId);
    DisableGenerator(generatorEntityId2);
    DisableGenerator(generatorEntityId3);
    DisableGenerator(generatorEntityId4);
    DisableGenerator(generatorEntityId5);
    DisableGenerator(generatorEntityId6);
});

$Event(90065101, Restart, function(eventFlagId, eventFlagId2) {
    if (EventFlag(eventFlagId2)) {
        ClearSpEffect(10002, 42180);
        ClearSpEffect(10003, 42181);
        ClearSpEffect(10004, 42182);
        EndEvent();
    }
    WaitFor(EventFlag(eventFlagId));
    SetSpEffect(10002, 42180);
    SetSpEffect(10003, 42181);
    SetSpEffect(10004, 42182);
    WaitFor(EventFlag(eventFlagId2));
    ClearSpEffect(10002, 42180);
    ClearSpEffect(10003, 42181);
    ClearSpEffect(10004, 42182);
});

$Event(90065110, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, chrEntityId5, chrEntityId6) {
    if (EventFlag(eventFlagId3)) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisableCharacterHPBarDisplay(chrEntityId);
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        if (!IsMapVariation(2)) {
            SetBossBGM(921000, BossBGMState.Start);
            DisplayBossHealthBar(Enabled, chrEntityId2, 1, 903150608);
            DisplayBossHealthBar(Enabled, chrEntityId3, 0, 903150609);
            LinkToBossHealthBar(Disabled, 903150610, 0);
            LinkToBossHealthBar(Enabled, 903150608, chrEntityId2);
            LinkToBossHealthBar(Enabled, 903150609, chrEntityId3);
            EndEvent();
        }
L11:
        if (EventFlag(eventFlagId4)) {
            DisableCharacter(chrEntityId5);
            DisableCharacterAI(chrEntityId5);
            ForceCharacterDeath(chrEntityId5, false);
        }
        if (EventFlag(eventFlagId5)) {
            DisableCharacter(chrEntityId6);
            DisableCharacterAI(chrEntityId6);
            ForceCharacterDeath(chrEntityId6, false);
        }
        EndEvent();
    }
L10:
    WaitFor(ElapsedSeconds(1));
    DisableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    EnableCharacterInvincibility(chrEntityId4);
    WaitFor(EventFlag(eventFlagId));
    if (IsMapVariation(1)) {
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, 690050);
        WaitFor(ElapsedSeconds(2.5));
    }
    if (!IsMapVariation(2)) {
        SetBossBGM(921000, BossBGMState.Start);
    }
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, 690047);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    WaitFor(ElapsedSeconds(3.5));
    SetSpEffect(chrEntityId, 13748);
    SetSpEffect(chrEntityId4, 13748);
    WaitFor(ElapsedSeconds(0.5));
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    EnableCharacter(chrEntityId3);
    EnableCharacterAI(chrEntityId3);
    DisableCharacterInvincibility(chrEntityId4);
    if (!IsMapVariation(2)) {
        LinkToBossHealthBar(Disabled, 903150610, 0);
    }
    if (!IsMapVariation(2)) {
        DisplayBossHealthBar(Enabled, chrEntityId2, 1, 903150608);
        DisplayBossHealthBar(Enabled, chrEntityId3, 0, 903150609);
        LinkToBossHealthBar(Enabled, 903150608, chrEntityId2);
        LinkToBossHealthBar(Enabled, 903150609, chrEntityId3);
    }
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90065111, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId, 11805) || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId2));
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 230, chrEntityId2);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 11805) && ElapsedSeconds(1));
    RestartEvent();
});

$Event(90065112, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterRidingMount(chrEntityId));
    WaitFor(
        (CharacterBackreadStatus(chrEntityId) && !CharacterRidingMount(chrEntityId))
            || EventFlag(eventFlagId2));
    WaitFor(ElapsedSeconds(3));
    if (CharacterBackreadStatus(chrEntityId2)
        && !CharacterRidingMount(chrEntityId2)
        && !CharacterHasSpEffect(chrEntityId2, 11842)) {
        ForceAnimationPlayback(chrEntityId2, 3035, false, false, false);
        WaitFor(CharacterHasSpEffect(chrEntityId2, 11845));
        ForceAnimationPlayback(chrEntityId2, 30000, false, false, false);
    }
    if (EventFlag(eventFlagId2)) {
        WaitFor(ElapsedSeconds(1));
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    RestartEvent();
});

$Event(90065113, Restart, function(eventFlagId, chrEntityId) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(CharacterDead(chrEntityId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90065120, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2, nameId, eventFlagId3) {
    if (EventFlag(eventFlagId2)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId3)) {
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        EndIf(IsMapVariation(2));
        DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        EndEvent();
    }
    DisableCharacter(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    WaitFor(EventFlag(eventFlagId));
    WaitFor(HPRatio(chrEntityId) <= 0.5 || CharacterHasSpEffect(chrEntityId, 14601));
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, 690048);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId2);
    WaitFor(ElapsedSeconds(4));
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    ForceRatioAnimationPlayback(chrEntityId2, 20026, false, false, false);
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
    if (!IsMapVariation(2)) {
        DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
    }
});

$Event(90065121, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, bgmBossConvParamId, sfxId, chrEntityId, chrEntityId2, nameId, chrEntityId3, nameId2, chrEntityId4, nameId3) {
    if (EventFlag(eventFlagId3)) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisableCharacterHPBarDisplay(chrEntityId2);
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        EndIf(IsMapVariation(2));
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
        DisplayBossHealthBar(Enabled, chrEntityId2, 1, nameId);
        LinkToBossHealthBar(Disabled, nameId, 0);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        if (0 != 0) {
            DisplayBossHealthBar(Enabled, chrEntityId3, 0, nameId2);
        }
        if (0 != 0) {
            DisplayBossHealthBar(Enabled, chrEntityId4, 2, nameId3);
        }
        EndEvent();
    }
L10:
    DisableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    WaitFor(EventFlag(eventFlagId));
    if (IsMapVariation(1)) {
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, 690050);
        WaitFor(ElapsedSeconds(2.5));
    }
    if (!IsMapVariation(2)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
    }
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, sfxId);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId2);
    WaitFor(ElapsedSeconds(4));
    ForceAnimationPlayback(chrEntityId2, 20026, false, false, false);
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    if (!IsMapVariation(2)) {
        LinkToBossHealthBar(Disabled, nameId, 0);
    }
    if (!IsMapVariation(2)) {
        DisplayBossHealthBar(Enabled, chrEntityId2, 1, nameId);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        if (0 != 0) {
            DisplayBossHealthBar(Enabled, chrEntityId3, 0, nameId2);
        }
        if (0 != 0) {
            DisplayBossHealthBar(Enabled, chrEntityId4, 2, nameId3);
        }
    }
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90065122, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2, nameId, eventFlagId3, eventFlagId4) {
    if (EventFlag(eventFlagId2)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId4)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    WaitFixedTimeFrames(1);
    if (!CharacterHasSpEffect(chrEntityId, 14601) && EventFlag(eventFlagId3)) {
        SetNetworkconnectedEventFlagID(eventFlagId3, OFF);
    }
    if (EventFlag(eventFlagId3)) {
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
    } else {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        WaitFor(EventFlag(eventFlagId));
        WaitFor(HPRatio(chrEntityId) <= 0.5 || CharacterHasSpEffect(chrEntityId, 14601));
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, 690048);
        SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisableCharacterHPBarDisplay(chrEntityId2);
        WaitFor(ElapsedSeconds(4));
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        ForceRatioAnimationPlayback(chrEntityId2, 20026, false, false, false);
        SetNetworkconnectedEventFlagID(eventFlagId3, ON);
        if (!IsMapVariation(2)) {
            DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
            LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        }
    }
L0:
    WaitFor(CharacterDead(chrEntityId2));
    SetNetworkconnectedEventFlagID(eventFlagId4, ON);
});

// Gael phase 2 spawn in event
$Event(90065123, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2, nameId, eventFlagId3) {
    if (EventFlag(eventFlagId2)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId3)) {
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        EndIf(IsMapVariation(2));
        DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        EndEvent();
    }
    DisableCharacter(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    WaitFor(EventFlag(eventFlagId));
    WaitFor(HPRatio(chrEntityId) <= 0 || CharacterHasSpEffect(chrEntityId, 14601));
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 900, chrEntityId);
    WaitFor(ElapsedSeconds(4));
    DisplayBossHealthBar(Disabled, chrEntityId, 0, nameId)
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId2);
    WaitFor(ElapsedSeconds(8));
    // Play sound
    PlaySE(chrEntityId2, SoundType.SFX, 710000000);
    WaitFor(ElapsedSeconds(2.5));
    // Custom spawn visual
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, 662099);
    WaitFor(ElapsedSeconds(2));
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    //ForceRatioAnimationPlayback(chrEntityId2, 20026, false, false, false);
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
    if (!IsMapVariation(2)) {
        DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
    }
});

// Gael phase 2 spawn in event
$Event(90065124, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, bgmBossConvParamId, sfxId, chrEntityId, chrEntityId2, nameId, chrEntityId3, nameId2, chrEntityId4, nameId3) {
    if (EventFlag(eventFlagId3)) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 900, chrEntityId);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisableCharacterHPBarDisplay(chrEntityId2);
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        EndIf(IsMapVariation(2));
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
        DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
        LinkToBossHealthBar(Disabled, nameId, 0);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        if (0 != 0) {
            DisplayBossHealthBar(Enabled, chrEntityId3, 0, nameId2);
        }
        if (0 != 0) {
            DisplayBossHealthBar(Enabled, chrEntityId4, 2, nameId3);
        }
        EndEvent();
    }
L10:
    DisableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    WaitFor(EventFlag(eventFlagId));
    if (IsMapVariation(1)) {
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, 621196);
        WaitFor(ElapsedSeconds(2.5));
    }
    if (!IsMapVariation(2)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
    }
    DisplayBossHealthBar(Disabled, chrEntityId, 0, nameId);
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 900, chrEntityId);
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, sfxId);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId2);  
    WaitFor(ElapsedSeconds(4));
    //ForceAnimationPlayback(chrEntityId2, 20026, false, false, false);
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    if (!IsMapVariation(2)) {
        LinkToBossHealthBar(Disabled, nameId, 0);
    }
    if (!IsMapVariation(2)) {
        DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        if (0 != 0) {
            DisplayBossHealthBar(Enabled, chrEntityId3, 0, nameId2);
        }
        if (0 != 0) {
            DisplayBossHealthBar(Enabled, chrEntityId4, 2, nameId3);
        }
    }
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

// Gael phase 2 spawn in event
$Event(90065125, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2, nameId, eventFlagId3, eventFlagId4) {
    if (EventFlag(eventFlagId2)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId4)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    WaitFixedTimeFrames(1);
    if (!CharacterHasSpEffect(chrEntityId, 14601) && EventFlag(eventFlagId3)) {
        SetNetworkconnectedEventFlagID(eventFlagId3, OFF);
    }
    if (EventFlag(eventFlagId3)) {
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
    } else {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        WaitFor(EventFlag(eventFlagId));
        WaitFor(HPRatio(chrEntityId) <= 0 || CharacterHasSpEffect(chrEntityId, 14601));
        WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 900, chrEntityId);
        WaitFor(ElapsedSeconds(5));
        DisplayBossHealthBar(Disabled, chrEntityId, 0, nameId)
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, 690048);
        SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisableCharacterHPBarDisplay(chrEntityId2);
        WaitFor(ElapsedSeconds(4));
        EnableCharacter(chrEntityId2);      
        EnableCharacterAI(chrEntityId2);
        //ForceRatioAnimationPlayback(chrEntityId2, 20026, false, false, false);
        PlaySE(20000, SoundType.CutsceneSE, 600010100);
        SetNetworkconnectedEventFlagID(eventFlagId3, ON);
        if (!IsMapVariation(2)) {
            DisplayBossHealthBar(Disabled, chrEntityId, 0, nameId);
            DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
            LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        }
    }
L0:
    WaitFor(CharacterDead(chrEntityId2));
    SetNetworkconnectedEventFlagID(eventFlagId4, ON);
});

// Gael BGM event phase 1 and 2
$Event(90065126, Restart, function(chrEntityId) {
    WaitFor(EventFlag(7509));
    if (CharacterHasSpEffect(chrEntityId, 90030)) {
        SetBossBGM(100600, BossBGMState.Stop2);
        WaitFixedTimeSeconds(3.5);
        SetBossBGM(100600, BossBGMState.HeatUp);
        
    } else {
        WaitFor(CharacterHasSpEffect(chrEntityId, 90030));
        SetBossBGM(100600, BossBGMState.Stop2);
        WaitFixedTimeSeconds(3.5);
        SetBossBGM(100600, BossBGMState.HeatUp);
    }
L0:
    WaitFor(CharacterHPValue(chrEntityId) <= 0);
    SetBossBGM(100600, BossBGMState.Stop2);
    WaitFixedTimeSeconds(15.5);
    if (CharacterHPValue(49660810) > 0)
        SetBossBGM(100520, BossBGMState.Start);
});

// Gael BGM event phase 3
$Event(90065127, Restart, function(chrEntityId) {
    WaitFor(CharacterHasSpEffect(chrEntityId, 20050004));
    SetBossBGM(100800, BossBGMState.HeatUp);
});

// Gael BGM stop on death
$Event(90065129, Restart, function(chrEntityId) {
    WaitFor(CharacterHPValue(chrEntityId) <= 0);
    SetBossBGM(100800, BossBGMState.Stop2);
});

// Regal Ancestor Spirit animal spawns
$Event(90065128, Restart, function(chrEntityId) {
    // Despawn on day 1 start
    WaitFor(EventFlag(7500));
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    DisableCharacterAI(chrEntityId);
    // Spawn on boss start
    WaitFor(EventFlag(7504));
    DisableCharacterCollision(chrEntityId);
    EnableCharacter(chrEntityId);      
    EnableCharacterAI(chrEntityId);
    // Despawn on death
    WaitFor(EventFlag(7502));
    DisableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);    
});

$Event(90065130, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2, nameId, eventFlagId3) {
    if (EventFlag(eventFlagId2)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId3)) {
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        EndIf(IsMapVariation(2));
        DisplayBossHealthBar(Enabled, chrEntityId2, 1, nameId);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        EndEvent();
    }
    DisableCharacter(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    WaitFor(EventFlag(eventFlagId));
    WaitFor(HPRatio(chrEntityId) <= 0.5 || CharacterHasSpEffect(chrEntityId, 15501));
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, 690048);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId2);
    WaitFor(ElapsedSeconds(4));
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    ForceRatioAnimationPlayback(chrEntityId2, 20026, false, false, false);
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
    if (!IsMapVariation(2)) {
        DisplayBossHealthBar(Enabled, chrEntityId2, 1, nameId);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
    }
});

$Event(90065131, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, bgmBossConvParamId, sfxId, chrEntityId, chrEntityId2, nameId, chrEntityId3, nameId2, chrEntityId4, nameId3) {
    if (EventFlag(eventFlagId3)) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisableCharacterHPBarDisplay(chrEntityId2);
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        EndIf(IsMapVariation(2));
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
        DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
        LinkToBossHealthBar(Disabled, nameId, 0);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        if (0 != 0) {
            DisplayBossHealthBar(Enabled, chrEntityId3, 1, nameId2);
        }
        if (0 != 0) {
            DisplayBossHealthBar(Enabled, chrEntityId4, 2, nameId3);
        }
        EndEvent();
    }
L10:
    DisableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    WaitFor(EventFlag(eventFlagId));
    if (IsMapVariation(1)) {
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, 690050);
        WaitFor(ElapsedSeconds(2.5));
    }
    if (!IsMapVariation(2)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
    }
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, sfxId);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId2);
    WaitFor(ElapsedSeconds(4));
    ForceAnimationPlayback(chrEntityId2, 20026, false, false, false);
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    if (!IsMapVariation(2)) {
        LinkToBossHealthBar(Disabled, nameId, 0);
    }
    if (!IsMapVariation(2)) {
        DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        if (0 != 0) {
            DisplayBossHealthBar(Enabled, chrEntityId3, 1, nameId2);
        }
        if (0 != 0) {
            DisplayBossHealthBar(Enabled, chrEntityId4, 2, nameId3);
        }
    }
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90065132, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2, nameId, eventFlagId3, eventFlagId4) {
    if (EventFlag(eventFlagId2)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId4)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    WaitFixedTimeFrames(1);
    if (!CharacterHasSpEffect(chrEntityId, 15501) && EventFlag(eventFlagId3)) {
        SetNetworkconnectedEventFlagID(eventFlagId3, OFF);
    }
    if (EventFlag(eventFlagId3)) {
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
    } else {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        WaitFor(EventFlag(eventFlagId));
        WaitFor(HPRatio(chrEntityId) <= 0.5 || CharacterHasSpEffect(chrEntityId, 15501));
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, 690048);
        SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisableCharacterHPBarDisplay(chrEntityId2);
        WaitFor(ElapsedSeconds(4));
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        ForceRatioAnimationPlayback(chrEntityId2, 20026, false, false, false);
        SetNetworkconnectedEventFlagID(eventFlagId3, ON);
        if (!IsMapVariation(2)) {
            DisplayBossHealthBar(Enabled, chrEntityId2, 1, nameId);
            LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        }
    }
L0:
    WaitFor(CharacterDead(chrEntityId2));
    SetNetworkconnectedEventFlagID(eventFlagId4, ON);
});

//radahn event target
$Event(90065133, Restart, function() {
    SetCharacterEventTarget(49560800, 49560801);
    DisableLockOnPoint(49565211, 220);
    DisableCharacterCollision(49565211);
    EndEvent();
});
 
//radahn teleport
$Event(90065134, Restart, function() {
    EndIf(CharacterDead(49560800));
    WaitFor(CharacterHasSpEffect(49560800, 960000));
    WarpCharacterAndCopyFloor(49560800, TargetEntityType.Character, 49560802, 900, 49560802);
    ForceAnimationPlayback(49560800, 20020, false, false, false);
    WaitFor(CharacterHasSpEffect(49560800, 960001));
    WarpCharacterAndCopyFloor(49560800, TargetEntityType.Character, 49560805, 900, 49560805);
    ForceAnimationPlayback(49560800, 20021, false, false, false);
    WaitFor(CharacterHasSpEffect(49560800, 960002));
    ForceAnimationPlayback(49560800, 20022, false, false, false);
    WaitFixedTimeSeconds(0.5);
    WarpCharacterAndCopyFloor(49560800, TargetEntityType.Character, 49560803, 900, 49560803);
    WaitFor(CharacterHasSpEffect(49560800, 960003));
    ForceAnimationPlayback(49560800, 20023, false, false, false);
    WarpCharacterAndCopyFloor(49560800, TargetEntityType.Character, 49560806, 900, 49560806);
    WaitFor(CharacterHasSpEffect(49560800, 960004));
    WarpCharacterAndCopyFloor(49560800, TargetEntityType.Character, 49560807, 900, 49560807);
    WaitFor(CharacterHasSpEffect(49560800, 960005));
    ForceAnimationPlayback(49560800, 20025, false, false, false);
    WarpCharacterAndCopyFloor(49560800, TargetEntityType.Character, 49560804, 900, 49560804);
    RestartEvent();
});

//radahn bow removal
$Event(90065135, Restart, function() {
    EndIf(CharacterDead(49560800));
    WaitFor(CharacterHasSpEffect(49560800, 960006));
    RestartIf(CharacterHasSpEffect(49560800, 46033));
    ForceAnimationPlayback(49560800, 20005, false, false, false);
    RestartEvent();
});

//radahn meteor failsafe

$Event(90065136, Restart, function() {
    EndIf(CharacterDead(49560800));
    WaitFor(CharacterHasSpEffect(49560800, 46033));
    WaitFixedTimeSeconds(4);
    if (!CharacterHasSpEffect(49560800, 5480))
    {
        ForceAnimationPlayback(49560800, 3034, false, false, false);
        WaitFixedTimeSeconds(3);
        if (!CharacterHasSpEffect(49560800, 5480))
        {
            ForceAnimationPlayback(49560800, 3037, false, false, false);
        }
    }
    
    RestartEvent();
});


// black knight duo spawn
$Event(90065137, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2, nameId, eventFlagId3, value) {
    if (EventFlag(eventFlagId2)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId3)) {
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        EndIf(IsMapVariation(2));
        DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        EndEvent();
    }
    DisableCharacter(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    WaitFor(EventFlag(eventFlagId));
    WaitFor(HPRatio(chrEntityId) <= value || CharacterHasSpEffect(chrEntityId, 14601));
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, 690048);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId2);
    WaitFor(ElapsedSeconds(4));
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
    if (!IsMapVariation(2)) {
        DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
    }
});

// black knight duo spawn
$Event(90065138, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2, nameId, eventFlagId3, eventFlagId4, value) {
    if (EventFlag(eventFlagId2)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId4)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    WaitFixedTimeFrames(1);
    if (!CharacterHasSpEffect(chrEntityId, 14601) && EventFlag(eventFlagId3)) {
        SetNetworkconnectedEventFlagID(eventFlagId3, OFF);
    }
    if (EventFlag(eventFlagId3)) {
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
    } else {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        WaitFor(EventFlag(eventFlagId));
        WaitFor(HPRatio(chrEntityId) <= value || CharacterHasSpEffect(chrEntityId, 14601));
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, 690048);
        SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisableCharacterHPBarDisplay(chrEntityId2);
        WaitFor(ElapsedSeconds(4));
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        SetNetworkconnectedEventFlagID(eventFlagId3, ON);
        if (!IsMapVariation(2)) {
            DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
            LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        }
    }
L0:
    WaitFor(CharacterDead(chrEntityId2));
    SetNetworkconnectedEventFlagID(eventFlagId4, ON);
});


$Event(90065140, Default, function(chrEntityId) {
    EndIf(!IsMapVariation(2));
    WaitFor(CharacterHasSpEffect(chrEntityId, 16241));
    WaitFor(ElapsedSeconds(1));
    WaitFor(
        !CharacterHasSpEffect(chrEntityId, 16241)
            || !(CharacterHasSpEffect(10002, 508)
                || CharacterHasSpEffect(10003, 508)
                || CharacterHasSpEffect(10004, 508)));
    if (CharacterHasSpEffect(chrEntityId, 16241)) {
        SetSpEffect(chrEntityId, 16243);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// fire knight trio spawn
$Event(90065141, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, eventFlagId, eventFlagId2, nameId, eventFlagId3) {
    if (EventFlag(eventFlagId2)) {
        DisableCharacter(chrEntityId3);
        DisableCharacterAI(chrEntityId3);
        ForceCharacterDeath(chrEntityId3, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId3)) {
        EnableCharacter(chrEntityId3);
        EnableCharacterAI(chrEntityId3);
        EndIf(IsMapVariation(2));
        DisplayBossHealthBar(Enabled, chrEntityId3, 0, nameId);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId3);
        EndEvent();
    }
    DisableCharacter(chrEntityId3);
    DisableCharacterAI(chrEntityId3);
    WaitFor(EventFlag(eventFlagId));
    WaitFor((HPRatio(chrEntityId) <= 0.0 && HPRatio(chrEntityId2) <= 1.0) ||
            (HPRatio(chrEntityId) <= 0.1 && HPRatio(chrEntityId2) <= 0.9) ||
            (HPRatio(chrEntityId) <= 0.2 && HPRatio(chrEntityId2) <= 0.8) ||
            (HPRatio(chrEntityId) <= 0.3 && HPRatio(chrEntityId2) <= 0.7) ||
            (HPRatio(chrEntityId) <= 0.4 && HPRatio(chrEntityId2) <= 0.6) ||
            (HPRatio(chrEntityId) <= 0.5 && HPRatio(chrEntityId2) <= 0.5) ||
            (HPRatio(chrEntityId) <= 0.6 && HPRatio(chrEntityId2) <= 0.4) ||
            (HPRatio(chrEntityId) <= 0.7 && HPRatio(chrEntityId2) <= 0.3) ||
            (HPRatio(chrEntityId) <= 0.8 && HPRatio(chrEntityId2) <= 0.2) ||
            (HPRatio(chrEntityId) <= 0.9 && HPRatio(chrEntityId2) <= 0.1) ||
            (HPRatio(chrEntityId) <= 1.0 && HPRatio(chrEntityId2) <= 0.0));
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId3, 900, 690048);
    SetNetworkUpdateRate(chrEntityId3, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId3);
    WaitFor(ElapsedSeconds(4));
    EnableCharacter(chrEntityId3);
    EnableCharacterAI(chrEntityId3);
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
    if (!IsMapVariation(2)) {
        DisplayBossHealthBar(Enabled, chrEntityId3, 0, nameId);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId3);
    }
});

// fire knight trio spawn
$Event(90065142, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, eventFlagId, eventFlagId2, nameId, eventFlagId3, eventFlagId4) {
    if (EventFlag(eventFlagId2)) {
        DisableCharacter(chrEntityId3);
        DisableCharacterAI(chrEntityId3);
        ForceCharacterDeath(chrEntityId3, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId4)) {
        DisableCharacter(chrEntityId3);
        DisableCharacterAI(chrEntityId3);
        ForceCharacterDeath(chrEntityId3, false);
        EndEvent();
    }
    WaitFixedTimeFrames(1);
    if (!CharacterHasSpEffect(chrEntityId, 14601) && EventFlag(eventFlagId3)) {
        SetNetworkconnectedEventFlagID(eventFlagId3, OFF);
    }
    if (EventFlag(eventFlagId3)) {
        EnableCharacter(chrEntityId3);
        EnableCharacterAI(chrEntityId3);
    } else {
        DisableCharacter(chrEntityId3);
        DisableCharacterAI(chrEntityId3);
        WaitFor(EventFlag(eventFlagId));
        WaitFor((HPRatio(chrEntityId) <= 0.0 && HPRatio(chrEntityId2) <= 1.0) ||
            (HPRatio(chrEntityId) <= 0.1 && HPRatio(chrEntityId2) <= 0.9) ||
            (HPRatio(chrEntityId) <= 0.2 && HPRatio(chrEntityId2) <= 0.8) ||
            (HPRatio(chrEntityId) <= 0.3 && HPRatio(chrEntityId2) <= 0.7) ||
            (HPRatio(chrEntityId) <= 0.4 && HPRatio(chrEntityId2) <= 0.6) ||
            (HPRatio(chrEntityId) <= 0.5 && HPRatio(chrEntityId2) <= 0.5) ||
            (HPRatio(chrEntityId) <= 0.6 && HPRatio(chrEntityId2) <= 0.4) ||
            (HPRatio(chrEntityId) <= 0.7 && HPRatio(chrEntityId2) <= 0.3) ||
            (HPRatio(chrEntityId) <= 0.8 && HPRatio(chrEntityId2) <= 0.2) ||
            (HPRatio(chrEntityId) <= 0.9 && HPRatio(chrEntityId2) <= 0.1) ||
            (HPRatio(chrEntityId) <= 1.0 && HPRatio(chrEntityId2) <= 0.0));
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId3, 900, 690048);
        SetNetworkUpdateRate(chrEntityId3, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisableCharacterHPBarDisplay(chrEntityId3);
        WaitFor(ElapsedSeconds(4));
        EnableCharacter(chrEntityId3);
        EnableCharacterAI(chrEntityId3);
        SetNetworkconnectedEventFlagID(eventFlagId3, ON);
        if (!IsMapVariation(2)) {
            DisplayBossHealthBar(Enabled, chrEntityId3, 0, nameId);
            LinkToBossHealthBar(Enabled, nameId, chrEntityId3);
        }
    }
L0:
    WaitFor(CharacterDead(chrEntityId3));
    SetNetworkconnectedEventFlagID(eventFlagId4, ON);
});

// fire knight trio spawn
$Event(90065143, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, bgmBossConvParamId, sfxId, chrEntityId, chrEntityId2, nameId, chrEntityId3, nameId2, chrEntityId4, nameId3) {
    if (EventFlag(eventFlagId3)) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisableCharacterHPBarDisplay(chrEntityId2);
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        SetNetworkUpdateRate(chrEntityId3, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisableCharacterHPBarDisplay(chrEntityId3);
        EnableCharacter(chrEntityId3);
        EnableCharacterAI(chrEntityId3);
        EndIf(IsMapVariation(2));
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
        DisplayBossHealthBar(Enabled, chrEntityId2, 1, nameId);
        DisplayBossHealthBar(Enabled, chrEntityId3, 1, nameId2);
        LinkToBossHealthBar(Disabled, nameId, 0);
        LinkToBossHealthBar(Disabled, nameId2, 0);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        LinkToBossHealthBar(Enabled, nameId2, chrEntityId3);
        if (0 != 0) {
            DisplayBossHealthBar(Enabled, chrEntityId3, 0, nameId2);
        }
        if (0 != 0) {
            DisplayBossHealthBar(Enabled, chrEntityId4, 2, nameId3);
        }
        EndEvent();
    }
L10:
    DisableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    WaitFor(EventFlag(eventFlagId));
    if (IsMapVariation(1)) {
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, 690050);
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId3, 900, 690050);
        WaitFor(ElapsedSeconds(2.5));
    }
    if (!IsMapVariation(2)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
    }
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, sfxId);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId2);
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId3, 900, sfxId);
    SetNetworkUpdateRate(chrEntityId3, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId3);
    WaitFor(ElapsedSeconds(4));
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    EnableCharacter(chrEntityId3);
    EnableCharacterAI(chrEntityId3);
    if (!IsMapVariation(2)) {
        LinkToBossHealthBar(Disabled, nameId, 0);
    }
    if (!IsMapVariation(2)) {
        DisplayBossHealthBar(Enabled, chrEntityId2, 1, nameId);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        DisplayBossHealthBar(Enabled, chrEntityId3, 1, nameId2);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId3);
        if (0 != 0) {
            DisplayBossHealthBar(Enabled, chrEntityId3, 0, nameId2);
        }
        if (0 != 0) {
            DisplayBossHealthBar(Enabled, chrEntityId4, 2, nameId3);
        }
    }
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

// gank squad spawn
$Event(90065144, Restart, function(chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, chrEntityId11, eventFlagId, eventFlagId2, eventFlagId3) {
    if (EventFlag(eventFlagId2)) {
        if (IsPlayerCount(1)) {
            DisableCharacter(chrEntityId3);
            DisableCharacterAI(chrEntityId3);
            ForceCharacterDeath(chrEntityId3, false);
        }
        DisableCharacter(chrEntityId4);
        DisableCharacterAI(chrEntityId4);
        ForceCharacterDeath(chrEntityId4, false);
        DisableCharacter(chrEntityId5);
        DisableCharacterAI(chrEntityId5);
        ForceCharacterDeath(chrEntityId5, false);
        DisableCharacter(chrEntityId6);
        DisableCharacterAI(chrEntityId6);
        ForceCharacterDeath(chrEntityId6, false);
        DisableCharacter(chrEntityId7);
        DisableCharacterAI(chrEntityId7);
        ForceCharacterDeath(chrEntityId7, false);
        EndEvent();
    }
    if (IsPlayerCount(1)) {
        DisableCharacter(chrEntityId3);
        DisableCharacterAI(chrEntityId3);
    }
    DisableCharacter(chrEntityId4);
    DisableCharacterAI(chrEntityId4);
    DisableCharacter(chrEntityId5);
    DisableCharacterAI(chrEntityId5);
    DisableCharacter(chrEntityId6);
    DisableCharacterAI(chrEntityId6);
    DisableCharacter(chrEntityId7);
    DisableCharacterAI(chrEntityId7);
    WaitFor(EventFlag(eventFlagId));
    if (IsPlayerCount(1)) {
        WaitFor(CompareHPRatio(chrEntityId11, LessOrEqual, 0, GreaterOrEqual, 1));
        SetCharacterBackreadState(chrEntityId3, false);
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId3, 900, 690048);
        SetNetworkUpdateRate(chrEntityId3, true, CharacterUpdateFrequency.AlwaysUpdate);
        WaitFor(ElapsedSeconds(4));
        EnableCharacter(chrEntityId3);
        EnableCharacterAI(chrEntityId3);
        
        WaitFor(CompareHPRatio(chrEntityId11, LessOrEqual, 0, GreaterOrEqual, 2));
        SetCharacterBackreadState(chrEntityId4, false);
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId4, 900, 690048);
        SetNetworkUpdateRate(chrEntityId4, true, CharacterUpdateFrequency.AlwaysUpdate);
        WaitFor(ElapsedSeconds(4));
        EnableCharacter(chrEntityId4);
        EnableCharacterAI(chrEntityId4);
        
        WaitFor(CompareHPRatio(chrEntityId11, LessOrEqual, 0, GreaterOrEqual, 3));
        SetCharacterBackreadState(chrEntityId5, false);
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId5, 900, 690048);
        SetNetworkUpdateRate(chrEntityId5, true, CharacterUpdateFrequency.AlwaysUpdate);
        WaitFor(ElapsedSeconds(4));
        EnableCharacter(chrEntityId5);
        EnableCharacterAI(chrEntityId5);
        
        WaitFor(CompareHPRatio(chrEntityId11, LessOrEqual, 0, GreaterOrEqual, 4));
        SetCharacterBackreadState(chrEntityId6, false);
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId6, 900, 690048);
        SetNetworkUpdateRate(chrEntityId6, true, CharacterUpdateFrequency.AlwaysUpdate);
        WaitFor(ElapsedSeconds(4));
        EnableCharacter(chrEntityId6);
        EnableCharacterAI(chrEntityId6);
        
        WaitFor(CompareHPRatio(chrEntityId11, LessOrEqual, 0, GreaterOrEqual, 5));
        SetCharacterBackreadState(chrEntityId7, false);
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId7, 900, 690048);
        SetNetworkUpdateRate(chrEntityId7, true, CharacterUpdateFrequency.AlwaysUpdate);
        WaitFor(ElapsedSeconds(4));
        EnableCharacter(chrEntityId7);
        EnableCharacterAI(chrEntityId7);
    } else {
        WaitFor(CompareHPRatio(chrEntityId11, LessOrEqual, 0, GreaterOrEqual, 1));
        SetCharacterBackreadState(chrEntityId4, false);
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId4, 900, 690048);
        SetNetworkUpdateRate(chrEntityId4, true, CharacterUpdateFrequency.AlwaysUpdate);
        WaitFor(ElapsedSeconds(4));
        EnableCharacter(chrEntityId4);
        EnableCharacterAI(chrEntityId4);
        
        WaitFor(CompareHPRatio(chrEntityId11, LessOrEqual, 0, GreaterOrEqual, 2));
        SetCharacterBackreadState(chrEntityId5, false);
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId5, 900, 690048);
        SetNetworkUpdateRate(chrEntityId5, true, CharacterUpdateFrequency.AlwaysUpdate);
        WaitFor(ElapsedSeconds(4));
        EnableCharacter(chrEntityId5);
        EnableCharacterAI(chrEntityId5);
        
        WaitFor(CompareHPRatio(chrEntityId11, LessOrEqual, 0, GreaterOrEqual, 3));
        SetCharacterBackreadState(chrEntityId6, false);
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId6, 900, 690048);
        SetNetworkUpdateRate(chrEntityId6, true, CharacterUpdateFrequency.AlwaysUpdate);
        WaitFor(ElapsedSeconds(4));
        EnableCharacter(chrEntityId6);
        EnableCharacterAI(chrEntityId6);
        
        WaitFor(CompareHPRatio(chrEntityId11, LessOrEqual, 0, GreaterOrEqual, 4));
        SetCharacterBackreadState(chrEntityId7, false);
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId7, 900, 690048);
        SetNetworkUpdateRate(chrEntityId7, true, CharacterUpdateFrequency.AlwaysUpdate);
        WaitFor(ElapsedSeconds(4));
        EnableCharacter(chrEntityId7);
        EnableCharacterAI(chrEntityId7);
    }
    
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
});

// gank squad spawn
$Event(90065145, Restart, function(chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, chrEntityId11, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    if (EventFlag(eventFlagId2)) {
        if (IsPlayerCount(1)) {
            DisableCharacter(chrEntityId3);
            DisableCharacterAI(chrEntityId3);
            ForceCharacterDeath(chrEntityId3, false);
        }
        DisableCharacter(chrEntityId4);
        DisableCharacterAI(chrEntityId4);
        ForceCharacterDeath(chrEntityId4, false);
        DisableCharacter(chrEntityId5);
        DisableCharacterAI(chrEntityId5);
        ForceCharacterDeath(chrEntityId5, false);
        DisableCharacter(chrEntityId6);
        DisableCharacterAI(chrEntityId6);
        ForceCharacterDeath(chrEntityId6, false);
        DisableCharacter(chrEntityId7);
        DisableCharacterAI(chrEntityId7);
        ForceCharacterDeath(chrEntityId7, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId4)) {
        if (IsPlayerCount(1)) {
            DisableCharacter(chrEntityId3);
            DisableCharacterAI(chrEntityId3);
            ForceCharacterDeath(chrEntityId3, false);
        }
        DisableCharacter(chrEntityId4);
        DisableCharacterAI(chrEntityId4);
        ForceCharacterDeath(chrEntityId4, false);
        DisableCharacter(chrEntityId5);
        DisableCharacterAI(chrEntityId5);
        ForceCharacterDeath(chrEntityId5, false);
        DisableCharacter(chrEntityId6);
        DisableCharacterAI(chrEntityId6);
        ForceCharacterDeath(chrEntityId6, false);
        DisableCharacter(chrEntityId7);
        DisableCharacterAI(chrEntityId7);
        ForceCharacterDeath(chrEntityId7, false);
        EndEvent();
    }
    WaitFixedTimeFrames(1);
    if (IsPlayerCount(1)) {
        DisableCharacter(chrEntityId3);
        DisableCharacterAI(chrEntityId3);
    }
    DisableCharacter(chrEntityId4);
    DisableCharacterAI(chrEntityId4);
    DisableCharacter(chrEntityId5);
    DisableCharacterAI(chrEntityId5);
    DisableCharacter(chrEntityId6);
    DisableCharacterAI(chrEntityId6);
    DisableCharacter(chrEntityId7);
    DisableCharacterAI(chrEntityId7);
    WaitFor(EventFlag(eventFlagId));
   if (IsPlayerCount(1)) {
        WaitFor(CompareHPRatio(chrEntityId11, LessOrEqual, 0, GreaterOrEqual, 1));
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId3, 900, 690048);
        SetNetworkUpdateRate(chrEntityId3, true, CharacterUpdateFrequency.AlwaysUpdate);
        WaitFor(ElapsedSeconds(4));
        EnableCharacter(chrEntityId3);
        EnableCharacterAI(chrEntityId3);
        
        WaitFor(CompareHPRatio(chrEntityId11, LessOrEqual, 0, GreaterOrEqual, 2));
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId4, 900, 690048);
        SetNetworkUpdateRate(chrEntityId4, true, CharacterUpdateFrequency.AlwaysUpdate);
        WaitFor(ElapsedSeconds(4));
        EnableCharacter(chrEntityId4);
        EnableCharacterAI(chrEntityId4);
        
        WaitFor(CompareHPRatio(chrEntityId11, LessOrEqual, 0, GreaterOrEqual, 3));
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId5, 900, 690048);
        SetNetworkUpdateRate(chrEntityId5, true, CharacterUpdateFrequency.AlwaysUpdate);
        WaitFor(ElapsedSeconds(4));
        EnableCharacter(chrEntityId5);
        EnableCharacterAI(chrEntityId5);
        
        WaitFor(CompareHPRatio(chrEntityId11, LessOrEqual, 0, GreaterOrEqual, 4));
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId6, 900, 690048);
        SetNetworkUpdateRate(chrEntityId6, true, CharacterUpdateFrequency.AlwaysUpdate);
        WaitFor(ElapsedSeconds(4));
        EnableCharacter(chrEntityId6);
        EnableCharacterAI(chrEntityId6);
        
        WaitFor(CompareHPRatio(chrEntityId11, LessOrEqual, 0, GreaterOrEqual, 5));
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId7, 900, 690048);
        SetNetworkUpdateRate(chrEntityId7, true, CharacterUpdateFrequency.AlwaysUpdate);
        WaitFor(ElapsedSeconds(4));
        EnableCharacter(chrEntityId7);
        EnableCharacterAI(chrEntityId7);
    } else {
        WaitFor(CompareHPRatio(chrEntityId11, LessOrEqual, 0, GreaterOrEqual, 1));
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId4, 900, 690048);
        SetNetworkUpdateRate(chrEntityId4, true, CharacterUpdateFrequency.AlwaysUpdate);
        WaitFor(ElapsedSeconds(4));
        EnableCharacter(chrEntityId4);
        EnableCharacterAI(chrEntityId4);
        
        WaitFor(CompareHPRatio(chrEntityId11, LessOrEqual, 0, GreaterOrEqual, 2));
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId5, 900, 690048);
        SetNetworkUpdateRate(chrEntityId5, true, CharacterUpdateFrequency.AlwaysUpdate);
        WaitFor(ElapsedSeconds(4));
        EnableCharacter(chrEntityId5);
        EnableCharacterAI(chrEntityId5);
        
        WaitFor(CompareHPRatio(chrEntityId11, LessOrEqual, 0, GreaterOrEqual, 3));
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId6, 900, 690048);
        SetNetworkUpdateRate(chrEntityId6, true, CharacterUpdateFrequency.AlwaysUpdate);
        WaitFor(ElapsedSeconds(4));
        EnableCharacter(chrEntityId6);
        EnableCharacterAI(chrEntityId6);
        
        WaitFor(CompareHPRatio(chrEntityId11, LessOrEqual, 0, GreaterOrEqual, 4));
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId7, 900, 690048);
        SetNetworkUpdateRate(chrEntityId7, true, CharacterUpdateFrequency.AlwaysUpdate);
        WaitFor(ElapsedSeconds(4));
        EnableCharacter(chrEntityId7);
        EnableCharacterAI(chrEntityId7);
    }
    
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
    WaitFor(CharacterDead(chrEntityId7));
    SetNetworkconnectedEventFlagID(eventFlagId4, ON);
});


$Event(90065201, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, bgmBossConvParamId, sfxId, chrEntityId, chrEntityId2, nameId, chrEntityId3, nameId2) {
    if (EventFlag(eventFlagId3)) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisableCharacterHPBarDisplay(chrEntityId);
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        ChangeCharacterHitmask(chrEntityId2, 4, ON);
        ChangeCharacterHitmask(chrEntityId2, 5, ON);
        ChangeCharacterHitmask(chrEntityId3, 4, ON);
        ChangeCharacterHitmask(chrEntityId3, 5, ON);
        EndIf(IsMapVariation(2));
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
        LinkToBossHealthBar(Disabled, nameId, 0);
        if (!CharacterHasSpEffect(chrEntityId, 60870)) {
            DisplayBossHealthBar(Enabled, chrEntityId3, 1, nameId2);
            DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
        }
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        LinkToBossHealthBar(Enabled, nameId2, chrEntityId3);
        EndEvent();
    }
L1:
    DisableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    WaitFor(EventFlag(eventFlagId));
    if (IsMapVariation(1)) {
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, 690050);
        WaitFor(ElapsedSeconds(2.5));
    }
    if (!IsMapVariation(2)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
    }
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, sfxId);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    WaitFor(ElapsedSeconds(3));
    ForceAnimationPlayback(chrEntityId2, 20026, false, false, false);
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    ChangeCharacterHitmask(chrEntityId2, 4, ON);
    ChangeCharacterHitmask(chrEntityId2, 5, ON);
    WaitFor(ElapsedSeconds(1.5));
    ForceAnimationPlayback(chrEntityId3, 20026, false, false, false);
    EnableCharacter(chrEntityId3);
    EnableCharacterAI(chrEntityId3);
    ChangeCharacterHitmask(chrEntityId3, 4, ON);
    ChangeCharacterHitmask(chrEntityId3, 5, ON);
    if (!IsMapVariation(2)) {
        LinkToBossHealthBar(Disabled, nameId2, 0);
    }
    if (!IsMapVariation(2)) {
        DisplayBossHealthBar(Enabled, chrEntityId3, 1, nameId2);
        DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        LinkToBossHealthBar(Enabled, nameId2, chrEntityId3);
    }
L0:
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90065202, Restart, function(eventFlagId, eventFlagId2, bgmBossConvParamId, chrEntityId, chrEntityId2, nameId, chrEntityId3, nameId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    SetSpEffect(10000, 509);
    SetSpEffect(10001, 509);
    SetSpEffect(10002, 509);
    SetSpEffect(10003, 509);
    SetSpEffect(10004, 509);
    SetSpEffect(10005, 509);
    SetSpEffect(10006, 509);
    SetSpEffect(10007, 509);
    SetSpEffect(10008, 509);
    SetSpEffect(10009, 509);
    SetSpEffect(10010, 509);
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 60870, GreaterOrEqual, 1)
            || CharacterRatioDead(chrEntityId));
    DisplayBossHealthBar(Disabled, chrEntityId3, 1, nameId2);
    DisplayBossHealthBar(Disabled, chrEntityId2, 0, nameId);
    WaitFor(CharacterRatioDead(chrEntityId));
    WaitFixedTimeSeconds(4);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    if (BossBGMPlaying(bgmBossConvParamId)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
    }
});

$Event(90065205, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId3));
    WaitFor(
        PlayerIsInOwnWorld()
            && (CharacterHasSpEffect(chrEntityId, 60864)
                || EventFlag(eventFlagId)
                || EventFlag(eventFlagId2)));
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    }
});

$Event(90065206, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterHPValue(chrEntityId) <= 1 || CharacterHPValue(chrEntityId2) <= 1);
    if (CharacterHPValue(chrEntityId2) <= 1) {
        SetSpEffect(chrEntityId, 60864);
        EndEvent();
    }
    SetSpEffect(chrEntityId2, 60864);
});

$Event(90065207, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    DisableNetworkSync();
    WaitFor(EventFlag(eventFlagId2));
    GotoIf(L20, CharacterDead(chrEntityId) && CharacterDead(chrEntityId2));
    GotoIf(L5, CharacterDead(chrEntityId2) && CharacterHasSpEffect(chrEntityId2, 60852));
    GotoIf(L10, CharacterDead(chrEntityId) && CharacterHasSpEffect(chrEntityId, 60852));
    GotoIf(L1, 
        EntityInRadiusOfEntity(20000, chrEntityId, 8, 1)
            || EntityInRadiusOfEntity(20000, chrEntityId2, 8, 1));
    GotoIf(L2, 
        !EntityInRadiusOfEntity(20000, chrEntityId, 8, 1)
            && !EntityInRadiusOfEntity(20000, chrEntityId2, 8, 1));
L1:
    ChangeCamera(7930);
    WaitFixedTimeSeconds(0.5);
    WaitFor(
        (!EntityInRadiusOfEntity(20000, chrEntityId, 8, 1)
            && !EntityInRadiusOfEntity(20000, chrEntityId2, 8, 1))
            || CharacterHasSpEffect(chrEntityId, 60852)
            || CharacterHasSpEffect(chrEntityId2, 60852));
    Goto(L0);
L2:
    ChangeCamera(7931);
    WaitFixedTimeSeconds(0.5);
    WaitFor(
        EntityInRadiusOfEntity(20000, chrEntityId, 8, 1)
            || EntityInRadiusOfEntity(20000, chrEntityId2, 8, 1)
            || CharacterHasSpEffect(chrEntityId, 60852)
            || CharacterHasSpEffect(chrEntityId2, 60852));
    Goto(L0);
L5:
    GotoIf(L6, EntityInRadiusOfEntity(20000, chrEntityId, 8, 1));
    GotoIf(L7, !EntityInRadiusOfEntity(20000, chrEntityId, 8, 1));
L6:
    ChangeCamera(7930);
    WaitFixedTimeSeconds(0.5);
    WaitFor(CharacterDead(chrEntityId) || !EntityInRadiusOfEntity(20000, chrEntityId, 8, 1));
    Goto(L0);
L7:
    ChangeCamera(7931);
    WaitFixedTimeSeconds(0.5);
    WaitFor(CharacterDead(chrEntityId) || EntityInRadiusOfEntity(20000, chrEntityId, 8, 1));
    Goto(L0);
L10:
    GotoIf(L11, EntityInRadiusOfEntity(20000, chrEntityId2, 8, 1));
    GotoIf(L12, !EntityInRadiusOfEntity(20000, chrEntityId2, 8, 1));
L11:
    ChangeCamera(7930);
    WaitFixedTimeSeconds(0.5);
    WaitFor(CharacterDead(chrEntityId2) || !EntityInRadiusOfEntity(20000, chrEntityId2, 8, 1));
    Goto(L0);
L12:
    ChangeCamera(7931);
    WaitFixedTimeSeconds(0.5);
    WaitFor(CharacterDead(chrEntityId2) || EntityInRadiusOfEntity(20000, chrEntityId2, 8, 1));
    Goto(L0);
L0:
    RestartEvent();
L20:
    WaitFixedTimeSeconds(3);
    ChangeCamera(-1);
    WaitFixedTimeSeconds(0.5);
    EndEvent();
});

$Event(90065211, Default, function(eventFlagId, eventFlagId2, eventFlagId3, chrEntityId, entityId, animationId, nameId, eventFlagId4, eventFlagId5, value) {
    if (EventFlag(eventFlagId3)) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        WaitFor(EventFlag(eventFlagId4) || EventFlag(eventFlagId5) || ElapsedSeconds(20));
        if ((EventFlag(eventFlagId4) && !EventFlag(eventFlagId5))
            || (((EventFlag(eventFlagId4) && EventFlag(eventFlagId5))
                || (!EventFlag(eventFlagId4) && !EventFlag(eventFlagId5)))
                && value == 0)) {
            DisableCharacter(chrEntityId);
            DisableCharacterAI(chrEntityId);
            EndEvent();
        }
    }
L10:
    if (EventFlag(eventFlagId2)) {
        SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisableCharacterHPBarDisplay(chrEntityId);
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        EndIf(IsMapVariation(2));
        SetBossBGM(793000, BossBGMState.Start);
        LinkToBossHealthBar(Disabled, nameId, 0);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId);
        if (entityId != 0) {
            LinkToBossHealthBar(Enabled, nameId, entityId);
        }
        EndEvent();
    }
L10:
    DisableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    WaitFor(EventFlag(eventFlagId));
    if ((EventFlag(eventFlagId4) && !EventFlag(eventFlagId5))
        || (((EventFlag(eventFlagId4) && EventFlag(eventFlagId5))
            || (!EventFlag(eventFlagId4) && !EventFlag(eventFlagId5)))
            && value == 0)) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    WaitFor(EventFlag(eventFlagId));
    if (IsMapVariation(1)) {
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId, 900, 690050);
        WaitFor(ElapsedSeconds(2.5));
    }
    if (!IsMapVariation(2)) {
        SetBossBGM(793000, BossBGMState.Start);
    }
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    WaitFor(ElapsedSeconds(3));
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    EnableCharacter(chrEntityId);
    EnableCharacterAI(chrEntityId);
    if (!IsMapVariation(2)) {
        LinkToBossHealthBar(Disabled, nameId, 0);
    }
    if (!IsMapVariation(2)) {
        WaitFor(CharacterHasSpEffect(chrEntityId, 60875) || ElapsedSeconds(10));
        DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId);
        if (entityId != 0) {
            LinkToBossHealthBar(Enabled, nameId, entityId);
        }
    }
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90065215, Restart, function(chrEntityId, chrEntityId2, generatorEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    DisableNetworkSync();
    if (EventFlag(eventFlagId3)) {
        DisableCharacter(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, true);
        EndEvent();
    }
    if (CharacterDead(chrEntityId)) {
        DisableCharacter(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, true);
        EndEvent();
    }
    EndIf(CharacterHasSpEffect(chrEntityId, 60862));
    WaitFor(EventFlag(eventFlagId2));
    InvokeEnemyGenerator(generatorEntityId);
    WaitFor(!CharacterDead(chrEntityId2));
    WaitFixedTimeFrames(1);
    DisableCharacter(chrEntityId2);
    DisableCharacterGravity(chrEntityId2);
    WaitFixedTimeFrames(1);
    DisableCharacter(chrEntityId2);
    DisableCharacterGravity(chrEntityId2);
    WaitFixedTimeFrames(1);
    DisableCharacter(chrEntityId2);
    DisableCharacterGravity(chrEntityId2);
    WaitFixedTimeFrames(1);
    DisableCharacter(chrEntityId2);
    DisableCharacterGravity(chrEntityId2);
    WaitFixedTimeFrames(1);
    DisableCharacter(chrEntityId2);
    DisableCharacterGravity(chrEntityId2);
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(eventFlagId, OFF);
    }
    WaitFixedTimeFrames(25);
    DisableCharacter(chrEntityId2);
    DisableCharacterGravity(chrEntityId2);
    WaitFixedTimeSeconds(3);
    DisableCharacter(chrEntityId2);
    DisableCharacterGravity(chrEntityId2);
    WaitFor(!CharacterDead(chrEntityId) && CharacterDead(chrEntityId2));
    WaitFor(ElapsedSeconds(5));
    RestartEvent();
});

$Event(90065216, Restart, function(chrEntityId, chrEntityId2, eventFlagId, spEffectId, dummypolyId, value, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    EndIf(CharacterHasSpEffect(chrEntityId, 60862));
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId) && !EventFlag(eventFlagId));
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    EnableCharacter(chrEntityId2);
    DisableCharacterGravity(chrEntityId2);
    WaitFixedTimeFrames(1);
    IssueShortWarpRequest(chrEntityId2, TargetEntityType.Character, chrEntityId, dummypolyId);
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
    }
    RequestCharacterAIReplan(chrEntityId2);
    if (Signed(1) == value) {
        SetCharacterEventTarget(chrEntityId2, chrEntityId);
    }
    RestartEvent();
});

$Event(90065217, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId3));
    DisableNetworkSync();
    WaitFor(EventFlag(eventFlagId2));
    GotoIf(L20, EventFlag(eventFlagId));
    GotoIf(L6, EntityInRadiusOfEntity(20000, chrEntityId, 8, 1));
    GotoIf(L7, !EntityInRadiusOfEntity(20000, chrEntityId, 8, 1));
L6:
    ChangeCamera(7930);
    WaitFixedTimeSeconds(0.5);
    WaitFor(CharacterDead(chrEntityId) || !EntityInRadiusOfEntity(20000, chrEntityId, 8, 1));
    Goto(L0);
L7:
    ChangeCamera(7931);
    WaitFixedTimeSeconds(0.5);
    WaitFor(CharacterDead(chrEntityId) || EntityInRadiusOfEntity(20000, chrEntityId, 8, 1));
    Goto(L0);
L0:
    RestartEvent();
L20:
    WaitFixedTimeSeconds(3);
    ChangeCamera(-1);
    WaitFixedTimeSeconds(0.5);
    EndEvent();
});

$Event(90065220, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, bgmBossConvParamId, sfxId, chrEntityId, nameId, nameId2, eventFlagId4) {
    if (EventFlag(eventFlagId3)) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndIf(EventFlag(eventFlagId4));
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisableCharacterHPBarDisplay(chrEntityId);
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
        LinkToBossHealthBar(Disabled, nameId2, 0);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId);
    } else {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        WaitFor(EventFlag(eventFlagId));
        if (IsMapVariation(1)) {
            SpawnOneshotSFX(TargetEntityType.Character, chrEntityId, 900, 690050);
            WaitFor(ElapsedSeconds(2.5));
        }
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId, 900, sfxId);
        SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisableCharacterHPBarDisplay(chrEntityId);
        WaitFor(ElapsedSeconds(4));
        ForceAnimationPlayback(chrEntityId, 20026, false, false, false);
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
        LinkToBossHealthBar(Disabled, nameId2, 0);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId);
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    }
L0:
    WaitFor(CharacterDead(chrEntityId));
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
});

$Event(90065221, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, sfxId, chrEntityId, chrEntityId2, nameId, chrEntityId3, nameId2, chrEntityId4, nameId3, nameId4) {
    if (EventFlag(eventFlagId3)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        DisableCharacter(chrEntityId3);
        DisableCharacterAI(chrEntityId3);
        ForceCharacterDeath(chrEntityId3, false);
        DisableCharacter(chrEntityId4);
        DisableCharacterAI(chrEntityId4);
        ForceCharacterDeath(chrEntityId4, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
        EnableCharacter(chrEntityId3);
        EnableCharacterAI(chrEntityId3);
        DisplayBossHealthBar(Enabled, chrEntityId3, 1, nameId2);
        EnableCharacter(chrEntityId4);
        EnableCharacterAI(chrEntityId4);
        DisplayBossHealthBar(Enabled, chrEntityId4, 2, nameId3);
        LinkToBossHealthBar(Disabled, nameId4, 0);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        LinkToBossHealthBar(Enabled, nameId2, chrEntityId3);
        LinkToBossHealthBar(Enabled, nameId3, chrEntityId4);
        EndEvent();
    }
    DisableCharacter(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    DisableCharacter(chrEntityId3);
    DisableCharacterAI(chrEntityId3);
    DisableCharacter(chrEntityId4);
    DisableCharacterAI(chrEntityId4);
    WaitFor(EventFlag(eventFlagId));
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, sfxId);
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId3, 900, sfxId);
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId4, 900, sfxId);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId3, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId4, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId2);
    DisableCharacterHPBarDisplay(chrEntityId3);
    DisableCharacterHPBarDisplay(chrEntityId4);
    WaitFor(ElapsedSeconds(4));
    DisplayBossHealthBar(Disabled, chrEntityId, 0, 0);
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    ForceRatioAnimationPlayback(chrEntityId2, 20026, false, false, false);
    DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
    EnableCharacter(chrEntityId3);
    EnableCharacterAI(chrEntityId3);
    ForceRatioAnimationPlayback(chrEntityId3, 20026, false, false, false);
    DisplayBossHealthBar(Enabled, chrEntityId3, 1, nameId2);
    EnableCharacter(chrEntityId4);
    EnableCharacterAI(chrEntityId4);
    ForceRatioAnimationPlayback(chrEntityId4, 20026, false, false, false);
    DisplayBossHealthBar(Enabled, chrEntityId4, 2, nameId3);
    LinkToBossHealthBar(Disabled, nameId4, 0);
    LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
    LinkToBossHealthBar(Enabled, nameId2, chrEntityId3);
    LinkToBossHealthBar(Enabled, nameId3, chrEntityId4);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90065222, Restart, function(eventFlagId, eventFlagId2, bgmBossConvParamId, chrEntityId, chrEntityId2, nameId, chrEntityId3, nameId2, chrEntityId4, nameId3) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterRatioHPRatio(chrEntityId) <= 0);
    SetSpEffect(10000, 509);
    SetSpEffect(10001, 509);
    SetSpEffect(10002, 509);
    SetSpEffect(10003, 509);
    SetSpEffect(10004, 509);
    SetSpEffect(10005, 509);
    SetSpEffect(10006, 509);
    SetSpEffect(10007, 509);
    SetSpEffect(10008, 509);
    SetSpEffect(10009, 509);
    SetSpEffect(10010, 509);
    WaitFor(CharacterRatioDead(chrEntityId));
    WaitFixedTimeSeconds(4);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    if (BossBGMPlaying(bgmBossConvParamId)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
    }
    DisplayBossHealthBar(Disabled, chrEntityId4, 2, nameId3);
    DisplayBossHealthBar(Disabled, chrEntityId3, 1, nameId2);
    DisplayBossHealthBar(Disabled, chrEntityId2, 0, nameId);
    EndEvent();
});

$Event(90065235, Restart, function(chrEntityId, spEffectId, spEffectId2, spEffectId3, value) {
    DisableNetworkSync();
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId) || CharacterDead(chrEntityId));
    EndIf(CharacterDead(chrEntityId) && value == 0);
    SetSpEffect(20000, spEffectId2);
    if (Signed(spEffectId3) != 0) {
        SetSpEffect(20000, spEffectId3);
    }
    WaitFor(!CharacterHasSpEffect(chrEntityId, spEffectId));
    RestartEvent();
});

$Event(90065236, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, eventFlagId) {
    DisableNetworkSync();
    if (CharacterDead(chrEntityId)) {
        ForceCharacterDeath(chrEntityId2, false);
        ForceCharacterDeath(chrEntityId3, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId)) {
        SetCharacterBackreadState(chrEntityId2, false);
        SetCharacterBackreadState(chrEntityId3, false);
        GotoIf(L0, !CharacterHasSpEffect(chrEntityId, 62110));
        GotoIf(L1, CharacterHasSpEffect(chrEntityId, 62110));
    }
    WaitFor(EventFlag(eventFlagId));
    SetCharacterBackreadState(chrEntityId2, false);
    WaitFor(CharacterRatioBackreadStatus(chrEntityId2));
    ForceAnimationPlayback(chrEntityId2, 30000, false, false, false);
    SetCharacterBackreadState(chrEntityId3, false);
    WaitFor(CharacterRatioBackreadStatus(chrEntityId3));
    ForceAnimationPlayback(chrEntityId3, 30000, false, false, false);
L0:
    WaitFor(CharacterHasSpEffect(chrEntityId, 62110) || CharacterDead(chrEntityId));
    if (CharacterDead(chrEntityId)) {
        ForceCharacterDeath(chrEntityId2, false);
        ForceCharacterDeath(chrEntityId3, false);
        EndEvent();
    }
    ForceAnimationPlayback(chrEntityId2, 20000, false, false, false);
    WaitFor(ElapsedSeconds(1.5));
    ForceAnimationPlayback(chrEntityId3, 20000, false, false, false);
L1:
    WaitFor(!CharacterHasSpEffect(chrEntityId, 62110) || CharacterDead(chrEntityId));
    if (CharacterDead(chrEntityId)) {
        ForceCharacterDeath(chrEntityId2, false);
        ForceCharacterDeath(chrEntityId3, false);
        EndEvent();
    }
    RestartEvent();
});

$Event(90065245, Restart, function(chrEntityId, spEffectId, weather, spEffectId2, gparamSubId, gparamSubId2, eventFlagId, eventFlagId2, eventFlagId3) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId3));
    if (EventFlag(eventFlagId)) {
        ClearSpEffect(20000, 60260);
        ClearSpEffect(20000, 60261);
        ClearSpEffect(20000, 60262);
        ChangeWeather(weather, -1, true);
        if (!EventFlag(7604)) {
            ActivateGparamOverride(gparamSubId, 0);
        }
        if (EventFlag(7604)) {
            ActivateGparamOverride(gparamSubId2, 0);
        }
        SetSpEffect(20000, spEffectId2);
    }
    WaitFor(EventFlag(eventFlagId2));
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId) || EventFlag(eventFlagId3));
    EndIf(EventFlag(eventFlagId3));
    ClearSpEffect(20000, 60260);
    ClearSpEffect(20000, 60261);
    ClearSpEffect(20000, 60262);
    ChangeWeather(weather, -1, false);
    if (!EventFlag(7604)) {
        ActivateGparamOverride(gparamSubId, 10);
    }
    if (EventFlag(7604)) {
        ActivateGparamOverride(gparamSubId2, 10);
    }
    SetSpEffect(20000, spEffectId2);
    WaitFor(ElapsedSeconds(1));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
    }
L0:
    WaitFor(!WeatherActive(weather, 0, 0));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(eventFlagId, OFF);
    }
    WaitFor(ElapsedSeconds(1));
    RestartEvent();
});

$Event(90065246, Restart, function(chrEntityId, spEffectId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    DisableNetworkSync();
    EndIf(
        EventFlag(eventFlagId5)
            && !EventFlag(eventFlagId)
            && !EventFlag(eventFlagId2)
            && !EventFlag(eventFlagId3));
    if (EventFlag(eventFlagId5)) {
        SetNetworkconnectedEventFlagID(eventFlagId, OFF);
        SetNetworkconnectedEventFlagID(eventFlagId2, OFF);
        SetNetworkconnectedEventFlagID(eventFlagId3, OFF);
        ChangeWeather(Weather.Type00, -1, true);
        DeactivateGparamOverride(10);
        ClearSpEffect(20000, 60260);
        ClearSpEffect(20000, 60261);
        ClearSpEffect(20000, 60262);
        EndEvent();
    }
    WaitFor(EventFlag(eventFlagId4));
    if (Signed(spEffectId) != 0) {
        spFlag |= CharacterHasSpEffect(chrEntityId, spEffectId);
    }
    spFlag |= EventFlag(eventFlagId5);
    WaitFor(spFlag);
    ChangeWeather(Weather.Type00, -1, false);
    DeactivateGparamOverride(10);
    ClearSpEffect(20000, 60260);
    ClearSpEffect(20000, 60261);
    ClearSpEffect(20000, 60262);
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(eventFlagId, OFF);
        SetNetworkconnectedEventFlagID(eventFlagId2, OFF);
        SetNetworkconnectedEventFlagID(eventFlagId3, OFF);
    }
    EndIf(EventFlag(eventFlagId5));
    WaitFor(ElapsedSeconds(1));
    WaitFor(!CharacterHasSpEffect(chrEntityId, spEffectId));
    RestartEvent();
});

$Event(90065247, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2) {
    if (EventFlag(eventFlagId2)) {
        if (CharacterHasSpEffect(chrEntityId2, 60220)) {
            SetSpEffect(chrEntityId2, 60246);
        }
        EndEvent();
    }
    WaitFor(EventFlag(eventFlagId));
    WaitFor(
        (CharacterHasSpEffect(chrEntityId2, 60220) && CharacterHasSpEffect(chrEntityId2, 501000))
            || EventFlag(eventFlagId2));
    if (CharacterHasSpEffect(chrEntityId2, 60220)) {
        SetSpEffect(chrEntityId2, 60246);
    }
    EndIf(EventFlag(eventFlagId2));
    SetSpEffect(chrEntityId, 60221);
    WaitFor(ElapsedSeconds(1));
    RestartEvent();
});

$Event(90065250, Restart, function(eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    WaitFor(HasMultiplayerState(MultiplayerState.Host));
    EndIf(AnyBatchEventFlags(eventFlagId, eventFlagId2));
    RandomlySetNetworkconnectedEventFlagInRange(eventFlagId, eventFlagId2, ON);
});

$Event(90065251, Restart, function(eventFlagId, chrEntityId, eventFlagId2, chrEntityId2, eventFlagId3, eventFlagId4, eventFlagId5, entityId) {
    EndIf(EventFlag(eventFlagId5));
    if (EventFlag(eventFlagId2)) {
        SetCharacterBackreadState(chrEntityId2, false);
    } else {
        WaitFor(
            (EventFlag(eventFlagId) && !CharacterDead(chrEntityId, LessOrEqual, 4))
                || EventFlag(eventFlagId5));
        EndIf(EventFlag(eventFlagId4));
        EndIf(EventFlag(eventFlagId5));
        SetCharacterBackreadState(chrEntityId2, false);
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        WaitFor(
            (CharacterRatioDead(chrEntityId, GreaterOrEqual, 1) && ElapsedSeconds(5))
                || EventFlag(eventFlagId5));
        if (EventFlag(eventFlagId5)) {
            SetCharacterBackreadState(chrEntityId2, true);
            EndEvent();
        }
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
        PlaySE(entityId, SoundType.CharacterMotion, 999997310);
        WaitFor(ElapsedSeconds(2));
        ForceAnimationPlayback(chrEntityId2, 20026, false, false, false);
    }
L0:
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    if (EventFlag(eventFlagId3)) {
        SetNetworkconnectedEventFlagID(eventFlagId5, ON);
    }
});

$Event(90065252, Restart, function(chrEntityId, value, areaEntityId, eventFlagId, eventFlagId2) {
    if (EventFlag(7510)) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        EndEvent();
    }
    if (EventFlag(7506)) {
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        WaitFor(ElapsedSeconds(120));
        SetEventFlagID(eventFlagId, ON);
        EndEvent();
    }
    EndIf(EventFlag(7506));
    if (value == 1) {
        flag |= !EventFlag(7505);
    }
    if (value == 2) {
        flag |= EventFlag(7505);
    }
    if (flag) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
    } else {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        if (value == 1) {
            flagTime &= !EventFlag(7505);
        }
        if (value == 2) {
            flagTime &= EventFlag(7505);
        }
        flagTime &= PlayAreaCurrentTimeInRange(0, 0, 0, 22, 59, 59);
        WaitFor(flagTime);
        WaitFor(ElapsedSeconds(30));
    }
L0:
    if (value == 1) {
        flagTimeArea &= !EventFlag(7505);
    }
    if (value == 2) {
        flagTimeArea &= EventFlag(7505);
    }
    flagTimeArea &= PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59)
        && (InArea(20000, areaEntityId) || PlayAreaCurrentTimeInRange(23, 59, 0, 23, 59, 59));
    WaitFor(flagTimeArea);
    if (value == 1) {
        SetNetworkconnectedEventFlagID(7501, ON);
    }
    if (value == 2) {
        SetNetworkconnectedEventFlagID(7506, ON);
    }
    PlaySE(areaEntityId, SoundType.CharacterMotion, 999997310);
    WaitFor(ElapsedSeconds(2));
    ForceAnimationPlayback(chrEntityId, 20026, false, false, false);
    EnableCharacter(chrEntityId);
    EnableCharacterAI(chrEntityId);
    SetEventFlagID(52120300, ON);
    WaitFor(ElapsedSeconds(120));
    SetEventFlagID(eventFlagId, ON);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90065253, Restart, function(eventFlagId, value, eventFlagId2, eventFlagId3) {
    if (value != 1) {
        if (value != 2) {
            EndEvent();
        }
    }
    EndIf(EventFlag(eventFlagId3));
    if (value == 1) {
        flagTime &= EventFlag(7501);
    }
    if (value == 2) {
        flagTime &= EventFlag(7506);
    }
    flagTime &= PlayAreaCurrentTimeInRange(23, 59, 0, 23, 59, 59)
        && (EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    WaitFor(flagTime);
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
    if (value == 1) {
        SetNetworkconnectedEventFlagID(7504, ON);
    }
    if (value == 2) {
        SetNetworkconnectedEventFlagID(7509, ON);
    }
});

$Event(90065254, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, bgmBossConvParamId, sfxId, chrEntityId, chrEntityId2, nameId) {
    if (EventFlag(eventFlagId3)) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisableCharacterHPBarDisplay(chrEntityId);
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        EndIf(IsMapVariation(2));
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
        LinkToBossHealthBar(Disabled, nameId, 0);
        DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        EndEvent();
    }
L1:
    DisableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    WaitFor(EventFlag(eventFlagId));
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, sfxId);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20026, false, false, false);
    EnableCharacter(chrEntityId);
    EnableCharacterAI(chrEntityId);
    WaitFor(ElapsedSeconds(10));
    if (!IsMapVariation(2)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
    }
    WaitFor(ElapsedSeconds(4));
    if (!IsMapVariation(2)) {
        LinkToBossHealthBar(Disabled, nameId, 0);
    }
    if (!IsMapVariation(2)) {
        DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        Goto(L0);
    }
L0:
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90065255, Restart, function(chrEntityId, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    if (CharacterHasSpEffect(chrEntityId, 60754)) {
        if (!EventFlag(7604)) {
            ActivateGparamOverride(14, 0);
        }
        if (EventFlag(7604)) {
            ActivateGparamOverride(41, 0);
        }
    } else {
        WaitFor(EventFlag(eventFlagId));
        WaitFor(CharacterHasSpEffect(chrEntityId, 60754) || CharacterHPValue(chrEntityId) <= 0);
        if (CharacterHPValue(chrEntityId) > 0) {
            if (!EventFlag(7604)) {
                ActivateGparamOverride(14, 8);
            }
            if (EventFlag(7604)) {
                ActivateGparamOverride(41, 8);
            }
        }
    }
L0:
    WaitFor(CharacterHPValue(chrEntityId) <= 0);
    WaitFor(CharacterHasSpEffect(chrEntityId, 60762) || CharacterDead(chrEntityId));
    if (!EventFlag(7604)) {
        ActivateGparamOverride(32, 5);
    }
    if (EventFlag(7604)) {
        ActivateGparamOverride(42, 5);
    }
    WaitFor(!CharacterHasSpEffect(chrEntityId, 60762) || CharacterDead(chrEntityId));
    WaitFor(!CharacterHasSpEffect(chrEntityId, 60762) || ElapsedSeconds(10));
    SetSpEffect(20000, 60768);
    DeactivateGparamOverride(5);
});

$Event(90065900, Restart, function(entityId, value, assetEntityId, chrEntityId, textEffectParamId, bgmBossConvParamId, logObjectId, entityId2) {
    if (IsMapVariation(0)) {
        if (value == 1) {
            EndIf(EventFlag(7502));
        }
        if (value == 2) {
            EndIf(EventFlag(7507));
        }
    }
    if (IsMapVariation(1)) {
        EndIf(EventFlag(8020));
    }
    WaitFor(EventFlag(entityId));
    PlaySE(entityId, SoundType.SFX, 888880000);
    LinkToBossHealthBar(Disabled, -1, 0);
    DisplayTextEffectId(textEffectParamId);
    IncrementTeamBossesKilled(1);
    ChangeCamera(-1);
    RecordUserDispLog(10111, entityId2, LogObjectType.NpcName, logObjectId);
    if (BossBGMPlaying(bgmBossConvParamId)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
    }
    if (assetEntityId != 0) {
        EnableAsset(assetEntityId);
    }
    if (chrEntityId != 0) {
        EnableCharacter(chrEntityId);
    }
    if (IsMapVariation(0)) {
        GotoIf(S0, value != 1);
        SetNetworkconnectedEventFlagID(7502, ON);
        Goto(L0);
S0:
        GotoIf(S1, value != 2);
        SetNetworkconnectedEventFlagID(7507, ON);
    } else {
S1:
        if (IsMapVariation(1)) {
            SetNetworkconnectedEventFlagID(8020, ON);
            Goto(L0);
        }
    }
L0:
    SetSpEffect(20000, 102121);
    WaitFixedTimeSeconds(0.1);
    BonfirelikeRecovery();
});

$Event(90065901, Default, function(hitEntityId) {
    DisableHit(hitEntityId);
    WaitFor(EventFlag(7515));
    EnableHit(hitEntityId);
    WaitFor(!EventFlag(7515));
    DisableHit(hitEntityId);
    RestartEvent();
});

$Event(90065910, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, bgmBossConvParamId, sfxId, chrEntityId, chrEntityId2, nameId, chrEntityId3, nameId2, chrEntityId4, nameId3) {
    if (EventFlag(eventFlagId3)) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisableCharacterHPBarDisplay(chrEntityId);
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        EndIf(IsMapVariation(2));
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
        LinkToBossHealthBar(Disabled, nameId, 0);
        if (chrEntityId3 == 0) {
            DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
            LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
            EndEvent();
        }
        if (chrEntityId4 == 0) {
            DisplayBossHealthBar(Enabled, chrEntityId2, 1, nameId);
            DisplayBossHealthBar(Enabled, chrEntityId3, 0, nameId2);
            LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
            LinkToBossHealthBar(Enabled, nameId2, chrEntityId3);
            EndEvent();
        }
        DisplayBossHealthBar(Enabled, chrEntityId2, 2, nameId);
        DisplayBossHealthBar(Enabled, chrEntityId3, 1, nameId2);
        DisplayBossHealthBar(Enabled, chrEntityId4, 0, nameId3);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        LinkToBossHealthBar(Enabled, nameId2, chrEntityId3);
        LinkToBossHealthBar(Enabled, nameId3, chrEntityId4);
        EndEvent();
    }
L1:
    DisableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    WaitFor(EventFlag(eventFlagId));
    if (IsMapVariation(1)) {
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, 690050);
        WaitFor(ElapsedSeconds(2.5));
    }
    if (!IsMapVariation(2)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
    }
    // Fix for missing Manus dummypolyid
    if (chrEntityId2 == 49630800) {
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 30, sfxId);
        //ActivateGparamOverride(14, 5);
    } else if (chrEntityId2 == 49780800) {
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 850, sfxId);
    }
    else
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, sfxId);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    WaitFor(ElapsedSeconds(4));
    ForceAnimationPlayback(chrEntityId, 20026, false, false, false);
    EnableCharacter(chrEntityId);
    EnableCharacterAI(chrEntityId);
    if (!IsMapVariation(2)) {
        LinkToBossHealthBar(Disabled, nameId, 0);
    }
    if (!IsMapVariation(2)) {
        if (chrEntityId3 == 0) {
            DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
            LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
        } else if (chrEntityId4 == 0) {
            DisplayBossHealthBar(Enabled, chrEntityId2, 1, nameId);
            DisplayBossHealthBar(Enabled, chrEntityId3, 0, nameId2);
            LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
            LinkToBossHealthBar(Enabled, nameId2, chrEntityId3);
        } else {
            DisplayBossHealthBar(Enabled, chrEntityId2, 2, nameId);
            DisplayBossHealthBar(Enabled, chrEntityId3, 1, nameId2);
            DisplayBossHealthBar(Enabled, chrEntityId4, 0, nameId3);
            LinkToBossHealthBar(Enabled, nameId, chrEntityId2);
            LinkToBossHealthBar(Enabled, nameId2, chrEntityId3);
            LinkToBossHealthBar(Enabled, nameId3, chrEntityId4);
            Goto(L0);
        }
    }
L0:
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90065911, Restart, function(eventFlagId, eventFlagId2, bgmBossConvParamId, chrEntityId, chrEntityId2, nameId, chrEntityId3, nameId2, chrEntityId4, nameId3, chrEntityId5) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterRatioHPRatio(chrEntityId) <= 0);
    ForceCharacterDeath(chrEntityId5, false);
    SetSpEffect(10000, 509);
    SetSpEffect(10001, 509);
    SetSpEffect(10002, 509);
    SetSpEffect(10003, 509);
    SetSpEffect(10004, 509);
    SetSpEffect(10005, 509);
    SetSpEffect(10006, 509);
    SetSpEffect(10007, 509);
    SetSpEffect(10008, 509);
    SetSpEffect(10009, 509);
    SetSpEffect(10010, 509);
    WaitFor(CharacterRatioDead(chrEntityId));
    WaitFixedTimeSeconds(4);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    EndIf(IsMapVariation(2));
    if (BossBGMPlaying(bgmBossConvParamId)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
    }
    if (chrEntityId3 == 0) {
        DisplayBossHealthBar(Disabled, chrEntityId2, 0, nameId);
        EndEvent();
    }
    if (chrEntityId4 == 0) {
        DisplayBossHealthBar(Disabled, chrEntityId2, 1, nameId);
        DisplayBossHealthBar(Disabled, chrEntityId3, 0, nameId2);
        EndEvent();
    }
    DisplayBossHealthBar(Disabled, chrEntityId2, 2, nameId);
    DisplayBossHealthBar(Disabled, chrEntityId3, 1, nameId2);
    DisplayBossHealthBar(Disabled, chrEntityId4, 0, nameId3);
    EndEvent();
});

$Event(90065912, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, bgmBossConvParamId, sfxId, chrEntityId, entityId, nameId) {
    if (EventFlag(eventFlagId3)) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
        LinkToBossHealthBar(Disabled, nameId, 0);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId);
    }
L1:
    DisableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    WaitFor(EventFlag(eventFlagId));
    if (IsMapVariation(1)) {
        SpawnOneshotSFX(TargetEntityType.Character, entityId, 900, 690050);
        WaitFor(ElapsedSeconds(2.5));
    }
    SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
    SpawnOneshotSFX(TargetEntityType.Character, entityId, 900, sfxId);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFor(ElapsedSeconds(4));
    ForceAnimationPlayback(chrEntityId, 20026, false, false, false);
    EnableCharacter(chrEntityId);
    EnableCharacterAI(chrEntityId);
    LinkToBossHealthBar(Disabled, nameId, 0);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
    LinkToBossHealthBar(Enabled, nameId, chrEntityId);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

// gank squad
$Event(90065913, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, bgmBossConvParamId, sfxId, chrEntityId, chrEntityId2, nameId, chrEntityId3, chrEntityId4) {
    if (EventFlag(eventFlagId3)) {
        DisableCharacter(chrEntityId);
        DisableCharacterAI(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
        SetCharacterBackreadState(chrEntityId2, false);
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        SetCharacterBackreadState(chrEntityId3, false);
        EnableCharacter(chrEntityId3);
        EnableCharacterAI(chrEntityId3);
        if (!IsPlayerCount(1)) {
            SetCharacterBackreadState(chrEntityId4, false);
            EnableCharacter(chrEntityId4);
            EnableCharacterAI(chrEntityId4);
        }
        EndIf(IsMapVariation(2));
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId);
        EndEvent();
    }
L1:
    DisableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    WaitFor(EventFlag(eventFlagId));
    if (IsMapVariation(1)) {
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, 690050);
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId3, 900, 690050);
        if (!IsPlayerCount(1)) {
            SpawnOneshotSFX(TargetEntityType.Character, chrEntityId4, 900, 690050);
        }
        WaitFor(ElapsedSeconds(2.5));
    }
    if (!IsMapVariation(2)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
    }
    
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 900, sfxId);
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId3, 900, sfxId);
    if (!IsPlayerCount(1)) {
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId4, 900, sfxId);
    }
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFor(ElapsedSeconds(4));
    SetCharacterBackreadState(chrEntityId2, false);
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    SetCharacterBackreadState(chrEntityId3, false);
    EnableCharacter(chrEntityId3);
    EnableCharacterAI(chrEntityId3);
    if (!IsPlayerCount(1)) {
        SetCharacterBackreadState(chrEntityId4, false);
        EnableCharacter(chrEntityId4);
        EnableCharacterAI(chrEntityId4);
    }
    if (!IsMapVariation(2)) {
        LinkToBossHealthBar(Disabled, nameId, 0);
    }
    if (!IsMapVariation(2)) {
        DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
        LinkToBossHealthBar(Enabled, nameId, chrEntityId);
    }
L0:
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90065915, Restart, function(chrEntityId, eventFlagId) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId));
    SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Normal);
    WaitFor(EntityInRadiusOfEntity(20000, chrEntityId, 100, 1) && PlayerIsInOwnWorld());
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
    }
    WaitFor(
        !EntityInRadiusOfEntity(20000, chrEntityId, 100, 1)
            || !PlayerIsInOwnWorld()
            || EventFlag(eventFlagId));
    RestartEvent();
});

$Event(90065920, Restart, function(chrEntityId, spEffectId) {
    if (EventFlag(7535)) {
        cond &= TargetingBoss(TargetBoss.Gladius);
    }
    cond &= !IsCampaignSession() && !IsPlayMode(2);
    if (cond) {
        SetSpEffect(chrEntityId, spEffectId);
    }
});

// Manus weather change event
$Event(90065950, Restart, function(chrEntityId) {
    WaitFor(EventFlag(7509));
    if (CharacterHasSpEffect(chrEntityId, 85000000)) {
        ActivateGparamOverride(14, 3);
    } else {
        WaitFor(CharacterHasSpEffect(chrEntityId, 85000000));
        ActivateGparamOverride(14, 3);
    }
L0:
    WaitFor(CharacterHPValue(chrEntityId) <= 0);
    DeactivateGparamOverride(5);
});

$Event(90075000, Restart, function(chrEntityId, chrEntityId2) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    EnableCharacterDefaultBackread(chrEntityId2);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    CreateReferredDamagePair(chrEntityId2, chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId2);
    WaitFor(PlayerInMap(19, 0, 0, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(-1);
});

$Event(90075001, Restart, function(chrEntityId, chrEntityId2) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId, false);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId);
        EnableCharacterAI(chrEntityId2);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, 907500000);
        LinkToBossHealthBar(Disabled, 907500000, 0);
        LinkToBossHealthBar(Enabled, 907500000, chrEntityId);
        LinkToBossHealthBar(Enabled, 907500000, chrEntityId2);
        SetBossBGM(750000, BossBGMState.Start);
        EndEvent();
    }
    EnableCharacter(chrEntityId);
    EnableCharacter(chrEntityId2);
    DisableCharacterAI(chrEntityId);
    DisableCharacterAI(chrEntityId2);
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    ForceAnimationPlayback(chrEntityId2, 30000, true, false, false);
    WaitFor(EventFlag(7511));
    SetBossBGM(750000, BossBGMState.Start);
    ForceAnimationPlayback(chrEntityId, 20029, false, false, false);
    EnableCharacterAI(chrEntityId);
    EnableCharacterAI(chrEntityId2);
    LinkToBossHealthBar(Disabled, 907500000, 0);
    LinkToBossHealthBar(Enabled, 907500000, chrEntityId);
    LinkToBossHealthBar(Enabled, 907500000, chrEntityId2);
    WaitFor(ElapsedSeconds(3));
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907500000);
});

$Event(90075002, Restart, function(chrEntityId, chrEntityId2, chrEntityId3) {
    EndIf(EventFlag(7512));
    WaitFor(HPRatio(chrEntityId) <= 0);
    if (CharacterHasSpEffect(chrEntityId2, 42035)) {
        DisableCharacter(chrEntityId2);
    }
    ForceCharacterDeath(chrEntityId2, false);
    if (CharacterHasSpEffect(chrEntityId3, 42035)) {
        DisableCharacter(chrEntityId3);
    }
    ForceCharacterDeath(chrEntityId3, false);
});

$Event(90075005, Restart, function(chrEntityId, chrEntityId2, dummypolyId, spEffectId) {
    EndIf(EventFlag(7512));
    WaitFor(CharacterHasSpEffect(chrEntityId, 42030));
    WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId, dummypolyId, chrEntityId, -1, -1);
    SetSpEffect(chrEntityId2, spEffectId);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 42030));
    RestartEvent();
});

$Event(90075006, Restart, function(chrEntityId, chrEntityId2) {
    EndIf(EventFlag(7512));
    WaitFor(CharacterHasSpEffect(chrEntityId, 42031));
    SetSpEffect(chrEntityId2, 42039);
    WaitFixedTimeSeconds(1);
    SetSpEffect(chrEntityId2, 5950);
    WaitFixedTimeSeconds(5);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 42031));
    RestartEvent();
});

$Event(90075007, Default, function(chrEntityId, entityId, entityId2, entityId3) {
    EndIf(EventFlag(7512));
    WaitFor(CharacterHasSpEffect(chrEntityId, 42070) || CharacterHasSpEffect(chrEntityId, 42071));
    ChangeWeather(Weather.Type85, -1, false);
    ForceAnimationPlayback(entityId, 100, false, false, false);
    WaitFor(ElapsedSeconds(0.7));
    ForceAnimationPlayback(entityId2, 100, false, false, false);
    WaitFor(ElapsedSeconds(0.7));
    ForceAnimationPlayback(entityId3, 100, false, false, false);
    ForceAnimationPlayback(19001510, 100, false, true, false);
    ForceAnimationPlayback(19001510, 110, true, false, false);
});

$Event(90075008, Restart, function(eventFlagId, eventFlagId2, spEffectId, chrEntityId, spEffectId2, targetAmount) {
    if (!EventFlag(9999)) {
        EndIf(EventFlag(eventFlagId2));
        if (eventFlagId != 0) {
            WaitFor(EventFlag(eventFlagId));
        }
        if (Signed(0) != spEffectId2) {
            WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId2, GreaterOrEqual, 1));
        } else {
            WaitFor(CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount);
        }
    }
    ChangeWeather(Weather.Type10, -1, false);
    WaitFor(PlayerInMap(19, 0, 0, 0));
    SpawnMapSFX(19002400);
    SpawnMapSFX(19002401);
    SpawnMapSFX(19002402);
    SpawnMapSFX(19002403);
    SpawnMapSFX(19002404);
    SpawnMapSFX(19002405);
    SpawnMapSFX(19002406);
    SpawnMapSFX(19002407);
    SpawnMapSFX(19002408);
    SpawnMapSFX(19002409);
    SpawnMapSFX(19002410);
    SpawnMapSFX(19002411);
    SpawnMapSFX(19002412);
    SpawnMapSFX(19002413);
    SpawnMapSFX(19002414);
    SpawnMapSFX(19002415);
    SpawnMapSFX(19002416);
    SpawnMapSFX(19002417);
    SpawnMapSFX(19002418);
    SpawnMapSFX(19002419);
    SpawnMapSFX(19002420);
    SpawnMapSFX(19002421);
    SpawnMapSFX(19002422);
    SpawnMapSFX(19002423);
    SpawnMapSFX(19002424);
    SpawnMapSFX(19002425);
    SpawnMapSFX(19002426);
    SpawnMapSFX(19002427);
    SpawnMapSFX(19002428);
    SpawnMapSFX(19002429);
    SpawnMapSFX(19002430);
    SpawnMapSFX(19002431);
    SpawnMapSFX(19002432);
    SpawnMapSFX(19002433);
    SpawnMapSFX(19002434);
    SpawnMapSFX(19002435);
    SpawnMapSFX(19002436);
    SpawnMapSFX(19002437);
    SpawnMapSFX(19002438);
    SpawnMapSFX(19002439);
    SpawnMapSFX(19002440);
    SpawnMapSFX(19002441);
    SpawnMapSFX(19002442);
    SpawnMapSFX(19002443);
    SpawnMapSFX(19002444);
    SpawnMapSFX(19002445);
    SpawnMapSFX(19002446);
    SpawnMapSFX(19002447);
    SpawnMapSFX(19002448);
    SpawnMapSFX(19002449);
    SpawnMapSFX(19002450);
    SpawnMapSFX(19002451);
    SpawnMapSFX(19002452);
    SpawnMapSFX(19002453);
    SpawnMapSFX(19002454);
    SpawnMapSFX(19002455);
    SpawnMapSFX(19002456);
    SpawnMapSFX(19002457);
    SpawnMapSFX(19002458);
    SpawnMapSFX(19002459);
    SpawnMapSFX(19002460);
    SpawnMapSFX(19002461);
    SpawnMapSFX(19002462);
    SpawnMapSFX(19002463);
    SpawnMapSFX(19002464);
    SpawnMapSFX(19002465);
    SpawnMapSFX(19002466);
    SpawnMapSFX(19002467);
    SpawnMapSFX(19002468);
    SpawnMapSFX(19002469);
    SpawnMapSFX(19002470);
    SetSpEffect(0, spEffectId);
});

$Event(90075051, Restart, function(chrEntityId, chrEntityId2, entityId, entityId2) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId, false);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId);
        EnableCharacterAI(chrEntityId2);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, 907500000);
        LinkToBossHealthBar(Disabled, 907500000, 0);
        LinkToBossHealthBar(Enabled, 907500000, chrEntityId);
        LinkToBossHealthBar(Enabled, 907500000, chrEntityId2);
        SetBossBGM(750000, BossBGMState.HeatUp);
        EndEvent();
    }
    EnableCharacter(chrEntityId);
    EnableCharacter(chrEntityId2);
    DisableCharacterAI(chrEntityId);
    DisableCharacterAI(chrEntityId2);
    ForceAnimationPlayback(chrEntityId, 30028, true, false, false);
    ForceAnimationPlayback(chrEntityId2, 30000, true, false, false);
    WaitFor(EventFlag(7511));
    SetBossBGM(750000, BossBGMState.HeatUp);
    ForceAnimationPlayback(chrEntityId, 20028, false, false, false);
    ForceAnimationPlayback(entityId, 20010, false, false, false);
    ForceAnimationPlayback(entityId2, 20011, false, false, false);
    EnableCharacterAI(chrEntityId);
    EnableCharacterAI(chrEntityId2);
    LinkToBossHealthBar(Disabled, 907500000, 0);
    LinkToBossHealthBar(Enabled, 907500000, chrEntityId);
    LinkToBossHealthBar(Enabled, 907500000, chrEntityId2);
    WaitFor(ElapsedSeconds(3));
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907500000);
});

$Event(90075060, Restart, function(chrEntityId, chrEntityId2) {
    EndIf(EventFlag(7512));
    WaitFor(CharacterHasSpEffect(chrEntityId, 5401));
    SetSpEffect(chrEntityId2, 5401);
    SetSpEffect(chrEntityId2, 7370);
    SetSpEffect(chrEntityId2, 42082);
    SetSpEffect(chrEntityId2, 42099);
    ChangeCharacterDispmask(chrEntityId2, 20, ON);
});

$Event(90075070, Restart, function(chrEntityId, chrEntityId2, dummypolyId, spEffectId, spEffectId2) {
    EndIf(EventFlag(7512));
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId2));
    WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId, dummypolyId, chrEntityId, -1, -1);
    SetSpEffect(chrEntityId2, spEffectId);
    WaitFor(!CharacterHasSpEffect(chrEntityId, spEffectId2));
    RestartEvent();
});

$Event(90075100, Default, function(chrEntityId) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    WaitFor(PlayerInMap(19, 0, 0, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(7510);
});

$Event(90075101, Restart, function(chrEntityId) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, 907510000);
        LinkToBossHealthBar(Disabled, 907510000, 0);
        LinkToBossHealthBar(Enabled, 907510000, chrEntityId);
        SetBossBGM(751000, BossBGMState.Start);
        EndEvent();
    }
    EnableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    WaitFor(EventFlag(7511));
    SetBossBGM(751000, BossBGMState.Start);
    ForceAnimationPlayback(chrEntityId, 20029, false, false, false);
    EnableCharacterAI(chrEntityId);
    LinkToBossHealthBar(Disabled, 907510000, 0);
    LinkToBossHealthBar(Enabled, 907510000, chrEntityId);
    WaitFor(ElapsedSeconds(3));
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907510000);
});

$Event(90075102, Restart, function(chrEntityId) {
    EndIf(EventFlag(7512));
    WaitFor(HPRatio(chrEntityId) <= 0);
});

$Event(90075150, Restart, function(eventFlagId, eventFlagId2, spEffectId, chrEntityId, spEffectId2, targetAmount) {
    if (!EventFlag(9999)) {
        EndIf(EventFlag(eventFlagId2));
        if (eventFlagId != 0) {
            WaitFor(EventFlag(eventFlagId));
        }
        if (Signed(0) != spEffectId2) {
            WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId2, GreaterOrEqual, 1));
        } else {
            WaitFor(CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount);
        }
    }
    ChangeWeather(Weather.Type60, -1, false);
    SpawnMapSFX(19012400);
    SpawnMapSFX(19012401);
    SpawnMapSFX(19012402);
    SpawnMapSFX(19012403);
    SpawnMapSFX(19012404);
    SpawnMapSFX(19012405);
    SpawnMapSFX(19012406);
    SetSpEffect(0, spEffectId);
});

$Event(90075160, Default, function(chrEntityId, chrEntityId2, chrEntityId3) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    EnableCharacterDefaultBackread(chrEntityId2);
    DisableCharacterCollision(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    DisableLockOnPoint(chrEntityId2, 220);
    DisableCharacterGravity(chrEntityId2);
    DisableCharacterHPBarDisplay(chrEntityId2);
    EnableCharacterDefaultBackread(chrEntityId3);
    DisableCharacterCollision(chrEntityId3);
    DisableCharacterAI(chrEntityId3);
    DisableLockOnPoint(chrEntityId3, 220);
    DisableCharacterGravity(chrEntityId3);
    DisableCharacterHPBarDisplay(chrEntityId3);
    WaitFixedTimeFrames(1);
    SetCharacterEventTarget(chrEntityId, chrEntityId3);
});

$Event(90075161, Restart, function(chrEntityId) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, 907510000);
        LinkToBossHealthBar(Disabled, 907510000, 0);
        LinkToBossHealthBar(Enabled, 907510000, chrEntityId);
        SetBossBGM(751000, BossBGMState.HeatUp);
        EndEvent();
    }
    EnableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    WaitFor(EventFlag(7511));
    SetSpEffect(chrEntityId, 5108);
    SetBossBGM(751000, BossBGMState.HeatUp);
    ForceAnimationPlayback(chrEntityId, 20029, false, false, false);
    EnableCharacterAI(chrEntityId);
    LinkToBossHealthBar(Disabled, 907510000, 0);
    LinkToBossHealthBar(Enabled, 907510000, chrEntityId);
    WaitFor(ElapsedSeconds(3));
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907510000);
});

$Event(90075162, Restart, function(chrEntityId, chrEntityId2) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    if (!CharacterHasSpEffect(chrEntityId, 42134)) {
        WaitFor(CharacterHasSpEffect(chrEntityId, 42134));
        WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 410, chrEntityId);
    }
L0:
    WaitFor(!CharacterHasSpEffect(chrEntityId, 42134));
    RestartEvent();
});

$Event(90075163, Restart, function(chrEntityId, entityId) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    if (!CharacterHasSpEffect(chrEntityId, 42134)) {
L0:
        SetSpEffect(20000, 42135);
        SetSpEffect(20000, 42136);
        WaitFor(
            CharacterHasSpEffect(chrEntityId, 42134)
                || CharacterHasSpEffect(20000, 42123)
                || CharacterHasSpEffect(20000, 42132)
                || CharacterHasSpEffect(20000, 42133));
        RestartEvent();
    }
L1:
    WaitFor(ElapsedFrames(2));
    GotoIf(L2, EntityInRadiusOfEntity(20000, entityId, 30, 1));
    Goto(L3);
L2:
    SetSpEffect(20000, 42123);
    SetSpEffect(20000, 42136);
    WaitFor(
        !EntityInRadiusOfEntity(20000, entityId, 30, 1)
            || !CharacterHasSpEffect(chrEntityId, 42134)
            || CharacterHasSpEffect(20000, 42132)
            || CharacterHasSpEffect(20000, 42133));
    RestartEvent();
L3:
    SetSpEffect(20000, 42135);
    SetSpEffect(20000, 42136);
    WaitFor(ElapsedFrames(1));
    WaitFor(
        (!CharacterHasSpEffect(20000, 42139) && !CharacterHasSpEffect(20000, 102501))
            || EntityInRadiusOfEntity(20000, entityId, 30, 1)
            || !CharacterHasSpEffect(chrEntityId, 42134));
    RestartIf(
        EntityInRadiusOfEntity(20000, entityId, 30, 1) || !CharacterHasSpEffect(chrEntityId, 42134));
    SetSpEffect(20000, 42132);
    SetSpEffect(20000, 42133);
    WaitFor(
        EntityInRadiusOfEntity(20000, entityId, 30, 1)
            || !CharacterHasSpEffect(chrEntityId, 42134)
            || CharacterHasSpEffect(20000, 42139)
            || CharacterHasSpEffect(20000, 102501)
            || (!CharacterHasSpEffect(20000, 42132) && !CharacterHasSpEffect(20000, 42133)));
    RestartEvent();
});

$Event(90075164, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    WaitFor(CharacterHasSpEffect(20000, 102501));
    ShowFloatingMessage(202, 20000);
    WaitFixedTimeSeconds(0.5);
    WaitFor(!CharacterHasSpEffect(20000, 102501));
    HideFloatingMessage(202, 20000);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(90075165, Restart, function(chrEntityId) {
    DisableNetworkSync();
    WaitFor(PlayerInMap(19, 0, 0, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(7510);
    WaitFor(CharacterHasSpEffect(chrEntityId, 42134));
    ChangeCamera(7515);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 42134));
    RestartEvent();
});

$Event(90075166, Restart, function(chrEntityId, areaEntityId, areaEntityId2, areaEntityId3, areaEntityId4, areaEntityId5, areaEntityId6, areaEntityId7, areaEntityId8) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(
        InArea(chrEntityId, areaEntityId)
            || InArea(chrEntityId, areaEntityId2)
            || InArea(chrEntityId, areaEntityId3)
            || InArea(chrEntityId, areaEntityId4)
            || InArea(chrEntityId, areaEntityId5)
            || InArea(chrEntityId, areaEntityId6)
            || InArea(chrEntityId, areaEntityId7)
            || InArea(chrEntityId, areaEntityId8)
            || CharacterHasSpEffect(chrEntityId, 42177));
    SetSpEffect(chrEntityId, 42177);
    WaitFor(
        (!InArea(chrEntityId, areaEntityId)
            && !InArea(chrEntityId, areaEntityId2)
            && !InArea(chrEntityId, areaEntityId3)
            && !InArea(chrEntityId, areaEntityId4)
            && !InArea(chrEntityId, areaEntityId5)
            && !InArea(chrEntityId, areaEntityId6)
            && !InArea(chrEntityId, areaEntityId7)
            && !InArea(chrEntityId, areaEntityId8))
            || !CharacterHasSpEffect(chrEntityId, 42177));
    SetSpEffect(chrEntityId, 42178);
    RestartEvent();
});

$Event(90075200, Restart, function(chrEntityId, chrEntityId2) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    EnableCharacterDefaultBackread(chrEntityId2);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    EnableCharacterImmortality(chrEntityId);
    CreateReferredDamagePair(chrEntityId, chrEntityId2);
    DisableCharacterCollision(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    DisableLockOnPoint(chrEntityId2, 220);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId2);
    SetCharacterEventTarget(chrEntityId, chrEntityId2);
    WaitFor(PlayerInMap(19, 0, 0, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(7539);
});

$Event(90075201, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, eventFlagId, eventFlagId2, eventFlagId3) {
    if (EventFlag(7512)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        DisableCharacterAI(chrEntityId);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId2);
        EnableCharacterCollision(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        EnableCharacter(chrEntityId3);
        EnableCharacterCollision(chrEntityId3);
        EnableCharacterAI(chrEntityId3);
        DisableCharacter(chrEntityId4);
        DisableCharacterCollision(chrEntityId4);
        DisableCharacterAI(chrEntityId4);
        if (EventFlag(eventFlagId)) {
            DisableCharacter(chrEntityId3);
            DisableCharacterCollision(chrEntityId3);
            DisableCharacterAI(chrEntityId3);
        }
        if (EventFlag(eventFlagId2)) {
            DisableCharacter(chrEntityId2);
            DisableCharacterCollision(chrEntityId2);
            DisableCharacterAI(chrEntityId2);
        }
        if (EventFlag(eventFlagId3)) {
            EnableCharacter(chrEntityId4);
            EnableCharacterCollision(chrEntityId4);
            EnableCharacterAI(chrEntityId4);
            EnableCharacter(chrEntityId5);
            EnableCharacterCollision(chrEntityId5);
            EnableCharacterAI(chrEntityId5);
        }
        DisplayBossHealthBar(Enabled, chrEntityId6, 0, 907520000);
        LinkToBossHealthBar(Disabled, 907520000, 0);
        LinkToBossHealthBar(Enabled, 907520000, chrEntityId);
        SetBossBGM(752000, BossBGMState.Start);
        EndEvent();
    }
L0:
    DisableCharacter(chrEntityId4);
    DisableCharacterCollision(chrEntityId4);
    DisableCharacterAI(chrEntityId4);
    SetSpEffect(chrEntityId4, 45918);
    EnableCharacter(chrEntityId2);
    EnableCharacterCollision(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    ForceAnimationPlayback(chrEntityId2, 30029, true, false, false);
    EnableCharacter(chrEntityId3);
    EnableCharacterCollision(chrEntityId3);
    DisableCharacterAI(chrEntityId3);
    ForceAnimationPlayback(chrEntityId3, 30029, true, false, false);
    WaitFor(EventFlag(7511));
    SetBossBGM(752000, BossBGMState.Start);
    EnableCharacterAI(chrEntityId2);
    ForceAnimationPlayback(chrEntityId2, 20029, false, false, false);
    EnableCharacterAI(chrEntityId3);
    ForceAnimationPlayback(chrEntityId3, 20029, false, true, false);
    DisplayBossHealthBar(Enabled, chrEntityId6, 0, 907520000);
    LinkToBossHealthBar(Disabled, 907520000, 0);
    LinkToBossHealthBar(Enabled, 907520000, chrEntityId);
});

$Event(90075202, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, eventFlagId) {
    EndIf(EventFlag(7512));
    WaitFor(CharacterHPValue(chrEntityId) == 0);
    DisableCharacterImmortality(chrEntityId2);
    DisableCharacterImmortality(chrEntityId3);
    DisableCharacterImmortality(chrEntityId4);
    DisableCharacterImmortality(chrEntityId5);
    if (EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId2);
        DisableCharacter(chrEntityId3);
    }
    ForceCharacterDeath(chrEntityId2, false);
    ForceCharacterDeath(chrEntityId3, false);
    if (!EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId4);
        DisableCharacter(chrEntityId5);
    }
    ForceCharacterDeath(chrEntityId4, false);
    ForceCharacterDeath(chrEntityId5, false);
});

$Event(99075205, Restart, function(chrEntityId, chrEntityId2) {
    EndIf(EventFlag(7512));
    WaitFor(
        (CharacterHasSpEffect(chrEntityId, 45911) && CharacterHasSpEffect(chrEntityId2, 45989))
            || EventFlag(7512));
    EndIf(EventFlag(7512));
    SetSpEffect(chrEntityId, 45916);
    WaitFor(
        !CharacterHasSpEffect(chrEntityId, 45911)
            || !CharacterHasSpEffect(chrEntityId2, 45989)
            || EventFlag(7512));
    RestartEvent();
});

$Event(90075210, Restart, function(chrEntityId, chrEntityId2, eventFlagId) {
    EndIf(EventFlag(7512));
    EndIf(EventFlag(eventFlagId));
    WaitFor(HPRatio(chrEntityId) <= 0.6 || CharacterHasSpEffect(chrEntityId2, 45956));
    if (!CharacterHasSpEffect(chrEntityId2, 45956)) {
        SetSpEffect(chrEntityId2, 45955);
    }
    WaitFor(CharacterHasSpEffect(chrEntityId2, 45956));
    WaitFixedTimeSeconds(1);
    DisableCharacter(chrEntityId2);
    DisableCharacterCollision(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90075211, Restart, function(chrEntityId, chrEntityId2, eventFlagId) {
    EndIf(EventFlag(7512));
    EndIf(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId2, 45956));
    SetSpEffect(chrEntityId, 45905);
    WaitFor(CharacterHasSpEffect(chrEntityId, 45903));
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    DisableCharacterAI(chrEntityId);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90075212, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, eventFlagId, eventFlagId2, eventFlagId3, value) {
    EndIf(EventFlag(7512));
    EndIf(EventFlag(eventFlagId3));
    WaitFor(EventFlag(eventFlagId) && EventFlag(eventFlagId2));
    SetSpEffect(chrEntityId2, 45918);
    SetSpEffect(chrEntityId2, 45944);
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    EnableCharacter(chrEntityId3);
    EnableCharacterAI(chrEntityId3);
    WaitFor(ElapsedFrames(3));
    if (value != 1) {
        WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 530, chrEntityId);
        WarpCharacterAndCopyFloor(chrEntityId3, TargetEntityType.Character, chrEntityId, 530, chrEntityId);
    }
    if (value == 1) {
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId, 900, chrEntityId, 2, 5);
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId3, TargetEntityType.Character, chrEntityId, 900, chrEntityId, 2, 5);
    }
    EnableCharacterCollision(chrEntityId2);
    EnableCharacterCollision(chrEntityId3);
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
    WaitFixedTimeFrames(5);
});

$Event(90075220, Restart, function(chrEntityId, eventFlagId) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId, 45941));
    CreateNPCPart(chrEntityId, 70, NPCPartType.Part2, 100, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, 70, 175, 175, 139, 139, 0);
    WaitFor(NPCPartHP(chrEntityId, 70) <= 1 || !CharacterHasSpEffect(chrEntityId, 45941));
    if (CharacterHasSpEffect(chrEntityId, 45941)) {
        SetSpEffect(chrEntityId, 45943);
    }
    WaitFor(!CharacterHasSpEffect(chrEntityId, 45941));
    RestartEvent();
});

$Event(90075230, Restart, function(chrEntityId, chrEntityId2, value) {
    DisableNetworkSync();
    EnableCharacterImmortality(chrEntityId);
    DisableCharacterGravity(chrEntityId);
    if (value != 0) {
        SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
    }
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableLockOnPoint(chrEntityId, 220);
    SetCharacterTeamType(chrEntityId, TeamType.Disabled);
    ResetCharacterPosition(chrEntityId);
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 46009) && !CharacterHasSpEffect(chrEntityId2, 707115));
    EnableCharacter(chrEntityId);
    EnableCharacterCollision(chrEntityId);
    EnableLockOnPoint(chrEntityId, 220);
    if (value == 1) {
        SetCharacterTeamType(chrEntityId, TeamType.Unknown79);
    }
    if (value != 1) {
        EnableCharacterHPBarDisplay(chrEntityId);
        SetCharacterTeamType(chrEntityId, TeamType.ArchEnemyTeam);
    }
    WaitFor(
        !CharacterHasSpEffect(chrEntityId, 46009) || CharacterHasSpEffect(chrEntityId2, 707115));
    RestartEvent();
});

$Event(90075231, Restart, function(chrEntityId) {
    DisableNetworkSync();
    WaitFor(
        CharacterHasSpEffect(20000, 46000)
            || CharacterHasSpEffect(20000, 46001)
            || CharacterHasSpEffect(20000, 46002)
            || CharacterHasSpEffect(20000, 46003)
            || CharacterHasSpEffect(20000, 46004)
            || CharacterHasSpEffect(20000, 46005));
    SetSpEffect(chrEntityId, 46009);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 46009));
    RestartEvent();
});

$Event(90075232, Restart, function(chrEntityId) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(chrEntityId, 46009));
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Character, 20000, 36);
    RestartEvent();
});

$Event(90075233, Restart, function(chrEntityId) {
    DisableNetworkSync();
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 46009)
            && ((!CharacterHasSpEffect(20000, 46007) && !CharacterHasStateInfo(20000, 2))
                || CharacterHPValue(chrEntityId) <= 1
                || CharacterHasSpEffect(20000, 46045)
                || CharacterHPValue(20000) == 0));
    SetSpEffect(20000, 46041);
    SetSpEffect(20000, 46043);
    SetSpEffect(chrEntityId, 46042);
    SetSpEffect(chrEntityId, 46048);
    WaitFor(ElapsedFrames(1));
    SetSpEffect(chrEntityId, 10596);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 46009));
    RestartEvent();
});

$Event(90075234, Restart, function(chrEntityId) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(20000, 46007));
    SetSpEffect(chrEntityId, 46047);
    WaitFor(!CharacterHasSpEffect(20000, 46007));
    RestartEvent();
});

$Event(90075240, Restart, function(eventFlagId, eventFlagId2, spEffectId, chrEntityId, spEffectId2, targetAmount) {
    if (!EventFlag(9999)) {
        EndIf(EventFlag(eventFlagId2));
        if (eventFlagId != 0) {
            WaitFor(EventFlag(eventFlagId));
        }
        if (Signed(0) != spEffectId2) {
            WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId2, GreaterOrEqual, 1));
        } else {
            WaitFor(CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount);
        }
    }
    ChangeWeather(Weather.Type20, -1, false);
    SpawnMapSFX(0);
    SetSpEffect(0, spEffectId);
});

$Event(90075250, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    EnableCharacterImmortality(chrEntityId2);
    EnableCharacterImmortality(chrEntityId3);
    DisableCharacterCollision(chrEntityId4);
    DisableCharacterAI(chrEntityId4);
    DisableLockOnPoint(chrEntityId4, 220);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId4);
    if (CharacterHPValue(chrEntityId4) > 0) {
        CreateReferredDamagePair(chrEntityId, chrEntityId4);
        SetCharacterEventTarget(chrEntityId, chrEntityId4);
    }
    WaitFor(PlayerInMap(19, 0, 0, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(7539);
});

$Event(90075251, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, areaEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    if (EventFlag(7512)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        DisableCharacterAI(chrEntityId);
        EndEvent();
    }
    if (EventFlag(7511)) {
        SetBossBGM(752000, BossBGMState.HeatUp);
        LinkToBossHealthBar(Disabled, 907520000, 0);
        LinkToBossHealthBar(Enabled, 907520000, chrEntityId);
        if (EventFlag(eventFlagId4)) {
            EnableCharacter(chrEntityId2);
            EnableCharacterAI(chrEntityId2);
            EnableCharacter(chrEntityId3);
            EnableCharacterAI(chrEntityId3);
            SetCharacterBackreadState(chrEntityId5, false);
            EnableCharacter(chrEntityId5);
            EnableCharacterAI(chrEntityId5);
            DisplayBossHealthBar(Enabled, chrEntityId5, 2, 907520002);
            DisplayBossHealthBar(Enabled, chrEntityId2, 1, 907520000);
            DisplayBossHealthBar(Enabled, chrEntityId3, 0, 907530000);
            LinkToBossHealthBar(Disabled, 907520002, 0);
            LinkToBossHealthBar(Enabled, 907520002, chrEntityId5);
            LinkToBossHealthBar(Enabled, 907530000, chrEntityId3);
            WaitFor(ElapsedSeconds(10));
            SetCharacterHome(chrEntityId2, areaEntityId);
            SetCharacterHome(chrEntityId3, areaEntityId);
            EndEvent();
        }
        if (EventFlag(eventFlagId3)) {
            EnableCharacter(chrEntityId2);
            EnableCharacterAI(chrEntityId2);
            EnableCharacter(chrEntityId3);
            EnableCharacterAI(chrEntityId3);
            SetSpEffect(chrEntityId2, 47230);
            SetSpEffect(chrEntityId3, 47230);
            DisplayBossHealthBar(Enabled, chrEntityId4, 0, 907520000);
            WaitFor(ElapsedSeconds(10));
            SetCharacterHome(chrEntityId2, areaEntityId);
            SetCharacterHome(chrEntityId3, areaEntityId);
            EndEvent();
        }
        EndEvent();
    }
L0:
    DisableCharacter(chrEntityId2);
    DisableCharacterCollision(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    SetSpEffect(chrEntityId2, 45918);
    SetSpEffect(chrEntityId2, 47230);
    SetSpEffect(chrEntityId3, 47230);
    WaitFor(EventFlag(7511));
    SetSpEffect(chrEntityId, 5108);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    SetBossBGM(752000, BossBGMState.HeatUp);
    LinkToBossHealthBar(Disabled, 907520000, 0);
    LinkToBossHealthBar(Enabled, 907520000, chrEntityId);
    WaitFor(ElapsedSeconds(3));
    DisplayBossHealthBar(Enabled, chrEntityId4, 0, 907520000);
    WaitFor(ElapsedSeconds(10));
    SetCharacterHome(chrEntityId2, areaEntityId);
    SetCharacterHome(chrEntityId3, areaEntityId);
});

$Event(90075255, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, areaEntityId, eventFlagId) {
    EndIf(EventFlag(7512));
    if (EventFlag(eventFlagId)) {
        SetCharacterBackreadState(chrEntityId3, false);
        EnableCharacter(chrEntityId3);
        EnableCharacterAI(chrEntityId3);
        SetCharacterEventTarget(chrEntityId, chrEntityId2);
        SetCharacterEventTarget(chrEntityId2, chrEntityId);
        WaitFor(ElapsedSeconds(5));
        SetCharacterHome(chrEntityId3, areaEntityId);
        EndEvent();
    }
    SetCharacterBackreadState(chrEntityId3, false);
    DisableCharacterCollision(chrEntityId3);
    ForceAnimationPlayback(chrEntityId3, 30028, false, false, false);
    DisableCharacterAI(chrEntityId3);
    WaitFor(CharacterHPValue(chrEntityId4) <= 1);
    SetSpEffect(chrEntityId, 47231);
    SetSpEffect(chrEntityId2, 47231);
    SetSpEffect(chrEntityId, 47140);
    SetSpEffect(chrEntityId2, 47140);
    WaitFor(CharacterHasSpEffect(chrEntityId, 47125));
    WaitFor(ElapsedSeconds(3.5));
    SetSpEffect(chrEntityId3, 45918);
    EnableCharacterCollision(chrEntityId3);
    EnableCharacterAI(chrEntityId3);
    WaitFor(ElapsedFrames(3));
    WarpCharacterAndCopyFloor(chrEntityId3, TargetEntityType.Character, chrEntityId, 220, chrEntityId);
    SetSpEffect(chrEntityId3, 47126);
    WaitFor(CharacterHasSpEffect(chrEntityId3, 47130) || ElapsedSeconds(10));
    if (!CharacterHasSpEffect(chrEntityId3, 47126) && !CharacterHasSpEffect(chrEntityId3, 47130)) {
        SetSpEffect(chrEntityId3, 47126);
    }
    WaitFor(CharacterHasSpEffect(chrEntityId3, 47130));
    SetSpEffect(chrEntityId, 47131);
    SetSpEffect(chrEntityId2, 47131);
    SetCharacterEventTarget(chrEntityId, chrEntityId2);
    SetCharacterEventTarget(chrEntityId2, chrEntityId);
    WaitFixedTimeFrames(5);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetCharacterHome(chrEntityId3, areaEntityId);
    WaitFor(
        (CharacterHasSpEffect(chrEntityId, 47255) && CharacterHasSpEffect(chrEntityId2, 47255))
            || MapHasPermissionToUpdate(false, 19, 0, 0, 0)
            || ElapsedSeconds(20));
    WaitFor(ElapsedSeconds(5));
    WaitFor(MapHasPermissionToUpdate(false, 19, 0, 0, 0));
    if (!CharacterHasSpEffect(chrEntityId, 47255)) {
        SetSpEffect(chrEntityId, 47131);
    }
    if (!CharacterHasSpEffect(chrEntityId2, 47255)) {
        SetSpEffect(chrEntityId2, 47131);
    }
});

$Event(90075256, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, eventFlagId) {
    EndIf(EventFlag(7512));
    EndIf(EventFlag(eventFlagId));
    WaitFor(CharacterHPValue(chrEntityId4) <= 1);
    WaitFor(ElapsedSeconds(4));
    DisplayBossHealthBar(Disabled, chrEntityId4, 0, 907520000);
    WaitFor(CharacterHasSpEffect(chrEntityId3, 47126));
    WaitFor(ElapsedSeconds(3.5));
    WaitFor(ElapsedSeconds(2.5));
    DisplayBossHealthBar(Enabled, chrEntityId3, 2, 907520002);
    DisplayBossHealthBar(Enabled, chrEntityId, 1, 907520000);
    DisplayBossHealthBar(Enabled, chrEntityId2, 0, 907530000);
    LinkToBossHealthBar(Disabled, 907520002, 0);
    LinkToBossHealthBar(Enabled, 907520002, chrEntityId3);
    LinkToBossHealthBar(Enabled, 907530000, chrEntityId2);
});

$Event(90075257, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4) {
    EndIf(EventFlag(7512));
    WaitFor(CharacterHPValue(chrEntityId2) <= 0);
    DisableCharacterImmortality(chrEntityId);
    DisableCharacterImmortality(chrEntityId3);
    DisableCharacterImmortality(chrEntityId4);
    WaitFixedTimeFrames(1);
    SetSpEffect(chrEntityId3, 47140);
    SetSpEffect(chrEntityId4, 47140);
    WaitFor(EventFlag(7512));
    DisplayBossHealthBar(Disabled, chrEntityId3, 1, 907520000);
    DisplayBossHealthBar(Disabled, chrEntityId4, 0, 907530000);
});

$Event(90075260, Restart, function(chrEntityId, chrEntityId2, spEffectId, spEffectId2, eventFlagId) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 47121) || CharacterHasSpEffect(chrEntityId2, spEffectId));
    if (!CharacterHasSpEffect(chrEntityId2, spEffectId)) {
        SetSpEffect(chrEntityId2, spEffectId);
    }
    WaitFor(
        !CharacterHasSpEffect(chrEntityId, 47121) || !CharacterHasSpEffect(chrEntityId2, spEffectId));
    if (CharacterHasSpEffect(chrEntityId, 47121)) {
        WaitFor(!CharacterHasSpEffect(chrEntityId, 47121) || ElapsedSeconds(10));
    }
    if (CharacterHasSpEffect(chrEntityId2, spEffectId)) {
        SetSpEffect(chrEntityId2, spEffectId2);
    }
    RestartEvent();
});

$Event(90075261, Restart, function(chrEntityId, chrEntityId2, spEffectId, spEffectId2, eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    if (EventFlag(eventFlagId) && CharacterHasSpEffect(chrEntityId, spEffectId2)) {
        CreateReferredDamagePair(chrEntityId, chrEntityId2);
        ChangeCharacterDispmask(chrEntityId, 10, ON);
    }
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId2, spEffectId));
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 220, chrEntityId2);
    WaitFor(CharacterHasSpEffect(chrEntityId2, 47182) || EventFlag(eventFlagId2));
    RestartIf(EventFlag(eventFlagId2));
    SetSpEffect(chrEntityId, 47181);
    WaitFor(
        (!CharacterHasSpEffect(chrEntityId, 47121) && ElapsedFrames(5)) || EventFlag(eventFlagId2));
    RestartIf(EventFlag(eventFlagId2));
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 47185)
            || CharacterHasSpEffect(chrEntityId, 47121)
            || EventFlag(eventFlagId2));
    RestartIf(EventFlag(eventFlagId2));
    RestartIf(CharacterHasSpEffect(chrEntityId, 47121));
    CreateReferredDamagePair(chrEntityId, chrEntityId2);
    ChangeCharacterDispmask(chrEntityId, 10, ON);
    WaitFixedTimeFrames(5);
    RestartEvent();
});

$Event(90075262, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, spEffectId, spEffectId2, eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    if (EventFlag(eventFlagId) && !CharacterHasSpEffect(chrEntityId, spEffectId)) {
        CreateReferredDamagePair(chrEntityId, chrEntityId3);
        ChangeCharacterDispmask(chrEntityId, 10, OFF);
    }
    WaitFor(EventFlag(eventFlagId));
    WaitFor(
        CharacterHasSpEffect(chrEntityId, spEffectId) && !CharacterHasSpEffect(chrEntityId, 47121));
    WaitFor(ElapsedSeconds(1));
    WaitFor(
        CharacterHasSpEffect(chrEntityId, spEffectId2)
            || (CharacterHasSpEffect(chrEntityId, 47121) && !CharacterHasSpEffect(chrEntityId, 47165))
            || EventFlag(eventFlagId2));
    RestartIf(EventFlag(eventFlagId2));
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 220, chrEntityId2);
    WaitFixedTimeFrames(3);
    CreateReferredDamagePair(chrEntityId, chrEntityId3);
    if (CharacterHPValue(chrEntityId2) > 0) {
        ForceAnimationPlayback(chrEntityId2, 20018, false, false, false);
    }
    ChangeCharacterDispmask(chrEntityId, 10, OFF);
    RestartEvent();
});

$Event(90075263, Restart, function(chrEntityId) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    WaitFor(CharacterHasSpEffect(chrEntityId, 47221));
    DisableCharacterCollision(chrEntityId);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 47221));
    EnableCharacterCollision(chrEntityId);
    RestartEvent();
});

$Event(90075264, Restart, function(chrEntityId, chrEntityId2, eventFlagId) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId, 47177) || EventFlag(7512));
    EndIf(EventFlag(7512));
    SetSpEffect(chrEntityId2, 47175);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 47177));
    RestartEvent();
});

$Event(90075265, Restart, function(chrEntityId, chrEntityId2, spEffectId, eventFlagId) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    EndIf(CharacterHPValue(chrEntityId2) <= 0);
    if (!(CharacterHasSpEffect(chrEntityId, spEffectId) && CharacterHasSpEffect(chrEntityId2, 47250))) {
        WaitFor(EventFlag(eventFlagId));
        WaitFor(
            (CharacterHasSpEffect(chrEntityId, spEffectId)
                && CharacterHasSpEffect(chrEntityId2, 47250))
                || CharacterHPValue(chrEntityId2) <= 0);
        EndIf(CharacterHPValue(chrEntityId2) <= 0);
        WaitFor(ElapsedSeconds(1));
    }
L0:
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 179, chrEntityId2);
    WaitFixedTimeFrames(9);
    RestartEvent();
});

$Event(90075266, Restart, function(chrEntityId, value) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    EnableLockOnPoint(chrEntityId, 220);
    if (value != 1) {
        EnableLockOnPoint(chrEntityId, 221);
        EnableLockOnPoint(chrEntityId, 222);
        EnableLockOnPoint(chrEntityId, 223);
    }
    WaitFor(CharacterHasSpEffect(chrEntityId, 47245));
    DisableLockOnPoint(chrEntityId, 220);
    if (value != 1) {
        DisableLockOnPoint(chrEntityId, 221);
        DisableLockOnPoint(chrEntityId, 222);
        DisableLockOnPoint(chrEntityId, 223);
    }
    WaitFor(!CharacterHasSpEffect(chrEntityId, 47245));
    RestartEvent();
});

$Event(90075267, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(7512));
    SetNetworkconnectedEventFlagID(eventFlagId2, OFF);
    WaitFor(EventFlag(eventFlagId));
    WaitFor(
        !CharacterHasSpEffect(chrEntityId, 47111)
            && !CharacterHasSpEffect(chrEntityId2, 47116)
            && CharacterHasSpEffect(chrEntityId3, 47250));
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 47111)
            || CharacterHasSpEffect(chrEntityId2, 47116)
            || !CharacterHasSpEffect(chrEntityId3, 47250)
            || ElapsedSeconds(15));
    RestartIf(
        CharacterHasSpEffect(chrEntityId, 47111)
            || CharacterHasSpEffect(chrEntityId2, 47116)
            || !CharacterHasSpEffect(chrEntityId3, 47250));
    ForceAnimationPlayback(chrEntityId3, 20018, false, false, false);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    WaitFor(ElapsedSeconds(1));
    SetNetworkconnectedEventFlagID(eventFlagId2, OFF);
    WaitFor(ElapsedSeconds(9));
    RestartEvent();
});

$Event(90075300, Restart, function(chrEntityId, chrEntityId2, chrEntityId3) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    EnableCharacterDefaultBackread(chrEntityId2);
    EnableCharacterDefaultBackread(chrEntityId3);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId3, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    PlaySE(chrEntityId, SoundType.CharacterMotion, 754009500);
});

$Event(90075301, Restart, function(chrEntityId, chrEntityId2, chrEntityId3) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId, false);
        ForceCharacterDeath(chrEntityId2, false);
        ForceCharacterDeath(chrEntityId3, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacter(chrEntityId3);
        EnableCharacterAI(chrEntityId);
        EnableCharacterAI(chrEntityId3);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, 907540000);
        LinkToBossHealthBar(Disabled, 907540000, 0);
        LinkToBossHealthBar(Enabled, 907540000, chrEntityId);
        LinkToBossHealthBar(Enabled, 907540000, chrEntityId2);
        LinkToBossHealthBar(Enabled, 907540000, chrEntityId3);
        SetBossBGM(754000, BossBGMState.Start);
        EndEvent();
    }
    EnableCharacter(chrEntityId);
    EnableCharacter(chrEntityId3);
    DisableCharacterAI(chrEntityId);
    DisableCharacterAI(chrEntityId3);
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    ForceAnimationPlayback(chrEntityId2, 30005, true, false, false);
    ForceAnimationPlayback(chrEntityId3, 30005, true, false, false);
    WaitFor(EventFlag(7510) || PlayerInMap(19, 0, 0, 0));
    EnableCharacter(chrEntityId);
    EnableCharacter(chrEntityId3);
    DisableCharacterAI(chrEntityId);
    DisableCharacterAI(chrEntityId3);
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    ForceAnimationPlayback(chrEntityId2, 30005, true, false, false);
    ForceAnimationPlayback(chrEntityId3, 30005, true, false, false);
    WaitFor(EventFlag(7511));
    SetBossBGM(754000, BossBGMState.Start);
    ForceAnimationPlayback(chrEntityId, 20029, false, false, false);
    EnableCharacterAI(chrEntityId);
    EnableCharacter(chrEntityId3);
    EnableCharacterAI(chrEntityId3);
    SetCharacterEventTarget(chrEntityId2, chrEntityId);
    SetCharacterEventTarget(chrEntityId3, chrEntityId);
    LinkToBossHealthBar(Disabled, 907540000, 0);
    LinkToBossHealthBar(Enabled, 907540000, chrEntityId);
    LinkToBossHealthBar(Enabled, 907540000, chrEntityId2);
    LinkToBossHealthBar(Enabled, 907540000, chrEntityId3);
    WaitFor(ElapsedSeconds(4));
    if (CharacterHasSpEffect(chrEntityId, 5080)) {
        ForceAnimationPlayback(chrEntityId, 20029, false, false, false);
        WaitFor(ElapsedSeconds(4));
    }
    if (CharacterHasSpEffect(chrEntityId, 5080)) {
        ForceAnimationPlayback(chrEntityId, 20029, false, false, false);
        WaitFor(ElapsedSeconds(4));
    }
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907540000);
    WaitFor(ElapsedSeconds(4));
    if (CharacterHasSpEffect(chrEntityId, 5080)) {
        ForceAnimationPlayback(chrEntityId, 20027, false, false, false);
        WaitFor(ElapsedSeconds(4));
    }
    if (CharacterHasSpEffect(chrEntityId, 5080)) {
        ForceAnimationPlayback(chrEntityId, 20027, false, false, false);
        WaitFor(ElapsedSeconds(4));
    }
});

$Event(90075302, Restart, function(chrEntityId, chrEntityId2) {
    EndIf(EventFlag(7512));
    WaitFor(HPRatio(chrEntityId) <= 0);
    if (CharacterHasSpEffect(chrEntityId2, 45685)) {
        DisableCharacter(chrEntityId2);
    }
    ForceCharacterDeath(chrEntityId2, false);
});

$Event(90075310, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, chrEntityId8, chrEntityId9, chrEntityId10, chrEntityId11, chrEntityId12, chrEntityId13, chrEntityId14, chrEntityId15, chrEntityId16, chrEntityId17, chrEntityId18, chrEntityId19, chrEntityId20, chrEntityId21) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(CharacterHasSpEffect(chrEntityId, 45610) || EventFlag(7512));
    EndIf(EventFlag(7512));
    if (CharacterHasSpEffect(chrEntityId2, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId2, 5906);
    } else if (CharacterHasSpEffect(chrEntityId3, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId3, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId3, 5906);
    } else if (CharacterHasSpEffect(chrEntityId4, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId4, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId4, 5906);
    } else if (CharacterHasSpEffect(chrEntityId5, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId5, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId5, 5906);
    } else if (CharacterHasSpEffect(chrEntityId6, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId6, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId6, 5906);
    } else if (CharacterHasSpEffect(chrEntityId7, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId7, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId7, 5906);
    } else if (CharacterHasSpEffect(chrEntityId8, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId8, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId8, 5906);
    } else if (CharacterHasSpEffect(chrEntityId9, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId9, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId9, 5906);
    } else if (CharacterHasSpEffect(chrEntityId10, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId10, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId10, 5906);
    } else if (CharacterHasSpEffect(chrEntityId11, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId11, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId11, 5906);
    } else if (CharacterHasSpEffect(chrEntityId12, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId12, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId12, 5906);
    } else if (CharacterHasSpEffect(chrEntityId13, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId13, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId13, 5906);
    } else if (CharacterHasSpEffect(chrEntityId14, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId14, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId14, 5906);
    } else if (CharacterHasSpEffect(chrEntityId15, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId15, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId15, 5906);
    } else if (CharacterHasSpEffect(chrEntityId16, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId16, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId16, 5906);
    } else if (CharacterHasSpEffect(chrEntityId17, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId17, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId17, 5906);
    } else if (CharacterHasSpEffect(chrEntityId18, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId18, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId18, 5906);
    } else if (CharacterHasSpEffect(chrEntityId19, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId19, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId19, 5906);
    } else if (CharacterHasSpEffect(chrEntityId20, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId20, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId20, 5906);
    } else if (CharacterHasSpEffect(chrEntityId21, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId21, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId21, 5906);
        Goto(L0);
    }
L0:
    WaitFor(ElapsedSeconds(0.1));
    RestartEvent();
});

$Event(90075311, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, chrEntityId8, chrEntityId9, chrEntityId10, chrEntityId11, chrEntityId12, chrEntityId13, chrEntityId14, chrEntityId15, chrEntityId16, chrEntityId17, chrEntityId18, chrEntityId19, chrEntityId20, chrEntityId21) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(CharacterHasSpEffect(chrEntityId, 45613) || EventFlag(7512));
    EndIf(EventFlag(7512));
    if (CharacterHasSpEffect(chrEntityId2, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId2, 5905);
    } else if (CharacterHasSpEffect(chrEntityId3, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId3, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId3, 5905);
    } else if (CharacterHasSpEffect(chrEntityId4, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId4, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId4, 5905);
    } else if (CharacterHasSpEffect(chrEntityId5, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId5, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId5, 5905);
    } else if (CharacterHasSpEffect(chrEntityId6, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId6, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId6, 5905);
    } else if (CharacterHasSpEffect(chrEntityId7, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId7, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId7, 5905);
    } else if (CharacterHasSpEffect(chrEntityId8, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId8, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId8, 5905);
    } else if (CharacterHasSpEffect(chrEntityId9, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId9, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId9, 5905);
    } else if (CharacterHasSpEffect(chrEntityId10, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId10, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId10, 5905);
    } else if (CharacterHasSpEffect(chrEntityId11, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId11, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId11, 5905);
    } else if (CharacterHasSpEffect(chrEntityId12, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId12, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId12, 5905);
    } else if (CharacterHasSpEffect(chrEntityId13, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId13, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId13, 5905);
    } else if (CharacterHasSpEffect(chrEntityId14, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId14, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId14, 5905);
    } else if (CharacterHasSpEffect(chrEntityId15, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId15, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId15, 5905);
    } else if (CharacterHasSpEffect(chrEntityId16, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId16, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId16, 5905);
    } else if (CharacterHasSpEffect(chrEntityId17, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId17, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId17, 5905);
    } else if (CharacterHasSpEffect(chrEntityId18, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId18, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId18, 5905);
    } else if (CharacterHasSpEffect(chrEntityId19, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId19, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId19, 5905);
    } else if (CharacterHasSpEffect(chrEntityId20, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId20, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId20, 5905);
    } else if (CharacterHasSpEffect(chrEntityId21, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId21, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId21, 5905);
        Goto(L0);
    }
L0:
    WaitFor(ElapsedSeconds(0.1));
    RestartEvent();
});

$Event(90075312, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, chrEntityId8, chrEntityId9, chrEntityId10, chrEntityId11, chrEntityId12, chrEntityId13, chrEntityId14, chrEntityId15, chrEntityId16, chrEntityId17, chrEntityId18, chrEntityId19) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(CharacterHasSpEffect(chrEntityId, 45612) || EventFlag(7512));
    EndIf(EventFlag(7512));
    if (CharacterHasSpEffect(chrEntityId2, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 30, chrEntityId);
        SetSpEffect(chrEntityId2, 5906);
    } else if (CharacterHasSpEffect(chrEntityId8, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId8, TargetEntityType.Character, chrEntityId, 30, chrEntityId);
        SetSpEffect(chrEntityId8, 5906);
    } else if (CharacterHasSpEffect(chrEntityId14, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId14, TargetEntityType.Character, chrEntityId, 30, chrEntityId);
        SetSpEffect(chrEntityId14, 5906);
        Goto(L0);
    }
L0:
    if (CharacterHasSpEffect(chrEntityId3, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId3, TargetEntityType.Character, chrEntityId, 31, chrEntityId);
        SetSpEffect(chrEntityId3, 5906);
    } else if (CharacterHasSpEffect(chrEntityId9, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId9, TargetEntityType.Character, chrEntityId, 31, chrEntityId);
        SetSpEffect(chrEntityId9, 5906);
    } else if (CharacterHasSpEffect(chrEntityId15, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId15, TargetEntityType.Character, chrEntityId, 31, chrEntityId);
        SetSpEffect(chrEntityId15, 5906);
        Goto(L1);
    }
L1:
    if (CharacterHasSpEffect(chrEntityId4, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId4, TargetEntityType.Character, chrEntityId, 32, chrEntityId);
        SetSpEffect(chrEntityId4, 5906);
    } else if (CharacterHasSpEffect(chrEntityId10, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId10, TargetEntityType.Character, chrEntityId, 32, chrEntityId);
        SetSpEffect(chrEntityId10, 5906);
    } else if (CharacterHasSpEffect(chrEntityId16, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId16, TargetEntityType.Character, chrEntityId, 32, chrEntityId);
        SetSpEffect(chrEntityId16, 5906);
        Goto(L2);
    }
L2:
    if (CharacterHasSpEffect(chrEntityId5, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId5, TargetEntityType.Character, chrEntityId, 33, chrEntityId);
        SetSpEffect(chrEntityId5, 5906);
    } else if (CharacterHasSpEffect(chrEntityId11, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId11, TargetEntityType.Character, chrEntityId, 33, chrEntityId);
        SetSpEffect(chrEntityId11, 5906);
    } else if (CharacterHasSpEffect(chrEntityId17, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId17, TargetEntityType.Character, chrEntityId, 33, chrEntityId);
        SetSpEffect(chrEntityId17, 5906);
        Goto(L3);
    }
L3:
    if (CharacterHasSpEffect(chrEntityId6, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId6, TargetEntityType.Character, chrEntityId, 34, chrEntityId);
        SetSpEffect(chrEntityId6, 5906);
    } else if (CharacterHasSpEffect(chrEntityId12, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId12, TargetEntityType.Character, chrEntityId, 34, chrEntityId);
        SetSpEffect(chrEntityId12, 5906);
    } else if (CharacterHasSpEffect(chrEntityId18, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId18, TargetEntityType.Character, chrEntityId, 34, chrEntityId);
        SetSpEffect(chrEntityId18, 5906);
        Goto(L4);
    }
L4:
    if (CharacterHasSpEffect(chrEntityId7, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId7, TargetEntityType.Character, chrEntityId, 35, chrEntityId);
        SetSpEffect(chrEntityId7, 5906);
    } else if (CharacterHasSpEffect(chrEntityId13, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId13, TargetEntityType.Character, chrEntityId, 35, chrEntityId);
        SetSpEffect(chrEntityId13, 5906);
    } else if (CharacterHasSpEffect(chrEntityId19, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId19, TargetEntityType.Character, chrEntityId, 35, chrEntityId);
        SetSpEffect(chrEntityId19, 5906);
        Goto(L5);
    }
L5:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(90075313, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(CharacterHasSpEffect(chrEntityId, 45614) || EventFlag(7512));
    EndIf(EventFlag(7512));
    if (CharacterHasSpEffect(chrEntityId2, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 41, chrEntityId);
        SetSpEffect(chrEntityId2, 5907);
    } else if (CharacterHasSpEffect(chrEntityId3, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId3, TargetEntityType.Character, chrEntityId, 41, chrEntityId);
        SetSpEffect(chrEntityId3, 5907);
    } else if (CharacterHasSpEffect(chrEntityId4, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId4, TargetEntityType.Character, chrEntityId, 41, chrEntityId);
        SetSpEffect(chrEntityId4, 5907);
        Goto(L0);
    }
L0:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(90075320, Restart, function(chrEntityId, chrEntityId2) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(CharacterHasSpEffect(chrEntityId, 45611) || EventFlag(7512));
    EndIf(EventFlag(7512));
    SetSpEffect(chrEntityId2, 5900);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(90075330, Restart, function(chrEntityId) {
    DisableNetworkSync();
    if (!CharacterHasSpEffect(chrEntityId, 5105)) {
        if (CharacterHPValue(chrEntityId) > 0) {
            ChangeWeather(Weather.Type84, -1, true);
        }
    }
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7510) || PlayerInMap(19, 0, 0, 0));
    WaitFor(ElapsedFrames(1));
    if (!CharacterHasSpEffect(chrEntityId, 5105)) {
        if (CharacterHPValue(chrEntityId) > 0) {
            ChangeWeather(Weather.Type84, -1, true);
        }
    }
    WaitFor(PlayerInMap(19, 0, 0, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(7549);
});

$Event(90075340, Restart, function(eventFlagId, eventFlagId2, spEffectId, chrEntityId, spEffectId2, targetAmount) {
    if (!EventFlag(9999)) {
        EndIf(EventFlag(eventFlagId2));
        if (eventFlagId != 0) {
            WaitFor(EventFlag(eventFlagId));
        }
        if (Signed(0) != spEffectId2) {
            WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId2, GreaterOrEqual, 1));
        } else {
            WaitFor(CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount);
        }
    }
    SpawnMapSFX(0);
    ChangeWeather(Weather.Type83, -1, false);
    SetSpEffect(0, spEffectId);
});

$Event(90075350, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    EnableCharacterDefaultBackread(chrEntityId2);
    EnableCharacterDefaultBackread(chrEntityId3);
    EnableCharacterDefaultBackread(chrEntityId4);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId3, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId4, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId2);
    PlaySE(chrEntityId, SoundType.CharacterMotion, 754009500);
    PlaySE(chrEntityId2, SoundType.CharacterMotion, 754009500);
});

$Event(90075351, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, eventFlagId) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId, false);
        ForceCharacterDeath(chrEntityId2, false);
        ForceCharacterDeath(chrEntityId3, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId)) {
        ForceCharacterDeath(chrEntityId, false);
        ForceCharacterDeath(chrEntityId2, false);
        ForceCharacterDeath(chrEntityId3, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacter(chrEntityId3);
        EnableCharacterAI(chrEntityId);
        EnableCharacterAI(chrEntityId3);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, 907540001);
        LinkToBossHealthBar(Disabled, 907540001, 0);
        LinkToBossHealthBar(Enabled, 907540001, chrEntityId);
        LinkToBossHealthBar(Enabled, 907540001, chrEntityId2);
        LinkToBossHealthBar(Enabled, 907540001, chrEntityId3);
        SetBossBGM(754000, BossBGMState.HeatUp);
        EndEvent();
    }
    EnableCharacter(chrEntityId);
    EnableCharacter(chrEntityId3);
    DisableCharacterAI(chrEntityId);
    DisableCharacterAI(chrEntityId3);
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    ForceAnimationPlayback(chrEntityId2, 30005, true, false, false);
    ForceAnimationPlayback(chrEntityId3, 30005, true, false, false);
    WaitFor(EventFlag(7510) || PlayerInMap(19, 0, 0, 0));
    EnableCharacter(chrEntityId);
    EnableCharacter(chrEntityId3);
    DisableCharacterAI(chrEntityId);
    DisableCharacterAI(chrEntityId3);
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    ForceAnimationPlayback(chrEntityId2, 30005, true, false, false);
    ForceAnimationPlayback(chrEntityId3, 30005, true, false, false);
    WaitFor(EventFlag(7511));
    SetBossBGM(754000, BossBGMState.HeatUp);
    ForceAnimationPlayback(chrEntityId, 20027, false, false, false);
    EnableCharacterAI(chrEntityId);
    EnableCharacter(chrEntityId3);
    EnableCharacterAI(chrEntityId3);
    SetCharacterEventTarget(chrEntityId2, chrEntityId);
    SetCharacterEventTarget(chrEntityId3, chrEntityId);
    LinkToBossHealthBar(Disabled, 907540001, 0);
    LinkToBossHealthBar(Enabled, 907540001, chrEntityId);
    LinkToBossHealthBar(Enabled, 907540001, chrEntityId2);
    LinkToBossHealthBar(Enabled, 907540001, chrEntityId3);
    WaitFor(ElapsedSeconds(4));
    if (CharacterHasSpEffect(chrEntityId, 5080)) {
        ForceAnimationPlayback(chrEntityId, 20027, false, false, false);
        WaitFor(ElapsedSeconds(4));
    }
    if (CharacterHasSpEffect(chrEntityId, 5080)) {
        ForceAnimationPlayback(chrEntityId, 20027, false, false, false);
        WaitFor(ElapsedSeconds(4));
    }
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907540001);
    WaitFor(ElapsedSeconds(4));
    if (CharacterHasSpEffect(chrEntityId, 5080)) {
        ForceAnimationPlayback(chrEntityId, 20027, false, false, false);
        WaitFor(ElapsedSeconds(4));
    }
    if (CharacterHasSpEffect(chrEntityId, 5080)) {
        ForceAnimationPlayback(chrEntityId, 20027, false, false, false);
        WaitFor(ElapsedSeconds(4));
    }
});

$Event(90075352, Restart, function(chrEntityId, chrEntityId2, eventFlagId) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (CharacterHPValue(chrEntityId) <= 0) {
        WaitFor(ElapsedFrames(1));
        DisplayBossHealthBar(Disabled, chrEntityId, 0, 907540000);
        LinkToBossHealthBar(Disabled, 907540000, 0);
        LinkToBossHealthBar(Enabled, 907540000, chrEntityId2);
    } else {
        if (EventFlag(eventFlagId)) {
            SetCharacterBackreadState(chrEntityId2, false);
            EnableCharacterDefaultBackread(chrEntityId2);
            EnableCharacter(chrEntityId2);
            EnableCharacterAI(chrEntityId2);
            DisplayBossHealthBar(Enabled, chrEntityId2, 0, 907540000);
            LinkToBossHealthBar(Disabled, 907540000, 0);
            LinkToBossHealthBar(Enabled, 907540000, chrEntityId2);
            SetNetworkconnectedEventFlagID(6301, ON);
            SetBossBGM(754000, BossBGMState.HeatUp2);
            EndEvent();
        }
        SetCharacterBackreadState(chrEntityId2, false);
        EnableCharacterDefaultBackread(chrEntityId2);
        EnableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        ForceAnimationPlayback(chrEntityId2, 30029, true, false, false);
        WaitFor(CharacterHPValue(chrEntityId) <= 0 || EventFlag(eventFlagId));
        WaitFor(ElapsedSeconds(5));
        DisplayBossHealthBar(Disabled, chrEntityId, 0, 907540001);
    }
L0:
    WaitFor(ElapsedSeconds(4.5));
    ForceAnimationPlayback(chrEntityId2, 20029, true, false, false);
    EnableCharacterAI(chrEntityId2);
    WaitFor(ElapsedSeconds(13));
    DisplayBossHealthBar(Enabled, chrEntityId2, 0, 907540000);
    LinkToBossHealthBar(Disabled, 907540000, 0);
    LinkToBossHealthBar(Enabled, 907540000, chrEntityId2);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetNetworkconnectedEventFlagID(6301, ON);
});

$Event(90075360, Restart, function(chrEntityId, spEffectId, npcPartId, npcPartGroupIdx, npcPartHP, lockOnDummypolyId, bitNumber, spEffectId2, spEffectId3, spEffectId4, spEffectId5) {
    if (!CharacterHasSpEffect(chrEntityId, spEffectId5)) {
        DisableLockOnPoint(chrEntityId, lockOnDummypolyId);
    }
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId));
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, npcPartHP, 1, 0.1, false, false);
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, false);
    EnableLockOnPoint(chrEntityId, lockOnDummypolyId);
    ChangeCharacterDispmask(chrEntityId, bitNumber, ON);
    WaitFixedTimeFrames(1);
    WaitFor(
        NPCPartHP(chrEntityId, npcPartId) <= 0
            || CharacterHasSpEffect(chrEntityId, spEffectId2)
            || CharacterHPValue(chrEntityId) <= 0);
    SetSpEffect(chrEntityId, spEffectId3);
    SetSpEffect(chrEntityId, spEffectId4);
    SetNPCPartHP(chrEntityId, npcPartId, 0, false);
    DisableLockOnPoint(chrEntityId, lockOnDummypolyId);
    ChangeCharacterDispmask(chrEntityId, bitNumber, OFF);
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(90075400, Default, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, chrEntityId8, chrEntityId9, chrEntityId10) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    EnableCharacterDefaultBackread(chrEntityId2);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    SetNetworkUpdateRate(chrEntityId3, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId4, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId5, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId6, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId7, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId8, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId9, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId10, true, CharacterUpdateFrequency.Every2Frames);
    WaitFor(PlayerInMap(19, 0, 0, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(-1);
});

$Event(90075401, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    DisableCharacterFadeOnEnable(chrEntityId);
    if (EventFlag(7511)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        DisableCharacterDefaultBackread(chrEntityId);
        EndEvent();
    }
    if (EventFlag(7512)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        DisableCharacterDefaultBackread(chrEntityId);
        EndEvent();
    }
    EnableCharacter(chrEntityId);
    EnableCharacterCollision(chrEntityId);
    EnableCharacterDefaultBackread(chrEntityId);
    WaitFor(EventFlag(eventFlagId));
    DisableCharacterHPBarDisplay(chrEntityId);
    if (EventFlag(eventFlagId2)) {
        ForceAnimationPlayback(chrEntityId, 20010, false, false, false);
    }
    if (EventFlag(eventFlagId3)) {
        ForceAnimationPlayback(chrEntityId, 20011, false, false, false);
    }
    WaitFor(ElapsedSeconds(10));
    DisableCharacter(chrEntityId);
    DisableCharacterDefaultBackread(chrEntityId);
});

$Event(90075402, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
    if (EventFlag(7512)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
        SetBossBGM(756000, BossBGMState.Start);
        DisplayBossHealthBar(Enabled, chrEntityId2, 0, 907550000);
        LinkToBossHealthBar(Disabled, 907550000, 0);
        LinkToBossHealthBar(Enabled, 907550000, chrEntityId2);
        EndEvent();
    }
    DisableCharacter(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    WaitFor(EventFlag(eventFlagId));
    if (EventFlag(eventFlagId2)) {
        WaitFixedTimeSeconds(7);
        ForceAnimationPlayback(chrEntityId2, 20010, false, false, false);
    }
    if (EventFlag(eventFlagId3)) {
        WaitFixedTimeSeconds(3.17);
        ForceAnimationPlayback(chrEntityId2, 20011, false, false, false);
    }
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId2, 0, 907550000);
    LinkToBossHealthBar(Disabled, 907550000, 0);
    LinkToBossHealthBar(Enabled, 907550000, chrEntityId2);
    PlaySE(chrEntityId2, SoundType.BGM, 756000000);
    SetNetworkconnectedEventFlagID(7511, ON);
    WaitFor(CharacterHasSpEffect(chrEntityId, 46215));
    SetBossBGM(756000, BossBGMState.Start);
});

$Event(90075403, Restart, function(entityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    EndIf(EventFlag(7511));
    EndIf(EventFlag(eventFlagId4));
    WaitFor(
        HasDamageType(entityId, 20000, DamageType.Any)
            || EventFlag(eventFlagId)
            || EventFlag(eventFlagId4));
    SetEventFlagID(eventFlagId, ON);
    WaitFixedTimeFrames(1);
    WaitFor(
        HasDamageType(entityId, 20000, DamageType.Any)
            || EventFlag(eventFlagId2)
            || EventFlag(eventFlagId4));
    SetEventFlagID(eventFlagId2, ON);
    WaitFixedTimeFrames(1);
    WaitFor(
        HasDamageType(entityId, 20000, DamageType.Any)
            || EventFlag(eventFlagId3)
            || EventFlag(eventFlagId4));
    SetEventFlagID(eventFlagId3, ON);
    WaitFixedTimeFrames(1);
    EndIf(EventFlag(eventFlagId4));
    SetNetworkconnectedEventFlagID(eventFlagId4, ON);
    SetNetworkconnectedEventFlagID(eventFlagId5, ON);
});

$Event(90075404, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    EndIf(EventFlag(7511));
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId5));
    WaitFor(EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
    WaitFor(EventFlag(eventFlagId) || EventFlag(eventFlagId4));
    EndIf(EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId5, ON);
});

$Event(90075405, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    EndIf(EventFlag(7512));
    EndIf(EventFlag(7511));
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        ((!(CharacterHasTeamType(10002, TeamType.Human)
            || CharacterHasTeamType(10002, TeamType.WhitePhantom))
            || EventFlag(eventFlagId3))
            && (!(CharacterHasTeamType(10003, TeamType.Human)
                || CharacterHasTeamType(10003, TeamType.WhitePhantom))
                || EventFlag(eventFlagId4))
            && (!(CharacterHasTeamType(10004, TeamType.Human)
                || CharacterHasTeamType(10004, TeamType.WhitePhantom))
                || EventFlag(eventFlagId5)))
            || EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(99075406, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    EndIf(EventFlag(7511));
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        EventFlag(eventFlagId2)
            || CharacterHasSpEffect(chrEntityId, 46235)
            || EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId));
    if (!CharacterHasSpEffect(chrEntityId, 46235)) {
        SetSpEffect(chrEntityId, 46235);
    }
    WaitFor(CharacterHasSpEffect(chrEntityId, 46235) || EventFlag(eventFlagId));
    WaitFor(!CharacterHasSpEffect(chrEntityId, 46235) || EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
});

$Event(99075410, Restart, function(chrEntityId) {
    EndIf(EventFlag(7512));
    EndIf(EventFlag(7511));
    WaitFor(EventFlag(7511));
    if (EventFlag(19000700)) {
        SetSpEffect(chrEntityId, 46295);
        SetSpEffect(20000, 46296);
    }
});

$Event(99075420, Restart, function(chrEntityId) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(CharacterHasSpEffect(chrEntityId, 45866) && CharacterHasSpEffect(chrEntityId, 45878));
    SetSpEffect(chrEntityId, 45879);
    WaitFixedTimeFrames(1);
    SetSpEffect(chrEntityId, 45876);
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(99075421, Restart, function(chrEntityId) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(CharacterHasSpEffect(chrEntityId, 45831) && CharacterHasSpEffect(chrEntityId, 45868));
    SetSpEffect(chrEntityId, 45878);
    SetSpEffect(chrEntityId, 45879);
    WaitFixedTimeFrames(1);
    SetSpEffect(chrEntityId, 45877);
    SetSpEffect(chrEntityId, 45832);
    SetSpEffect(chrEntityId, 45851);
    SetSpEffect(chrEntityId, 45870);
    SetSpEffect(chrEntityId, 45871);
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(99075422, Restart, function(chrEntityId, areaEntityId, areaEntityId2, areaEntityId3, areaEntityId4, areaEntityId5, areaEntityId6, areaEntityId7, areaEntityId8, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, chrEntityId8, chrEntityId9) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(
        InArea(chrEntityId, areaEntityId)
            || InArea(chrEntityId, areaEntityId2)
            || InArea(chrEntityId, areaEntityId3)
            || InArea(chrEntityId, areaEntityId4)
            || InArea(chrEntityId, areaEntityId5)
            || InArea(chrEntityId, areaEntityId6)
            || InArea(chrEntityId, areaEntityId7)
            || InArea(chrEntityId, areaEntityId8));
    if (InArea(chrEntityId, areaEntityId)) {
        SetSpEffect(chrEntityId, 49070);
        SetCharacterEventTarget(chrEntityId, chrEntityId2);
        areaTime |= !InArea(chrEntityId, areaEntityId) || ElapsedSeconds(1);
        WaitFor(areaTime);
        RestartEvent();
    }
    if (InArea(chrEntityId, areaEntityId2)) {
        SetSpEffect(chrEntityId, 49070);
        SetCharacterEventTarget(chrEntityId, chrEntityId3);
        areaTime |= !InArea(chrEntityId, areaEntityId2) || ElapsedSeconds(1);
        WaitFor(areaTime);
        RestartEvent();
    }
    if (InArea(chrEntityId, areaEntityId3)) {
        SetSpEffect(chrEntityId, 49070);
        SetCharacterEventTarget(chrEntityId, chrEntityId4);
        areaTime |= !InArea(chrEntityId, areaEntityId3) || ElapsedSeconds(1);
        WaitFor(areaTime);
        RestartEvent();
    }
    if (InArea(chrEntityId, areaEntityId4)) {
        SetSpEffect(chrEntityId, 49070);
        SetCharacterEventTarget(chrEntityId, chrEntityId5);
        areaTime |= !InArea(chrEntityId, areaEntityId4) || ElapsedSeconds(1);
        WaitFor(areaTime);
        RestartEvent();
    }
    if (InArea(chrEntityId, areaEntityId5)) {
        SetSpEffect(chrEntityId, 49070);
        SetCharacterEventTarget(chrEntityId, chrEntityId6);
        areaTime |= !InArea(chrEntityId, areaEntityId5) || ElapsedSeconds(1);
        WaitFor(areaTime);
        RestartEvent();
    }
    if (InArea(chrEntityId, areaEntityId6)) {
        SetSpEffect(chrEntityId, 49070);
        SetCharacterEventTarget(chrEntityId, chrEntityId7);
        areaTime |= !InArea(chrEntityId, areaEntityId6) || ElapsedSeconds(1);
        WaitFor(areaTime);
        RestartEvent();
    }
    if (InArea(chrEntityId, areaEntityId7)) {
        SetSpEffect(chrEntityId, 49070);
        SetCharacterEventTarget(chrEntityId, chrEntityId8);
        areaTime |= !InArea(chrEntityId, areaEntityId7) || ElapsedSeconds(1);
        WaitFor(areaTime);
        RestartEvent();
    }
    if (InArea(chrEntityId, areaEntityId8)) {
        SetSpEffect(chrEntityId, 49070);
        SetCharacterEventTarget(chrEntityId, chrEntityId9);
        areaTime |= !InArea(chrEntityId, areaEntityId8) || ElapsedSeconds(1);
        WaitFor(areaTime);
        RestartEvent();
    }
});

$Event(99075430, Restart, function(chrEntityId) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(
        (PlayerIsInOwnWorld() && BGMCommonState(4, 1)) || CharacterHasSpEffect(chrEntityId, 45880));
    SetSpEffect(chrEntityId, 45880);
    WaitFor(
        (PlayerIsInOwnWorld() && BGMCommonState(4, 0)) || !CharacterHasSpEffect(chrEntityId, 45880));
    SetSpEffect(chrEntityId, 45881);
    RestartEvent();
});

$Event(99075440, Restart, function(eventFlagId, eventFlagId2, spEffectId, chrEntityId, spEffectId2, targetAmount) {
    if (!EventFlag(9999)) {
        EndIf(EventFlag(eventFlagId2));
        if (eventFlagId != 0) {
            WaitFor(EventFlag(eventFlagId));
        }
        if (Signed(0) != spEffectId2) {
            WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId2, GreaterOrEqual, 1));
        } else {
            WaitFor(CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount);
        }
    }
    ChangeWeather(Weather.Type40, -1, false);
    SpawnMapSFX(0);
    SetSpEffect(0, spEffectId);
});

$Event(90075450, Default, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, chrEntityId8, chrEntityId9, chrEntityId10, chrEntityId11, chrEntityId12, chrEntityId13) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    EnableCharacterDefaultBackread(chrEntityId2);
    EnableCharacterDefaultBackread(chrEntityId11);
    EnableCharacterDefaultBackread(chrEntityId12);
    EnableCharacterDefaultBackread(chrEntityId13);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    SetNetworkUpdateRate(chrEntityId3, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId4, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId5, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId6, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId7, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId8, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId9, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId10, true, CharacterUpdateFrequency.Every2Frames);
    WaitFor(PlayerInMap(19, 0, 0, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(-1);
});

$Event(90075452, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
    if (EventFlag(7512)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
        SetBossBGM(756000, BossBGMState.HeatUp);
        DisplayBossHealthBar(Enabled, chrEntityId2, 0, 907550000);
        LinkToBossHealthBar(Disabled, 907550000, 0);
        LinkToBossHealthBar(Enabled, 907550000, chrEntityId2);
        EndEvent();
    }
    DisableCharacter(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    WaitFor(EventFlag(eventFlagId));
    if (EventFlag(eventFlagId2)) {
        WaitFixedTimeSeconds(7);
        ForceAnimationPlayback(chrEntityId2, 20010, false, false, false);
    }
    if (EventFlag(eventFlagId3)) {
        WaitFixedTimeSeconds(3.17);
        ForceAnimationPlayback(chrEntityId2, 20011, false, false, false);
    }
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId2, 0, 907550000);
    LinkToBossHealthBar(Disabled, 907550000, 0);
    LinkToBossHealthBar(Enabled, 907550000, chrEntityId2);
    PlaySE(chrEntityId2, SoundType.BGM, 756000000);
    SetNetworkconnectedEventFlagID(7511, ON);
    WaitFor(CharacterHasSpEffect(chrEntityId, 46215));
    SetBossBGM(756000, BossBGMState.HeatUp);
});

$Event(99075460, Restart, function(playerNo, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6, eventFlagId7, eventFlagId8, eventFlagId9, eventFlagId10) {
    EndIf(!TargetingBoss(TargetBoss.Libra));
    EndIf(!(IsCampaignSession() || IsPlayMode(2)));
    EndIf(AnyBatchEventFlags(eventFlagId, eventFlagId10));
    WaitFor(
        IsPlayerNo(playerNo) || AnyBatchEventFlags(eventFlagId, eventFlagId10) || EventFlag(7521));
    EndIf(AnyBatchEventFlags(eventFlagId, eventFlagId10));
    EndIf(
        !((IsPlayerNo(playerNo) && !EventFlag(7521)) || (PlayerIsInOwnWorld() && EventFlag(7521))));
    flagOnlineChr &= EventFlag(7521) && !PlayerIsInOwnWorld();
    EndIf(flagOnlineChr);
    flagOnlineChr &= !EventFlag(7521) && !IsPlayerNo(playerNo);
    EndIf(flagOnlineChr);
    if (IsHero(Hero.Wylder)) {
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
    }
    if (IsHero(Hero.Guardian)) {
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    }
    if (IsHero(Hero.Ironeye)) {
        SetNetworkconnectedEventFlagID(eventFlagId3, ON);
    }
    if (IsHero(Hero.Duchess)) {
        SetNetworkconnectedEventFlagID(eventFlagId4, ON);
    }
    if (IsHero(Hero.Raider)) {
        SetNetworkconnectedEventFlagID(eventFlagId5, ON);
    }
    if (IsHero(Hero.Revenant)) {
        SetNetworkconnectedEventFlagID(eventFlagId6, ON);
    }
    if (IsHero(Hero.Recluse)) {
        SetNetworkconnectedEventFlagID(eventFlagId7, ON);
    }
    if (IsHero(Hero.Executor)) {
        SetNetworkconnectedEventFlagID(eventFlagId8, ON);
    }
    if (IsHero(Hero.Scholar)) {
        SetNetworkconnectedEventFlagID(eventFlagId9, ON);
    }
    if (IsHero(Hero.Undertaker)) {
        SetNetworkconnectedEventFlagID(eventFlagId10, ON);
    }
});

$Event(99075461, Restart, function(playerNo, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6) {
    EndIf(!TargetingBoss(TargetBoss.Libra));
    EndIf(!(IsCampaignSession() || IsPlayMode(2)));
    EndIf(AnyBatchEventFlags(eventFlagId, eventFlagId6));
    WaitFor(
        IsPlayerNo(playerNo) || AnyBatchEventFlags(eventFlagId, eventFlagId6) || EventFlag(7521));
    EndIf(AnyBatchEventFlags(eventFlagId, eventFlagId6));
    EndIf(
        !((IsPlayerNo(playerNo) && !EventFlag(7521)) || (PlayerIsInOwnWorld() && EventFlag(7521))));
    EndIf(EventFlag(7521) && !PlayerIsInOwnWorld());
    EndIf(!EventFlag(7521) && !IsPlayerNo(playerNo));
    if (CharacterHasSpEffect(20000, 49300)
        || CharacterHasSpEffect(20000, 49310)
        || CharacterHasSpEffect(20000, 49320)
        || CharacterHasSpEffect(20000, 49330)
        || CharacterHasSpEffect(20000, 49340)
        || CharacterHasSpEffect(20000, 49350)
        || CharacterHasSpEffect(20000, 49360)
        || CharacterHasSpEffect(20000, 49370)
        || CharacterHasSpEffect(20000, 49980)
        || CharacterHasSpEffect(20000, 49990)) {
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
    }
    if (CharacterHasSpEffect(20000, 49301)
        || CharacterHasSpEffect(20000, 49311)
        || CharacterHasSpEffect(20000, 49321)
        || CharacterHasSpEffect(20000, 49331)
        || CharacterHasSpEffect(20000, 49341)
        || CharacterHasSpEffect(20000, 49351)
        || CharacterHasSpEffect(20000, 49361)
        || CharacterHasSpEffect(20000, 49371)
        || CharacterHasSpEffect(20000, 49981)
        || CharacterHasSpEffect(20000, 49991)) {
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    }
    if (CharacterHasSpEffect(20000, 49302)
        || CharacterHasSpEffect(20000, 49312)
        || CharacterHasSpEffect(20000, 49322)
        || CharacterHasSpEffect(20000, 49332)
        || CharacterHasSpEffect(20000, 49342)
        || CharacterHasSpEffect(20000, 49352)
        || CharacterHasSpEffect(20000, 49362)
        || CharacterHasSpEffect(20000, 49372)
        || CharacterHasSpEffect(20000, 49982)
        || CharacterHasSpEffect(20000, 49992)) {
        SetNetworkconnectedEventFlagID(eventFlagId3, ON);
    }
    if (CharacterHasSpEffect(20000, 49303)
        || CharacterHasSpEffect(20000, 49313)
        || CharacterHasSpEffect(20000, 49323)
        || CharacterHasSpEffect(20000, 49333)
        || CharacterHasSpEffect(20000, 49343)
        || CharacterHasSpEffect(20000, 49353)
        || CharacterHasSpEffect(20000, 49363)
        || CharacterHasSpEffect(20000, 49373)
        || CharacterHasSpEffect(20000, 49983)
        || CharacterHasSpEffect(20000, 49993)) {
        SetNetworkconnectedEventFlagID(eventFlagId4, ON);
    }
    if (CharacterHasSpEffect(20000, 49304)
        || CharacterHasSpEffect(20000, 49314)
        || CharacterHasSpEffect(20000, 49324)
        || CharacterHasSpEffect(20000, 49334)
        || CharacterHasSpEffect(20000, 49344)
        || CharacterHasSpEffect(20000, 49354)
        || CharacterHasSpEffect(20000, 49364)
        || CharacterHasSpEffect(20000, 49374)
        || CharacterHasSpEffect(20000, 49984)
        || CharacterHasSpEffect(20000, 49994)) {
        SetNetworkconnectedEventFlagID(eventFlagId5, ON);
    }
    if (CharacterHasSpEffect(20000, 49305)
        || CharacterHasSpEffect(20000, 49315)
        || CharacterHasSpEffect(20000, 49325)
        || CharacterHasSpEffect(20000, 49335)
        || CharacterHasSpEffect(20000, 49345)
        || CharacterHasSpEffect(20000, 49355)
        || CharacterHasSpEffect(20000, 49365)
        || CharacterHasSpEffect(20000, 49375)
        || CharacterHasSpEffect(20000, 49985)
        || CharacterHasSpEffect(20000, 49995)) {
        SetNetworkconnectedEventFlagID(eventFlagId6, ON);
    }
});

$Event(99075462, Restart, function(playerNo, eventFlagId, eventFlagId2) {
    EndIf(!TargetingBoss(TargetBoss.Libra));
    EndIf(!(IsCampaignSession() || IsPlayMode(2)));
    EndIf(AnyBatchEventFlags(eventFlagId, eventFlagId2));
    WaitFor(
        IsPlayerNo(playerNo) || AnyBatchEventFlags(eventFlagId, eventFlagId2) || EventFlag(7521));
    EndIf(AnyBatchEventFlags(eventFlagId, eventFlagId2));
    EndIf(
        !((IsPlayerNo(playerNo) && !EventFlag(7521)) || (PlayerIsInOwnWorld() && EventFlag(7521))));
    EndIf(EventFlag(7521) && !PlayerIsInOwnWorld());
    EndIf(!EventFlag(7521) && !IsPlayerNo(playerNo));
    if (IsPlayerNo(playerNo)) {
        RandomlySetNetworkconnectedEventFlagInRange(eventFlagId, eventFlagId2, ON);
    }
    if (EventFlag(7521) && PlayerIsInOwnWorld() && !AnyBatchEventFlags(eventFlagId, eventFlagId2)) {
        RandomlySetNetworkconnectedEventFlagInRange(eventFlagId, eventFlagId2, ON);
    }
});

$Event(99075465, Restart, function(slot, entityId, entityId2, entityId3, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6, eventFlagId7, eventFlagId8, eventFlagId9, eventFlagId10, eventFlagId11, eventFlagId12, eventFlagId13, eventFlagId14, eventFlagId15, eventFlagId16, eventFlagId17, eventFlagId18, eventFlagId19) {
    EndIf(!TargetingBoss(TargetBoss.Libra));
    EndIf(!(IsCampaignSession() || IsPlayMode(2)));
    WaitFor(
        AnyBatchEventFlags(eventFlagId, eventFlagId10)
            && AnyBatchEventFlags(eventFlagId11, eventFlagId16)
            && AnyBatchEventFlags(eventFlagId17, eventFlagId19));
    if (EventFlag(eventFlagId)) {
        if (EventFlag(eventFlagId11)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035000, 30000, 35000);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035000, 30000, 35010);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035000, 30000, 35020);
            }
        }
        if (EventFlag(eventFlagId12)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035001, 30000, 35001);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035001, 30000, 35011);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035001, 30000, 35021);
            }
        }
        if (EventFlag(eventFlagId13)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035002, 30000, 35002);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035002, 30000, 35012);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035002, 30000, 35022);
            }
        }
        if (EventFlag(eventFlagId14)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035003, 30000, 35003);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035003, 30000, 35013);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035003, 30000, 35023);
            }
        }
        if (EventFlag(eventFlagId15)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035004, 30000, 35004);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035004, 30000, 35014);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035004, 30000, 35024);
            }
        }
        if (EventFlag(eventFlagId16)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035005, 30000, 35005);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035005, 30000, 35015);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035005, 30000, 35025);
            }
        }
    }
L0:
    if (EventFlag(eventFlagId2)) {
        if (EventFlag(eventFlagId11)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035100, 30010, 35100);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035100, 30010, 35110);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035100, 30010, 35120);
            }
        }
        if (EventFlag(eventFlagId12)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035101, 30010, 35101);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035101, 30010, 35111);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035101, 30010, 35121);
            }
        }
        if (EventFlag(eventFlagId13)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035102, 30010, 35102);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035102, 30010, 35112);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035102, 30010, 35122);
            }
        }
        if (EventFlag(eventFlagId14)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035103, 30010, 35103);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035103, 30010, 35113);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035103, 30010, 35123);
            }
        }
        if (EventFlag(eventFlagId15)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035104, 30010, 35104);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035104, 30010, 35114);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035104, 30010, 35124);
            }
        }
        if (EventFlag(eventFlagId16)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035105, 30010, 35105);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035105, 30010, 35115);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035105, 30010, 35125);
            }
        }
    }
L1:
    if (EventFlag(eventFlagId3)) {
        if (EventFlag(eventFlagId11)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035200, 30020, 35200);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035200, 30020, 35210);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035200, 30020, 35220);
            }
        }
        if (EventFlag(eventFlagId12)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035201, 30020, 35201);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035201, 30020, 35211);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035201, 30020, 35221);
            }
        }
        if (EventFlag(eventFlagId13)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035202, 30020, 35202);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035202, 30020, 35212);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035202, 30020, 35222);
            }
        }
        if (EventFlag(eventFlagId14)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035203, 30020, 35203);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035203, 30020, 35213);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035203, 30020, 35223);
            }
        }
        if (EventFlag(eventFlagId15)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035204, 30020, 35204);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035204, 30020, 35214);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035204, 30020, 35224);
            }
        }
        if (EventFlag(eventFlagId16)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035205, 30020, 35205);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035205, 30020, 35215);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035205, 30020, 35225);
            }
        }
    }
L2:
    if (EventFlag(eventFlagId4)) {
        if (EventFlag(eventFlagId11)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035300, 30030, 35300);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035300, 30030, 35310);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035300, 30030, 35320);
            }
        }
        if (EventFlag(eventFlagId12)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035301, 30030, 35301);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035301, 30030, 35311);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035301, 30030, 35321);
            }
        }
        if (EventFlag(eventFlagId13)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035302, 30030, 35302);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035302, 30030, 35312);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035302, 30030, 35322);
            }
        }
        if (EventFlag(eventFlagId14)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035303, 30030, 35303);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035303, 30030, 35313);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035303, 30030, 35323);
            }
        }
        if (EventFlag(eventFlagId15)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035304, 30030, 35304);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035304, 30030, 35314);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035304, 30030, 35324);
            }
        }
        if (EventFlag(eventFlagId16)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035305, 30030, 35305);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035305, 30030, 35315);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035305, 30030, 35325);
            }
        }
    }
L3:
    if (EventFlag(eventFlagId5)) {
        if (EventFlag(eventFlagId11)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035400, 30040, 35400);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035400, 30040, 35410);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035400, 30040, 35420);
            }
        }
        if (EventFlag(eventFlagId12)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035401, 30040, 35401);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035401, 30040, 35411);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035401, 30040, 35421);
            }
        }
        if (EventFlag(eventFlagId13)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035402, 30040, 35402);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035402, 30040, 35412);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035402, 30040, 35422);
            }
        }
        if (EventFlag(eventFlagId14)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035403, 30040, 35403);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035403, 30040, 35413);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035403, 30040, 35423);
            }
        }
        if (EventFlag(eventFlagId15)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035404, 30040, 35404);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035404, 30040, 35414);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035404, 30040, 35424);
            }
        }
        if (EventFlag(eventFlagId16)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035405, 30040, 35405);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035405, 30040, 35415);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035405, 30040, 35425);
            }
        }
    }
L4:
    if (EventFlag(eventFlagId6)) {
        if (EventFlag(eventFlagId11)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035500, 30050, 35500);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035500, 30050, 35510);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035500, 30050, 35520);
            }
        }
        if (EventFlag(eventFlagId12)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035501, 30050, 35501);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035501, 30050, 35511);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035501, 30050, 35521);
            }
        }
        if (EventFlag(eventFlagId13)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035502, 30050, 35502);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035502, 30050, 35512);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035502, 30050, 35522);
            }
        }
        if (EventFlag(eventFlagId14)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035503, 30050, 35503);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035503, 30050, 35513);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035503, 30050, 35523);
            }
        }
        if (EventFlag(eventFlagId15)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035504, 30050, 35504);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035504, 30050, 35514);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035504, 30050, 35524);
            }
        }
        if (EventFlag(eventFlagId16)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035505, 30050, 35505);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035505, 30050, 35515);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035505, 30050, 35525);
            }
        }
    }
L5:
    if (EventFlag(eventFlagId7)) {
        if (EventFlag(eventFlagId11)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035600, 30060, 35600);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035600, 30060, 35610);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035600, 30060, 35620);
            }
        }
        if (EventFlag(eventFlagId12)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035601, 30060, 35601);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035601, 30060, 35611);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035601, 30060, 35621);
            }
        }
        if (EventFlag(eventFlagId13)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035602, 30060, 35602);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035602, 30060, 35612);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035602, 30060, 35622);
            }
        }
        if (EventFlag(eventFlagId14)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035603, 30060, 35603);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035603, 30060, 35613);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035603, 30060, 35623);
            }
        }
        if (EventFlag(eventFlagId15)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035604, 30060, 35604);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035604, 30060, 35614);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035604, 30060, 35624);
            }
        }
        if (EventFlag(eventFlagId16)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035605, 30060, 35605);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035605, 30060, 35615);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035605, 30060, 35625);
            }
        }
    }
L6:
    if (EventFlag(eventFlagId8)) {
        if (EventFlag(eventFlagId11)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035700, 30070, 35700);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035700, 30070, 35710);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035700, 30070, 35720);
            }
        }
        if (EventFlag(eventFlagId12)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035701, 30070, 35701);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035701, 30070, 35711);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035701, 30070, 35721);
            }
        }
        if (EventFlag(eventFlagId13)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035702, 30070, 35702);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035702, 30070, 35712);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035702, 30070, 35722);
            }
        }
        if (EventFlag(eventFlagId14)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035703, 30070, 35703);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035703, 30070, 35713);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035703, 30070, 35723);
            }
        }
        if (EventFlag(eventFlagId15)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035704, 30070, 35704);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035704, 30070, 35714);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035704, 30070, 35724);
            }
        }
        if (EventFlag(eventFlagId16)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035705, 30070, 35705);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035705, 30070, 35715);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035705, 30070, 35725);
            }
        }
    }
L7:
    if (EventFlag(eventFlagId9)) {
        if (EventFlag(eventFlagId11)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035800, 30080, 35800);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035800, 30080, 35810);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035800, 30080, 35820);
            }
        }
        if (EventFlag(eventFlagId12)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035801, 30080, 35801);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035801, 30080, 35811);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035801, 30080, 35821);
            }
        }
        if (EventFlag(eventFlagId13)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035802, 30080, 35802);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035802, 30080, 35812);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035802, 30080, 35822);
            }
        }
        if (EventFlag(eventFlagId14)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035803, 30080, 35803);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035803, 30080, 35813);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035803, 30080, 35823);
            }
        }
        if (EventFlag(eventFlagId15)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035804, 30080, 35804);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035804, 30080, 35814);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035804, 30080, 35824);
            }
        }
        if (EventFlag(eventFlagId16)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035805, 30080, 35805);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035805, 30080, 35815);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035805, 30080, 35825);
            }
        }
    }
L8:
    if (EventFlag(eventFlagId10)) {
        if (EventFlag(eventFlagId11)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035900, 30090, 35900);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035900, 30090, 35910);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035900, 30090, 35920);
            }
        }
        if (EventFlag(eventFlagId12)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035901, 30090, 35901);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035901, 30090, 35911);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035901, 30090, 35921);
            }
        }
        if (EventFlag(eventFlagId13)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035902, 30090, 35902);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035902, 30090, 35912);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035902, 30090, 35922);
            }
        }
        if (EventFlag(eventFlagId14)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035903, 30090, 35903);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035903, 30090, 35913);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035903, 30090, 35923);
            }
        }
        if (EventFlag(eventFlagId15)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035904, 30090, 35904);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035904, 30090, 35914);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035904, 30090, 35924);
            }
        }
        if (EventFlag(eventFlagId16)) {
            if (EventFlag(eventFlagId17)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035905, 30090, 35905);
            }
            if (EventFlag(eventFlagId18)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035905, 30090, 35915);
            }
            if (EventFlag(eventFlagId19)) {
                OverrideCharacterCreateData(slot, entityId, entityId2, entityId3, 700035905, 30090, 35925);
            }
        }
    }
L9:
    NoOp();
});

$Event(99075466, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, dummypolyId, generatorEntityId, eventFlagId, eventFlagId2) {
    EndIf(CharacterHPValue(chrEntityId) <= 0);
    if (EventFlag(eventFlagId2)) {
        SetCharacterBackreadState(chrEntityId3, false);
        EnableCharacter(chrEntityId3);
        EnableCharacterCollision(chrEntityId3);
        EnableCharacterAI(chrEntityId3);
    } else if (!CharacterDead(chrEntityId3)) {
        if (IsPlayerNo(1)) {
            WaitFor(HPRatio(chrEntityId3) > 0);
        }
        if (IsPlayerNo(2)) {
            WaitFor(HPRatio(chrEntityId3) > 0);
        }
        if (IsPlayerNo(3)) {
            WaitFor(HPRatio(chrEntityId3) > 0);
        }
        SetCharacterBackreadState(chrEntityId3, false);
        DisableCharacterCollision(chrEntityId3);
        DisableCharacterAI(chrEntityId3);
        ForceAnimationPlayback(chrEntityId3, 60507, false, false, false);
        if (!EventFlag(eventFlagId)) {
            DisableCharacter(chrEntityId3);
        }
        if (EventFlag(eventFlagId)) {
            WaitFor(CharacterHasSpEffect(chrEntityId, 49135));
        }
        WaitFor(
            (CharacterHasSpEffect(chrEntityId, 49100)
                && (CharacterHasTeamType(chrEntityId2, TeamType.Human)
                    || CharacterHasTeamType(chrEntityId2, TeamType.WhitePhantom)
                    || CharacterHasTeamType(chrEntityId2, TeamType.Indiscriminate)
                    || CharacterHasTeamType(chrEntityId2, TeamType.Unknown77)
                    || CharacterHasTeamType(chrEntityId2, TeamType.Disabled)
                    || EventFlag(eventFlagId)))
                || CharacterHPValue(chrEntityId) <= 0);
        EndIf(CharacterHPValue(chrEntityId) <= 0);
        EnableCharacter(chrEntityId3);
        EnableCharacterCollision(chrEntityId3);
        EnableCharacterAI(chrEntityId3);
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId3, TargetEntityType.Character, chrEntityId, dummypolyId, chrEntityId, -1, -1);
        ForceAnimationPlayback(chrEntityId3, 60506, false, false, false);
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
        WaitFor(ElapsedSeconds(2.4));
    }
L0:
    WaitFor(CharacterDead(chrEntityId3));
    WaitFor(ElapsedSeconds(10) || !EventFlag(eventFlagId2));
    SetNetworkconnectedEventFlagID(eventFlagId2, OFF);
    InvokeEnemyGenerator(generatorEntityId);
    if (IsPlayerNo(1)) {
        WaitFor(!EventFlag(eventFlagId2));
        RestartEvent();
    }
    if (IsPlayerNo(2)) {
        WaitFor(!EventFlag(eventFlagId2));
        RestartEvent();
    }
    if (IsPlayerNo(3)) {
        WaitFor(!EventFlag(eventFlagId2));
        RestartEvent();
    }
});

$Event(99075467, Restart, function(chrEntityId, chrEntityId2, eventFlagId) {
    hp = CharacterHPValue(chrEntityId) <= 0;
    if (!mainGroupAbuse) {
        DisableCharacter(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    WaitFor(CharacterHPValue(chrEntityId) <= 0);
    if (!EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId2);
    }
    if (EventFlag(eventFlagId)) {
        SetSpEffect(chrEntityId2, 49118);
    }
    WaitFor(ElapsedFrames(5));
    ForceCharacterDeath(chrEntityId2, false);
});

$Event(99075468, Restart, function(chrEntityId, chrEntityId2, dummypolyId, generatorEntityId, eventFlagId, eventFlagId2) {
    EndIf(CharacterHPValue(chrEntityId) <= 0);
    if (EventFlag(eventFlagId2)) {
        SetCharacterBackreadState(chrEntityId2, false);
        EnableCharacter(chrEntityId2);
        EnableCharacterCollision(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
    } else if (!CharacterDead(chrEntityId2)) {
        if (IsPlayerNo(1)) {
            WaitFor(HPRatio(chrEntityId2) > 0);
        }
        if (IsPlayerNo(2)) {
            WaitFor(HPRatio(chrEntityId2) > 0);
        }
        if (IsPlayerNo(3)) {
            WaitFor(HPRatio(chrEntityId2) > 0);
        }
        SetCharacterBackreadState(chrEntityId2, false);
        DisableCharacterCollision(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        ForceAnimationPlayback(chrEntityId2, 60507, false, false, false);
        if (!EventFlag(eventFlagId)) {
            DisableCharacter(chrEntityId2);
        }
        WaitFor(
            (CharacterHasSpEffect(chrEntityId, 49691) && EventFlag(eventFlagId))
                || CharacterHPValue(chrEntityId) <= 0);
        EndIf(CharacterHPValue(chrEntityId) <= 0);
        EnableCharacter(chrEntityId2);
        EnableCharacterCollision(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId, dummypolyId, chrEntityId, -1, -1);
        ForceAnimationPlayback(chrEntityId2, 60506, false, false, false);
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
        WaitFor(ElapsedSeconds(2.4));
    }
L0:
    WaitFor(!CharacterHasSpEffect(chrEntityId, 49691));
    WaitFor(CharacterDead(chrEntityId2));
    WaitFor(ElapsedSeconds(10) || !EventFlag(eventFlagId2));
    SetNetworkconnectedEventFlagID(eventFlagId2, OFF);
    InvokeEnemyGenerator(generatorEntityId);
    if (IsPlayerNo(1)) {
        WaitFor(!EventFlag(eventFlagId2));
        RestartEvent();
    }
    if (IsPlayerNo(2)) {
        WaitFor(!EventFlag(eventFlagId2));
        RestartEvent();
    }
    if (IsPlayerNo(3)) {
        WaitFor(!EventFlag(eventFlagId2));
        RestartEvent();
    }
    RestartEvent();
});

$Event(99075470, Restart, function(chrEntityId, spEffectId, textEffectParamId) {
    DisableNetworkSync();
    EndIf(CharacterHPValue(chrEntityId) <= 0);
    if (!CharacterHasSpEffect(chrEntityId, spEffectId)) {
        WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId));
        DisplayTextEffectId(textEffectParamId);
    }
L0:
    WaitFor(!CharacterHasSpEffect(chrEntityId, spEffectId));
    RestartEvent();
});

$Event(99075471, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6) {
    DisableNetworkSync();
    EndIf(CharacterHPValue(chrEntityId) <= 0);
    if (!CharacterHasSpEffect(chrEntityId, 49100)) {
        WaitFor(CharacterHasSpEffect(chrEntityId, 49100));
        DisplayTextEffectId(8000);
        WaitFor(ElapsedSeconds(5));
    }
L0:
    WaitFor(CharacterHasSpEffect(chrEntityId, 49135));
    if (EventFlag(eventFlagId)) {
        flag |= !EventFlag(eventFlagId2);
    }
    if (EventFlag(eventFlagId3)) {
        flag |= !EventFlag(eventFlagId4);
    }
    if (EventFlag(eventFlagId5)) {
        flag |= !EventFlag(eventFlagId6);
    }
    if (flag) {
        DisplayTextEffectId(8000);
    }
    WaitFor(ElapsedSeconds(5));
    RestartEvent();
});

$Event(99075480, Restart, function(chrEntityId, chrEntityId2, spEffectId, spEffectId2, spEffectId3, spEffectId4, value) {
    DisableNetworkSync();
    EndIf(CharacterHPValue(chrEntityId) <= 0);
    spCmp |= CharacterHasSpEffect(chrEntityId, spEffectId);
    cmpSp &= value != 0;
    sp |= CharacterHasSpEffect(chrEntityId2, spEffectId2);
    if (Signed(spEffectId3) != 0) {
        sp |= CharacterHasSpEffect(chrEntityId2, spEffectId3);
    }
    cmpSp &= sp;
    spCmp |= cmpSp;
    WaitFor(spCmp);
    if (CharacterHasSpEffect(chrEntityId, spEffectId)) {
        SetSpEffect(chrEntityId2, spEffectId2);
    }
    spHp |= !CharacterHasSpEffect(chrEntityId, spEffectId);
    sp2 &= !CharacterHasSpEffect(chrEntityId2, spEffectId2);
    if (Signed(spEffectId3) != 0) {
        sp2 &= !CharacterHasSpEffect(chrEntityId2, spEffectId3);
    }
    spHp |= sp2 || CharacterHPValue(chrEntityId) <= 0;
    WaitFor(spHp);
    if (!CharacterHasSpEffect(chrEntityId, spEffectId) || CharacterHPValue(chrEntityId) <= 0) {
        SetSpEffect(chrEntityId2, spEffectId4);
    }
    RestartEvent();
});

$Event(99075481, Restart, function(chrEntityId, chrEntityId2) {
    DisableNetworkSync();
    EndIf(CharacterHPValue(chrEntityId) <= 0);
    WaitFor(
        (CharacterHasTeamType(chrEntityId2, TeamType.Human)
            || CharacterHasTeamType(chrEntityId2, TeamType.WhitePhantom)
            || CharacterHasTeamType(chrEntityId2, TeamType.Indiscriminate)
            || CharacterHasTeamType(chrEntityId2, TeamType.Unknown77)
            || CharacterHasTeamType(chrEntityId2, TeamType.Disabled))
            && (CharacterHasSpEffect(chrEntityId, 49690) || CharacterHasSpEffect(chrEntityId2, 49700)));
    if (CharacterHasSpEffect(chrEntityId, 49690)) {
        SetSpEffect(chrEntityId2, 49700);
    }
    WaitFor(
        !CharacterHasSpEffect(chrEntityId, 49690)
            || !CharacterHasSpEffect(chrEntityId2, 49700)
            || CharacterHPValue(chrEntityId) <= 0);
    if (!CharacterHasSpEffect(chrEntityId, 49690) || CharacterHPValue(chrEntityId) <= 0) {
        SetSpEffect(chrEntityId2, 49701);
    }
    RestartEvent();
});

$Event(99075482, Restart, function(chrEntityId) {
    DisableNetworkSync();
    EndIf(CharacterHPValue(chrEntityId) <= 0);
    WaitFor(PlayersSoulLevel() >= 2);
    WaitFor(CharacterHasSpEffect(20000, 49758) || PlayersSoulLevel() <= 1);
    RestartIf(PlayersSoulLevel() == 1);
    DisplayTextEffectId(3107);
    WaitFor(!CharacterHasSpEffect(20000, 49758));
    RestartEvent();
});

$Event(99075483, Restart, function(chrEntityId) {
    DisableNetworkSync();
    EndIf(CharacterHPValue(chrEntityId) <= 0);
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 49695)
            || CharacterHasSpEffect(20000, 49753)
            || CharacterHasSpEffect(20000, 49754)
            || CharacterHasSpEffect(20000, 46755));
    if (CharacterHasSpEffect(chrEntityId, 49695)) {
        SetSpEffect(20000, 49753);
    }
    WaitFor(!CharacterHasSpEffect(chrEntityId, 49695) || CharacterHPValue(chrEntityId) <= 0);
    if (!CharacterHasSpEffect(chrEntityId, 49695) || CharacterHPValue(chrEntityId) <= 0) {
        SetSpEffect(20000, 49757);
    }
    RestartEvent();
});

$Event(99075485, Restart, function(chrEntityId, eventFlagId) {
    EndIf(EventFlag(7512));
    WaitFor(CharacterHasSpEffect(chrEntityId, 5106));
    WaitFor(
        PlayerIsInOwnWorld() && BGMCommonState(4, 0) && !CharacterHasSpEffect(chrEntityId, 49420));
    WaitFor(PlayerIsInOwnWorld() && BGMCommonState(4, 1));
    if (HPRatio(chrEntityId) <= 0.4) {
        flag |= EventValue(eventFlagId, 2) >= 1;
    } else if (HPRatio(chrEntityId) <= 0.6) {
        flag |= EventValue(eventFlagId, 2) >= 1;
    } else {
        flag |= EventValue(eventFlagId, 2) >= 2;
        Goto(L0);
    }
L0:
    if (flag) {
        ClearEventValue(eventFlagId, 2);
        SetSpEffect(chrEntityId, 49420);
        WaitFor(ElapsedFrames(1));
        RestartEvent();
    }
    IncrementNetworkconnectedEventValue(eventFlagId, 2, 3);
    RestartEvent();
});

$Event(99075486, Restart, function(chrEntityId) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(ElapsedSeconds(5));
    WaitFor(!BossBGMPlaying(756000));
    WaitFor(ElapsedSeconds(1));
    EndIf(EventFlag(7512));
    if (CharacterHasSpEffect(chrEntityId, 5106)) {
        SetBossBGM(756000, BossBGMState.HeatUp2);
        RestartEvent();
    }
    SetBossBGM(756000, BossBGMState.HeatUp);
    RestartEvent();
});

$Event(90075500, Restart, function(chrEntityId) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    WaitFor(PlayerInMap(19, 0, 0, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(-1);
});

$Event(90075501, Restart, function(chrEntityId) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, 907610000);
        LinkToBossHealthBar(Disabled, 907610000, 0);
        LinkToBossHealthBar(Enabled, 907610000, chrEntityId);
        SetBossBGM(760000, BossBGMState.Start);
        EndEvent();
    }
    EnableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    WaitFor(EventFlag(7511));
    SetBossBGM(760000, BossBGMState.Start);
    ForceAnimationPlayback(chrEntityId, 20029, false, false, false);
    EnableCharacterAI(chrEntityId);
    LinkToBossHealthBar(Disabled, 907610000, 0);
    LinkToBossHealthBar(Enabled, 907610000, chrEntityId);
    WaitFor(ElapsedSeconds(4));
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907610000);
});

$Event(90075510, Restart, function(chrEntityId) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    if (IsPlayerNo(1)) {
        SetSpEffect(20000, 46330);
    }
    if (IsPlayerNo(2)) {
        SetSpEffect(20000, 46331);
    }
    if (IsPlayerNo(3)) {
        SetSpEffect(20000, 46332);
    }
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 46305)
            && !CharacterHasSpEffect(chrEntityId, 46306)
            && HasDamageType(chrEntityId, 20000, DamageType.Any));
    SetSpEffect(20000, 46326);
    WaitFor(
        CharacterHasSpEffect(20000, 46328)
            || CharacterHasSpEffect(20000, 46329)
            || CharacterHasSpEffect(chrEntityId, 46320));
    if (CharacterHasSpEffect(chrEntityId, 46320)) {
        SetSpEffect(20000, 46321);
        RestartEvent();
    }
    WaitFor(
        (!CharacterHasSpEffect(20000, 46328) && !CharacterHasSpEffect(20000, 46329))
            || CharacterHasSpEffect(chrEntityId, 46320));
    if (CharacterHasSpEffect(chrEntityId, 46320)) {
        SetSpEffect(20000, 46321);
    }
    RestartEvent();
});

$Event(90075520, Restart, function(eventFlagId, eventFlagId2, spEffectId, chrEntityId, spEffectId2, targetAmount) {
    if (!EventFlag(9999)) {
        EndIf(EventFlag(eventFlagId2));
        if (eventFlagId != 0) {
            WaitFor(EventFlag(eventFlagId));
        }
        if (Signed(0) != spEffectId2) {
            WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId2, GreaterOrEqual, 1));
        } else {
            WaitFor(CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount);
        }
    }
    ChangeWeather(Weather.Type30, -1, false);
    SpawnMapSFX(0);
    SetSpEffect(0, spEffectId);
});

$Event(90075551, Restart, function(chrEntityId) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, 907610000);
        LinkToBossHealthBar(Disabled, 907610000, 0);
        LinkToBossHealthBar(Enabled, 907610000, chrEntityId);
        SetBossBGM(760000, BossBGMState.HeatUp);
        EndEvent();
    }
    EnableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    WaitFor(EventFlag(7511));
    SetSpEffect(chrEntityId, 5108);
    SetBossBGM(760000, BossBGMState.HeatUp);
    ForceAnimationPlayback(chrEntityId, 20030, false, false, false);
    EnableCharacterAI(chrEntityId);
    LinkToBossHealthBar(Disabled, 907610000, 0);
    LinkToBossHealthBar(Enabled, 907610000, chrEntityId);
    WaitFor(ElapsedSeconds(4));
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907610000);
});

$Event(90075600, Restart, function(chrEntityId, entityId) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    SetEventPoint(chrEntityId, entityId, 0);
    DisableLockOnPoint(chrEntityId, 220);
    WaitFor(PlayerInMap(19, 0, 0, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(4900);
});

$Event(90075601, Restart, function(chrEntityId) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, 907620000);
        LinkToBossHealthBar(Disabled, 907620000, 0);
        LinkToBossHealthBar(Enabled, 907620000, chrEntityId);
        SetBossBGM(490000, BossBGMState.Start);
        EndEvent();
    }
    EnableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    DisableLockOnPoint(chrEntityId, 221);
    DisableLockOnPoint(chrEntityId, 222);
    DisableLockOnPoint(chrEntityId, 223);
    DisableLockOnPoint(chrEntityId, 224);
    WaitFor(EventFlag(7510) || EventFlag(7511) || PlayerInMap(19, 0, 0, 0));
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    EnableCharacterAI(chrEntityId);
    ActivateGparamOverride(4, 0);
    WaitFor(EventFlag(7511));
    SetBossBGM(490000, BossBGMState.Start);
    ForceAnimationPlayback(chrEntityId, 20029, false, false, false);
    EnableLockOnPoint(chrEntityId, 221);
    EnableLockOnPoint(chrEntityId, 222);
    EnableLockOnPoint(chrEntityId, 223);
    EnableLockOnPoint(chrEntityId, 224);
    DeactivateGparamOverride(3);
    LinkToBossHealthBar(Disabled, 907620000, 0);
    LinkToBossHealthBar(Enabled, 907620000, chrEntityId);
    WaitFor(ElapsedSeconds(2.5));
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907620000);
});

$Event(90075602, Restart, function(chrEntityId) {
    EndIf(EventFlag(chrEntityId));
    WaitFor(ElapsedFrames(1));
    WaitFor(CharacterHasSpEffect(chrEntityId, 47055));
    ActivateGparamOverride(4, 3);
    WaitFixedTimeFrames(1);
    WaitFor(CharacterHasSpEffect(chrEntityId, 47056) || HPRatio(chrEntityId) <= 0);
    DeactivateGparamOverride(3);
    RestartEvent();
});

$Event(90075610, Restart, function(chrEntityId) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 47040)
            || CharacterHasSpEffect(chrEntityId, 47041)
            || CharacterHasSpEffect(chrEntityId, 47042));
    UnknownSound201013(1);
    WaitFor(
        !CharacterHasSpEffect(chrEntityId, 47040)
            && !CharacterHasSpEffect(chrEntityId, 47041)
            && !CharacterHasSpEffect(chrEntityId, 47042));
    UnknownSound201013(0);
    RestartEvent();
});

$Event(99075620, Restart, function(eventFlagId, eventFlagId2, spEffectId, chrEntityId, spEffectId2, targetAmount) {
    if (!EventFlag(9999)) {
        EndIf(EventFlag(eventFlagId2));
        if (eventFlagId != 0) {
            WaitFor(EventFlag(eventFlagId));
        }
        if (Signed(0) != spEffectId2) {
            WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId2, GreaterOrEqual, 1));
        } else {
            WaitFor(CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount);
        }
    }
    ChangeWeather(Weather.Type50, -1, false);
    SpawnMapSFX(0);
    SetSpEffect(0, spEffectId);
});

$Event(90075651, Restart, function(chrEntityId) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, 907620000);
        LinkToBossHealthBar(Disabled, 907620000, 0);
        LinkToBossHealthBar(Enabled, 907620000, chrEntityId);
        if (CharacterHasSpEffect(chrEntityId, 5106)) {
            SetBossBGM(490000, BossBGMState.HeatUp2);
            EndEvent();
        }
        if (CharacterHasSpEffect(chrEntityId, 5105)) {
            SetBossBGM(490000, BossBGMState.HeatUp);
            EndEvent();
        }
        EndEvent();
    }
    EnableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    DisableLockOnPoint(chrEntityId, 221);
    DisableLockOnPoint(chrEntityId, 222);
    DisableLockOnPoint(chrEntityId, 223);
    DisableLockOnPoint(chrEntityId, 224);
    WaitFor(EventFlag(7510) || EventFlag(7511) || PlayerInMap(19, 0, 0, 0));
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    EnableCharacterAI(chrEntityId);
    ActivateGparamOverride(4, 0);
    WaitFor(EventFlag(7511));
    ForceAnimationPlayback(chrEntityId, 20029, false, false, false);
    EnableLockOnPoint(chrEntityId, 221);
    EnableLockOnPoint(chrEntityId, 222);
    EnableLockOnPoint(chrEntityId, 223);
    EnableLockOnPoint(chrEntityId, 224);
    DeactivateGparamOverride(3);
    LinkToBossHealthBar(Disabled, 907620000, 0);
    LinkToBossHealthBar(Enabled, 907620000, chrEntityId);
    WaitFor(ElapsedSeconds(2.5));
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907620000);
});

$Event(90075652, Restart, function(chrEntityId, spEffectId, spEffectId2) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    EndIf(CharacterHasSpEffect(chrEntityId, spEffectId2));
    WaitFor(EventFlag(7511));
    WaitFor(
        CharacterHasSpEffect(chrEntityId, spEffectId)
            || CharacterHasSpEffect(chrEntityId, spEffectId2)
            || EventFlag(7512));
    EndIf(CharacterHasSpEffect(chrEntityId, spEffectId2));
    EndIf(EventFlag(7512));
    SetBossBGM(490000, BossBGMState.HeatUp);
    WaitFor(
        !BossBGMPlaying(490000) || CharacterHasSpEffect(chrEntityId, spEffectId2) || EventFlag(7512));
    EndIf(CharacterHasSpEffect(chrEntityId, spEffectId2));
    EndIf(EventFlag(7512));
    RestartEvent();
});

$Event(90075660, Restart, function(chrEntityId, spEffectId, spEffectId2, spEffectId3, bitNumber, npcPartHP, npcPartId, npcPartGroupIdx, npcPartId2, npcPartGroupIdx2, npcPartId3, npcPartGroupIdx3, npcPartId4, npcPartGroupIdx4, npcPartId5, npcPartGroupIdx5) {
    EndIf(EventFlag(7512));
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId) || CharacterHPValue(chrEntityId) <= 0);
    EndIf(CharacterHPValue(chrEntityId) <= 0);
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, npcPartHP, 1, 0.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 181, 181, 139, 139, 0);
    if (Signed(npcPartId2) != 0) {
        CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx2, npcPartHP, 1, 0.5, false, false);
        SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 181, 181, 139, 139, 0);
    }
    if (Signed(npcPartId3) != 0) {
        CreateNPCPart(chrEntityId, npcPartId3, npcPartGroupIdx3, npcPartHP, 1, 0.5, false, false);
        SetNPCPartSEAndSFX(chrEntityId, npcPartId3, 181, 181, 139, 139, 0);
    }
    if (Signed(npcPartId4) != 0) {
        CreateNPCPart(chrEntityId, npcPartId4, npcPartGroupIdx4, npcPartHP, 1, 0.5, false, false);
        SetNPCPartSEAndSFX(chrEntityId, npcPartId4, 181, 181, 139, 139, 0);
    }
    if (Signed(npcPartId5) != 0) {
        CreateNPCPart(chrEntityId, npcPartId5, npcPartGroupIdx5, npcPartHP, 1, 0.5, false, false);
        SetNPCPartSEAndSFX(chrEntityId, npcPartId5, 181, 181, 139, 139, 0);
    }
    if (Signed(npcPartId5) != 0) {
        UnknownNPCPart200493(chrEntityId, npcPartId, npcPartId2, npcPartId3, npcPartId4, npcPartId5);
    } else if (Signed(npcPartId4) != 0) {
        UnknownNPCPart200493(chrEntityId, npcPartId, npcPartId2, npcPartId3, npcPartId4, -1);
    } else if (Signed(npcPartId3) != 0) {
        UnknownNPCPart200493(chrEntityId, npcPartId, npcPartId2, npcPartId3, -1, -1);
    } else if (Signed(npcPartId2) != 0) {
        UnknownNPCPart200493(chrEntityId, npcPartId, npcPartId2, -1, -1, -1);
    } else {
        UnknownNPCPart200493(chrEntityId, npcPartId, -1, -1, -1, -1);
    }
L0:
    hpSp |= NPCPartHP(chrEntityId, npcPartId) <= 0;
    if (Signed(npcPartId2) != 0) {
        hpSp |= NPCPartHP(chrEntityId, npcPartId2) <= 0;
    }
    if (Signed(npcPartId3) != 0) {
        hpSp |= NPCPartHP(chrEntityId, npcPartId3) <= 0;
    }
    if (Signed(npcPartId4) != 0) {
        hpSp |= NPCPartHP(chrEntityId, npcPartId4) <= 0;
    }
    if (Signed(npcPartId5) != 0) {
        hpSp |= NPCPartHP(chrEntityId, npcPartId5) <= 0;
    }
    hpSp |= !CharacterHasSpEffect(chrEntityId, spEffectId) || CharacterHPValue(chrEntityId) <= 0;
    WaitFor(hpSp);
    EndIf(CharacterHPValue(chrEntityId) <= 0);
    SetSpEffect(chrEntityId, spEffectId2);
    SetSpEffect(chrEntityId, spEffectId3);
    ChangeCharacterDispmask(chrEntityId, bitNumber, OFF);
    SetNPCPartHP(chrEntityId, npcPartId, 0, false);
    if (Signed(npcPartId2) != 0) {
        SetNPCPartHP(chrEntityId, npcPartId2, 0, false);
    }
    if (Signed(npcPartId3) != 0) {
        SetNPCPartHP(chrEntityId, npcPartId3, 0, false);
    }
    if (Signed(npcPartId4) != 0) {
        SetNPCPartHP(chrEntityId, npcPartId4, 0, false);
    }
    if (Signed(npcPartId5) != 0) {
        SetNPCPartHP(chrEntityId, npcPartId5, 0, false);
    }
    WaitFor(ElapsedSeconds(3));
    RestartEvent();
});

$Event(90075700, Default, function(chrEntityId, chrEntityId2) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId2);
    WaitFor(PlayerInMap(18, 0, 0, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(-1);
});

$Event(90075701, Restart, function(chrEntityId, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(7511));
    DisableCharacterFadeOnEnable(chrEntityId);
    WaitFor(EventFlag(7510) || PlayerInMap(18, 0, 0, 0));
    WaitFor(
        EntityInRadiusOfEntity(20000, chrEntityId, 5, 1)
            || HasDamageType(chrEntityId, 0, DamageType.Any)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || ElapsedSeconds(60));
    SetNetworkconnectedEventFlagID(7511, ON);
});

$Event(90075702, Restart, function(chrEntityId, eventFlagId, eventFlagId2) {
    if (EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        DisableCharacter(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        SetBossBGM(758000, BossBGMState.Start);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, 907580000);
        LinkToBossHealthBar(Disabled, 907580000, 0);
        LinkToBossHealthBar(Enabled, 907580000, chrEntityId);
        EndEvent();
    }
    DisableCharacterHPBarDisplay(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    WaitFor(EventFlag(7511));
    SetBossBGM(758000, BossBGMState.Start);
    ForceAnimationPlayback(chrEntityId, 20029, false, false, false);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907580000);
    LinkToBossHealthBar(Disabled, 907580000, 0);
    LinkToBossHealthBar(Enabled, 907580000, chrEntityId);
});

$Event(90075703, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, entityId, entityId2, entityId3, entityId4, eventFlagId, eventFlagId2, eventFlagId3) {
    if (EventFlag(eventFlagId3)) {
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        DisplayBossHealthBar(Enabled, chrEntityId2, 0, 907580001);
        LinkToBossHealthBar(Disabled, 907580001, 0);
        LinkToBossHealthBar(Enabled, 907580001, chrEntityId2);
        EnableAsset(18001510);
        WaitFor(CharacterBackreadStatus(chrEntityId2));
        if (!(CharacterHasSpEffect(chrEntityId2, 46089)
            || CharacterHasSpEffect(chrEntityId2, 46093)
            || CharacterHasSpEffect(chrEntityId2, 46094)
            || CharacterHasSpEffect(chrEntityId2, 46095)
            || CharacterHasSpEffect(chrEntityId2, 46096)
            || CharacterHasSpEffect(chrEntityId2, 46097)
            || CharacterHasSpEffect(chrEntityId2, 46098)
            || CharacterHasSpEffect(chrEntityId2, 46099)
            || CharacterHasSpEffect(chrEntityId2, 46105))) {
            ChangeWeather(Weather.Type87, -1, true);
        }
        EndEvent();
    }
L10:
    DisableCharacter(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    WaitFor(CharacterHasSpEffect(chrEntityId, 46082));
    SetCharacterTeamType(chrEntityId, TeamType.Object);
    WaitFor(ElapsedSeconds(9) || EventFlag(eventFlagId));
    FadeToBlack(1, 1, true, 0);
    WaitFor(ElapsedSeconds(1));
    if (IsPlayerNo(1)) {
        WarpCharacterAndCopyFloorUnknown200489(10002, TargetEntityType.Area, entityId, -1, 10002, -1, -1);
    }
    if (IsPlayerNo(2)) {
        WarpCharacterAndCopyFloorUnknown200489(10003, TargetEntityType.Area, entityId2, -1, 10003, -1, -1);
    }
    if (IsPlayerNo(3)) {
        WarpCharacterAndCopyFloorUnknown200489(10004, TargetEntityType.Area, entityId3, -1, 10004, -1, -1);
    }
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    WaitFor(ElapsedSeconds(1));
    DisableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    EnableCharacter(chrEntityId2);
    WaitFixedTimeFrames(1);
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Area, entityId4, -1, chrEntityId);
    ForceAnimationPlayback(chrEntityId2, 20011, false, false, false);
    WaitFixedTimeFrames(1);
    EnableCharacterAI(chrEntityId2);
    SetCharacterEventTarget(chrEntityId2, chrEntityId3);
    ChangeWeather(Weather.Type87, -1, true);
    DisplayBossHealthBar(Disabled, chrEntityId, 0, 907580000);
    WaitFor(ElapsedSeconds(2));
    SetCameraAngle(5.42, 0);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    FadeToBlack(0, 2, false, 1);
    EnableAsset(18001510);
    WaitFor(ElapsedSeconds(2));
    DisplayBossHealthBar(Enabled, chrEntityId2, 0, 907580001);
    LinkToBossHealthBar(Disabled, 907580001, 0);
    LinkToBossHealthBar(Enabled, 907580001, chrEntityId2);
});

$Event(90075704, Restart, function(chrEntityId, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(CharacterDead(chrEntityId));
    WaitFor(ElapsedSeconds(3));
    DisplayBossHealthBar(Disabled, chrEntityId, 0, 907580001);
    WaitFor(IsPlayMode(1));
    DisplayNetworkconnectedPermanentBuffPopup(201);
    SetSpEffect(20000, 9730);
});

$Event(90075705, Restart, function(chrEntityId, chrEntityId2, eventFlagId, spEffectId, weather, entityId, entityId2, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(ElapsedFrames(1));
    if (EventFlag(eventFlagId)) {
        ChangeWeather(weather, -1, true);
        SpawnMapSFX(entityId2);
        ForceAnimationPlayback(18001510, 101, true, false, false);
    } else {
        WaitFor(CharacterHasSpEffect(chrEntityId, 46089));
        RestartIf(!CharacterHasSpEffect(chrEntityId, spEffectId));
        ChangeWeather(weather, -1, true);
        WaitFixedTimeFrames(1);
        if (!CharacterHasSpEffect(chrEntityId, 46197)) {
            GotoIf(S0, CharacterHasSpEffect(chrEntityId, 46196));
            GotoIf(S0, CharacterHasSpEffect(chrEntityId, 46195));
            GotoIf(S0, CharacterHasSpEffect(chrEntityId, 46194));
            GotoIf(S0, CharacterHasSpEffect(chrEntityId, 46193));
            GotoIf(S0, CharacterHasSpEffect(chrEntityId, 46192));
            GotoIf(S0, CharacterHasSpEffect(chrEntityId, 46191));
            GotoIf(S0, CharacterHasSpEffect(chrEntityId, 46190));
            PlaySE(18000810, SoundType.EnvironmentalSound, 180000100);
            PlaySE(18000810, SoundType.EnvironmentalSound, 180000110);
        } else {
S0:
            PlaySE(18000810, SoundType.EnvironmentalSound, 180000200);
            PlaySE(18000810, SoundType.EnvironmentalSound, 180000210);
        }
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
        SpawnMapSFX(entityId);
        ForceAnimationPlayback(18001510, 100, false, true, false);
        DeleteMapSFX(entityId, true);
        SpawnMapSFX(entityId2);
        ForceAnimationPlayback(18001510, 101, true, false, false);
    }
L0:
    WaitFor(CharacterHasSpEffect(chrEntityId, 46088) || HPRatio(chrEntityId) <= 0);
    SetNetworkconnectedEventFlagID(eventFlagId, OFF);
    DeleteMapSFX(entityId2, true);
    if (!CharacterHasSpEffect(chrEntityId, 46197)) {
        GotoIf(S1, CharacterHasSpEffect(chrEntityId, 46196));
        GotoIf(S1, CharacterHasSpEffect(chrEntityId, 46195));
        GotoIf(S1, CharacterHasSpEffect(chrEntityId, 46194));
        GotoIf(S1, CharacterHasSpEffect(chrEntityId, 46193));
        GotoIf(S1, CharacterHasSpEffect(chrEntityId, 46192));
        GotoIf(S1, CharacterHasSpEffect(chrEntityId, 46191));
        GotoIf(S1, CharacterHasSpEffect(chrEntityId, 46190));
        PlaySE(18000810, SoundType.EnvironmentalSound, 180000120);
    } else {
S1:
        PlaySE(18000810, SoundType.EnvironmentalSound, 180000220);
    }
    ForceAnimationPlayback(18001510, 200, false, true, false);
    ForceAnimationPlayback(18001510, 201, true, false, false);
    if (!EventFlag(18002800)) {
        ChangeWeather(Weather.Type87, -1, true);
    }
    WaitFor(ElapsedFrames(1));
    SetSpEffect(chrEntityId2, 0);
    RestartEvent();
});

$Event(90075706, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(7511));
    WaitFor(CharacterHasSpEffect(chrEntityId, 5105, GreaterOrEqual, 1) || EventFlag(eventFlagId));
    SetBossBGM(758000, BossBGMState.HeatUp);
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId2, 46092, GreaterOrEqual, 1) || EventFlag(7512));
    if (!CharacterHasSpEffect(chrEntityId2, 46092, Equal, 0)) {
        SetSpEffect(0, 0);
    }
});

$Event(90075710, Restart, function(chrEntityId) {
    EndIf(CharacterHasSpEffect(chrEntityId, 46199));
    WaitFor(EventFlag(7511));
    WaitFor(EventFlag(136) || CharacterHasSpEffect(chrEntityId, 46199));
    SetSpEffect(chrEntityId, 46199);
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(chrEntityId, 46199) || ElapsedSeconds(5));
    EnableNetworkSync();
});

$Event(90075750, Default, function(chrEntityId, chrEntityId2, chrEntityId3) {
    DisableNetworkSync();
    map |= PlayerInMap(16, 10, 0, 0);
    if (map) {
        EnableCharacterDefaultBackread(chrEntityId);
        EnableCharacterDefaultBackread(chrEntityId2);
        EnableCharacterDefaultBackread(chrEntityId3);
        SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisableCharacterHPBarDisplay(chrEntityId);
        ChangeCamera(7610);
        EnableCharacter(chrEntityId2);
        DisableCharacterCollision(chrEntityId3);
        DisableCharacterInvincibility(chrEntityId3);
        DisableCharacterGravity(chrEntityId3);
        DisableCharacterAI(chrEntityId3);
        DisableLockOnPoint(chrEntityId3, 220);
        SetCharacterEventTarget(chrEntityId, chrEntityId3);
        SetCharacterEventTarget(chrEntityId2, chrEntityId);
    }
L10:
    EnableCharacterDefaultBackread(chrEntityId);
    map |= PlayerInMap(16, 10, 0, 0);
    if (or1) {
        SetCharacterBackreadState(chrEntityId2, true);
        SetCharacterBackreadState(chrEntityId3, true);
    }
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    WaitFor(PlayerInMap(16, 10, 0, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(7610);
    WaitFor(ElapsedSeconds(5));
    SetCharacterBackreadState(chrEntityId2, false);
    SetCharacterBackreadState(chrEntityId3, false);
    EnableCharacterDefaultBackread(chrEntityId2);
    EnableCharacterDefaultBackread(chrEntityId3);
    EnableCharacter(chrEntityId2);
    DisableCharacterCollision(chrEntityId3);
    DisableCharacterInvincibility(chrEntityId3);
    DisableCharacterGravity(chrEntityId3);
    DisableCharacterAI(chrEntityId3);
    DisableLockOnPoint(chrEntityId3, 220);
    SetCharacterEventTarget(chrEntityId, chrEntityId3);
    SetCharacterEventTarget(chrEntityId2, chrEntityId);
});

$Event(90075751, Restart, function(chrEntityId) {
    EndIf(EventFlag(7512));
    EndIf(EventFlag(7511));
    WaitFor(
        InArea(10000, 16102801)
            || HasDamageType(chrEntityId, 0, DamageType.Any)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || EventFlag(7511));
    SetNetworkconnectedEventFlagID(7511, ON);
});

$Event(90075752, Restart, function(chrEntityId, eventFlagId) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        if (!EventFlag(eventFlagId)) {
            EnableCharacterImmortality(chrEntityId);
        }
        if (EventFlag(eventFlagId)) {
            DisplayBossHealthBar(Enabled, chrEntityId, 0, 907630001);
            LinkToBossHealthBar(Disabled, 907630001, 0);
            LinkToBossHealthBar(Enabled, 907630001, chrEntityId);
            EndEvent();
        }
        DisplayBossHealthBar(Enabled, chrEntityId, 0, 907630000);
        LinkToBossHealthBar(Disabled, 907630000, 0);
        LinkToBossHealthBar(Enabled, 907630000, chrEntityId);
        EndEvent();
    }
    EnableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    EnableCharacterImmortality(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    WaitFor(EventFlag(7511));
    ForceAnimationPlayback(chrEntityId, 20029, false, false, false);
    EnableCharacterAI(chrEntityId);
    LinkToBossHealthBar(Disabled, 907630000, 0);
    LinkToBossHealthBar(Enabled, 907630000, chrEntityId);
    WaitFor(ElapsedSeconds(4));
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907630000);
});

$Event(90075755, Restart, function(chrEntityId, chrEntityId2, generatorEntityId, generatorEntityId2, targetHPRatio, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(7512));
    EndIf(EventFlag(eventFlagId2));
    if (EventFlag(eventFlagId)) {
        EnableGenerator(generatorEntityId);
    } else {
        WaitFor(
            (HPRatio(chrEntityId) <= targetHPRatio && CharacterHasSpEffect(chrEntityId, 60530))
                || CharacterHPValue(chrEntityId) <= 1
                || EventFlag(eventFlagId2));
        EndIf(CharacterHPValue(chrEntityId) <= 1 || EventFlag(eventFlagId2));
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
        if (generatorEntityId2 != 0) {
            InvokeEnemyGenerator(generatorEntityId2);
        }
        EnableGenerator(generatorEntityId);
    }
L0:
    SetCharacterEventTarget(chrEntityId2, chrEntityId);
    WaitFor(ElapsedSeconds(30) || CharacterHPValue(chrEntityId) <= 1 || EventFlag(eventFlagId2));
    SetNetworkconnectedEventFlagID(eventFlagId, OFF);
    DisableGenerator(generatorEntityId);
    if (IsPlayerNo(1)) {
        WaitFor(!EventFlag(eventFlagId));
    }
    GotoIf(S0, !IsPlayerNo(1));
    WaitFor(!EventFlag(eventFlagId));
    if (IsPlayerNo(1)) {
S0:
        WaitFor(!EventFlag(eventFlagId));
        RestartEvent();
    }
});

$Event(90075756, Restart, function(chrEntityId, generatorEntityId, chrEntityId2, generatorEntityId2, chrEntityId3, targetHPRatio, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(7512));
    EndIf(EventFlag(eventFlagId2));
    flagHp = EventFlag(eventFlagId) && CharacterHPValue(chrEntityId2) > 0;
    GotoIf(S0, mainGroupAbuse);
    GotoIf(L0, !CharacterHasSpEffect(chrEntityId2, 62012));
    GotoIf(L1, CharacterHasSpEffect(chrEntityId2, 62012));
S0:
    WaitFor(!CharacterHasSpEffect(chrEntityId, 60530));
    WaitFor(
        (HPRatio(chrEntityId) <= targetHPRatio
            && CharacterHasSpEffect(chrEntityId, 60530)
            && (!EventFlag(eventFlagId) || CharacterHPValue(chrEntityId2) <= 0))
            || CharacterHPValue(chrEntityId) <= 1
            || EventFlag(eventFlagId2));
    EndIf(CharacterHPValue(chrEntityId) <= 1 || EventFlag(eventFlagId2));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    InvokeEnemyGenerator(generatorEntityId);
    DisableNetworkSync();
    WaitFor(CharacterHPValue(chrEntityId2) > 0);
    EnableNetworkSync();
L0:
    SetCharacterEventTarget(chrEntityId2, chrEntityId);
    WaitFor(CharacterHasSpEffect(chrEntityId2, 62010) || CharacterHPValue(chrEntityId2) <= 0);
    RestartIf(CharacterHPValue(chrEntityId2) <= 0);
    InvokeEnemyGenerator(generatorEntityId2);
    DisableNetworkSync();
    WaitFor(CharacterHPValue(chrEntityId3) > 0);
    EnableNetworkSync();
    ForceAnimationPlayback(chrEntityId3, 20020, false, false, false);
    WaitFixedTimeFrames(1);
    WarpCharacterAndCopyFloorUnknown200489(chrEntityId3, TargetEntityType.Character, chrEntityId2, 900, chrEntityId2, -1, -1);
L1:
    WaitFor(CharacterHPValue(chrEntityId3) <= 0);
    ForceCharacterDeath(chrEntityId2, true);
    RestartEvent();
});

$Event(90075757, Restart, function(chrEntityId, chrEntityId2, eventFlagId) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(7511));
    WaitFor(CharacterHasSpEffect(chrEntityId2, 62037, GreaterOrEqual, 1) || EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId));
    SetCharacterEventTarget(chrEntityId2, chrEntityId);
    WaitFor(
        CharacterHasSpEffect(chrEntityId2, 62037, LessOrEqual, 0)
            || EventFlag(eventFlagId)
            || ElapsedSeconds(0.25));
    EndIf(EventFlag(eventFlagId));
    RestartEvent();
});

$Event(90075758, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    if (CharacterHasSpEffect(20000, 60541) || CharacterHasSpEffect(20000, 60539)) {
        SetSpEffect(20000, 60540);
        ChangeWeather(Weather.Type31, -1, true);
    } else {
        WaitFor(CharacterHasSpEffect(20000, 60541) || CharacterHasSpEffect(20000, 60539));
        SetSpEffect(20000, 60540);
        ChangeWeather(Weather.Type31, -1, false);
    }
L0:
    WaitFor(!CharacterHasSpEffect(20000, 60541) && !CharacterHasSpEffect(20000, 60539));
    ChangeWeather(Weather.Type21, -1, false);
    RestartEvent();
});

$Event(90075760, Restart, function(chrEntityId) {
    DisableNetworkSync();
    EndIf(CharacterHasSpEffect(20000, 60541) || CharacterHasSpEffect(20000, 60539));
    if (CharacterHasSpEffect(chrEntityId, 60547)) {
        ChangeWeather(Weather.Type21, -1, true);
        EndEvent();
    }
    WaitFor(CharacterHasSpEffect(chrEntityId, 60547));
    EndIf(CharacterHasSpEffect(20000, 60541) || CharacterHasSpEffect(20000, 60539));
    ChangeWeather(Weather.Type21, -1, false);
});

$Event(90075770, Restart, function(chrEntityId, entityId, entityId2, entityId3, entityId4, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(7512));
    WaitFor(CharacterHasSpEffect(chrEntityId, 60507) || CharacterHasSpEffect(chrEntityId, 60505));
    DisplayBossHealthBar(Disabled, chrEntityId, 0, 907630000);
    WaitFor(CharacterHasSpEffect(chrEntityId, 60505));
    SetSpEffect(10000, 60506);
    WaitFor(ElapsedSeconds(5));
    FadeToBlack(1, 0.5, true, 0);
    WaitFor(ElapsedSeconds(0.5));
    WarpCharacterAndCopyFloorUnknown200489(chrEntityId, TargetEntityType.Area, entityId, -1, chrEntityId, -1, -1);
    if (IsPlayerNo(1)) {
        WarpCharacterAndCopyFloorUnknown200489(10002, TargetEntityType.Area, entityId2, -1, 10002, -1, -1);
    }
    if (IsPlayerNo(2)) {
        WarpCharacterAndCopyFloorUnknown200489(10003, TargetEntityType.Area, entityId3, -1, 10003, -1, -1);
    }
    if (IsPlayerNo(3)) {
        WarpCharacterAndCopyFloorUnknown200489(10004, TargetEntityType.Area, entityId4, -1, 10004, -1, -1);
    }
    SetCameraAngle(0, 0);
    WaitFor(ElapsedSeconds(4));
    FadeToBlack(0, 0.5, false, -1);
    WaitFor(ElapsedSeconds(1));
    SetSpEffect(chrEntityId, 60510);
    DisableCharacterImmortality(chrEntityId);
    LinkToBossHealthBar(Disabled, 907630001, 0);
    LinkToBossHealthBar(Enabled, 907630001, chrEntityId);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 60507));
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907630001);
});

$Event(90075771, Restart, function(chrEntityId, assetEntityId, eventFlagId) {
    if (EventFlag(9999)) {
        ForceAnimationPlayback(assetEntityId, 20, true, false, false);
        ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 1);
        EndEvent();
    }
    if (EventFlag(eventFlagId)) {
        ForceAnimationPlayback(assetEntityId, 20, true, false, false);
        ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 1);
        EndEvent();
    }
    EndIf(EventFlag(7512));
    ForceAnimationPlayback(assetEntityId, 0, true, false, false);
    EnableAssetInvunerability(assetEntityId);
    WaitFor(CharacterHasSpEffect(chrEntityId, 60514));
    ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 1);
    ForceAnimationPlayback(assetEntityId, 10, false, false, false);
    DisableAssetInvunerability(assetEntityId);
    WaitFor(ElapsedSeconds(10));
    ForceAnimationPlayback(assetEntityId, 20, true, false, false);
});

$Event(90075772, Restart, function(chrEntityId, chrEntityId2, eventFlagId) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    if (EventFlag(eventFlagId)) {
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    WaitFor(CharacterHPValue(chrEntityId) <= 1 || EventFlag(eventFlagId));
    if (!CharacterDead(chrEntityId2, GreaterOrEqual, 1)) {
        ForceCharacterDeath(chrEntityId2, false);
    }
    WaitFor(
        ElapsedSeconds(0.1) || CharacterHasSpEffect(chrEntityId, 60505) || EventFlag(eventFlagId));
    WaitFor(
        !CharacterDead(chrEntityId2, GreaterOrEqual, 1) || CharacterHasSpEffect(chrEntityId, 60505));
    if (CharacterHasSpEffect(chrEntityId, 60505)) {
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    RestartEvent();
});

$Event(90075773, Restart, function(chrEntityId, eventFlagId) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    EndIf(EventFlag(7511) && !CharacterHasSpEffect(20000, 6999200));
    if ((CharacterHasSpEffect(chrEntityId, 60521) || EventFlag(eventFlagId))
        && CharacterHasSpEffect(20000, 6999201)) {
        SetSpEffect(20000, 6999201);
        EndEvent();
    }
    WaitFor(EventFlag(7511));
    EndIf(!CharacterHasSpEffect(20000, 6999200));
    WaitFor(CharacterHasSpEffect(chrEntityId, 60521) || EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId, 60521) || ElapsedSeconds(25));
    SetSpEffect(20000, 6999201);
    SetSpEffect(20000, 60522);
    WaitFor(ElapsedSeconds(2.2));
    RecordUserDispLog(110400, 20000, LogObjectType.None, -1);
});

$Event(90075774, Restart, function(chrEntityId, areaEntityId) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(!InArea(chrEntityId, areaEntityId) || CharacterHasSpEffect(chrEntityId, 60555));
    SetSpEffect(chrEntityId, 60555);
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(chrEntityId, 60555));
    EnableNetworkSync();
    WaitFor(InArea(chrEntityId, areaEntityId) || !CharacterHasSpEffect(chrEntityId, 60555));
    SetSpEffect(chrEntityId, 60556);
    DisableNetworkSync();
    WaitFor(!CharacterHasSpEffect(chrEntityId, 60555));
    EnableNetworkSync();
    RestartEvent();
});

$Event(90075780, Restart, function(chrEntityId, eventFlagId) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    if (EventFlag(eventFlagId)) {
        SetBossBGM(761000, BossBGMState.HeatUp2);
    } else {
        if (CharacterHasSpEffect(chrEntityId, 5105)) {
            SetBossBGM(761000, BossBGMState.HeatUp);
        } else {
            WaitFor(EventFlag(7511));
            SetBossBGM(761000, BossBGMState.Start);
            WaitFor(ElapsedFrames(1));
            WaitFor(CharacterHasSpEffect(chrEntityId, 5105) || !BossBGMPlaying(761000));
            RestartIf(!BossBGMPlaying(761000));
            SetBossBGM(761000, BossBGMState.HeatUp);
            WaitFor(ElapsedFrames(1));
        }
L0:
        WaitFor(EventFlag(eventFlagId) || !BossBGMPlaying(761000));
        RestartIf(!BossBGMPlaying(761000));
        SetBossBGM(761000, BossBGMState.HeatUp2);
        WaitFor(ElapsedFrames(1));
    }
L1:
    WaitFor(!BossBGMPlaying(761000));
    WaitFor(ElapsedSeconds(5));
    RestartEvent();
});

$Event(90075800, Default, function(chrEntityId, chrEntityId2) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    EnableCharacterDefaultBackread(chrEntityId2);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId2);
    CreateReferredDamagePair(chrEntityId, chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    DisableCharacterCollision(chrEntityId2);
    SetCharacterEventTarget(chrEntityId, chrEntityId2);
    EndIf(EventFlag(7511));
    WaitFor(PlayerInMap(16, 0, 0, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(-1);
});

$Event(90075801, Restart, function(chrEntityId) {
    EndIf(EventFlag(7512));
    EndIf(EventFlag(7511));
    WaitFor(
        InArea(10000, 16002801)
            || HasDamageType(chrEntityId, 0, DamageType.Any)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || EventFlag(7511));
    SetNetworkconnectedEventFlagID(7511, ON);
});

$Event(90075802, Restart, function(chrEntityId, entityId, entityId2, entityId3, entityId4, entityId5, entityId6, entityId7, chrEntityId2) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        DisplayBossHealthBar(Enabled, chrEntityId2, 0, 907640000);
        LinkToBossHealthBar(Disabled, 907640000, 0);
        LinkToBossHealthBar(Enabled, 907640000, chrEntityId);
        SetBossBGM(762000, BossBGMState.Start);
        EndEvent();
    }
L10:
    EnableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    WaitFor(EventFlag(7511));
    SetBossBGM(762000, BossBGMState.Start);
    ForceAnimationPlayback(entityId, 20023, false, false, false);
    ForceAnimationPlayback(entityId2, 20024, false, false, false);
    ForceAnimationPlayback(entityId3, 20025, false, false, false);
    ForceAnimationPlayback(entityId4, 20026, false, false, false);
    ForceAnimationPlayback(entityId5, 20027, false, false, false);
    ForceAnimationPlayback(entityId6, 20028, false, false, false);
    ForceAnimationPlayback(entityId7, 20029, false, false, false);
    EnableCharacterAI(chrEntityId);
    LinkToBossHealthBar(Disabled, 907640000, 0);
    LinkToBossHealthBar(Enabled, 907640000, chrEntityId);
    WaitFor(ElapsedSeconds(4));
    DisplayBossHealthBar(Enabled, chrEntityId2, 0, 907640000);
});

$Event(90075803, Restart, function(chrEntityId, chrEntityId2) {
    EndIf(EventFlag(7512));
    WaitFor(HPRatio(chrEntityId2) <= 0);
    SetSpEffect(chrEntityId, 62565);
    ForceCharacterDeath(chrEntityId, false);
});

$Event(90075810, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, chrEntityId8, chrEntityId9) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(
        (CharacterHasSpEffect(chrEntityId, 60614, GreaterOrEqual, 6)
            && CharacterHasSpEffect(chrEntityId, 60606, LessOrEqual, 0)
            && CharacterHasSpEffect(chrEntityId, 60607, LessOrEqual, 0)
            && PlayerIsInOwnWorld())
            || (CharacterRatioHasSpEffect(chrEntityId, 60614, GreaterOrEqual, 1)
                && PlayerIsInOwnWorld()
                && CharacterHasSpEffect(chrEntityId, 60607, LessOrEqual, 0))
            || CharacterHPValue(chrEntityId9) <= 0);
    EndIf(CharacterHPValue(chrEntityId9) <= 0);
    if (PlayerIsInOwnWorld()) {
        if (!CharacterHasSpEffect(chrEntityId2, 60614)) {
            SetSpEffect(chrEntityId2, 60607);
        } else if (!CharacterHasSpEffect(chrEntityId3, 60614)) {
            SetSpEffect(chrEntityId3, 60607);
        } else if (!CharacterHasSpEffect(chrEntityId4, 60614)) {
            SetSpEffect(chrEntityId4, 60607);
        } else if (!CharacterHasSpEffect(chrEntityId5, 60614)) {
            SetSpEffect(chrEntityId5, 60607);
        } else if (!CharacterHasSpEffect(chrEntityId6, 60614)) {
            SetSpEffect(chrEntityId6, 60607);
        } else if (!CharacterHasSpEffect(chrEntityId7, 60614)) {
            SetSpEffect(chrEntityId7, 60607);
        } else if (!CharacterHasSpEffect(chrEntityId8, 60614)) {
            SetSpEffect(chrEntityId8, 60607);
        } else if (!CharacterHasSpEffect(chrEntityId, 60607, GreaterOrEqual, 1)) {
            SetSpEffect(chrEntityId2, 60607);
        }
    }
L0:
    WaitFor(PlayerIsInOwnWorld() && CharacterHasSpEffect(chrEntityId, 60607, LessOrEqual, 0));
    RestartEvent();
});

$Event(90075811, Restart, function(chrEntityId, chrEntityId2, spEffectId) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(CharacterHasSpEffect(chrEntityId, 60606, GreaterOrEqual, 1) && PlayerIsInOwnWorld());
    WaitFor(CharacterHasSpEffect(chrEntityId, 60606, LessOrEqual, 0) && PlayerIsInOwnWorld());
    SetSpEffect(chrEntityId2, spEffectId);
    RestartEvent();
});

$Event(90075812, Restart, function(chrEntityId) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(CharacterHasSpEffect(chrEntityId, 60606, LessOrEqual, 0) && PlayerIsInOwnWorld());
    WaitFor(CharacterHasSpEffect(chrEntityId, 60606, GreaterOrEqual, 1) && PlayerIsInOwnWorld());
    SetSpEffect(chrEntityId, 62627);
    RestartEvent();
});

$Event(90075820, Default, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, chrEntityId8, chrEntityId9) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 60661, GreaterOrEqual, 1)
            && CharacterHasSpEffect(chrEntityId2, 60660)
            && !CharacterHasSpEffect(chrEntityId2, 60606));
    ForceAnimationPlayback(chrEntityId2, 20020, false, false, false);
    WaitFor(
        CharacterHasSpEffect(chrEntityId2, 60665)
            || CharacterHasSpEffect(chrEntityId, 60661, LessOrEqual, 0));
    RestartIf(!CharacterHasSpEffect(chrEntityId2, 60665));
    if (CharacterHasSpEffect(chrEntityId3, 60606)) {
        WaitFixedTimeFrames(1);
        GotoIf(S0, chrEntityId2 != chrEntityId3);
        Goto(L0);
S0:
        GotoIf(S1, chrEntityId2 != chrEntityId4);
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId3, 50, chrEntityId3, -1, -1);
        SetSpEffect(chrEntityId2, 60700);
        Goto(L0);
S1:
        GotoIf(S2, chrEntityId2 != chrEntityId5);
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId3, 51, chrEntityId3, -1, -1);
        SetSpEffect(chrEntityId2, 60701);
        Goto(L0);
S2:
        GotoIf(S3, chrEntityId2 != chrEntityId6);
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId3, 52, chrEntityId3, -1, -1);
        SetSpEffect(chrEntityId2, 60702);
        Goto(L0);
S3:
        GotoIf(S4, chrEntityId2 != chrEntityId7);
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId3, 53, chrEntityId3, -1, -1);
        SetSpEffect(chrEntityId2, 60703);
        Goto(L0);
S4:
        GotoIf(S5, chrEntityId2 != chrEntityId8);
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId3, 54, chrEntityId3, -1, -1);
        SetSpEffect(chrEntityId2, 60704);
        Goto(L0);
S5:
        GotoIf(S6, chrEntityId2 != chrEntityId9);
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId3, 55, chrEntityId3, -1, -1);
        SetSpEffect(chrEntityId2, 60705);
    } else {
S6:
L1:
        if (CharacterHasSpEffect(chrEntityId4, 60606)) {
            if (chrEntityId2 == chrEntityId3) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId4, 50, chrEntityId4, -1, -1);
                SetSpEffect(chrEntityId2, 60700);
                Goto(L0);
            }
            GotoIf(S7, chrEntityId2 != chrEntityId4);
            Goto(L0);
S7:
            if (chrEntityId2 == chrEntityId5) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId4, 51, chrEntityId4, -1, -1);
                SetSpEffect(chrEntityId2, 60701);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId6) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId4, 52, chrEntityId4, -1, -1);
                SetSpEffect(chrEntityId2, 60702);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId7) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId4, 53, chrEntityId4, -1, -1);
                SetSpEffect(chrEntityId2, 60703);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId8) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId4, 54, chrEntityId4, -1, -1);
                SetSpEffect(chrEntityId2, 60704);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId9) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId4, 55, chrEntityId4, -1, -1);
                SetSpEffect(chrEntityId2, 60705);
                Goto(L0);
            }
        }
L2:
        if (CharacterHasSpEffect(chrEntityId5, 60606)) {
            if (chrEntityId2 == chrEntityId3) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId5, 50, chrEntityId5, -1, -1);
                SetSpEffect(chrEntityId2, 60700);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId4) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId5, 51, chrEntityId5, -1, -1);
                SetSpEffect(chrEntityId2, 60701);
                Goto(L0);
            }
            GotoIf(S8, chrEntityId2 != chrEntityId5);
            Goto(L0);
S8:
            if (chrEntityId2 == chrEntityId6) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId5, 52, chrEntityId5, -1, -1);
                SetSpEffect(chrEntityId2, 60702);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId7) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId5, 53, chrEntityId5, -1, -1);
                SetSpEffect(chrEntityId2, 60703);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId8) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId5, 54, chrEntityId5, -1, -1);
                SetSpEffect(chrEntityId2, 60704);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId9) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId5, 55, chrEntityId5, -1, -1);
                SetSpEffect(chrEntityId2, 60705);
                Goto(L0);
            }
        }
L3:
        if (CharacterHasSpEffect(chrEntityId6, 60606)) {
            if (chrEntityId2 == chrEntityId3) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId6, 50, chrEntityId6, -1, -1);
                SetSpEffect(chrEntityId2, 60700);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId4) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId6, 51, chrEntityId6, -1, -1);
                SetSpEffect(chrEntityId2, 60701);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId5) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId6, 52, chrEntityId6, -1, -1);
                SetSpEffect(chrEntityId2, 60702);
                Goto(L0);
            }
            GotoIf(S9, chrEntityId2 != chrEntityId6);
            Goto(L0);
S9:
            if (chrEntityId2 == chrEntityId7) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId6, 53, chrEntityId6, -1, -1);
                SetSpEffect(chrEntityId2, 60703);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId8) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId6, 54, chrEntityId6, -1, -1);
                SetSpEffect(chrEntityId2, 60704);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId9) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId6, 55, chrEntityId6, -1, -1);
                SetSpEffect(chrEntityId2, 60705);
                Goto(L0);
            }
        }
L4:
        if (CharacterHasSpEffect(chrEntityId7, 60606)) {
            if (chrEntityId2 == chrEntityId3) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId7, 50, chrEntityId7, -1, -1);
                SetSpEffect(chrEntityId2, 60700);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId4) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId7, 51, chrEntityId7, -1, -1);
                SetSpEffect(chrEntityId2, 60701);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId5) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId7, 52, chrEntityId7, -1, -1);
                SetSpEffect(chrEntityId2, 60702);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId6) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId7, 53, chrEntityId7, -1, -1);
                SetSpEffect(chrEntityId2, 60703);
                Goto(L0);
            }
            GotoIf(S10, chrEntityId2 != chrEntityId7);
            Goto(L0);
S10:
            if (chrEntityId2 == chrEntityId8) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId7, 54, chrEntityId7, -1, -1);
                SetSpEffect(chrEntityId2, 60704);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId9) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId7, 55, chrEntityId7, -1, -1);
                SetSpEffect(chrEntityId2, 60705);
                Goto(L0);
            }
        }
L5:
        if (CharacterHasSpEffect(chrEntityId8, 60606)) {
            if (chrEntityId2 == chrEntityId3) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId8, 50, chrEntityId8, -1, -1);
                SetSpEffect(chrEntityId2, 60700);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId4) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId8, 51, chrEntityId8, -1, -1);
                SetSpEffect(chrEntityId2, 60701);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId5) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId8, 52, chrEntityId8, -1, -1);
                SetSpEffect(chrEntityId2, 60702);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId6) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId8, 53, chrEntityId8, -1, -1);
                SetSpEffect(chrEntityId2, 60703);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId7) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId8, 54, chrEntityId8, -1, -1);
                SetSpEffect(chrEntityId2, 60704);
                Goto(L0);
            }
            GotoIf(S11, chrEntityId2 != chrEntityId8);
            Goto(L0);
S11:
            if (chrEntityId2 == chrEntityId9) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId8, 55, chrEntityId8, -1, -1);
                SetSpEffect(chrEntityId2, 60705);
                Goto(L0);
            }
        }
L6:
        if (CharacterHasSpEffect(chrEntityId9, 60606)) {
            if (chrEntityId2 == chrEntityId3) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId9, 50, chrEntityId9, -1, -1);
                SetSpEffect(chrEntityId2, 60700);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId4) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId9, 51, chrEntityId9, -1, -1);
                SetSpEffect(chrEntityId2, 60701);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId5) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId9, 52, chrEntityId9, -1, -1);
                SetSpEffect(chrEntityId2, 60702);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId6) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId9, 53, chrEntityId9, -1, -1);
                SetSpEffect(chrEntityId2, 60703);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId7) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId9, 54, chrEntityId9, -1, -1);
                SetSpEffect(chrEntityId2, 60704);
                Goto(L0);
            }
            if (chrEntityId2 == chrEntityId8) {
                WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId9, 55, chrEntityId9, -1, -1);
                SetSpEffect(chrEntityId2, 60705);
                Goto(L0);
            }
            GotoIf(S12, chrEntityId2 != chrEntityId9);
            Goto(L0);
        }
S12:
L7:
        NoOp();
    }
L0:
    WaitFor(CharacterHasSpEffect(chrEntityId, 60661, LessOrEqual, 0));
    RestartEvent();
});

$Event(90075830, Restart, function(chrEntityId, areaEntityId) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(!InArea(chrEntityId, areaEntityId) || CharacterHasSpEffect(chrEntityId, 62560));
    SetSpEffect(chrEntityId, 62560);
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(chrEntityId, 62560) || ElapsedSeconds(3));
    EnableNetworkSync();
    WaitFor(InArea(chrEntityId, areaEntityId) || !CharacterHasSpEffect(chrEntityId, 62560));
    SetSpEffect(chrEntityId, 62561);
    DisableNetworkSync();
    WaitFor(!CharacterHasSpEffect(chrEntityId, 62560) || ElapsedSeconds(3));
    EnableNetworkSync();
    RestartEvent();
});

$Event(90075831, Restart, function(chrEntityId, chrEntityId2) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(CharacterHasSpEffect(chrEntityId, 60651) && PlayerIsInOwnWorld());
    if (!CharacterHasSpEffect(chrEntityId2, 60653, GreaterOrEqual, 1)) {
        ForceAnimationPlayback(chrEntityId2, 20000, false, false, false);
    }
    WaitFor(ElapsedSeconds(1));
    SetSpEffect(chrEntityId, 60652);
    DisableNetworkSync();
    WaitFor(!CharacterHasSpEffect(chrEntityId, 60651) || ElapsedSeconds(20));
    EnableNetworkSync();
    RestartEvent();
});

$Event(90075842, Restart, function(chrEntityId, chrEntityId2) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(CharacterHasSpEffect(chrEntityId, 62525, GreaterOrEqual, 1) && PlayerIsInOwnWorld());
    GotoIf(L0, !PlayerIsInOwnWorld());
    if (!CharacterHasSpEffect(chrEntityId, 62526, Less, 1)) {
        SetSpEffect(chrEntityId, 62588);
        SetSpEffect(chrEntityId, 62589);
        SetSpEffect(chrEntityId2, 62589);
    }
    if (!CharacterHasSpEffect(chrEntityId, 62526, Less, 3)) {
        SetSpEffect(chrEntityId, 62588);
        SetSpEffect(chrEntityId, 62589);
        SetSpEffect(chrEntityId2, 62589);
    }
    if (!CharacterHasSpEffect(chrEntityId, 62526, Less, 5)) {
        SetSpEffect(chrEntityId, 62588);
        SetSpEffect(chrEntityId, 62589);
        SetSpEffect(chrEntityId2, 62589);
    }
    WaitFor(PlayerIsInOwnWorld() && CharacterHasSpEffect(chrEntityId, 62525, LessOrEqual, 0));
    RestartEvent();
});

$Event(90075843, Restart, function(chrEntityId, spEffectId, cameraId) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId, GreaterOrEqual, 1));
    ChangeCamera(cameraId);
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId, LessOrEqual, 0));
    ChangeCamera(-1);
    WaitFor(ElapsedSeconds(1));
    RestartEvent();
});

$Event(90075845, Restart, function(eventFlagId, eventFlagId2, chrEntityId, assetEntityId, spEffectId, targetAmount) {
    if (!EventFlag(9999)) {
        EndIf(EventFlag(eventFlagId2));
        if (eventFlagId != 0) {
            WaitFor(EventFlag(eventFlagId));
        }
        if (Signed(0) != spEffectId) {
            WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId, GreaterOrEqual, 1));
        } else {
            WaitFor(CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount);
        }
    }
    ChangeWeather(Weather.Type01, -1, false);
    ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 1);
});

$Event(90075850, Default, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    EnableCharacterDefaultBackread(chrEntityId2);
    EnableCharacterDefaultBackread(chrEntityId3);
    EnableCharacterDefaultBackread(chrEntityId4);
    DisableCharacterHPBarDisplay(chrEntityId2);
    DisableCharacterHPBarDisplay(chrEntityId4);
    CreateReferredDamagePair(chrEntityId, chrEntityId2);
    CreateReferredDamagePair(chrEntityId3, chrEntityId4);
    DisableCharacterAI(chrEntityId2);
    DisableCharacterCollision(chrEntityId2);
    DisableCharacterAI(chrEntityId4);
    DisableCharacterCollision(chrEntityId4);
    DisableCharacterGravity(chrEntityId2);
    DisableCharacterGravity(chrEntityId4);
    EndIf(EventFlag(7511));
    WaitFor(PlayerInMap(16, 0, 0, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(-1);
});

$Event(90075852, Restart, function(chrEntityId, entityId, entityId2, entityId3, entityId4, entityId5, entityId6, entityId7, chrEntityId2, eventFlagId) {
    if (EventFlag(7512)) {
        DisableCharacter(chrEntityId);
        DisableCharacter(chrEntityId2);
        SetCharacterBackreadState(chrEntityId, true);
        SetCharacterBackreadState(chrEntityId2, true);
        ForceCharacterDeath(chrEntityId, false);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId);
        DisableCharacter(chrEntityId2);
        SetCharacterBackreadState(chrEntityId, true);
        SetCharacterBackreadState(chrEntityId2, true);
        ForceCharacterDeath(chrEntityId, false);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
        SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisplayBossHealthBar(Enabled, chrEntityId2, 0, 907640000);
        LinkToBossHealthBar(Disabled, 907640000, 0);
        LinkToBossHealthBar(Enabled, 907640000, chrEntityId);
        SetBossBGM(762000, BossBGMState.Start);
        EndEvent();
    }
L10:
    EnableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(chrEntityId, 30025, true, false, false);
    WaitFor(EventFlag(7511));
    SetBossBGM(762000, BossBGMState.Start);
    ForceAnimationPlayback(entityId, 20023, false, false, false);
    ForceAnimationPlayback(entityId2, 20024, false, false, false);
    ForceAnimationPlayback(entityId3, 20025, false, false, false);
    ForceAnimationPlayback(entityId4, 20026, false, false, false);
    ForceAnimationPlayback(entityId5, 20027, false, false, false);
    ForceAnimationPlayback(entityId6, 20028, false, false, false);
    ForceAnimationPlayback(entityId7, 20029, false, false, false);
    EnableCharacterAI(chrEntityId);
    LinkToBossHealthBar(Disabled, 907640000, 0);
    LinkToBossHealthBar(Enabled, 907640000, chrEntityId);
    WaitFor(ElapsedSeconds(4));
    DisplayBossHealthBar(Enabled, chrEntityId2, 0, 907640000);
});

$Event(90075853, Restart, function(chrEntityId, chrEntityId2, eventFlagId) {
    EndIf(EventFlag(7512));
    EndIf(EventFlag(eventFlagId));
    WaitFor(CharacterHPValue(chrEntityId2) <= 0);
    SetSpEffect(chrEntityId, 62825);
});

$Event(90075854, Restart, function(chrEntityId, chrEntityId2) {
    EndIf(EventFlag(7512));
    WaitFor(CharacterHPValue(chrEntityId2) <= 0);
    SetSpEffect(chrEntityId, 62565);
    WaitFor(ElapsedFrames(1));
    if (CharacterHasSpEffect(chrEntityId, 62811)) {
        DisableCharacter(chrEntityId);
        EndEvent();
    }
    ForceCharacterDeath(chrEntityId, false);
});

$Event(90075855, Restart, function(chrEntityId, chrEntityId2) {
    EndIf(EventFlag(7512));
    WaitFor(CharacterHPValue(chrEntityId2) <= 0);
    if (CharacterHasSpEffect(chrEntityId, 62925) || CharacterHasSpEffect(chrEntityId, 62926)) {
        DisableCharacter(chrEntityId);
        EndEvent();
    }
    SetSpEffect(chrEntityId, 62911);
    WaitFor(ElapsedFrames(1));
    ForceCharacterDeath(chrEntityId, true);
});

$Event(90075860, Default, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, chrEntityId8, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6, eventFlagId7, chrEntityId9, eventFlagId8) {
    EndIf(EventFlag(7512));
    EndIf(CharacterHasSpEffect(chrEntityId, 62821, GreaterOrEqual, 1));
    if (!AnyBatchEventFlags(eventFlagId, eventFlagId7)) {
        WaitFor(EventFlag(7511));
        WaitFor(
            CharacterHasSpEffect(chrEntityId, 60614, GreaterOrEqual, 6) && PlayerIsInOwnWorld());
        if (PlayerIsInOwnWorld()) {
            if (!CharacterHasSpEffect(chrEntityId2, 60614)) {
                SetNetworkconnectedEventFlagID(eventFlagId, ON);
            } else if (!CharacterHasSpEffect(chrEntityId3, 60614)) {
                SetNetworkconnectedEventFlagID(eventFlagId2, ON);
            } else if (!CharacterHasSpEffect(chrEntityId4, 60614)) {
                SetNetworkconnectedEventFlagID(eventFlagId3, ON);
            } else if (!CharacterHasSpEffect(chrEntityId5, 60614)) {
                SetNetworkconnectedEventFlagID(eventFlagId4, ON);
            } else if (!CharacterHasSpEffect(chrEntityId6, 60614)) {
                SetNetworkconnectedEventFlagID(eventFlagId5, ON);
            } else if (!CharacterHasSpEffect(chrEntityId7, 60614)) {
                SetNetworkconnectedEventFlagID(eventFlagId6, ON);
            } else if (!CharacterHasSpEffect(chrEntityId8, 60614)) {
                SetNetworkconnectedEventFlagID(eventFlagId7, ON);
            } else {
                SetNetworkconnectedEventFlagID(eventFlagId, ON);
            }
        }
    }
L0:
    WaitFor(CharacterRatioHasSpEffect(chrEntityId, 60614, GreaterOrEqual, 1));
    WaitFor(AnyBatchEventFlags(eventFlagId, eventFlagId7) || ElapsedSeconds(5));
    RestartIf(!AnyBatchEventFlags(eventFlagId, eventFlagId7));
    SetSpEffect(chrEntityId, 62820);
    if (EventFlag(eventFlagId)) {
        WaitFor(CharacterHasSpEffect(chrEntityId2, 60614));
        SetSpEffect(chrEntityId2, 62821);
    } else if (EventFlag(eventFlagId2)) {
        WaitFor(CharacterHasSpEffect(chrEntityId3, 60614));
        SetSpEffect(chrEntityId3, 62821);
    } else if (EventFlag(eventFlagId3)) {
        WaitFor(CharacterHasSpEffect(chrEntityId4, 60614));
        SetSpEffect(chrEntityId4, 62821);
    } else if (EventFlag(eventFlagId4)) {
        WaitFor(CharacterHasSpEffect(chrEntityId5, 60614));
        SetSpEffect(chrEntityId5, 62821);
    } else if (EventFlag(eventFlagId5)) {
        WaitFor(CharacterHasSpEffect(chrEntityId6, 60614));
        SetSpEffect(chrEntityId6, 62821);
    } else if (EventFlag(eventFlagId6)) {
        WaitFor(CharacterHasSpEffect(chrEntityId7, 60614));
        SetSpEffect(chrEntityId7, 62821);
    } else if (EventFlag(eventFlagId7)) {
        WaitFor(CharacterHasSpEffect(chrEntityId8, 60614));
        SetSpEffect(chrEntityId8, 62821);
    } else {
        BatchSetNetworkconnectedEventFlags(eventFlagId, eventFlagId7, OFF);
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
        WaitFor(CharacterHasSpEffect(chrEntityId2, 60614));
        SetSpEffect(chrEntityId2, 62821);
    }
L1:
    WaitFor(CharacterHasSpEffect(chrEntityId, 62821, GreaterOrEqual, 1) || ElapsedSeconds(20));
    if (!CharacterHasSpEffect(chrEntityId, 62821, GreaterOrEqual, 1)) {
        BatchSetNetworkconnectedEventFlags(eventFlagId, eventFlagId7, OFF);
        WaitFor(ElapsedSeconds(5));
        RestartEvent();
    }
    WaitFor(
        EventFlag(eventFlagId8)
            || CharacterHasSpEffect(chrEntityId2, 5032)
            || CharacterHasSpEffect(chrEntityId3, 5032)
            || CharacterHasSpEffect(chrEntityId4, 5032)
            || CharacterHasSpEffect(chrEntityId5, 5032)
            || CharacterHasSpEffect(chrEntityId6, 5032)
            || CharacterHasSpEffect(chrEntityId7, 5032)
            || CharacterHasSpEffect(chrEntityId8, 5032));
    SetNetworkUpdateRate(chrEntityId9, false, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Disabled, chrEntityId9, 0, 907640000);
});

$Event(90075861, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, chrEntityId8, chrEntityId9, chrEntityId10, chrEntityId11, entityId, entityId2, entityId3, entityId4, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6, eventFlagId7, eventFlagId8) {
    if (EventFlag(7512)) {
        DisableCharacter(chrEntityId2);
        DisableCharacter(chrEntityId10);
        DisableCharacter(chrEntityId11);
        ForceCharacterDeath(chrEntityId2, false);
        ForceCharacterDeath(chrEntityId10, false);
        ForceCharacterDeath(chrEntityId11, false);
        EndEvent();
    }
L10:
    if (EventFlag(eventFlagId)) {
        EnableCharacter(chrEntityId2);
        EnableCharacter(chrEntityId10);
        EnableCharacter(chrEntityId11);
        SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
        SetNetworkUpdateRate(chrEntityId10, true, CharacterUpdateFrequency.AlwaysUpdate);
        SetNetworkUpdateRate(chrEntityId11, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisplayBossHealthBar(Enabled, chrEntityId10, 0, 907640000);
        LinkToBossHealthBar(Disabled, 907640000, 0);
        LinkToBossHealthBar(Enabled, 907640000, chrEntityId2);
        EndEvent();
    }
L11:
    ForceAnimationPlayback(chrEntityId2, 30025, false, false, false);
    DisableCharacterAI(chrEntityId2);
    ForceAnimationPlayback(chrEntityId11, 30029, false, false, false);
    DisableCharacterAI(chrEntityId11);
    DisableCharacter(chrEntityId10);
    WaitFor(CharacterHasSpEffect(chrEntityId, 62822));
    FadeToBlack(1, 1, true, 0.5);
    WaitFor(ElapsedSeconds(1));
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    SetNetworkUpdateRate(chrEntityId, false, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFor(ElapsedFrames(1));
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId10, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId11, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(chrEntityId2, 30001, false, false, false);
    WaitFor(ElapsedFrames(1));
    EnableCharacter(chrEntityId10);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    if (EventFlag(eventFlagId2)) {
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId3, TargetEntityType.Area, entityId, -1, 20000, -1, -1);
        ForceAnimationPlayback(chrEntityId3, 30001, false, false, false);
    } else if (EventFlag(eventFlagId3)) {
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId4, TargetEntityType.Area, entityId, -1, 20000, -1, -1);
        ForceAnimationPlayback(chrEntityId4, 30001, false, false, false);
    } else if (EventFlag(eventFlagId4)) {
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId5, TargetEntityType.Area, entityId, -1, 20000, -1, -1);
        ForceAnimationPlayback(chrEntityId5, 30001, false, false, false);
    } else if (EventFlag(eventFlagId5)) {
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId6, TargetEntityType.Area, entityId, -1, 20000, -1, -1);
        ForceAnimationPlayback(chrEntityId6, 30001, false, false, false);
    } else if (EventFlag(eventFlagId6)) {
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId7, TargetEntityType.Area, entityId, -1, 20000, -1, -1);
        ForceAnimationPlayback(chrEntityId7, 30001, false, false, false);
    } else if (EventFlag(eventFlagId7)) {
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId8, TargetEntityType.Area, entityId, -1, 20000, -1, -1);
        ForceAnimationPlayback(chrEntityId8, 30001, false, false, false);
    } else if (EventFlag(eventFlagId8)) {
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId9, TargetEntityType.Area, entityId, -1, 20000, -1, -1);
        ForceAnimationPlayback(chrEntityId9, 30001, false, false, false);
    } else {
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId3, TargetEntityType.Area, entityId, -1, 20000, -1, -1);
        ForceAnimationPlayback(chrEntityId3, 30001, false, false, false);
    }
L0:
    if (IsPlayerNo(1)) {
        IssueShortWarpRequest(20000, TargetEntityType.Area, entityId2, -1);
    }
    if (IsPlayerNo(2)) {
        IssueShortWarpRequest(20000, TargetEntityType.Area, entityId3, -1);
    }
    if (IsPlayerNo(3)) {
        IssueShortWarpRequest(20000, TargetEntityType.Area, entityId4, -1);
    }
    if (IsPlayerNo(1)) {
        SetCameraAngle(6.5, -1);
    }
    if (IsPlayerNo(2)) {
        SetCameraAngle(6.5, 9.5);
    }
    if (IsPlayerNo(3)) {
        SetCameraAngle(7, 0.5);
    }
    WaitFor(ElapsedSeconds(3));
    FadeToBlack(0, 1, false, -1);
    if (EventFlag(eventFlagId2)) {
        ForceAnimationPlayback(chrEntityId3, 20038, false, false, false);
    } else if (EventFlag(eventFlagId3)) {
        ForceAnimationPlayback(chrEntityId4, 20038, false, false, false);
    } else if (EventFlag(eventFlagId4)) {
        ForceAnimationPlayback(chrEntityId5, 20038, false, false, false);
    } else if (EventFlag(eventFlagId5)) {
        ForceAnimationPlayback(chrEntityId6, 20038, false, false, false);
    } else if (EventFlag(eventFlagId6)) {
        ForceAnimationPlayback(chrEntityId7, 20038, false, false, false);
    } else if (EventFlag(eventFlagId7)) {
        ForceAnimationPlayback(chrEntityId8, 20038, false, false, false);
    } else if (EventFlag(eventFlagId8)) {
        ForceAnimationPlayback(chrEntityId9, 20038, false, false, false);
    } else {
        ForceAnimationPlayback(chrEntityId3, 20038, false, false, false);
    }
L1:
    WaitFor(ElapsedSeconds(1));
    EnableCharacterAI(chrEntityId2);
    EnableCharacterAI(chrEntityId11);
    WaitFor(ElapsedSeconds(2));
    DisplayBossHealthBar(Enabled, chrEntityId10, 0, 907640000);
    LinkToBossHealthBar(Disabled, 907640000, 0);
    LinkToBossHealthBar(Enabled, 907640000, chrEntityId2);
    if (!EventFlag(eventFlagId2)) {
        WaitFor(RandomElapsedSeconds(1, 1.5));
        ForceAnimationPlayback(chrEntityId3, 20039, false, false, false);
    }
    if (!EventFlag(eventFlagId3)) {
        WaitFor(RandomElapsedSeconds(1, 1.5));
        ForceAnimationPlayback(chrEntityId4, 20039, false, false, false);
    }
    if (!EventFlag(eventFlagId4)) {
        WaitFor(RandomElapsedSeconds(1, 1.5));
        ForceAnimationPlayback(chrEntityId5, 20039, false, false, false);
    }
    if (!EventFlag(eventFlagId5)) {
        WaitFor(RandomElapsedSeconds(1, 1.5));
        ForceAnimationPlayback(chrEntityId6, 20039, false, false, false);
    }
    if (!EventFlag(eventFlagId6)) {
        WaitFor(RandomElapsedSeconds(1, 1.5));
        ForceAnimationPlayback(chrEntityId7, 20039, false, false, false);
    }
    if (!EventFlag(eventFlagId7)) {
        WaitFor(RandomElapsedSeconds(1, 1.5));
        ForceAnimationPlayback(chrEntityId8, 20039, false, false, false);
    }
    if (!EventFlag(eventFlagId8)) {
        WaitFor(RandomElapsedSeconds(1, 1.5));
        ForceAnimationPlayback(chrEntityId9, 20039, false, false, false);
    }
    WaitFor(ElapsedSeconds(5));
    WaitFor(PlayerIsInOwnWorld() || ElapsedSeconds(5));
    EnableCharacterAI(chrEntityId2);
    EnableCharacterAI(chrEntityId11);
});

$Event(90075862, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, chrEntityId8, chrEntityId9, eventFlagId) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(
        (CharacterHasSpEffect(chrEntityId, 62810)
            || CharacterRatioHasSpEffect(chrEntityId, 62811, GreaterOrEqual, 1))
            && CharacterHasSpEffect(chrEntityId9, 62926)
            && PlayerIsInOwnWorld());
    if (CharacterHasSpEffect(chrEntityId2, 62810)) {
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId9, TargetEntityType.Character, chrEntityId2, 203, chrEntityId2, -1, -1);
    } else if (CharacterHasSpEffect(chrEntityId3, 62810)) {
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId9, TargetEntityType.Character, chrEntityId3, 203, chrEntityId3, -1, -1);
    } else if (CharacterHasSpEffect(chrEntityId4, 62810)) {
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId9, TargetEntityType.Character, chrEntityId4, 203, chrEntityId4, -1, -1);
    } else if (CharacterHasSpEffect(chrEntityId5, 62810)) {
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId9, TargetEntityType.Character, chrEntityId5, 203, chrEntityId5, -1, -1);
    } else if (CharacterHasSpEffect(chrEntityId6, 62810)) {
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId9, TargetEntityType.Character, chrEntityId6, 203, chrEntityId6, -1, -1);
    } else if (CharacterHasSpEffect(chrEntityId7, 62810)) {
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId9, TargetEntityType.Character, chrEntityId7, 203, chrEntityId7, -1, -1);
    } else if (CharacterHasSpEffect(chrEntityId8, 62810)) {
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId9, TargetEntityType.Character, chrEntityId8, 203, chrEntityId8, -1, -1);
        Goto(L0);
    }
L0:
    WaitFor(ElapsedFrames(1));
    SetSpEffect(chrEntityId, 62816);
    WaitFor(ElapsedSeconds(3.8));
    ForceAnimationPlayback(chrEntityId9, 20000, false, false, false);
    EnableCharacterAI(chrEntityId9);
    WaitFor(ElapsedFrames(1));
    WaitFor(!CharacterHasSpEffect(chrEntityId9, 62810) || ElapsedSeconds(5));
    RestartEvent();
});

$Event(90075863, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, chrEntityId8, chrEntityId9, eventFlagId) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(
        (CharacterHasSpEffect(chrEntityId9, 62920)
            || CharacterHasSpEffect(chrEntityId9, 62921)
            || CharacterHasSpEffect(chrEntityId9, 62925))
            && PlayerIsInOwnWorld());
    if (CharacterRatioHasSpEffect(chrEntityId, 62811, LessOrEqual, 0)) {
        SetSpEffect(chrEntityId9, 62917);
        WaitFor(!CharacterHasSpEffect(chrEntityId9, 62925) || ElapsedSeconds(5));
        RestartEvent();
    }
    WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId9, 50, chrEntityId9, -1, -1);
    WarpCharacterAndCopyFloorUnknown200489(chrEntityId3, TargetEntityType.Character, chrEntityId9, 51, chrEntityId9, -1, -1);
    WarpCharacterAndCopyFloorUnknown200489(chrEntityId4, TargetEntityType.Character, chrEntityId9, 52, chrEntityId9, -1, -1);
    WarpCharacterAndCopyFloorUnknown200489(chrEntityId5, TargetEntityType.Character, chrEntityId9, 53, chrEntityId9, -1, -1);
    WarpCharacterAndCopyFloorUnknown200489(chrEntityId6, TargetEntityType.Character, chrEntityId9, 54, chrEntityId9, -1, -1);
    WarpCharacterAndCopyFloorUnknown200489(chrEntityId7, TargetEntityType.Character, chrEntityId9, 55, chrEntityId9, -1, -1);
    WarpCharacterAndCopyFloorUnknown200489(chrEntityId8, TargetEntityType.Character, chrEntityId9, 56, chrEntityId9, -1, -1);
    WaitFor(ElapsedFrames(1));
    if (CharacterHasSpEffect(chrEntityId9, 62921)) {
        ForceAnimationPlayback(chrEntityId, 20045, false, false, false);
    } else {
        ForceAnimationPlayback(chrEntityId, 20044, false, false, false);
    }
    WaitFor(ElapsedFrames(1));
    WaitFor(CharacterRatioHasSpEffect(chrEntityId, 62811, LessOrEqual, 0) || ElapsedSeconds(5));
    if (CharacterRatioHasSpEffect(chrEntityId, 62811, LessOrEqual, 0)) {
        SetSpEffect(chrEntityId9, 62917);
    }
    WaitFor(ElapsedFrames(1));
    WaitFor(
        (!CharacterHasSpEffect(chrEntityId9, 62920) && !CharacterHasSpEffect(chrEntityId9, 62921))
            || ElapsedSeconds(5));
    RestartEvent();
});

$Event(90075864, Restart, function(chrEntityId, eventFlagId) {
    DisableNetworkSync();
    if (EventFlag(7512)) {
        ChangeCamera(-1);
        EndEvent();
    }
    WaitFor(EventFlag(eventFlagId));
    ChangeCamera(7628);
    WaitFor(CharacterHasSpEffect(chrEntityId, 62930));
    ChangeCamera(4642);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 62930) || EventFlag(7512));
    RestartEvent();
});

$Event(90075865, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2, spEffectId, npcPartHP, npcPartId, npcPartGroupIdx, npcPartId2, npcPartGroupIdx2, npcPartId3, npcPartGroupIdx3, npcPartId4, npcPartGroupIdx4, npcPartId5, npcPartGroupIdx5) {
    EndIf(EventFlag(7512));
    if (EventFlag(eventFlagId)) {
        WaitFor(CharacterBackreadStatus(chrEntityId));
        GotoIf(L1, 
            !CharacterHasSpEffect(chrEntityId, 62926)
                && !CharacterHasSpEffect(chrEntityId, 62925)
                && EventFlag(eventFlagId2));
    }
L10:
    WaitFor(EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId2, OFF);
    DisableNetworkSync();
    WaitFor(CharacterBackreadStatus(chrEntityId) && CharacterBackreadStatus(chrEntityId2));
    WaitFor(
        (!CharacterHasSpEffect(chrEntityId, 62926) && !CharacterHasSpEffect(chrEntityId, 62925))
            || CharacterHPValue(chrEntityId2) <= 0);
    EnableNetworkSync();
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, npcPartHP, 1, 0.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 109, 109, 139, 139, 0);
    if (Signed(npcPartId2) != 0) {
        CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx2, npcPartHP, 1, 0.5, false, false);
        SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 109, 109, 139, 139, 0);
    }
    if (Signed(npcPartId3) != 0) {
        CreateNPCPart(chrEntityId, npcPartId3, npcPartGroupIdx3, npcPartHP, 1, 0.5, false, false);
        SetNPCPartSEAndSFX(chrEntityId, npcPartId3, 109, 109, 139, 139, 0);
    }
    if (Signed(npcPartId4) != 0) {
        CreateNPCPart(chrEntityId, npcPartId4, npcPartGroupIdx4, npcPartHP, 1, 0.5, false, false);
        SetNPCPartSEAndSFX(chrEntityId, npcPartId4, 109, 109, 139, 139, 0);
    }
    if (Signed(npcPartId5) != 0) {
        CreateNPCPart(chrEntityId, npcPartId5, npcPartGroupIdx5, npcPartHP, 1, 0.5, false, false);
        SetNPCPartSEAndSFX(chrEntityId, npcPartId5, 109, 109, 139, 139, 0);
    }
    if (Signed(npcPartId5) != 0) {
        UnknownNPCPart200493(chrEntityId, npcPartId, npcPartId2, npcPartId3, npcPartId4, npcPartId5);
    } else if (Signed(npcPartId4) != 0) {
        UnknownNPCPart200493(chrEntityId, npcPartId, npcPartId2, npcPartId3, npcPartId4, -1);
    } else if (Signed(npcPartId3) != 0) {
        UnknownNPCPart200493(chrEntityId, npcPartId, npcPartId2, npcPartId3, -1, -1);
    } else if (Signed(npcPartId2) != 0) {
        UnknownNPCPart200493(chrEntityId, npcPartId, npcPartId2, -1, -1, -1);
    } else {
        UnknownNPCPart200493(chrEntityId, npcPartId, -1, -1, -1, -1);
    }
L0:
    WaitFor(ElapsedFrames(1));
    hp &= NPCPartHP(chrEntityId, npcPartId) > 0;
    if (Signed(npcPartId2) != 0) {
        hp &= NPCPartHP(chrEntityId, npcPartId2) > 0;
    }
    if (Signed(npcPartId3) != 0) {
        hp &= NPCPartHP(chrEntityId, npcPartId3) > 0;
    }
    if (Signed(npcPartId4) != 0) {
        hp &= NPCPartHP(chrEntityId, npcPartId4) > 0;
    }
    if (Signed(npcPartId5) != 0) {
        hp &= NPCPartHP(chrEntityId, npcPartId5) > 0;
    }
    WaitFor(hp);
    hpSp |= NPCPartHP(chrEntityId, npcPartId) <= 0;
    if (Signed(npcPartId2) != 0) {
        hpSp |= NPCPartHP(chrEntityId, npcPartId2) <= 0;
    }
    if (Signed(npcPartId3) != 0) {
        hpSp |= NPCPartHP(chrEntityId, npcPartId3) <= 0;
    }
    if (Signed(npcPartId4) != 0) {
        hpSp |= NPCPartHP(chrEntityId, npcPartId4) <= 0;
    }
    if (Signed(npcPartId5) != 0) {
        hpSp |= NPCPartHP(chrEntityId, npcPartId5) <= 0;
    }
    hpSp |= CharacterHasSpEffect(chrEntityId, spEffectId)
        || CharacterHasSpEffect(chrEntityId, 62926)
        || CharacterHasSpEffect(chrEntityId, 62925)
        || CharacterHPValue(chrEntityId2) <= 0;
    WaitFor(hpSp);
    EndIf(CharacterHPValue(chrEntityId2) <= 0);
    DisableNetworkSync();
    hp2 |= NPCPartHP(chrEntityId, npcPartId) <= 0;
    if (Signed(npcPartId2) != 0) {
        hp2 |= NPCPartHP(chrEntityId, npcPartId2) <= 0;
    }
    if (Signed(npcPartId3) != 0) {
        hp2 |= NPCPartHP(chrEntityId, npcPartId3) <= 0;
    }
    if (Signed(npcPartId4) != 0) {
        hp2 |= NPCPartHP(chrEntityId, npcPartId4) <= 0;
    }
    if (Signed(npcPartId5) != 0) {
        hp2 |= NPCPartHP(chrEntityId, npcPartId5) <= 0;
    }
    if (!hp2) {
        RestartIf(CharacterHasSpEffect(chrEntityId, 62926));
        RestartIf(CharacterHasSpEffect(chrEntityId, 62925));
        if (!CharacterHasSpEffect(chrEntityId, spEffectId)) {
            WaitFor(ElapsedSeconds(0.5));
            EndIf(CharacterHPValue(chrEntityId2) <= 0);
            hp3 |= NPCPartHP(chrEntityId, npcPartId) <= 0;
            if (Signed(npcPartId2) != 0) {
                hp3 |= NPCPartHP(chrEntityId, npcPartId2) <= 0;
            }
            if (Signed(npcPartId3) != 0) {
                hp3 |= NPCPartHP(chrEntityId, npcPartId3) <= 0;
            }
            if (Signed(npcPartId4) != 0) {
                hp3 |= NPCPartHP(chrEntityId, npcPartId4) <= 0;
            }
            if (Signed(npcPartId5) != 0) {
                hp3 |= NPCPartHP(chrEntityId, npcPartId5) <= 0;
            }
            if (!hp3) {
                RestartIf(CharacterHasSpEffect(chrEntityId, 62926));
                RestartIf(CharacterHasSpEffect(chrEntityId, 62925));
                if (!CharacterHasSpEffect(chrEntityId, spEffectId)) {
                    WaitFor(ElapsedSeconds(0.5));
                    EndIf(CharacterHPValue(chrEntityId2) <= 0);
                    hp4 |= NPCPartHP(chrEntityId, npcPartId) <= 0;
                    if (Signed(npcPartId2) != 0) {
                        hp4 |= NPCPartHP(chrEntityId, npcPartId2) <= 0;
                    }
                    if (Signed(npcPartId3) != 0) {
                        hp4 |= NPCPartHP(chrEntityId, npcPartId3) <= 0;
                    }
                    if (Signed(npcPartId4) != 0) {
                        hp4 |= NPCPartHP(chrEntityId, npcPartId4) <= 0;
                    }
                    if (Signed(npcPartId5) != 0) {
                        hp4 |= NPCPartHP(chrEntityId, npcPartId5) <= 0;
                    }
                    if (!hp4) {
                        RestartIf(CharacterHasSpEffect(chrEntityId, 62926));
                        RestartIf(CharacterHasSpEffect(chrEntityId, 62925));
                        GotoIf(L1, CharacterHasSpEffect(chrEntityId, spEffectId));
                    }
                }
            }
        }
    }
L0:
    SetNPCPartHP(chrEntityId, npcPartId, 0, false);
    if (Signed(npcPartId2) != 0) {
        SetNPCPartHP(chrEntityId, npcPartId2, 0, false);
    }
    if (Signed(npcPartId3) != 0) {
        SetNPCPartHP(chrEntityId, npcPartId3, 0, false);
    }
    if (Signed(npcPartId4) != 0) {
        SetNPCPartHP(chrEntityId, npcPartId4, 0, false);
    }
    if (Signed(npcPartId5) != 0) {
        SetNPCPartHP(chrEntityId, npcPartId5, 0, false);
    }
    SetSpEffect(chrEntityId, spEffectId);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    Goto(L1);
L1:
    WaitFor(CharacterHasSpEffect(chrEntityId, 62926) || CharacterHasSpEffect(chrEntityId, 62925));
    RestartEvent();
});

$Event(90075866, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2, npcPartHP, npcPartId, bitNumber, npcPartGroupIdx, dummypolyId) {
    EndIf(EventFlag(7512));
    if (EventFlag(eventFlagId)) {
        WaitFor(CharacterBackreadStatus(chrEntityId));
        GotoIf(S0, 
            !(!CharacterHasSpEffect(chrEntityId, 62926)
                && !CharacterHasSpEffect(chrEntityId, 62925)
                && EventFlag(eventFlagId2)));
        ChangeCharacterDispmask(chrEntityId, bitNumber, OFF);
    } else {
S0:
L10:
        WaitFor(EventFlag(eventFlagId));
        SetNetworkconnectedEventFlagID(eventFlagId2, OFF);
        DisableNetworkSync();
        WaitFor(CharacterBackreadStatus(chrEntityId) && CharacterBackreadStatus(chrEntityId2));
        WaitFor(
            (!CharacterHasSpEffect(chrEntityId, 62926) && !CharacterHasSpEffect(chrEntityId, 62925))
                || CharacterHPValue(chrEntityId2) <= 0);
        EnableNetworkSync();
        CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, npcPartHP, 1, 0.5, false, false);
        SetNPCPartSEAndSFX(chrEntityId, npcPartId, 110, 110, 139, 139, 0);
        WaitFor(ElapsedFrames(1));
        WaitFor(NPCPartHP(chrEntityId, npcPartId) > 0);
        WaitFor(
            NPCPartHP(chrEntityId, npcPartId) <= 0
                || CharacterHasSpEffect(chrEntityId, 62926)
                || CharacterHasSpEffect(chrEntityId, 62925)
                || CharacterHPValue(chrEntityId2) <= 0);
        EndIf(CharacterHPValue(chrEntityId2) <= 0);
        DisableNetworkSync();
        if (NPCPartHP(chrEntityId, npcPartId) > 0) {
            RestartIf(CharacterHasSpEffect(chrEntityId, 62926));
            RestartIf(CharacterHasSpEffect(chrEntityId, 62925));
            WaitFor(ElapsedSeconds(0.5));
            EndIf(CharacterHPValue(chrEntityId2) <= 0);
            if (NPCPartHP(chrEntityId, npcPartId) > 0) {
                RestartIf(CharacterHasSpEffect(chrEntityId, 62926));
                RestartIf(CharacterHasSpEffect(chrEntityId, 62925));
                WaitFor(ElapsedSeconds(0.5));
                EndIf(CharacterHPValue(chrEntityId2) <= 0);
                if (NPCPartHP(chrEntityId, npcPartId) > 0) {
                    RestartIf(CharacterHasSpEffect(chrEntityId, 62926));
                    RestartIf(CharacterHasSpEffect(chrEntityId, 62925));
                }
            }
        }
L0:
        SetNPCPartHP(chrEntityId, npcPartId, 0, false);
        SetSpEffect(chrEntityId, 62942);
        ChangeCharacterDispmask(chrEntityId, bitNumber, OFF);
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId, dummypolyId, 646119);
        PlaySE(chrEntityId, SoundType.CharacterMotion, 464109010);
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
        Goto(L1);
    }
L1:
    WaitFor(CharacterHasSpEffect(chrEntityId, 62926) || CharacterHasSpEffect(chrEntityId, 62925));
    RestartEvent();
});

$Event(90075867, Restart, function(chrEntityId, chrEntityId2, eventFlagId) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(eventFlagId));
    DisableLockOnPoint(chrEntityId, 222);
    DisableLockOnPoint(chrEntityId, 223);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 62935) || CharacterHPValue(chrEntityId2) <= 0);
    EndIf(CharacterHPValue(chrEntityId2) <= 0);
    EnableLockOnPoint(chrEntityId, 222);
    EnableLockOnPoint(chrEntityId, 223);
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 62935)
            || CharacterHasSpEffect(chrEntityId, 62926)
            || CharacterHasSpEffect(chrEntityId, 62925)
            || CharacterHPValue(chrEntityId2) <= 0);
    EndIf(CharacterHPValue(chrEntityId2) <= 0);
    RestartEvent();
});

$Event(90075870, Restart, function(chrEntityId, chrEntityId2, eventFlagId) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(
        (CharacterHasSpEffect(chrEntityId, 62898) || CharacterHPValue(chrEntityId2) <= 1)
            && PlayerIsInOwnWorld());
    EndIf(CharacterHPValue(chrEntityId2) <= 1);
    SetSpEffect(chrEntityId2, 62899);
    DisableNetworkSync();
    WaitFor(!CharacterHasSpEffect(chrEntityId, 62898));
    EnableNetworkSync();
    RestartEvent();
});

$Event(90075871, Restart, function(chrEntityId, chrEntityId2, eventFlagId) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterHPValue(chrEntityId2) <= 1 && PlayerIsInOwnWorld());
    SetSpEffect(chrEntityId, 62897);
    WaitFor(ElapsedFrames(1));
    WaitFor(CharacterRatioHasSpEffect(chrEntityId, 62897, Less, 1) && PlayerIsInOwnWorld());
    RestartEvent();
});

$Event(90075890, Restart, function(eventFlagId, eventFlagId2, assetEntityId, assetEntityId2) {
    if (EventFlag(9999)) {
        ChangeWeather(Weather.Type11, -1, true);
        ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 0);
        ChangeAssetEnableStateUnknown200510(assetEntityId2, Disabled, 0);
        EndEvent();
    }
    if (EventFlag(eventFlagId2)) {
        ChangeWeather(Weather.Type11, -1, true);
        ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 0);
        ChangeAssetEnableStateUnknown200510(assetEntityId2, Disabled, 0);
        EndEvent();
    }
    WaitFor(EventFlag(7511));
L0:
    WaitFor(EventFlag(eventFlagId));
    ChangeWeather(Weather.Type11, -1, true);
    ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 0);
    ChangeAssetEnableStateUnknown200510(assetEntityId2, Disabled, 0);
});

$Event(90075891, Restart, function(chrEntityId, spEffectId, eventFlagId) {
    if (EventFlag(eventFlagId)) {
        SetBossBGM(762000, BossBGMState.HeatUp2);
        EndEvent();
    }
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId) || EventFlag(eventFlagId));
    SetBossBGM(762000, BossBGMState.HeatUp2);
});

$Event(90075900, Restart, function(chrEntityId) {
    EndIf(EventFlag(7512));
    EndIf(EventFlag(7511));
    WaitFor(
        InArea(10000, 19002801)
            || HasDamageType(chrEntityId, 0, DamageType.Any)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || EventFlag(7511));
    SetNetworkconnectedEventFlagID(7511, ON);
});

$Event(90075901, Restart, function(chrEntityId, bgmBossConvParamId, logObjectId) {
    EndIf(EventFlag(7512));
    EndIf(EventFlag(18002800));
    WaitFor(HPRatio(chrEntityId) == 0);
    EndIf(EventFlag(7516));
    SetSpEffect(10000, 509);
    SetSpEffect(10001, 509);
    SetSpEffect(10002, 509);
    SetSpEffect(10003, 509);
    SetSpEffect(10004, 509);
    SetSpEffect(10005, 509);
    SetSpEffect(10006, 509);
    SetSpEffect(10007, 509);
    SetSpEffect(10008, 509);
    SetSpEffect(10009, 509);
    SetSpEffect(10010, 509);
    EnableCharacterImmortality(20000);
    SetNetworkconnectedEventFlagID(7513, ON);
    WaitFixedTimeSeconds(5);
    PlaySE(chrEntityId, SoundType.SFX, 888880000);
    RecordUserDispLog(10111, 10000, LogObjectType.NpcName, logObjectId);
    if (PlayerInMap(16, 0, 0, 0)) {
        DisplayTextEffectId(1052);
    }
    if (PlayerInMap(16, 10, 0, 0)) {
        DisplayTextEffectId(1053);
    }
    if (PlayerInMap(18, 0, 0, 0)) {
        DisplayTextEffectId(1040);
    }
    if (PlayerInMap(19, 0, 0, 0)) {
        DisplayTextEffectId(1051);
    }
    if (BossBGMPlaying(bgmBossConvParamId)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
    }
    IncrementTeamBossesKilled(1);
    DisplayBossHealthBar(Disabled, chrEntityId, 0, 0);
    SetNetworkconnectedEventFlagID(7512, ON);
    WaitFixedTimeSeconds(0.1);
    SetSpEffect(20000, 102121);
});

$Event(90075902, Restart, function(chrEntityId, chrEntityId2, chrEntityId3) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    EndIf(EventFlag(18002800));
    if (!PlayerIsInOwnWorld()) {
        if (chrEntityId != 0) {
            SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Normal);
        }
        if (chrEntityId2 != 0) {
            SetNetworkUpdateAuthority(chrEntityId2, AuthorityLevel.Normal);
        }
        if (chrEntityId3 != 0) {
            SetNetworkUpdateAuthority(chrEntityId3, AuthorityLevel.Normal);
        }
    }
    WaitFor(PlayerIsInOwnWorld());
    if (PlayerIsInOwnWorld()) {
        if (chrEntityId != 0) {
            SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
        }
        if (chrEntityId2 != 0) {
            SetNetworkUpdateAuthority(chrEntityId2, AuthorityLevel.Forced);
        }
        if (chrEntityId3 != 0) {
            SetNetworkUpdateAuthority(chrEntityId3, AuthorityLevel.Forced);
        }
    }
    WaitFor(!PlayerIsInOwnWorld());
    RestartEvent();
});

$Event(90075903, Restart, function(areaId, chrEntityId, chrEntityId2, chrEntityId3) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    EndIf(EventFlag(18002800));
    if (!MapHasPermissionToUpdate(false, areaId, 0, 0, 0)) {
        if (chrEntityId != 0) {
            SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Normal);
        }
        if (chrEntityId2 != 0) {
            SetNetworkUpdateAuthority(chrEntityId2, AuthorityLevel.Normal);
        }
        if (chrEntityId3 != 0) {
            SetNetworkUpdateAuthority(chrEntityId3, AuthorityLevel.Normal);
        }
    }
    WaitFor(MapHasPermissionToUpdate(false, areaId, 0, 0, 0));
    if (MapHasPermissionToUpdate(false, areaId, 0, 0, 0)) {
        if (chrEntityId != 0) {
            SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
        }
        if (chrEntityId2 != 0) {
            SetNetworkUpdateAuthority(chrEntityId2, AuthorityLevel.Forced);
        }
        if (chrEntityId3 != 0) {
            SetNetworkUpdateAuthority(chrEntityId3, AuthorityLevel.Forced);
        }
    }
    WaitFor(!MapHasPermissionToUpdate(false, areaId, 0, 0, 0));
    RestartEvent();
});

$Event(90075904, Restart, function(chrEntityId, bgmBossConvParamId, logObjectId, timeSeconds, spEffectId, timeSeconds2) {
    EndIf(EventFlag(7512));
    EndIf(EventFlag(18002800));
    WaitFor(HPRatio(chrEntityId) == 0);
    EndIf(EventFlag(7516));
    SetSpEffect(10000, 509);
    SetSpEffect(10001, 509);
    SetSpEffect(10002, 509);
    SetSpEffect(10003, 509);
    SetSpEffect(10004, 509);
    SetSpEffect(10005, 509);
    SetSpEffect(10006, 509);
    SetSpEffect(10007, 509);
    SetSpEffect(10008, 509);
    SetSpEffect(10009, 509);
    SetSpEffect(10010, 509);
    EnableCharacterImmortality(20000);
    SetNetworkconnectedEventFlagID(7513, ON);
    WaitFor(ElapsedSeconds(5));
    if (Signed(spEffectId) != 0) {
        GotoIf(S0, !CharacterHasSpEffect(chrEntityId, spEffectId));
        WaitFixedTimeSeconds(timeSeconds2);
    } else {
S0:
        WaitFixedTimeSeconds(timeSeconds);
    }
    PlaySE(chrEntityId, SoundType.SFX, 888880000);
    RecordUserDispLog(10111, 10000, LogObjectType.NpcName, logObjectId);
    if (PlayerInMap(16, 0, 0, 0)) {
        DisplayTextEffectId(1052);
    }
    if (PlayerInMap(16, 10, 0, 0)) {
        DisplayTextEffectId(1053);
    }
    if (PlayerInMap(18, 0, 0, 0)) {
        DisplayTextEffectId(1040);
    }
    if (PlayerInMap(19, 0, 0, 0)) {
        DisplayTextEffectId(1051);
    }
    if (BossBGMPlaying(bgmBossConvParamId)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
    }
    IncrementTeamBossesKilled(1);
    DisplayBossHealthBar(Disabled, chrEntityId, 0, 0);
    SetNetworkconnectedEventFlagID(7512, ON);
    WaitFixedTimeSeconds(0.1);
    SetSpEffect(20000, 102121);
});

$Event(90075910, Restart, function(eventFlagId, eventFlagId2, assetEntityId, chrEntityId, spEffectId, targetAmount) {
    if (!EventFlag(9999)) {
        EndIf(EventFlag(eventFlagId2));
        if (eventFlagId != 0) {
            flagSpHp &= EventFlag(eventFlagId);
        }
        if (Signed(0) != spEffectId) {
            flagSpHp &= CharacterHasSpEffect(chrEntityId, spEffectId, GreaterOrEqual, 1);
        } else {
            flagSpHp &= CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount;
        }
    }
    if (flagSpHp) {
        ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 0);
        EndEvent();
    }
    if (eventFlagId != 0) {
        WaitFor(EventFlag(eventFlagId));
    }
    if (Signed(0) != spEffectId) {
        WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId, GreaterOrEqual, 1));
    } else {
        WaitFor(CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount);
    }
    ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 5);
});

$Event(90075920, Default, function(mapVariationId, eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(!IsMapVariation(mapVariationId));
    EndIf(EventFlag(eventFlagId));
    WaitFor(IsGameMode(2) && EventFlag(7512));
    SetEventFlagID(eventFlagId2, ON);
});

$Event(90075930, Default, function(eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId));
    WaitFor(IsGameMode(2) && EventFlag(7512));
    SetEventFlagID(eventFlagId2, ON);
});

$Event(90075931, Default, function() {
    DisableNetworkSync();
    EndIf(IsMapVariation(0));
    EndIf(IsMapVariation(1));
    EndIf(IsMapVariation(2));
    EndIf(IsMapVariation(3));
    EndIf(IsMapVariation(4));
    EndIf(IsMapVariation(5));
    EndIf(IsMapVariation(6));
    EndIf(IsMapVariation(8));
    WaitFor(
        IsGameMode(2)
            && EventFlag(7512)
            && (IsMapVariation(10)
                || IsMapVariation(11)
                || IsMapVariation(12)
                || IsMapVariation(13)
                || IsMapVariation(14)
                || IsMapVariation(15)
                || IsMapVariation(16)
                || IsMapVariation(18)));
    GotoIf(L0, IsHero(Hero.Scholar));
    GotoIf(L1, IsHero(Hero.Undertaker));
    EndEvent();
L0:
    SetEventFlagID(6061, ON);
    EndEvent();
L1:
    SetEventFlagID(6062, ON);
    EndEvent();
});

$Event(90075940, Default, function(mapVariationId, eventFlagId, eventFlagId2, itemId) {
    DisableNetworkSync();
    EndIf(!IsMapVariation(mapVariationId));
    EndIf(EventFlag(eventFlagId));
    EndIf(PlayerHasItem(ItemType.Antique, itemId));
    WaitFor(IsGameMode(2) && EventFlag(7512));
    SetEventFlagID(eventFlagId2, ON);
});

$Event(90075950, Restart, function(bgmBossConvParamId, chrEntityId, spEffectId, targetAmount) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    if (Signed(0) != spEffectId) {
        spHp |= CharacterHasSpEffect(chrEntityId, spEffectId, GreaterOrEqual, 1);
    } else {
        spHp |= CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount;
    }
    WaitFor((spHp && BossBGMPlaying(bgmBossConvParamId)) || EventFlag(7512));
    EndIf(EventFlag(7512));
    SetBossBGM(bgmBossConvParamId, BossBGMState.HeatUp2);
    WaitFor(!BossBGMPlaying(bgmBossConvParamId) || EventFlag(7512));
    EndIf(EventFlag(7512));
    RestartEvent();
});

$Event(90085000, Default, function(missionId, hero, eventFlagId, eventFlagId2, chrEntityId, actionButtonParameterId) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    EndIf(!HasMissionState(missionId, 1));
    EndIf(!IsHero(hero));
    EndIf(EventFlag(eventFlagId));
    SetSpEffect(chrEntityId, 99840);
    WaitFor(ActionButtonInArea(actionButtonParameterId, chrEntityId) || EventFlag(eventFlagId));
    ClearSpEffect(chrEntityId, 99840);
    EndIf(EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90085001, Default, function(missionId, hero, eventFlagId, eventFlagId2, assetEntityId) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    EndIf(!HasMissionState(missionId, 1));
    EndIf(!IsHero(hero));
    if (EventFlag(eventFlagId)) {
        EnableAsset(assetEntityId);
        EndEvent();
    }
    EnableAsset(assetEntityId);
    WaitFor(AssetDestroyed(assetEntityId) || EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90085002, Default, function(missionId, eventFlagId, eventFlagId2, eventFlagId3, chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, animationId) {
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId));
    if (EventFlag(eventFlagId2)) {
        if (!EventFlag(eventFlagId3)) {
            EndEvent();
        }
    }
    if (EventFlag(eventFlagId2)) {
        if (EventFlag(eventFlagId3)) {
            SetCharacterBackreadState(chrEntityId, false);
            EnableCharacter(chrEntityId);
            EndEvent();
        }
    }
    SetCharacterBackreadState(chrEntityId, false);
    DisableCharacter(chrEntityId);
    WaitFor(EventFlag(eventFlagId2));
    if (!EventFlag(eventFlagId3)) {
        SetCharacterBackreadState(chrEntityId, true);
        DisableCharacter(chrEntityId);
        ForceAnimationPlayback(chrEntityId, 30026, true, false, false);
        EndEvent();
    }
    WaitFor(ElapsedSeconds(1));
    SetCharacterBackreadState(chrEntityId2, false);
    EnableCharacter(chrEntityId2);
    ForceAnimationPlayback(chrEntityId2, animationId, false, false, false);
    if (0 != chrEntityId3) {
        WaitFor(ElapsedSeconds(0.2));
        SetCharacterBackreadState(chrEntityId3, false);
        EnableCharacter(chrEntityId3);
        ForceAnimationPlayback(chrEntityId3, animationId, false, false, false);
        if (0 != chrEntityId4) {
            WaitFor(ElapsedSeconds(0.2));
            SetCharacterBackreadState(chrEntityId4, false);
            EnableCharacter(chrEntityId4);
            ForceAnimationPlayback(chrEntityId4, animationId, false, false, false);
            if (0 != chrEntityId5) {
                WaitFor(ElapsedSeconds(0.2));
                SetCharacterBackreadState(chrEntityId5, false);
                EnableCharacter(chrEntityId5);
                ForceAnimationPlayback(chrEntityId5, animationId, false, false, false);
            }
        }
    }
L0:
    NoOp();
});

$Event(90085003, Default, function(missionId, eventFlagId, eventFlagId2, eventFlagId3, chrEntityId) {
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId));
    if (EventFlag(eventFlagId2)) {
        EndIf(!EventFlag(eventFlagId3));
    }
    WaitFor(EventFlag(eventFlagId2));
    EndIf(!EventFlag(eventFlagId3));
    WaitFor(CharacterRatioDead(chrEntityId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    IncrementMissionProgress(missionId, 1);
});

$Event(90085004, Default, function(missionId, hero, eventFlagId, eventFlagId2, chrEntityId, actionButtonParameterId, assetEntityId) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    EndIf(!HasMissionState(missionId, 1));
    EndIf(!IsHero(hero));
    EndIf(EventFlag(eventFlagId));
    EnableAsset(assetEntityId);
    SetSpEffect(chrEntityId, 99840);
    WaitFor(ActionButtonInArea(actionButtonParameterId, chrEntityId) || EventFlag(eventFlagId));
    ClearSpEffect(chrEntityId, 99840);
    EndIf(EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90085005, Default, function(missionId, hero, eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    if (IsPlayerNo(1)) {
        EndIf(!EventFlag(7015));
    }
    if (IsPlayerNo(2)) {
        EndIf(!EventFlag(7016));
    }
    if (IsPlayerNo(3)) {
        EndIf(!EventFlag(7017));
    }
    EndIf(!HasMissionState(missionId, 1));
    EndIf(!IsHero(hero));
    if (!(!EventFlag(eventFlagId) && !EventFlag(eventFlagId2))) {
        SetWorldMapPointFlag(3, OFF);
        EndEvent();
    }
L0:
    SetWorldMapPointFlag(3, ON);
    WaitFor(EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    SetWorldMapPointFlag(3, OFF);
});

$Event(90085006, Default, function(missionId, hero, eventFlagId, eventFlagId2, chrEntityId, chrEntityId2, assetEntityId) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    EndIf(!HasMissionState(missionId, 1));
    EndIf(!IsHero(hero));
    EndIf(EventFlag(eventFlagId));
    EnableAsset(assetEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    SetSpEffect(chrEntityId, 99840);
    SetSpEffect(chrEntityId2, 0);
    WaitFor(
        (CharacterHasSpEffect(chrEntityId, 9770) || CharacterHasSpEffect(chrEntityId, 9771))
            || EventFlag(eventFlagId));
    ClearSpEffect(chrEntityId, 99840);
    EndIf(EventFlag(eventFlagId));
    if (!CharacterHasSpEffect(chrEntityId, 9771)) {
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
    }
    if (!CharacterHasSpEffect(chrEntityId, 9770)) {
        SetSpEffect(20000, 99187);
        DisableAsset(assetEntityId);
        DisableCharacter(chrEntityId);
    }
});

$Event(90085007, Default, function(missionId, eventFlagId, eventFlagId2, eventFlagId3, chrEntityId, assetEntityId) {
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId));
    if (EventFlag(eventFlagId2)) {
        EndIf(!EventFlag(eventFlagId3));
    }
    WaitFor(EventFlag(eventFlagId2));
    EndIf(!EventFlag(eventFlagId3));
    WaitFor(CharacterRatioDead(chrEntityId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    IncrementMissionProgress(missionId, 1);
    DisableAsset(assetEntityId);
});

$Event(90085008, Default, function(missionId, hero, eventFlagId, eventFlagId2, eventFlagId3) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    EndIf(!HasMissionState(missionId, 1));
    EndIf(!IsHero(hero));
    if (!(!EventFlag(eventFlagId) && !EventFlag(eventFlagId2))) {
        SetWorldMapPointFlag(3, OFF);
        EndEvent();
    }
L0:
    SetWorldMapPointFlag(3, ON);
    WaitFor(EventFlag(eventFlagId) || EventFlag(eventFlagId3));
    SetWorldMapPointFlag(3, OFF);
});

$Event(90085009, Default, function(missionId, hero, spEffectId, spEffectId2, spEffectId3, spEffectId4) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    EndIf(!HasMissionState(missionId, 1));
    EndIf(!IsHero(hero));
    if (Signed(spEffectId) != 0) {
        if (!CharacterHasSpEffect(20000, spEffectId)) {
            if (MissionProgress(missionId) < 1) {
                WaitFor(MissionProgress(missionId) >= 1);
            }
            SetSpEffect(20000, spEffectId);
        }
    }
L0:
    if (Signed(spEffectId2) != 0) {
        if (!CharacterHasSpEffect(20000, spEffectId2)) {
            if (MissionProgress(missionId) < 2) {
                WaitFor(MissionProgress(missionId) >= 2);
            }
            SetSpEffect(20000, spEffectId2);
        }
    }
L1:
    if (Signed(spEffectId3) != 0) {
        if (!CharacterHasSpEffect(20000, spEffectId3)) {
            if (MissionProgress(missionId) < 3) {
                WaitFor(MissionProgress(missionId) >= 3);
            }
            SetSpEffect(20000, spEffectId3);
        }
    }
L2:
    if (Signed(spEffectId4) != 0) {
        if (!CharacterHasSpEffect(20000, spEffectId4)) {
            if (MissionProgress(missionId) < 4) {
                WaitFor(MissionProgress(missionId) >= 4);
            }
            SetSpEffect(20000, spEffectId4);
        }
    }
L3:
    NoOp();
});

$Event(90085010, Default, function(missionId, eventFlagId, userDispLogParamId, hero) {
    DisableNetworkSync();
    EndIf(!IsGameMode(2));
    EndIf(!MissionActive(missionId));
    if (IsPlayerNo(1)) {
        EndIf(!EventFlag(7015));
    }
    if (IsPlayerNo(2)) {
        EndIf(!EventFlag(7016));
    }
    if (IsPlayerNo(3)) {
        EndIf(!EventFlag(7017));
    }
    EndIf(!IsHero(hero));
    EndIf(!HasMissionState(missionId, 1));
    WaitFixedTimeSeconds(5);
    EndIf(EventFlag(eventFlagId));
    RecordUserDispLog(userDispLogParamId, 20000, LogObjectType.None, -1);
});

$Event(90085011, Default, function(missionId, hero, eventFlagId, eventFlagId2, chrEntityId, areaEntityId, assetEntityId) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    EndIf(!HasMissionState(missionId, 1));
    EndIf(!IsHero(hero));
    EndIf(EventFlag(eventFlagId));
    EnableAsset(assetEntityId);
    SetSpEffect(chrEntityId, 99842);
    WaitFor(InArea(20000, areaEntityId) || EventFlag(eventFlagId));
    ClearSpEffect(chrEntityId, 99842);
    EndIf(EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90085012, Default, function(missionId, eventFlagId, eventFlagId2, eventFlagId3, chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5) {
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId));
    if (EventFlag(eventFlagId2)) {
        if (!EventFlag(eventFlagId3)) {
            EndEvent();
        }
    }
    if (EventFlag(eventFlagId2)) {
        if (EventFlag(eventFlagId3)) {
            SetCharacterBackreadState(chrEntityId, false);
            EnableCharacter(chrEntityId);
            EndEvent();
        }
    }
    SetCharacterBackreadState(chrEntityId, false);
    DisableCharacter(chrEntityId);
    WaitFor(EventFlag(eventFlagId2));
    GotoIf(S0, EventFlag(eventFlagId3));
    SetCharacterBackreadState(chrEntityId, true);
    DisableCharacter(chrEntityId);
    EndEvent();
    WaitFor(ElapsedSeconds(1));
S0:
    SetCharacterBackreadState(chrEntityId2, false);
    EnableCharacter(chrEntityId2);
    ForceAnimationPlayback(chrEntityId2, 63020, false, false, false);
    if (0 != chrEntityId3) {
        WaitFor(ElapsedSeconds(0.2));
        SetCharacterBackreadState(chrEntityId3, false);
        EnableCharacter(chrEntityId3);
        ForceAnimationPlayback(chrEntityId3, 20026, false, false, false);
        if (0 != chrEntityId4) {
            WaitFor(ElapsedSeconds(0.2));
            SetCharacterBackreadState(chrEntityId4, false);
            EnableCharacter(chrEntityId4);
            ForceAnimationPlayback(chrEntityId4, 63020, false, false, false);
            if (0 != chrEntityId5) {
                WaitFor(ElapsedSeconds(0.2));
                SetCharacterBackreadState(chrEntityId5, false);
                EnableCharacter(chrEntityId5);
                ForceAnimationPlayback(chrEntityId5, 63020, false, false, false);
            }
        }
    }
L0:
    NoOp();
});

$Event(90085013, Default, function(missionId, eventFlagId, eventFlagId2, eventFlagId3, chrEntityId) {
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId));
    if (EventFlag(eventFlagId2)) {
        EndIf(!EventFlag(eventFlagId3));
    }
    WaitFor(EventFlag(eventFlagId2));
    EndIf(!EventFlag(eventFlagId3));
    WaitFor(CharacterRatioDead(chrEntityId));
    WaitFixedTimeSeconds(0.5);
    PlaySE(20000, SoundType.SFX, 888880000);
    DisplayTextEffectId(1100);
    WaitFixedTimeSeconds(3.5);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    IncrementMissionProgress(missionId, 1);
});

$Event(90085014, Default, function(missionId, eventFlagId, eventFlagId2, eventFlagId3, chrEntityId) {
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId));
    if (EventFlag(eventFlagId2)) {
        EndIf(!EventFlag(eventFlagId3));
    }
    WaitFor(EventFlag(eventFlagId2));
    EndIf(!EventFlag(eventFlagId3));
    WaitFor(CharacterRatioDead(chrEntityId));
    WaitFixedTimeSeconds(0.5);
    PlaySE(20000, SoundType.SFX, 888880000);
    DisplayTextEffectId(1020);
    WaitFixedTimeSeconds(3.5);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    IncrementMissionProgress(missionId, 1);
});

$Event(90085015, Default, function(missionId, eventFlagId, chrEntityId) {
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId));
    WaitFor(CharacterBackreadStatus(chrEntityId));
    DisableCharacter(chrEntityId);
});

$Event(90015316, Default, function(areaEntityId) {
    DisableNetworkSync();
    WaitFor(InArea(20000, areaEntityId));
    SetEventFlagID(9025, ON);
    ActivateGparamUnknown201213(0, 3);
    WaitFor(!InArea(20000, areaEntityId) || !EventFlag(9025));
    SetEventFlagID(9025, OFF);
    DeactivateGparamUnknown201214(3);
    RestartEvent();
});

$Event(90085016, Default, function(missionId, eventFlagId, eventFlagId2, eventFlagId3, chrEntityId, textEffectParamId, timeSeconds) {
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId));
    if (EventFlag(eventFlagId2)) {
        EndIf(!EventFlag(eventFlagId3));
    }
    WaitFor(EventFlag(eventFlagId2));
    EndIf(!EventFlag(eventFlagId3));
    WaitFor(CharacterRatioDead(chrEntityId));
    WaitFixedTimeSeconds(timeSeconds);
    PlaySE(chrEntityId, SoundType.SFX, 888880000);
    DisplayTextEffectId(textEffectParamId);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90085020, Default, function(missionId, eventFlagId, eventFlagId2, eventFlagId3, chrEntityId, spEffectId, eventFlagId4, hero) {
    DisableNetworkSync();
    GotoIf(L2, !MissionActive(missionId));
    GotoIf(S0, !IsPlayerNo(1));
    GotoIf(L2, !EventFlag(7015));
S0:
    GotoIf(S1, !IsPlayerNo(2));
    GotoIf(L2, !EventFlag(7016));
S1:
    GotoIf(S2, !IsPlayerNo(3));
    GotoIf(L2, !EventFlag(7017));
S2:
    GotoIf(L2, !IsHero(hero));
    GotoIf(L2, !HasMissionState(missionId, 1));
    GotoIf(L2, EventFlag(eventFlagId3));
    if (!(EventFlag(eventFlagId2) && EventFlag(eventFlagId4))) {
        if (!EventFlag(eventFlagId)) {
            SetSpEffect(chrEntityId, spEffectId);
            WaitFor(EventFlag(eventFlagId));
        }
L0:
        if (MissionActive(302)) {
            WaitFixedTimeSeconds(1);
        }
        ClearSpEffect(chrEntityId, spEffectId);
        GotoIf(L2, !EventFlag(eventFlagId4));
        WaitFor(EventFlag(eventFlagId2));
    }
L1:
    GotoIf(L2, MissionActive(202));
    GotoIf(L2, MissionActive(302));
    GotoIf(L2, MissionActive(701));
    SetSpEffect(chrEntityId, spEffectId);
    WaitFor(EventFlag(eventFlagId3));
    ClearSpEffect(chrEntityId, spEffectId);
    EndIf(MissionActive(1001));
    WaitFor(ElapsedSeconds(10));
    SetCharacterBackreadState(chrEntityId, true);
    EndEvent();
L2:
    ClearSpEffect(chrEntityId, spEffectId);
    EndIf(MissionActive(1001));
    SetCharacterBackreadState(chrEntityId, true);
});

$Event(90085021, Default, function(missionId, eventFlagId, areaEntityId, eventFlagId2, hero) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    if (IsPlayerNo(1)) {
        EndIf(!EventFlag(7015));
    }
    if (IsPlayerNo(2)) {
        EndIf(!EventFlag(7016));
    }
    if (IsPlayerNo(3)) {
        EndIf(!EventFlag(7017));
    }
    EndIf(!IsHero(hero));
    EndIf(!HasMissionState(missionId, 1));
    EndIf(EventFlag(eventFlagId));
    WaitFor(InArea(20000, areaEntityId));
    EndIf(EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90085022, Default, function(missionId, eventFlagId, areaEntityId, entityId, operationGuideParamId, hero) {
    DisableNetworkSync();
    HideFloatingMessage(operationGuideParamId, entityId);
    EndIf(!MissionActive(missionId));
    if (IsPlayerNo(1)) {
        EndIf(!EventFlag(7015));
    }
    if (IsPlayerNo(2)) {
        EndIf(!EventFlag(7016));
    }
    if (IsPlayerNo(3)) {
        EndIf(!EventFlag(7017));
    }
    EndIf(!IsHero(hero));
    EndIf(!HasMissionState(missionId, 1));
    EndIf(EventFlag(eventFlagId));
    WaitFor(InArea(20000, areaEntityId) || EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId));
    ShowFloatingMessage(operationGuideParamId, entityId);
    WaitFor(!InArea(20000, areaEntityId) || EventFlag(eventFlagId));
    HideFloatingMessage(operationGuideParamId, entityId);
    EndIf(EventFlag(eventFlagId));
    RestartEvent();
});

$Event(90085023, Default, function(missionId, eventFlagId, eventFlagId2, entityId, actionButtonParameterId, eventFlagId3, hero) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    if (IsPlayerNo(1)) {
        EndIf(!EventFlag(7015));
    }
    if (IsPlayerNo(2)) {
        EndIf(!EventFlag(7016));
    }
    if (IsPlayerNo(3)) {
        EndIf(!EventFlag(7017));
    }
    EndIf(!IsHero(hero));
    EndIf(!HasMissionState(missionId, 1));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    EndIf(!EventFlag(eventFlagId3));
    WaitFor(ActionButtonInArea(actionButtonParameterId, entityId));
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90085024, Default, function(missionId, eventFlagId, eventFlagId2) {
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    WaitFixedTimeSeconds(3);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90085025, Default, function(missionId, eventFlagId, eventFlagId2, hero) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    if (IsPlayerNo(1)) {
        EndIf(!EventFlag(7015));
    }
    if (IsPlayerNo(2)) {
        EndIf(!EventFlag(7016));
    }
    if (IsPlayerNo(3)) {
        EndIf(!EventFlag(7017));
    }
    EndIf(!IsHero(hero));
    EndIf(!HasMissionState(missionId, 1));
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId2));
    IncrementMissionProgress(missionId, 1);
    SetEventFlagID(eventFlagId, ON);
    WaitFixedTimeSeconds(3);
    DisplayTextEffectId(2300);
    EndIf(MissionActive(203) && EventFlag(9202));
    WaitFixedTimeSeconds(2);
    SetSpEffect(20000, 99250);
});

$Event(90085026, Default, function(missionId, eventFlagId, value, hero) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    if (IsPlayerNo(1)) {
        flagChrMission &= EventFlag(7015);
    }
    if (IsPlayerNo(2)) {
        flagChrMission &= EventFlag(7016);
    }
    if (IsPlayerNo(3)) {
        flagChrMission &= EventFlag(7017);
    }
    flagChrMission &= IsHero(hero) && HasMissionState(missionId, 1);
    EndIf(flagChrMission);
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    if (value != 0) {
        WaitFixedTimeSeconds(3);
    }
    DisplayTextEffectId(2300);
    WaitFixedTimeSeconds(2);
    SetSpEffect(20000, 99250);
});

$Event(90085027, Default, function(missionId, mapVariationId, eventFlagId, hero) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    if (IsPlayerNo(1)) {
        EndIf(!EventFlag(7015));
    }
    if (IsPlayerNo(2)) {
        EndIf(!EventFlag(7016));
    }
    if (IsPlayerNo(3)) {
        EndIf(!EventFlag(7017));
    }
    EndIf(!IsHero(hero));
    EndIf(!HasMissionState(missionId, 1));
    EndIf(!IsMapVariation(mapVariationId));
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(7512));
    IncrementMissionProgress(missionId, 1);
    WaitFixedTimeSeconds(6);
    SetEventFlagID(eventFlagId, ON);
    WaitFixedTimeSeconds(3);
    DisplayTextEffectId(2300);
});

$Event(90085028, Default, function(missionId, eventFlagId, eventFlagId2, userDispLogParamId, hero) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    if (IsPlayerNo(1)) {
        EndIf(!EventFlag(7015));
    }
    if (IsPlayerNo(2)) {
        EndIf(!EventFlag(7016));
    }
    if (IsPlayerNo(3)) {
        EndIf(!EventFlag(7017));
    }
    EndIf(IsHero(hero));
    EndIf(!HasMissionState(missionId, 1));
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId2));
    WaitFixedTimeSeconds(2);
    RecordUserDispLog(userDispLogParamId, 20000, LogObjectType.None, -1);
});

$Event(90085030, Default, function(missionId, chrEntityId) {
    EndIf(!MissionActive(missionId));
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
});

$Event(90085031, Default, function(missionId, assetEntityId) {
    EndIf(!MissionActive(missionId));
    DisableAsset(assetEntityId);
    ChangeAssetEnableStateUnknown200510(assetEntityId, Disabled, 0);
});

$Event(90085032, Default, function(missionId, assetEntityId) {
    EndIf(!MissionActive(missionId));
    ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 0);
    EnableAsset(assetEntityId);
});

$Event(90085033, Default, function(missionId, eventFlagId, assetEntityId, assetEntityId2) {
    if (!MissionActive(missionId)) {
        DisableAsset(assetEntityId);
        ChangeAssetEnableStateUnknown200510(assetEntityId, Disabled, 0);
        DisableAsset(assetEntityId2);
        ChangeAssetEnableStateUnknown200510(assetEntityId2, Disabled, 0);
        EndEvent();
    }
    if (EventFlag(eventFlagId)) {
        EnableAsset(assetEntityId);
        ReproduceAssetAnimation(assetEntityId, 1);
        EnableAsset(assetEntityId2);
        EndEvent();
    }
    EnableAsset(assetEntityId);
    EnableAsset(assetEntityId2);
    WaitFor(EventFlag(eventFlagId));
    ForceAnimationPlayback(assetEntityId, 1, false, false, false);
});

$Event(90085034, Default, function(missionId, eventFlagId, eventFlagId2, chrEntityId) {
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId));
    if (EventFlag(eventFlagId2)) {
        SetCharacterBackreadState(chrEntityId, false);
        EnableCharacter(chrEntityId);
        EnableLockOnPoint(chrEntityId, 220);
        EnableLockOnPoint(chrEntityId, 221);
        EnableLockOnPoint(chrEntityId, 222);
        EnableCharacterAI(chrEntityId);
        DisableCharacterInvincibility(chrEntityId);
        EndEvent();
    }
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    DisableLockOnPoint(chrEntityId, 220);
    DisableLockOnPoint(chrEntityId, 221);
    DisableLockOnPoint(chrEntityId, 222);
    DisableCharacterAI(chrEntityId);
    EnableCharacterInvincibility(chrEntityId);
    WaitFor(EventFlag(eventFlagId2));
    EnableLockOnPoint(chrEntityId, 220);
    EnableLockOnPoint(chrEntityId, 221);
    EnableLockOnPoint(chrEntityId, 222);
    EnableCharacterAI(chrEntityId);
    DisableCharacterInvincibility(chrEntityId);
});

$Event(90085035, Default, function(missionId, eventFlagId, entityId, actionButtonParameterId, eventFlagId2, hero) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    if (IsPlayerNo(1)) {
        EndIf(!EventFlag(7015));
    }
    if (IsPlayerNo(2)) {
        EndIf(!EventFlag(7016));
    }
    if (IsPlayerNo(3)) {
        EndIf(!EventFlag(7017));
    }
    EndIf(!IsHero(hero));
    EndIf(!HasMissionState(missionId, 1));
    EndIf(EventFlag(eventFlagId));
    WaitFor(ActionButtonInArea(actionButtonParameterId, entityId));
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90085036, Default, function(eventFlagId, userDispLogParamId, hero, missionId) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId));
    EndIf(!IsHero(hero));
    EndIf(!HasMissionState(missionId, 1));
    WaitFor(EventFlag(eventFlagId));
    WaitFixedTimeSeconds(3);
    if (IsPlayerNo(1)) {
        if (EventFlag(7015)) {
            RecordUserDispLog(userDispLogParamId, 10002, LogObjectType.None, -1);
        }
    }
    if (IsPlayerNo(2)) {
        if (EventFlag(7016)) {
            RecordUserDispLog(userDispLogParamId, 10003, LogObjectType.None, -1);
        }
    }
    if (IsPlayerNo(3)) {
        if (EventFlag(7017)) {
            RecordUserDispLog(userDispLogParamId, 10004, LogObjectType.None, -1);
        }
    }
});

$Event(90085037, Default, function(missionId, eventFlagId, eventFlagId2, assetEntityId, eventFlagId3, hero) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    if (IsPlayerNo(1)) {
        EndIf(!EventFlag(7015));
    }
    if (IsPlayerNo(2)) {
        EndIf(!EventFlag(7016));
    }
    if (IsPlayerNo(3)) {
        EndIf(!EventFlag(7017));
    }
    EndIf(!IsHero(hero));
    EndIf(!HasMissionState(missionId, 1));
    ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 1);
    EnableAsset(assetEntityId);
    EndIf(EventFlag(eventFlagId2));
    if (!EventFlag(eventFlagId)) {
        SetEventFlagID(eventFlagId3, ON);
        WaitFor(EventFlag(eventFlagId));
    }
L0:
    SetEventFlagID(eventFlagId3, OFF);
    WaitFor(AssetDestroyed(assetEntityId));
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(90085040, Default, function(missionId, eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    WaitFor(HasMultiplayerState(MultiplayerState.Host));
    EndIf(EventFlag(eventFlagId));
    WaitFor(RandomElapsedFrames(1, 5));
    EndIf(EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90085041, Default, function(missionId, eventFlagId, eventFlagId2, hero) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    if (IsPlayerNo(1)) {
        EndIf(!EventFlag(7015));
    }
    if (IsPlayerNo(2)) {
        EndIf(!EventFlag(7016));
    }
    if (IsPlayerNo(3)) {
        EndIf(!EventFlag(7017));
    }
    EndIf(!(IsHero(hero) && HasMissionState(missionId, 1)));
    if (EventFlag(eventFlagId)) {
        SetWorldMapPointFlag(3, OFF);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(eventFlagId2));
    SetWorldMapPointFlag(3, ON);
    WaitFor(EventFlag(eventFlagId));
    SetWorldMapPointFlag(3, OFF);
});

$Event(90085100, Default, function(chrEntityId, eventFlagId) {
    DisableNetworkSync();
    EndIf(!MissionActive(101));
    EndIf(!HasMissionState(101, 1));
    EndIf(EventFlag(8326));
    SetSpEffect(chrEntityId, 99840);
    WaitFor(ActionButtonInArea(4351, chrEntityId) || EventFlag(8326));
    ClearSpEffect(chrEntityId, 99840);
    EndIf(EventFlag(8326));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetNetworkconnectedEventFlagID(8326, ON);
});

$Event(90085101, Default, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, eventFlagId) {
    if (!MissionActive(101)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    if (EventFlag(8325)) {
        SetCharacterBackreadState(chrEntityId, true);
        DisableCharacter(chrEntityId);
        EndEvent();
    }
    if (EventFlag(8326)) {
        if (!EventFlag(eventFlagId)) {
            SetCharacterBackreadState(chrEntityId, true);
            DisableCharacter(chrEntityId);
            EndEvent();
        }
    }
    if (EventFlag(8326)) {
        if (EventFlag(eventFlagId)) {
            SetCharacterBackreadState(chrEntityId, false);
            EnableCharacter(chrEntityId);
            EndEvent();
        }
    }
    SetCharacterBackreadState(chrEntityId, false);
    DisableCharacter(chrEntityId);
    WaitFor(EventFlag(8326));
    if (!EventFlag(eventFlagId)) {
        SetCharacterBackreadState(chrEntityId, true);
        DisableCharacter(chrEntityId);
        EndEvent();
    }
    WaitFor(ElapsedSeconds(1));
    SetCharacterBackreadState(chrEntityId2, false);
    EnableCharacter(chrEntityId2);
    ForceAnimationPlayback(chrEntityId2, 1700, false, false, false);
    WaitFor(ElapsedSeconds(0.2));
    SetCharacterBackreadState(chrEntityId3, false);
    EnableCharacter(chrEntityId3);
    ForceAnimationPlayback(chrEntityId3, 1700, false, false, false);
    WaitFor(ElapsedSeconds(0.2));
    SetCharacterBackreadState(chrEntityId4, false);
    EnableCharacter(chrEntityId4);
    ForceAnimationPlayback(chrEntityId4, 1700, false, false, false);
});

$Event(90085102, Default, function(chrEntityId, chrEntityId2, chrEntityId3, eventFlagId) {
    EndIf(!MissionActive(101));
    EndIf(EventFlag(8325));
    if (EventFlag(8326)) {
        EndIf(!EventFlag(eventFlagId));
    }
    WaitFor(EventFlag(8326));
    EndIf(!EventFlag(eventFlagId));
    WaitFor(
        CharacterDead(chrEntityId) && CharacterDead(chrEntityId2) && CharacterDead(chrEntityId3));
    SetNetworkconnectedEventFlagID(8325, ON);
});

$Event(90085200, Default, function(chrEntityId, eventFlagId) {
    DisableNetworkSync();
    EndIf(!MissionActive(201));
    EndIf(!HasMissionState(201, 1));
    EndIf(EventFlag(8351));
    SetSpEffect(chrEntityId, 99840);
    WaitFor(ActionButtonInArea(4351, chrEntityId) || EventFlag(8351));
    ClearSpEffect(chrEntityId, 99840);
    EndIf(EventFlag(8351));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetNetworkconnectedEventFlagID(8351, ON);
});

$Event(90085201, Default, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, eventFlagId) {
    EndIf(!MissionActive(201));
    EndIf(EventFlag(8350));
    if (EventFlag(8351)) {
        if (!EventFlag(eventFlagId)) {
            EndEvent();
        }
    }
    if (EventFlag(8351)) {
        if (EventFlag(eventFlagId)) {
            SetCharacterBackreadState(chrEntityId, false);
            EnableCharacter(chrEntityId);
            EndEvent();
        }
    }
    SetCharacterBackreadState(chrEntityId, false);
    DisableCharacter(chrEntityId);
    WaitFor(EventFlag(8351));
    if (!EventFlag(eventFlagId)) {
        SetCharacterBackreadState(chrEntityId, true);
        DisableCharacter(chrEntityId);
        EndEvent();
    }
    WaitFor(ElapsedSeconds(1));
    SetCharacterBackreadState(chrEntityId2, false);
    EnableCharacter(chrEntityId2);
    ForceAnimationPlayback(chrEntityId2, 1700, false, false, false);
    WaitFor(ElapsedSeconds(0.2));
    SetCharacterBackreadState(chrEntityId3, false);
    EnableCharacter(chrEntityId3);
    ForceAnimationPlayback(chrEntityId3, 1700, false, false, false);
    WaitFor(ElapsedSeconds(0.2));
    SetCharacterBackreadState(chrEntityId4, false);
    EnableCharacter(chrEntityId4);
    ForceAnimationPlayback(chrEntityId4, 1700, false, false, false);
    WaitFor(ElapsedSeconds(0.2));
    SetCharacterBackreadState(chrEntityId5, false);
    EnableCharacter(chrEntityId5);
    ForceAnimationPlayback(chrEntityId5, 1700, false, false, false);
});

$Event(90085202, Default, function(chrEntityId, eventFlagId) {
    EndIf(!MissionActive(201));
    EndIf(EventFlag(8350));
    if (EventFlag(8351)) {
        EndIf(!EventFlag(eventFlagId));
    }
    WaitFor(EventFlag(8351));
    EndIf(!EventFlag(eventFlagId));
    WaitFor(CharacterRatioDead(chrEntityId));
    SetNetworkconnectedEventFlagID(8350, ON);
});

$Event(90085210, Default, function(missionId, eventFlagId, chrEntityId) {
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId));
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    EnableCharacterInvincibility(chrEntityId);
    WaitFor(ActionButtonInArea(9001, chrEntityId));
    EnableCharacterAI(chrEntityId);
    DisableCharacterInvincibility(chrEntityId);
    WaitFor(CharacterDead(chrEntityId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    IncrementMissionProgress(missionId, 1);
});

$Event(90085220, Default, function(missionId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    EndIf(!HasMissionState(missionId, 1));
    EndIf(!IsHero(Hero.Guardian));
    EndIf(EventFlag(eventFlagId));
    SetEventFlagID(eventFlagId2, ON);
    WaitFor(EventFlag(eventFlagId3) || EventFlag(eventFlagId4));
    SetEventFlagID(eventFlagId, ON);
    IncrementMissionProgress(missionId, 1);
    SetEventFlagID(eventFlagId2, OFF);
});

$Event(90085221, Default, function(missionId, chrEntityId, eventFlagId) {
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId));
    WaitFor(CharacterDead(chrEntityId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90085222, Default, function(missionId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, hero) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    if (IsPlayerNo(1)) {
        EndIf(!EventFlag(7015));
    }
    if (IsPlayerNo(2)) {
        EndIf(!EventFlag(7016));
    }
    if (IsPlayerNo(3)) {
        EndIf(!EventFlag(7017));
    }
    EndIf(!IsHero(hero));
    EndIf(!HasMissionState(missionId, 1));
    EndIf(EventFlag(eventFlagId));
    SetEventFlagID(eventFlagId2, ON);
    WaitFor(EventFlag(eventFlagId3) || EventFlag(eventFlagId4));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetEventFlagID(eventFlagId2, OFF);
});

$Event(90085300, Default, function(missionId, eventFlagId, eventFlagId2) {
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId2));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    IncrementMissionProgress(missionId, 1);
});

$Event(90085310, Default, function(missionId, eventFlagId, chrEntityId) {
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId));
    EndIf(CharacterHasSpEffect(chrEntityId, 99302, Equal, 0));
    WaitFor(CharacterDead(chrEntityId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    IncrementMissionProgress(missionId, 1);
});

$Event(90085320, Default, function(missionId, eventFlagId, chrEntityId) {
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId));
    EndIf(!IsMapVariation(5));
    WaitFor(CharacterDead(chrEntityId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    IncrementMissionProgress(missionId, 1);
});

$Event(90085500, Default, function(missionId, eventFlagId) {
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(7512) || CharacterHasSpEffect(20000, 102140));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    IncrementMissionProgress(missionId, 1);
});

$Event(90085600, Default, function(missionId, eventFlagId, chrEntityId, mapVariationId) {
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId));
    EndIf(!IsMapVariation(mapVariationId));
    WaitFor(CharacterDead(chrEntityId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    IncrementMissionProgress(missionId, 1);
});

$Event(90085610, Default, function(missionId, eventFlagId) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId));
    EndIf(!(HasMissionState(missionId, 1) && IsHero(Hero.Revenant)));
    WaitFor(MissionProgressAchieved(missionId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90085611, Default, function(missionId, eventFlagId, eventFlagId2, userDispLogParamId) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    EndIf(!(HasMissionState(missionId, 1) && IsHero(Hero.Revenant)));
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId));
    IncrementMissionProgress(missionId, 1);
    RecordUserDispLog(userDispLogParamId, 20000, LogObjectType.None, -1);
});

$Event(90085612, Default, function(missionId, hero, eventFlagId, eventFlagId2, chrEntityId, eventFlagId3) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    EndIf(!HasMissionState(missionId, 1));
    EndIf(!IsHero(hero));
    EndIf(EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    SetSpEffect(chrEntityId, 99840);
    WaitFor(CharacterHasSpEffect(chrEntityId, 9770) || CharacterHasSpEffect(chrEntityId, 9771));
    ClearSpEffect(chrEntityId, 99840);
    if (CharacterHasSpEffect(chrEntityId, 9770)) {
        SetSpEffect(20000, 99187);
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
        SetEventFlagID(eventFlagId3, ON);
    }
L0:
    if (CharacterHasSpEffect(chrEntityId, 9771)) {
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    }
L1:
    NoOp();
});

$Event(90085613, Default, function(missionId, eventFlagId, eventFlagId2, eventFlagId3, chrEntityId) {
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId));
    if (EventFlag(eventFlagId2)) {
        EndIf(!EventFlag(eventFlagId3));
    }
    WaitFor(EventFlag(eventFlagId2));
    EndIf(!EventFlag(eventFlagId3));
    WaitFor(CharacterRatioDead(chrEntityId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90085614, Restart, function(missionId, eventFlagId, assetEntityId, chrEntityId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    if (!EventFlag(eventFlagId)) {
        DisableAsset(assetEntityId);
        WaitFor(CharacterBackreadStatus(chrEntityId));
        DisableCharacter(chrEntityId);
    }
L0:
    EnableAsset(assetEntityId);
    WaitFor(CharacterBackreadStatus(chrEntityId));
    EnableCharacter(chrEntityId);
    WaitFor(EventFlag(eventFlagId) || MissionProgress(missionId) >= 3);
    DisableAsset(assetEntityId);
    SetEventFlagID(eventFlagId2, ON);
    WaitFor(CharacterBackreadStatus(chrEntityId));
    DisableCharacter(chrEntityId);
});

$Event(90085615, Default, function(missionId, eventFlagId) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    EndIf(!(HasMissionState(missionId, 1) && IsHero(Hero.Revenant)));
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId) || EventFlag(7512) || CharacterHasSpEffect(20000, 102140));
    EndIf(EventFlag(eventFlagId));
    SetMissionProgress(missionId, 0);
});

$Event(90085700, Default, function(missionId, eventFlagId, mapVariationId, eventFlagId2) {
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId));
    EndIf(!IsHotSpot());
    EndIf(!IsMapVariation(mapVariationId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    IncrementMissionProgress(missionId, 1);
});

$Event(90085710, Default, function(missionId, eventFlagId) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId));
    EndIf(!(HasMissionState(missionId, 1) && IsHero(Hero.Recluse)));
    WaitFor(MissionProgressAchieved(missionId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90085711, Default, function(missionId, eventFlagId, eventFlagId2, userDispLogParamId) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId));
    EndIf(!(HasMissionState(missionId, 1) && IsHero(Hero.Recluse)));
    WaitFor(EventFlag(eventFlagId2));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    IncrementMissionProgress(missionId, 1);
    RecordUserDispLog(userDispLogParamId, 20000, LogObjectType.None, -1);
});

$Event(90085800, Default, function(missionId, eventFlagId) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId));
    EndIf(!(HasMissionState(missionId, 1) && IsHero(Hero.Executor)));
    WaitFor(MissionProgressAchieved(missionId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90085801, Default, function(missionId, eventFlagId, eventFlagId2, userDispLogParamId) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    EndIf(!(HasMissionState(missionId, 1) && IsHero(Hero.Executor)));
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId));
    IncrementMissionProgress(missionId, 1);
    RecordUserDispLog(userDispLogParamId, 20000, LogObjectType.None, -1);
});

$Event(90085802, Default, function(missionId, eventFlagId, chrEntityId) {
    EndIf(!MissionActive(missionId));
    EndIf(EventFlag(eventFlagId));
    WaitFor(CharacterRatioDead(chrEntityId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90085900, Default, function(eventFlagId, entityId) {
    DisableNetworkSync();
    WaitFor(ActionButtonInArea(9390, entityId) || EventFlag(eventFlagId));
    if (!EventFlag(eventFlagId)) {
        DisplayGenericDialog(71100, PromptType.OKCANCEL, NumberofOptions.NoButtons, entityId, 10);
        WaitFixedTimeSeconds(3);
        RestartEvent();
    }
L1:
    ForceAnimationPlayback(entityId, 2, true, false, false);
    EndEvent();
});

$Event(90085950, Default, function(missionId, assetEntityId, chrEntityId, eventFlagId) {
    if (!MissionActive(missionId)) {
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    ChangeAssetEnableStateUnknown200510(assetEntityId, Disabled, 1);
    SetCharacterBackreadState(chrEntityId, false);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90085951, Default, function(missionId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    if (IsPlayerNo(1)) {
        EndIf(!EventFlag(7015));
    }
    if (IsPlayerNo(2)) {
        EndIf(!EventFlag(7016));
    }
    if (IsPlayerNo(3)) {
        EndIf(!EventFlag(7017));
    }
    EndIf(!IsHero(Hero.Undertaker));
    EndIf(!HasMissionState(missionId, 1));
    EndIf(EventFlag(eventFlagId4));
    if (!EventFlag(eventFlagId)) {
        WaitFor(EventFlag(eventFlagId));
        ForceAnimationPlayback(20000, 61050, false, false, false);
        WaitFor(ElapsedSeconds(1));
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
        WaitFor(EventFlag(eventFlagId3));
    }
L0:
    SetNetworkconnectedEventFlagID(eventFlagId4, ON);
});

$Event(90085952, Default, function(missionId, assetEntityId) {
    EndIf(!MissionActive(missionId));
    ReproduceAssetAnimation(assetEntityId, 2);
});

$Event(90005200, Restart, function(chrEntityId, animationId, animationId2, areaEntityId, timeSeconds, value, value2, value3, value4) {
    EndIf(SpecialStandbyEndedFlag(chrEntityId));
    if (value != 0) {
        DisableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, false);
    }
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    areaChrSp &= InArea(10000, areaEntityId)
        && CharacterBackreadStatus(chrEntityId)
        && (CharacterHasSpEffect(chrEntityId, 5080) || CharacterHasSpEffect(chrEntityId, 5450));
    if (!(value2 == 0 && value3 == 0 && value4 == 0)) {
        if (value2 != 0) {
            chr |= CharacterAIState(chrEntityId, AIStateType.Combat);
        }
        if (value3 != 0) {
            chr |= CharacterAIState(chrEntityId, AIStateType.ActiveAlert);
        }
        if (value4 != 0) {
            chr |= CharacterAIState(chrEntityId, AIStateType.PassiveAlert);
        }
        areaChrSp &= chr;
    }
L9:
    WaitFor(
        areaChrSp
            || HasDamageType(chrEntityId, 0, DamageType.Any)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || (CharacterHasSpEffect(chrEntityId, 481)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90110)
                && !CharacterHasSpEffect(chrEntityId, 90160))
            || (CharacterHasSpEffect(chrEntityId, 482)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90120)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 483)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90140)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90161))
            || (CharacterHasSpEffect(chrEntityId, 484)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90130)
                && !CharacterHasSpEffect(chrEntityId, 90161)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 487)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90150)
                && !CharacterHasSpEffect(chrEntityId, 90160)));
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(chrEntityId, ON);
    if (!(!CharacterHasSpEffect(chrEntityId, 5080) && !CharacterHasSpEffect(chrEntityId, 5450))) {
        WaitFixedTimeSeconds(timeSeconds);
        if (value != 0) {
            EnableCharacterGravity(chrEntityId);
            SetCharacterMaphit(chrEntityId, true);
        }
        ForceAnimationPlayback(chrEntityId, animationId2, true, false, false);
        EndEvent();
    }
L0:
    if (value != 0) {
        EnableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, true);
    }
    EndEvent();
});

$Event(90005201, Restart, function(chrEntityId, animationId, animationId2, targetDistance, timeSeconds, value, value2, value3, value4) {
    EndIf(SpecialStandbyEndedFlag(chrEntityId));
    if (value != 0) {
        DisableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, false);
    }
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    areaChrSp &= EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1)
        && CharacterBackreadStatus(chrEntityId)
        && (CharacterHasSpEffect(chrEntityId, 5080) || CharacterHasSpEffect(chrEntityId, 5450));
    if (!(value2 == 0 && value3 == 0 && value4 == 0)) {
        if (value2 != 0) {
            chr |= CharacterAIState(chrEntityId, AIStateType.Combat);
        }
        if (value3 != 0) {
            chr |= CharacterAIState(chrEntityId, AIStateType.ActiveAlert);
        }
        if (value4 != 0) {
            chr |= CharacterAIState(chrEntityId, AIStateType.PassiveAlert);
        }
        areaChrSp &= chr;
    }
L9:
    WaitFor(
        areaChrSp
            || HasDamageType(chrEntityId, 0, DamageType.Any)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || (CharacterHasSpEffect(chrEntityId, 481)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90110)
                && !CharacterHasSpEffect(chrEntityId, 90160))
            || (CharacterHasSpEffect(chrEntityId, 482)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90120)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 483)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90140)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90161))
            || (CharacterHasSpEffect(chrEntityId, 484)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90130)
                && !CharacterHasSpEffect(chrEntityId, 90161)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 487)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90150)
                && !CharacterHasSpEffect(chrEntityId, 90160)));
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(chrEntityId, ON);
    if (!(!CharacterHasSpEffect(chrEntityId, 5080) && !CharacterHasSpEffect(chrEntityId, 5450))) {
        WaitFixedTimeSeconds(timeSeconds);
        if (value != 0) {
            EnableCharacterGravity(chrEntityId);
            SetCharacterMaphit(chrEntityId, true);
        }
        ForceAnimationPlayback(chrEntityId, animationId2, true, false, false);
        EndEvent();
    }
L0:
    if (value != 0) {
        EnableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, true);
    }
    EndEvent();
});

$Event(90005210, Restart, function(chrEntityId, animationId, animationId2, areaEntityId, targetDistance, timeSeconds, value, value2, value3, value4) {
    EndIf(SpecialStandbyEndedFlag(chrEntityId));
    if (value != 0) {
        DisableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, false);
    }
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    areaChrSp &= (InArea(10000, areaEntityId) && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1))
        && CharacterBackreadStatus(chrEntityId)
        && (CharacterHasSpEffect(chrEntityId, 5080) || CharacterHasSpEffect(chrEntityId, 5450));
    if (!(value2 == 0 && value3 == 0 && value4 == 0)) {
        if (value2 != 0) {
            chr |= CharacterAIState(chrEntityId, AIStateType.Combat);
        }
        if (value3 != 0) {
            chr |= CharacterAIState(chrEntityId, AIStateType.ActiveAlert);
        }
        if (value4 != 0) {
            chr |= CharacterAIState(chrEntityId, AIStateType.PassiveAlert);
        }
        areaChrSp &= chr;
    }
L9:
    WaitFor(
        areaChrSp
            || HasDamageType(chrEntityId, 0, DamageType.Any)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || (CharacterHasSpEffect(chrEntityId, 481)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90110)
                && !CharacterHasSpEffect(chrEntityId, 90160))
            || (CharacterHasSpEffect(chrEntityId, 482)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90120)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 483)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90140)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90161))
            || (CharacterHasSpEffect(chrEntityId, 484)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90130)
                && !CharacterHasSpEffect(chrEntityId, 90161)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 487)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90150)
                && !CharacterHasSpEffect(chrEntityId, 90160)));
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(chrEntityId, ON);
    if (!(!CharacterHasSpEffect(chrEntityId, 5080) && !CharacterHasSpEffect(chrEntityId, 5450))) {
        WaitFixedTimeSeconds(timeSeconds);
        if (value != 0) {
            EnableCharacterGravity(chrEntityId);
            SetCharacterMaphit(chrEntityId, true);
        }
        ForceAnimationPlayback(chrEntityId, animationId2, true, false, false);
        EndEvent();
    }
L0:
    if (value != 0) {
        EnableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, true);
    }
    EndEvent();
});

$Event(90005211, Restart, function(chrEntityId, animationId, animationId2, areaEntityId, targetDistance, timeSeconds, value, value2, value3, value4) {
    EndIf(SpecialStandbyEndedFlag(chrEntityId));
    if (value != 0) {
        DisableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, false);
    }
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    if (0 != areaEntityId) {
        area |= InArea(10000, areaEntityId);
    }
    area |= EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1);
    areaChrSp &= area
        && CharacterBackreadStatus(chrEntityId)
        && (CharacterHasSpEffect(chrEntityId, 5080) || CharacterHasSpEffect(chrEntityId, 5450));
    if (!(value2 == 0 && value3 == 0 && value4 == 0)) {
        if (value2 != 0) {
            chr |= CharacterAIState(chrEntityId, AIStateType.Combat);
        }
        if (value3 != 0) {
            chr |= CharacterAIState(chrEntityId, AIStateType.ActiveAlert);
        }
        if (value4 != 0) {
            chr |= CharacterAIState(chrEntityId, AIStateType.PassiveAlert);
        }
        areaChrSp &= chr;
    }
L9:
    WaitFor(
        areaChrSp
            || HasDamageType(chrEntityId, 0, DamageType.Any)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || (CharacterHasSpEffect(chrEntityId, 481)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90110)
                && !CharacterHasSpEffect(chrEntityId, 90160))
            || (CharacterHasSpEffect(chrEntityId, 482)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90120)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 483)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90140)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90161))
            || (CharacterHasSpEffect(chrEntityId, 484)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90130)
                && !CharacterHasSpEffect(chrEntityId, 90161)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 487)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90150)
                && !CharacterHasSpEffect(chrEntityId, 90160)));
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(chrEntityId, ON);
    if (!(!CharacterHasSpEffect(chrEntityId, 5080) && !CharacterHasSpEffect(chrEntityId, 5450))) {
        WaitFixedTimeSeconds(timeSeconds);
        if (value != 0) {
            EnableCharacterGravity(chrEntityId);
            SetCharacterMaphit(chrEntityId, true);
        }
        ForceAnimationPlayback(chrEntityId, animationId2, true, false, false);
        EndEvent();
    }
L0:
    if (value != 0) {
        EnableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, true);
    }
    EndEvent();
});

$Event(90005220, Restart, function(chrEntityId, animationId, animationId2, timeSeconds, value, value2, value3) {
    EndIf(SpecialStandbyEndedFlag(chrEntityId));
    if (value != 0) {
        DisableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, false);
    }
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    chrSp &= CharacterBackreadStatus(chrEntityId)
        && (CharacterHasSpEffect(chrEntityId, 5080) || CharacterHasSpEffect(chrEntityId, 5450));
    chr |= CharacterAIState(chrEntityId, AIStateType.Combat);
    if (value2 != 0) {
        chr |= CharacterAIState(chrEntityId, AIStateType.ActiveAlert);
    }
    if (value3 != 0) {
        chr |= CharacterAIState(chrEntityId, AIStateType.PassiveAlert);
    }
L9:
    sp = CharacterHasSpEffect(chrEntityId, 481)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90110)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    sp2 = CharacterHasSpEffect(chrEntityId, 482)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90120)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    sp3 = CharacterHasSpEffect(chrEntityId, 483)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90140)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90161);
    sp4 = CharacterHasSpEffect(chrEntityId, 484)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90130)
        && !CharacterHasSpEffect(chrEntityId, 90161)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    sp5 = CharacterHasSpEffect(chrEntityId, 487)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90150)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    chrSp &= chr && cond;
    WaitFor(
        chrSp
            || HasDamageType(chrEntityId, 0, DamageType.Any)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(chrEntityId, ON);
    if (!(!CharacterHasSpEffect(chrEntityId, 5080) && !CharacterHasSpEffect(chrEntityId, 5450))) {
        WaitFixedTimeSeconds(timeSeconds);
        if (value != 0) {
            EnableCharacterGravity(chrEntityId);
            SetCharacterMaphit(chrEntityId, true);
        }
        ForceAnimationPlayback(chrEntityId, animationId2, true, false, false);
        EndEvent();
    }
L0:
    if (value != 0) {
        EnableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, true);
    }
    EndEvent();
});

$Event(90005221, Restart, function(chrEntityId, animationId, animationId2, timeSeconds, value) {
    EndIf(SpecialStandbyEndedFlag(chrEntityId));
    if (value != 0) {
        DisableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, false);
    }
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    WaitFor(
        HasDamageType(chrEntityId, 0, DamageType.Any)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || (CharacterHasSpEffect(chrEntityId, 481)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90110)
                && !CharacterHasSpEffect(chrEntityId, 90160))
            || (CharacterHasSpEffect(chrEntityId, 482)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90120)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 483)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90140)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90161))
            || (CharacterHasSpEffect(chrEntityId, 484)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90130)
                && !CharacterHasSpEffect(chrEntityId, 90161)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 487)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90150)
                && !CharacterHasSpEffect(chrEntityId, 90160)));
    WaitFixedTimeSeconds(0.1);
    if (!(!CharacterHasSpEffect(chrEntityId, 5080) && !CharacterHasSpEffect(chrEntityId, 5450))) {
        SetNetworkconnectedThisEventSlot(ON);
        SetSpecialStandbyEndedFlag(chrEntityId, ON);
        WaitFixedTimeSeconds(timeSeconds);
        if (value != 0) {
            EnableCharacterGravity(chrEntityId);
            SetCharacterMaphit(chrEntityId, true);
        }
        ForceAnimationPlayback(chrEntityId, animationId2, true, false, false);
        EndEvent();
    }
L0:
    if (value != 0) {
        EnableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, true);
    }
    EndEvent();
});

$Event(90005250, Restart, function(chrEntityId, areaEntityId, timeSeconds, animationId) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(chrEntityId);
    area = InArea(10000, areaEntityId);
    WaitFor(
        HasDamageType(chrEntityId, 0, DamageType.Any)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || area
            || (CharacterHasSpEffect(chrEntityId, 481)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90110)
                && !CharacterHasSpEffect(chrEntityId, 90160))
            || (CharacterHasSpEffect(chrEntityId, 482)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90120)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 483)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90140)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90161))
            || (CharacterHasSpEffect(chrEntityId, 484)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90130)
                && !CharacterHasSpEffect(chrEntityId, 90161)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 487)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90150)
                && !CharacterHasSpEffect(chrEntityId, 90160)));
    SetNetworkconnectedThisEventSlot(ON);
    if (area.Passed) {
        WaitFixedTimeSeconds(timeSeconds);
        if (Signed(animationId) != -1) {
            ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        }
    }
L1:
    EnableCharacterAI(chrEntityId);
});

$Event(90005251, Restart, function(chrEntityId, targetDistance, timeSeconds, animationId) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(chrEntityId);
    area = EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1);
    WaitFor(
        HasDamageType(chrEntityId, 0, DamageType.Any)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || area
            || (CharacterHasSpEffect(chrEntityId, 481)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90110)
                && !CharacterHasSpEffect(chrEntityId, 90160))
            || (CharacterHasSpEffect(chrEntityId, 482)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90120)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 483)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90140)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90161))
            || (CharacterHasSpEffect(chrEntityId, 484)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90130)
                && !CharacterHasSpEffect(chrEntityId, 90161)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 487)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90150)
                && !CharacterHasSpEffect(chrEntityId, 90160)));
    SetNetworkconnectedThisEventSlot(ON);
    if (area.Passed) {
        WaitFixedTimeSeconds(timeSeconds);
        if (Signed(animationId) != -1) {
            ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        }
    }
L1:
    EnableCharacterAI(chrEntityId);
});

$Event(90005260, Restart, function(chrEntityId, areaEntityId, targetDistance, timeSeconds, animationId) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(chrEntityId);
    area = InArea(10000, areaEntityId) && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1);
    WaitFor(
        HasDamageType(chrEntityId, 0, DamageType.Any)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || area
            || (CharacterHasSpEffect(chrEntityId, 481)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90110)
                && !CharacterHasSpEffect(chrEntityId, 90160))
            || (CharacterHasSpEffect(chrEntityId, 482)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90120)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 483)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90140)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90161))
            || (CharacterHasSpEffect(chrEntityId, 484)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90130)
                && !CharacterHasSpEffect(chrEntityId, 90161)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 487)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90150)
                && !CharacterHasSpEffect(chrEntityId, 90160)));
    SetNetworkconnectedThisEventSlot(ON);
    if (area.Passed) {
        WaitFixedTimeSeconds(timeSeconds);
        if (Signed(animationId) != -1) {
            ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        }
    }
L1:
    EnableCharacterAI(chrEntityId);
});

$Event(90005261, Restart, function(chrEntityId, areaEntityId, targetDistance, timeSeconds, animationId) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(chrEntityId);
    sp = CharacterHasSpEffect(chrEntityId, 481)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90110)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    sp2 = CharacterHasSpEffect(chrEntityId, 482)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90120)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    sp3 = CharacterHasSpEffect(chrEntityId, 483)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90140)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90161);
    sp4 = CharacterHasSpEffect(chrEntityId, 484)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90130)
        && !CharacterHasSpEffect(chrEntityId, 90161)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    sp5 = CharacterHasSpEffect(chrEntityId, 487)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90150)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    area = InArea(10000, areaEntityId) || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1);
    WaitFor(
        HasDamageType(chrEntityId, 0, DamageType.Any)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || area
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    if (area.Passed) {
        WaitFixedTimeSeconds(timeSeconds);
        if (Signed(animationId) != -1) {
            ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        }
    }
L1:
    EnableCharacterAI(chrEntityId);
});

$Event(90005271, Restart, function(chrEntityId, timeSeconds, animationId) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(chrEntityId);
    WaitFor(
        HasDamageType(chrEntityId, 0, DamageType.Any)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || (CharacterHasSpEffect(chrEntityId, 481)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90110)
                && !CharacterHasSpEffect(chrEntityId, 90160))
            || (CharacterHasSpEffect(chrEntityId, 482)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90120)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 483)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90140)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90161))
            || (CharacterHasSpEffect(chrEntityId, 484)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90130)
                && !CharacterHasSpEffect(chrEntityId, 90161)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 487)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90150)
                && !CharacterHasSpEffect(chrEntityId, 90160)));
    SetNetworkconnectedThisEventSlot(ON);
    if (and1.Passed) {
        WaitFixedTimeSeconds(timeSeconds);
        if (Signed(animationId) != -1) {
            ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        }
    }
L1:
    EnableCharacterAI(chrEntityId);
});

$Event(90005480, Restart, function(chrEntityId) {
    WaitFor(
        CharacterBackreadStatus(chrEntityId)
            && !CharacterHasSpEffect(chrEntityId, 16472)
            && !CharacterHasSpEffect(chrEntityId, 16473)
            && !CharacterHasSpEffect(chrEntityId, 16474)
            && !CharacterHasSpEffect(chrEntityId, 16475));
    GotoIf(S0, !ThisEventSlot());
    GotoIf(S1, NPCPartHP(chrEntityId, 30) != 0);
S0:
    SetSpEffect(chrEntityId, 16498);
    CreateNPCPart(chrEntityId, 30, NPCPartType.Part3, 61, 1, 1, false, false);
    ChangeCharacterDispmask(chrEntityId, 10, ON);
S1:
    GotoIf(S2, !ThisEventSlot());
    GotoIf(S3, NPCPartHP(chrEntityId, 40) != 0);
S2:
    SetSpEffect(chrEntityId, 16498);
    CreateNPCPart(chrEntityId, 40, NPCPartType.Part4, 61, 1, 1, false, false);
    ChangeCharacterDispmask(chrEntityId, 11, ON);
S3:
    GotoIf(S4, !ThisEventSlot());
    GotoIf(S5, NPCPartHP(chrEntityId, 50) != 0);
S4:
    SetSpEffect(chrEntityId, 16498);
    CreateNPCPart(chrEntityId, 50, NPCPartType.Part5, 61, 1, 1, false, false);
    ChangeCharacterDispmask(chrEntityId, 12, ON);
S5:
    GotoIf(S6, !ThisEventSlot());
    GotoIf(S7, NPCPartHP(chrEntityId, 60) != 0);
S6:
    SetSpEffect(chrEntityId, 16498);
    CreateNPCPart(chrEntityId, 60, NPCPartType.Part6, 61, 1, 1, false, false);
    ChangeCharacterDispmask(chrEntityId, 13, ON);
S7:
L0:
    hp = NPCPartHP(chrEntityId, 30) <= 0;
    hp2 = NPCPartHP(chrEntityId, 40) <= 0;
    hp3 = NPCPartHP(chrEntityId, 50) <= 0;
    hp4 = NPCPartHP(chrEntityId, 60) <= 0;
    WaitFor(hp || hp2 || hp3 || hp4);
    GotoIf(L3, hp.Passed);
    GotoIf(L4, hp2.Passed);
    GotoIf(L5, hp3.Passed);
    GotoIf(L6, hp4.Passed);
L3:
    SetSpEffect(chrEntityId, 16497);
    SetSpEffect(chrEntityId, 16484);
    SetSpEffect(chrEntityId, 16472);
    ChangeCharacterDispmask(chrEntityId, 10, OFF);
    WaitFixedTimeFrames(2);
    if (!CharacterHasSpEffect(chrEntityId, 16485)) {
        ForceAnimationPlayback(chrEntityId, 20000, false, true, false);
    }
    Goto(L9);
L4:
    SetSpEffect(chrEntityId, 16497);
    SetSpEffect(chrEntityId, 16484);
    SetSpEffect(chrEntityId, 16473);
    ChangeCharacterDispmask(chrEntityId, 11, OFF);
    WaitFixedTimeFrames(2);
    if (!CharacterHasSpEffect(chrEntityId, 16485)) {
        ForceAnimationPlayback(chrEntityId, 20001, false, true, false);
    }
    Goto(L9);
L5:
    SetSpEffect(chrEntityId, 16497);
    SetSpEffect(chrEntityId, 16484);
    SetSpEffect(chrEntityId, 16474);
    ChangeCharacterDispmask(chrEntityId, 12, OFF);
    WaitFixedTimeFrames(2);
    if (!CharacterHasSpEffect(chrEntityId, 16485)) {
        ForceAnimationPlayback(chrEntityId, 20002, false, true, false);
    }
    Goto(L9);
L6:
    SetSpEffect(chrEntityId, 16497);
    SetSpEffect(chrEntityId, 16484);
    SetSpEffect(chrEntityId, 16475);
    ChangeCharacterDispmask(chrEntityId, 13, OFF);
    WaitFixedTimeFrames(2);
    if (!CharacterHasSpEffect(chrEntityId, 16485)) {
        ForceAnimationPlayback(chrEntityId, 20003, false, true, false);
    }
    Goto(L9);
L9:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(90005481, Restart, function(chrEntityId) {
    CreateNPCPart(chrEntityId, 10, NPCPartType.Part1, 9999, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, 0, 110, 110, -1, -1, -1);
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 16499)
            && NPCPartAttributeDamage(chrEntityId, 10, 0, DamageType.Any));
    ForceAnimationPlayback(chrEntityId, 20007, false, false, false);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(90005485, Restart, function(chrEntityId) {
    DisableNetworkSync();
    if (!ThisEventSlot()) {
        EnableCharacterDefaultBackread(chrEntityId);
        SetCharacterEnableDistance(chrEntityId, 2000);
        DisableCharacterDisableOnHitUnload(chrEntityId);
        EnableDistancebasedNetworkUpdateAuthority(chrEntityId);
    }
L0:
    DisableCharacterGravity(chrEntityId);
    WaitFor(EntityInRadiusOfEntity(chrEntityId, 10000, 200, 1));
    EnableCharacterGravity(chrEntityId);
    WaitFor(EntityInRadiusOfEntity(chrEntityId, 10000, 220, 1));
    RestartEvent();
});

$Event(90005525, Restart, function(eventFlagId, assetEntityId) {
    if (!EventFlag(eventFlagId)) {
        WaitFor(PlayerIsInOwnWorld() && HasDamageType(assetEntityId, 20000, DamageType.Any));
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
        ForceAnimationPlayback(assetEntityId, 1, false, true, false);
    }
L0:
    DisableAsset(assetEntityId);
});

$Event(90005526, Restart, function(eventFlagId, assetEntityId) {
    DisableNetworkSync();
    if (!EventFlag(eventFlagId)) {
        WaitFor(HasDamageType(assetEntityId, 20000, DamageType.Any) || EventFlag(eventFlagId));
        if (!EventFlag(eventFlagId)) {
            SetNetworkconnectedEventFlagID(eventFlagId, ON);
        }
        ForceAnimationPlayback(assetEntityId, 1, false, true, false);
    }
L0:
    DisableAsset(assetEntityId);
});

$Event(90005580, Default, function(assetEntityId, chrEntityId, eventFlagId) {
    ChangeAssetEnableStateUnknown200510(assetEntityId, Disabled, 0);
    DisableCharacter(chrEntityId);
    EndIf(!EventFlag(eventFlagId));
    if (!EventFlag(7503)) {
        WaitFixedTimeSeconds(1);
        WaitFor(EventFlag(7503));
        IncrementTeamOpenedBonfires();
        SpawnOneshotSFX(TargetEntityType.Asset, assetEntityId, 200, 1000);
        WaitFixedTimeSeconds(0.5);
    }
L0:
    ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 1);
    EnableCharacter(chrEntityId);
    RegisterBonfire(assetEntityId, 0, 5);
});

$Event(90005595, Default, function(eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
});

$Event(90005596, Default, function(eventFlagId) {
    WaitFor(EventFlag(eventFlagId));
    DisplayTextEffectId(2000);
});

$Event(90005690, Restart, function(areaEntityId) {
    DisableNetworkSync();
    WaitFor(InArea(10000, areaEntityId));
    SetSpEffect(10000, 4080);
    WaitFor(!InArea(10000, areaEntityId));
    ClearSpEffect(10000, 4080);
    RestartEvent();
});

$Event(90005691, Restart, function(areaEntityId) {
    DisableNetworkSync();
    WaitFor(InArea(10000, areaEntityId));
    SetSpEffect(10000, 4085);
    WaitFor(!InArea(10000, areaEntityId));
    ClearSpEffect(10000, 4085);
    RestartEvent();
});

$Event(90005700, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, targetHPRatio, eventFlagId4, eventFlagId5, value) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(!EventFlag(3000));
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    SetEventFlagID(eventFlagId3, OFF);
    WaitFor(
        !EventFlag(eventFlagId)
            && !EventFlag(eventFlagId2)
            && HPRatio(chrEntityId) > 0
            && (((HasDamageType(chrEntityId, 10000, DamageType.Any)
                || HasDamageType(chrEntityId, 40000, DamageType.Any)
                || CharacterHasSpEffect(chrEntityId, 1650000))
                && HPRatio(chrEntityId) < targetHPRatio)
                || CharacterHasSpEffect(chrEntityId, 9641)
                || EventFlag(eventFlagId3)));
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    SetSpEffect(chrEntityId, 9628);
    SetSpEffect(chrEntityId, 9635);
    if (Signed(1) != value) {
        BatchSetNetworkconnectedEventFlags(eventFlagId4, eventFlagId5, OFF);
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
    } else {
L0:
        BatchSetNetworkconnectedEventFlags(eventFlagId4, eventFlagId5, OFF);
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    }
L9:
    SaveRequest();
});

$Event(90005701, Restart, function(entityId, eventFlagId, eventFlagId2, eventFlagId3, value) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(!EventFlag(3000));
    WaitFixedTimeFrames(1);
    WaitFor(!EventFlag(eventFlagId) && !EventFlag(eventFlagId2));
    GotoIf(L0, Signed(9) == value);
    GotoIf(L1, Signed(8) == value);
    GotoIf(L2, Signed(7) == value);
    GotoIf(L3, Signed(6) == value);
    GotoIf(L4, Signed(5) == value);
    GotoIf(L5, Signed(4) == value);
    GotoIf(L6, Signed(3) == value);
    GotoIf(L7, Signed(2) == value);
    GotoIf(L8, Signed(1) == value);
    WaitFor(
        HasDamageType(entityId, 10000, DamageType.Any)
            || HasDamageType(entityId, 40000, DamageType.Any));
    WaitFixedTimeFrames(1);
L0:
    WaitFor(
        HasDamageType(entityId, 10000, DamageType.Any)
            || HasDamageType(entityId, 40000, DamageType.Any));
    WaitFixedTimeFrames(1);
L1:
    WaitFor(
        HasDamageType(entityId, 10000, DamageType.Any)
            || HasDamageType(entityId, 40000, DamageType.Any));
    WaitFixedTimeFrames(1);
L2:
    WaitFor(
        HasDamageType(entityId, 10000, DamageType.Any)
            || HasDamageType(entityId, 40000, DamageType.Any));
    WaitFixedTimeFrames(1);
L3:
    WaitFor(
        HasDamageType(entityId, 10000, DamageType.Any)
            || HasDamageType(entityId, 40000, DamageType.Any));
    WaitFixedTimeFrames(1);
L4:
    WaitFor(
        HasDamageType(entityId, 10000, DamageType.Any)
            || HasDamageType(entityId, 40000, DamageType.Any));
    WaitFixedTimeFrames(1);
L5:
    WaitFor(
        HasDamageType(entityId, 10000, DamageType.Any)
            || HasDamageType(entityId, 40000, DamageType.Any));
    WaitFixedTimeFrames(1);
L6:
    WaitFor(
        HasDamageType(entityId, 10000, DamageType.Any)
            || HasDamageType(entityId, 40000, DamageType.Any));
    WaitFixedTimeFrames(1);
L7:
    WaitFor(
        HasDamageType(entityId, 10000, DamageType.Any)
            || HasDamageType(entityId, 40000, DamageType.Any));
    WaitFixedTimeFrames(1);
L8:
    WaitFor(
        HasDamageType(entityId, 10000, DamageType.Any)
            || HasDamageType(entityId, 40000, DamageType.Any));
    SetEventFlagID(eventFlagId3, ON);
    RestartEvent();
});

$Event(90005702, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(!EventFlag(eventFlagId) && CharacterDead(chrEntityId));
    BatchSetNetworkconnectedEventFlags(eventFlagId2, eventFlagId3, OFF);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SaveRequest();
});

$Event(90005703, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6, value) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(eventFlagId3, OFF);
    if (!EventFlag(eventFlagId5)) {
        SetSpEffect(chrEntityId, 9628);
        SetSpEffect(chrEntityId, 9635);
        SetSpEffect(chrEntityId, 9643);
        if (!CharacterHasSpEffect(chrEntityId, 445)) {
            SetSpEffect(chrEntityId, 442);
        }
        SetSpEffect(chrEntityId, 9644);
    }
L0:
    WaitFor(!EventFlag(eventFlagId4) && EventFlag(eventFlagId5));
    SetSpEffect(chrEntityId, 9629);
    SetSpEffect(chrEntityId, 9634);
    SetSpEffect(chrEntityId, 9642);
    SetSpEffect(chrEntityId, 9647);
    if (!CharacterHasSpEffect(chrEntityId, 445)) {
        SetSpEffect(chrEntityId, 440);
    }
    SetSpEffect(chrEntityId, 9645);
    dmgSp = HasDamageType(chrEntityId, 10000, DamageType.Any)
        || HasDamageType(chrEntityId, 40000, DamageType.Any)
        || CharacterHasSpEffect(chrEntityId, 1650000);
    if (HPRatio(chrEntityId) >= 1) {
        hpDmgSp &= HPRatio(chrEntityId) < 0.65;
    } else if (HPRatio(chrEntityId) >= 0.9) {
        hpDmgSp &= HPRatio(chrEntityId) < 0.55;
    } else if (HPRatio(chrEntityId) >= 0.8) {
        hpDmgSp &= HPRatio(chrEntityId) < 0.45;
    } else if (HPRatio(chrEntityId) >= 0.7) {
        hpDmgSp &= HPRatio(chrEntityId) < 0.35;
    } else if (HPRatio(chrEntityId) >= 0.7) {
        hpDmgSp &= HPRatio(chrEntityId) < 0.25;
    } else {
        hpDmgSp &= HPRatio(chrEntityId) < 0.15;
        Goto(L10);
    }
L10:
    hpDmgSp &= dmgSp;
    flag = EventFlag(eventFlagId) || EventFlag(eventFlagId2);
    hpFlagSpDmg = HPRatio(chrEntityId) > 0
        && (EventFlag(eventFlagId3) || CharacterHasSpEffect(chrEntityId, 9641) || flag || hpDmgSp);
    flag2 = EventFlag(eventFlagId4);
    WaitFor(flag2 || hpFlagSpDmg);
    RestartIf(flag2.Passed);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    SetSpEffect(chrEntityId, 9628);
    SetSpEffect(chrEntityId, 9635);
    SetSpEffect(chrEntityId, 9643);
    if (!CharacterHasSpEffect(chrEntityId, 445)) {
        SetSpEffect(chrEntityId, 442);
    }
    SetSpEffect(chrEntityId, 9644);
    if (!flag.Passed) {
        if (Signed(1) != value) {
            BatchSetNetworkconnectedEventFlags(eventFlagId5, eventFlagId6, OFF);
            SetNetworkconnectedEventFlagID(eventFlagId, ON);
        } else {
L1:
            BatchSetNetworkconnectedEventFlags(eventFlagId5, eventFlagId6, OFF);
            SetNetworkconnectedEventFlagID(eventFlagId2, ON);
        }
    }
L9:
    SaveRequest();
    RestartEvent();
});

$Event(90005704, Restart, function(entityId, eventFlagId, eventFlagId2, eventFlagId3, value) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeFrames(1);
    WaitFor(!EventFlag(eventFlagId) && EventFlag(eventFlagId2));
    GotoIf(L4, Signed(4) == value);
    GotoIf(L3, Signed(3) == value);
    GotoIf(L2, Signed(2) == value);
    GotoIf(L1, Signed(1) == value);
    flag = EventFlag(eventFlagId) || !EventFlag(eventFlagId2);
    WaitFor(
        HasDamageType(entityId, 10000, DamageType.Any)
            || HasDamageType(entityId, 40000, DamageType.Any)
            || flag);
    RestartIf(flag.Passed);
    WaitFixedTimeFrames(1);
L4:
    flag2 = EventFlag(eventFlagId) || !EventFlag(eventFlagId2);
    WaitFor(
        HasDamageType(entityId, 10000, DamageType.Any)
            || HasDamageType(entityId, 40000, DamageType.Any)
            || flag2);
    RestartIf(flag2.Passed);
    WaitFixedTimeFrames(1);
L3:
    flag3 = EventFlag(eventFlagId) || !EventFlag(eventFlagId2);
    WaitFor(
        HasDamageType(entityId, 10000, DamageType.Any)
            || HasDamageType(entityId, 40000, DamageType.Any)
            || flag3);
    RestartIf(flag3.Passed);
    WaitFixedTimeFrames(1);
L2:
    flag4 = EventFlag(eventFlagId) || !EventFlag(eventFlagId2);
    WaitFor(
        HasDamageType(entityId, 10000, DamageType.Any)
            || HasDamageType(entityId, 40000, DamageType.Any)
            || flag4);
    RestartIf(flag4.Passed);
    WaitFixedTimeFrames(1);
L1:
    flag5 = EventFlag(eventFlagId) || !EventFlag(eventFlagId2);
    WaitFor(
        HasDamageType(entityId, 10000, DamageType.Any)
            || HasDamageType(entityId, 40000, DamageType.Any)
            || flag5);
    RestartIf(flag5.Passed);
    SetEventFlagID(eventFlagId3, ON);
    RestartEvent();
});

$Event(90005705, Restart, function(chrEntityId) {
    WaitFixedTimeFrames(1);
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    EndIf(!PlayerIsInOwnWorld());
    EnableCharacterImmortality(chrEntityId);
    WaitFor(HasDamageType(chrEntityId, 10000, DamageType.Any));
    ForceAnimationPlayback(chrEntityId, 20022, false, false, false);
    WaitFixedTimeSeconds(10);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    EndEvent();
});

$Event(90005706, Restart, function(chrEntityId, animationId, entityId) {
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    DisableCharacterGravity(chrEntityId);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    EndIf(entityId == 0);
    WaitFor(CharacterHasSpEffect(chrEntityId, 9624));
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, entityId, -1);
    DisableCharacterGravity(chrEntityId);
    EndEvent();
});

$Event(90005707, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6, value, animationId, eventFlagId7, eventFlagId8) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(eventFlagId3, OFF);
    WaitFor(!EventFlag(eventFlagId4) && EventFlag(eventFlagId5));
L0:
    SetSpEffect(chrEntityId, 9642);
    dmgSp = HasDamageType(chrEntityId, 10000, DamageType.Any)
        || HasDamageType(chrEntityId, 40000, DamageType.Any)
        || CharacterHasSpEffect(chrEntityId, 1650000);
    if (HPRatio(chrEntityId) >= 1) {
        hpDmgSp &= HPRatio(chrEntityId) < 0.65;
    } else if (HPRatio(chrEntityId) >= 0.9) {
        hpDmgSp &= HPRatio(chrEntityId) < 0.55;
    } else if (HPRatio(chrEntityId) >= 0.8) {
        hpDmgSp &= HPRatio(chrEntityId) < 0.45;
    } else if (HPRatio(chrEntityId) >= 0.7) {
        hpDmgSp &= HPRatio(chrEntityId) < 0.35;
    } else if (HPRatio(chrEntityId) >= 0.7) {
        hpDmgSp &= HPRatio(chrEntityId) < 0.25;
    } else {
        hpDmgSp &= HPRatio(chrEntityId) < 0.15;
        Goto(L10);
    }
L10:
    hpDmgSp &= dmgSp;
    hpFlagSpDmg = HPRatio(chrEntityId) > 0
        && (EventFlag(eventFlagId3)
            || CharacterHasSpEffect(chrEntityId, 9641)
            || EventFlag(eventFlagId)
            || EventFlag(eventFlagId2)
            || hpDmgSp);
    flag = EventFlag(eventFlagId4);
    WaitFor(flag || hpFlagSpDmg);
    RestartIf(flag.Passed);
    if (!or5.Passed) {
        if (Signed(1) != value) {
            BatchSetNetworkconnectedEventFlags(eventFlagId5, eventFlagId6, OFF);
            SetNetworkconnectedEventFlagID(eventFlagId, ON);
        } else {
L0:
            BatchSetNetworkconnectedEventFlags(eventFlagId5, eventFlagId6, OFF);
            SetNetworkconnectedEventFlagID(eventFlagId2, ON);
        }
    }
L9:
    SaveRequest();
    if (eventFlagId7 != 0) {
        WaitFixedTimeFrames(2);
        WaitFor(!EventFlag(eventFlagId7));
    }
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    SetEventFlagID(eventFlagId8, ON);
    RestartEvent();
});

$Event(90005708, Restart, function(chrEntityId, eventFlagId, entityId) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(CharacterBackreadStatus(chrEntityId) && EventFlag(eventFlagId));
    WaitFixedTimeFrames(1);
    RestartIf(!EventFlag(eventFlagId));
    if (entityId == 0) {
        ResetCharacterPosition(chrEntityId);
    } else {
        IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, entityId, -1);
    }
});

$Event(90005709, Restart, function(entityId, dummypolyId, sfxId) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(HasDamageType(entityId, 0, DamageType.Any));
    SpawnOneshotSFX(TargetEntityType.Character, entityId, dummypolyId, sfxId);
    RestartEvent();
});

$Event(90005720, Restart, function(chrEntityId, chrEntityId2, spEffectId, dummypolyId) {
    EndIf(CharacterHasSpEffect(chrEntityId, 11020));
    DisableCharacter(chrEntityId2);
    DisableCharacterCollision(chrEntityId2);
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 10960) && CharacterHasSpEffect(chrEntityId, spEffectId));
    EnableCharacter(chrEntityId2);
    EnableCharacterCollision(chrEntityId2);
    SetSpEffect(chrEntityId2, 8551);
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, dummypolyId, chrEntityId);
    ForceAnimationPlayback(chrEntityId2, 20000, false, false, false);
    EndEvent();
});

$Event(90005721, Restart, function(chrEntityId, chrEntityId2) {
    WaitFor(CharacterDead(chrEntityId));
    WaitRandomTimeSeconds(0.5, 1.5);
    ForceCharacterDeath(chrEntityId2, true);
    EndEvent();
});

$Event(90005722, Restart, function(chrEntityId, chrEntityId2) {
    if (CharacterHasSpEffect(chrEntityId, 11020)) {
        SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
        SetCharacterTeamType(chrEntityId2, TeamType.HostileNPC);
    }
L0:
    WaitFor(HPRatio(chrEntityId) < 0.65 || HPRatio(chrEntityId2, GreaterOrEqual, 1) < 0.65);
    SetSpEffect(chrEntityId, 11012);
    SetSpEffect(chrEntityId, 11020);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    SetCharacterTeamType(chrEntityId2, TeamType.HostileNPC);
    EndEvent();
});

$Event(90005723, Restart, function(chrEntityId) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(!CharacterHasSpEffect(chrEntityId, 11001) && !CharacterHasSpEffect(chrEntityId, 11020));
    SetSpEffect(chrEntityId, 11000);
    WaitFor(CharacterHasSpEffect(chrEntityId, 11001) || CharacterHasSpEffect(chrEntityId, 11020));
    ClearSpEffect(chrEntityId, 11000);
    RestartEvent();
});

$Event(90005724, Restart, function(eventFlagId, chrEntityId, itemLotId, timeSeconds, value, chrEntityId2) {
    if (EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterCollision(chrEntityId2);
        if (Signed(value) != 0) {
            DisableCharacter(chrEntityId);
            DisableCharacterCollision(chrEntityId);
            ForceCharacterTreasure(chrEntityId);
            EndEvent();
        }
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(chrEntityId));
    WaitFixedTimeSeconds(timeSeconds);
    SetEventFlagID(eventFlagId, ON);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(Signed(value) == 1);
    AwardItemsIncludingClients(itemLotId);
    EndEvent();
});

$Event(90005725, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, chrEntityId, chrEntityId2, assetEntityId) {
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(eventFlagId) && EventFlag(eventFlagId4)) {
            SetEventFlagID(eventFlagId4, OFF);
        }
    }
L0:
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    DisableCharacter(chrEntityId2);
    SetCharacterBackreadState(chrEntityId2, true);
    DisableAsset(assetEntityId);
    GotoIf(L1, EventFlag(eventFlagId));
    GotoIf(L2, EventFlag(eventFlagId2));
    GotoIf(L4, EventFlag(eventFlagId3));
L1:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    if (!CharacterHasSpEffect(chrEntityId, 11035)) {
        ForceAnimationPlayback(chrEntityId, 930003, false, false, false);
    }
    if (CharacterHasSpEffect(chrEntityId, 11035)) {
        ForceAnimationPlayback(chrEntityId, 930002, false, false, false);
    }
    EnableCharacter(chrEntityId2);
    SetCharacterBackreadState(chrEntityId2, false);
    EnableAsset(assetEntityId);
    Goto(L20);
L2:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    EnableCharacter(chrEntityId2);
    SetCharacterBackreadState(chrEntityId2, false);
    SetCharacterTeamType(chrEntityId2, TeamType.HostileNPC);
    EnableAsset(assetEntityId);
    Goto(L20);
L4:
    ForceCharacterTreasure(chrEntityId);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    DisableCharacter(chrEntityId2);
    SetCharacterBackreadState(chrEntityId2, true);
    DisableAsset(assetEntityId);
    Goto(L20);
L20:
    EndEvent();
});

$Event(90005726, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, chrEntityId, assetEntityId) {
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(eventFlagId) && EventFlag(eventFlagId4)) {
            SetEventFlagID(eventFlagId4, OFF);
        }
    }
L0:
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    DisableAsset(assetEntityId);
    GotoIf(L1, EventFlag(eventFlagId));
    GotoIf(L2, EventFlag(eventFlagId2));
    GotoIf(L4, EventFlag(eventFlagId3));
L1:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    ForceAnimationPlayback(chrEntityId, 930003, false, false, false);
    EnableAsset(assetEntityId);
    Goto(L20);
L2:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    EnableAsset(assetEntityId);
    Goto(L20);
L4:
    ForceCharacterTreasure(chrEntityId);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    DisableAsset(assetEntityId);
    Goto(L20);
L20:
    EndEvent();
});

$Event(90005727, Restart, function(eventFlagId, chrEntityId, chrEntityId2, eventFlagId2, eventFlagId3) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId3));
    SetSpEffect(chrEntityId, 9629);
    SetSpEffect(chrEntityId, 9634);
    SetSpEffect(chrEntityId, 9642);
    SetSpEffect(chrEntityId, 440);
    SetSpEffect(chrEntityId, 9645);
    SetSpEffect(chrEntityId2, 9629);
    SetSpEffect(chrEntityId2, 9634);
    SetSpEffect(chrEntityId2, 9642);
    SetSpEffect(chrEntityId2, 440);
    SetSpEffect(chrEntityId2, 9645);
    WaitFor(
        EventFlag(eventFlagId)
            || (HasDamageType(chrEntityId, 20000, DamageType.Any) && CharacterHPValue(chrEntityId) < 1)
            || (HasDamageType(chrEntityId2, 20000, DamageType.Any)
                && CharacterHPValue(chrEntityId2) < 1));
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    EnableCharacterAI(chrEntityId);
    SetSpEffect(chrEntityId, 9628);
    SetSpEffect(chrEntityId, 9635);
    SetSpEffect(chrEntityId, 9643);
    SetSpEffect(chrEntityId, 442);
    SetSpEffect(chrEntityId, 9644);
    SetCharacterTeamType(chrEntityId2, TeamType.HostileNPC);
    EnableCharacterAI(chrEntityId2);
    SetSpEffect(chrEntityId2, 9628);
    SetSpEffect(chrEntityId2, 9635);
    SetSpEffect(chrEntityId2, 9643);
    SetSpEffect(chrEntityId2, 442);
    SetSpEffect(chrEntityId2, 9644);
    if (!EventFlag(eventFlagId3)) {
        BatchSetNetworkconnectedEventFlags(eventFlagId2, eventFlagId3, OFF);
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
    }
    EndEvent();
});

$Event(90005728, Restart, function(entityId, eventFlagId, eventFlagId2) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        (HasDamageType(entityId, 20000, DamageType.Any)
            || HasDamageType(entityId, 40000, DamageType.Any))
            && !EventFlag(eventFlagId2));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    EndEvent();
});

$Event(90005729, Restart, function(eventFlagId, chrEntityId, range, eventFlagId2) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId));
    SetCharacterTalkRange(chrEntityId, range);
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, eventFlagId2);
    WaitFixedTimeSeconds(30);
    SetNetworkconnectedEventFlagID(eventFlagId2, OFF);
    RestartEvent();
});

$Event(90005730, Restart, function(eventFlagId, targetTimeSeconds, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        !EventFlag(eventFlagId)
            && EventFlag(eventFlagId3)
            && !EventFlag(eventFlagId4)
            && !EventFlag(eventFlagId5));
    if (!EventFlag(eventFlagId2)) {
        flag = EventFlag(eventFlagId)
            || !EventFlag(eventFlagId3)
            || EventFlag(eventFlagId4)
            || EventFlag(eventFlagId5);
        WaitFor(EventFlag(eventFlagId2) || flag);
        RestartIf(flag.Passed);
        SetEventFlagID(eventFlagId, ON);
        RestartEvent();
    }
L0:
    flag2 = EventFlag(eventFlagId)
        || !EventFlag(eventFlagId3)
        || EventFlag(eventFlagId4)
        || EventFlag(eventFlagId5)
        || !EventFlag(eventFlagId2);
    WaitFor(ElapsedSeconds(targetTimeSeconds) || flag2);
    RestartIf(flag2.Passed);
    SetEventFlagID(eventFlagId, ON);
    RestartEvent();
});

$Event(90005731, Restart, function(eventFlagId, entityId, targetDistance, targetDistance2) {
    EndIf(!PlayerIsInOwnWorld());
    if (!EventFlag(eventFlagId)) {
        WaitFor(EntityInRadiusOfEntity(10000, entityId, targetDistance, 1));
        SetEventFlagID(eventFlagId, ON);
    }
L0:
    WaitFor(
        !EntityInRadiusOfEntity(10000, entityId, targetDistance, 1)
            && !EntityInRadiusOfEntity(10000, entityId, targetDistance2, 1));
    SetEventFlagID(eventFlagId, OFF);
    RestartEvent();
});

$Event(90005732, Restart, function(eventFlagId, areaEntityId, areaEntityId2) {
    EndIf(!PlayerIsInOwnWorld());
    if (!EventFlag(eventFlagId)) {
        WaitFor(InArea(10000, areaEntityId));
        SetEventFlagID(eventFlagId, ON);
    }
L0:
    WaitFor(!InArea(10000, areaEntityId) && !InArea(10000, areaEntityId2));
    SetEventFlagID(eventFlagId, OFF);
    RestartEvent();
});

$Event(90005733, Restart, function(eventFlagId) {
    EndIf(!PlayerIsInOwnWorld());
    DisableNetworkSync();
    SetEventFlagID(eventFlagId, OFF);
    WaitFor(EventFlag(eventFlagId) && PlayerIsInOwnWorld());
    Unknown200480(0);
    RestartEvent();
});

$Event(90005740, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, chrEntityId, dummypolyId, assetEntityId, dummypolyId2, targetDistance, animationId, animationId2, spEffectId, targetDistance2) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(eventFlagId));
    if (Signed(dummypolyId) != 0) {
        GotoIf(L0, assetEntityId == 0);
        WarpAssetToCharacter(assetEntityId, chrEntityId, dummypolyId2);
        WaitFixedTimeFrames(1);
        area &= EntityInRadiusOfEntity(10000, assetEntityId, targetDistance, 1);
        GotoIf(L9, area);
        GotoIf(L9, 
            EntityInRadiusOfEntity(10000, assetEntityId, targetDistance2, 1)
                && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance2, 1));
        RotateCharacter(10000, assetEntityId, -1, true);
        RotateCharacter(10000, assetEntityId, 90006, false);
        Goto(L8);
    }
L0:
    RotateCharacter(10000, chrEntityId, -1, true);
    area &= EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1);
    GotoIf(L9, area);
    RotateCharacter(10000, chrEntityId, 90006, false);
    Goto(L8);
L8:
    WaitFixedTimeFrames(1);
    sp = !CharacterHasSpEffect(10000, 9900);
    flagTime = !EventFlag(eventFlagId) || ElapsedSeconds(2);
    spFlagTimeArea |= sp || flagTime;
    if (Signed(dummypolyId) != 0) {
        GotoIf(S0, assetEntityId == 0);
        spFlagTimeArea |= EntityInRadiusOfEntity(10000, assetEntityId, targetDistance, 1);
    } else {
S0:
        spFlagTimeArea |= EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1);
    }
    WaitFor(spFlagTimeArea);
    if (!sp.Passed) {
        if (!flagTime.Passed) {
L9:
            SetEventFlagID(eventFlagId2, ON);
            if (eventFlagId3 != 0) {
                SetEventFlagID(eventFlagId3, ON);
            }
            if (Signed(dummypolyId) != 0) {
                IssueShortWarpRequest(10000, TargetEntityType.Character, chrEntityId, dummypolyId);
            }
            if (Signed(spEffectId) != -1) {
                RotateCharacter(10000, chrEntityId, animationId, false);
            } else {
                RotateCharacter(10000, chrEntityId, animationId, true);
            }
            Goto(L8);
L8:
            WaitFixedTimeFrames(1);
            sp2 = !CharacterHasSpEffect(10000, 9900);
            WaitFor(!EventFlag(eventFlagId) || sp2);
            if (!sp2.Passed) {
                if (Signed(animationId2) != -1) {
                    if (Signed(spEffectId) != -1) {
                        sp3 = !CharacterHasSpEffect(10000, 9900);
                        WaitFor(CharacterHasSpEffect(10000, spEffectId) || sp3);
                        GotoIf(L20, sp3.Passed);
                    }
L10:
                    SetEventFlagID(eventFlagId2, OFF);
                    ForceAnimationPlayback(10000, animationId2, false, true, false);
                    RestartEvent();
                }
L18:
                SetEventFlagID(eventFlagId2, OFF);
                RestartEvent();
            }
        }
L19:
        SetEventFlagID(eventFlagId, OFF);
        ForceAnimationPlayback(10000, 0, false, false, false);
        RestartEvent();
    }
L20:
    SetEventFlagID(eventFlagId, OFF);
    SetEventFlagID(eventFlagId2, OFF);
    RestartEvent();
});

$Event(90005741, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, chrEntityId, animationId, value, animationId2, spEffectId, timeSeconds) {
    EndIf(!PlayerIsInOwnWorld());
    if (eventFlagId3 != 0) {
        cond &= EventFlag(eventFlagId3);
    }
    cond &= EventFlag(eventFlagId);
    WaitFor(cond);
    SetEventFlagID(eventFlagId2, ON);
    if (eventFlagId3 != 0) {
        SetEventFlagID(eventFlagId3, OFF);
    }
    if (value != 1) {
        if (Signed(spEffectId) != -1) {
            ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
        } else {
            ForceAnimationPlayback(chrEntityId, animationId, false, true, false);
        }
    } else {
L0:
        if (Signed(spEffectId) != -1) {
            RotateCharacter(chrEntityId, 10000, animationId, false);
        } else {
            RotateCharacter(chrEntityId, 10000, animationId, true);
        }
        Goto(L10);
    }
L10:
    cond &= !EventFlag(eventFlagId);
    if (Signed(spEffectId) != -1) {
        cond &= CharacterHasSpEffect(chrEntityId, spEffectId);
    }
    WaitFor(cond);
    if (Signed(animationId2) != -1) {
        SetEventFlagID(eventFlagId2, OFF);
        ForceAnimationPlayback(chrEntityId, animationId2, false, true, false);
        WaitFixedTimeSeconds(timeSeconds);
        RestartEvent();
    }
L19:
    SetEventFlagID(eventFlagId2, OFF);
    WaitFixedTimeSeconds(timeSeconds);
    RestartEvent();
L20:
    SetEventFlagID(eventFlagId, OFF);
    SetEventFlagID(eventFlagId2, OFF);
    RestartEvent();
});

$Event(90005742, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, chrEntityId, dummypolyId, assetEntityId, dummypolyId2, targetDistance, animationId, animationId2, spEffectId, targetDistance2, eventFlagId4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(eventFlagId));
    if (Signed(dummypolyId) != 0) {
        GotoIf(L0, assetEntityId == 0);
        WarpAssetToCharacter(assetEntityId, chrEntityId, dummypolyId2);
        WaitFixedTimeFrames(1);
        area &= EntityInRadiusOfEntity(10000, assetEntityId, targetDistance, 1);
        GotoIf(L9, area);
        areaFlag &= EntityInRadiusOfEntity(10000, assetEntityId, targetDistance2, 1)
            && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance2, 1);
        GotoIf(L9, areaFlag);
        RotateCharacter(10000, assetEntityId, -1, true);
        RotateCharacter(10000, assetEntityId, 90006, false);
        Goto(L8);
    }
L0:
    RotateCharacter(10000, chrEntityId, -1, true);
    area &= EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1);
    GotoIf(L9, area);
    RotateCharacter(10000, chrEntityId, 90006, false);
    Goto(L8);
L8:
    WaitFixedTimeFrames(1);
    sp = !CharacterHasSpEffect(10000, 9900);
    flagTime = !EventFlag(eventFlagId) || ElapsedSeconds(2);
    spFlagTimeArea |= sp || flagTime;
    if (Signed(dummypolyId) != 0) {
        GotoIf(S0, assetEntityId == 0);
        spFlagTimeArea |= EntityInRadiusOfEntity(10000, assetEntityId, targetDistance, 1);
    } else {
S0:
        spFlagTimeArea |= EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1);
    }
    WaitFor(spFlagTimeArea);
    if (!sp.Passed) {
        if (!flagTime.Passed) {
L9:
            SetEventFlagID(eventFlagId2, ON);
            if (eventFlagId3 != 0) {
                SetEventFlagID(eventFlagId3, ON);
            }
            if (Signed(dummypolyId) != 0) {
                IssueShortWarpRequest(10000, TargetEntityType.Character, chrEntityId, dummypolyId);
            }
            if (Signed(spEffectId) != -1) {
                RotateCharacter(10000, chrEntityId, animationId, false);
            } else {
                RotateCharacter(10000, chrEntityId, animationId, true);
            }
            Goto(L8);
L8:
            WaitFixedTimeFrames(1);
            sp2 = !CharacterHasSpEffect(10000, 9900);
            areaFlag &= EventFlag(eventFlagId4);
            WaitFor(!EventFlag(eventFlagId) || sp2 || areaFlag);
            GotoIf(L20, sp2.Passed);
            GotoIf(L18, Signed(animationId2) == -1);
            GotoIf(L20, areaFlag.Passed);
            if (Signed(spEffectId) != -1) {
                sp3 = !CharacterHasSpEffect(10000, 9900);
                WaitFor(CharacterHasSpEffect(10000, spEffectId) || sp3);
                GotoIf(L20, sp3.Passed);
            }
L10:
            SetEventFlagID(eventFlagId2, OFF);
            ForceAnimationPlayback(10000, animationId2, false, true, false);
            RestartEvent();
L18:
            SetEventFlagID(eventFlagId2, OFF);
            RestartEvent();
        }
L19:
        SetEventFlagID(eventFlagId, OFF);
        ForceAnimationPlayback(10000, 0, false, false, false);
        RestartEvent();
    }
L20:
    SetEventFlagID(eventFlagId, OFF);
    SetEventFlagID(eventFlagId2, OFF);
    RestartEvent();
});

$Event(90005743, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, chrEntityId, animationId, value, animationId2, spEffectId, timeSeconds, eventFlagId4) {
    EndIf(!PlayerIsInOwnWorld());
    if (eventFlagId3 != 0) {
        cond &= EventFlag(eventFlagId3);
    }
    cond &= EventFlag(eventFlagId);
    WaitFor(cond);
    SetEventFlagID(eventFlagId2, ON);
    if (eventFlagId3 != 0) {
        SetEventFlagID(eventFlagId3, OFF);
    }
    if (value != 1) {
        if (Signed(spEffectId) != -1) {
            ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
        } else {
            ForceAnimationPlayback(chrEntityId, animationId, false, true, false);
        }
    } else {
L0:
        if (Signed(spEffectId) != -1) {
            RotateCharacter(chrEntityId, 10000, animationId, false);
        } else {
            RotateCharacter(chrEntityId, 10000, animationId, true);
        }
        Goto(L10);
    }
L10:
    cond &= !EventFlag(eventFlagId);
    if (Signed(spEffectId) != -1) {
        cond &= CharacterHasSpEffect(chrEntityId, spEffectId);
    }
    flag = EventFlag(eventFlagId4);
    WaitFor(cond || flag);
    GotoIf(L19, Signed(animationId2) == -1);
    GotoIf(L20, flag.Passed);
    SetEventFlagID(eventFlagId2, OFF);
    ForceAnimationPlayback(chrEntityId, animationId2, false, true, false);
    WaitFixedTimeSeconds(timeSeconds);
    RestartEvent();
L19:
    SetEventFlagID(eventFlagId2, OFF);
    WaitFixedTimeSeconds(timeSeconds);
    RestartEvent();
L20:
    SetEventFlagID(eventFlagId, OFF);
    SetEventFlagID(eventFlagId2, OFF);
    RestartEvent();
});

$Event(90005750, Default, function(assetEntityId, actionButtonParameterId, itemLotId, eventFlagId, eventFlagId2, eventFlagId3, sfxId) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(eventFlagId3) && !AllBatchEventFlags(eventFlagId, eventFlagId2));
    if (Signed(sfxId) != 0) {
        CreateAssetfollowingSFX(assetEntityId, 90, sfxId);
    } else {
        CreateAssetfollowingSFX(assetEntityId, 90, 6101);
    }
    flag = !EventFlag(eventFlagId3) || AllBatchEventFlags(eventFlagId, eventFlagId2);
    WaitFor(ActionButtonInArea(actionButtonParameterId, assetEntityId) || flag);
    if (!flag.Passed) {
        DeleteAssetfollowingSFX(assetEntityId, true);
        AwardItemsIncludingClients(itemLotId);
        EzstateInstructionRequest(10000, 60070, 0);
        EndEvent();
    }
L0:
    DeleteAssetfollowingSFX(assetEntityId, true);
    RestartEvent();
});

$Event(90005751, Restart, function(entityId, dummypolyId, sfxId) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(HasDamageType(entityId, 20000, DamageType.Any) && PlayerIsInOwnWorld());
    SpawnOneshotSFX(TargetEntityType.Asset, entityId, dummypolyId, sfxId);
    RestartEvent();
});

$Event(90005752, Default, function(assetEntityId, dummypolyId, sfxId, targetTimeSeconds) {
    DisableNetworkSync();
    if (ThisEventSlot()) {
        dmg = HasDamageType(assetEntityId, 20000, DamageType.Any);
        WaitFor(PlayerIsInOwnWorld() && (ElapsedSeconds(targetTimeSeconds) || dmg));
        RestartIf(dmg.Passed);
        DeleteAssetfollowingSFX(assetEntityId, true);
    }
L0:
    WaitFor(PlayerIsInOwnWorld() && HasDamageType(assetEntityId, 20000, DamageType.Any));
    CreateAssetfollowingSFX(assetEntityId, dummypolyId, sfxId);
    RestartEvent();
});

$Event(90005760, Restart, function(eventFlagId, chrEntityId, areaEntityId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    if (!ThisEventSlot()) {
        WaitFor(
            EventFlag(eventFlagId2)
                && !EventFlag(9000)
                && PlayerIsInOwnWorld()
                && InArea(10000, areaEntityId));
    }
L0:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    ForceAnimationPlayback(chrEntityId, 20000, false, false, false);
    EndEvent();
});

$Event(90005770, Restart, function(eventFlagId) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90005773, Default, function(eventFlagId) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(eventFlagId, OFF);
    WaitFor(EventFlag(eventFlagId));
    SaveRequest();
    RestartEvent();
});

$Event(90005775, Restart, function(worldMapPointParamId, eventFlagId, distance) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    OpenWorldMapPoint(worldMapPointParamId, distance);
});

$Event(9005800, Restart, function(eventFlagId, entityId, areaEntityId, eventFlagId2, chrEntityId, actionButtonParameterId, eventFlagId3, areaEntityId2) {
    if (!EventFlag(eventFlagId)) {
        WaitFixedTimeFrames(1);
        if (eventFlagId3 != 0) {
            GotoIf(L0, EventFlag(eventFlagId3));
            if (areaEntityId2 != 0) {
                areaFlag |= InArea(10000, areaEntityId2);
            }
            areaFlag |= EventFlag(eventFlagId3);
            WaitFor((areaFlag && PlayerIsInOwnWorld()) || EventFlag(eventFlagId));
            RestartIf(EventFlag(eventFlagId));
            Goto(L1);
        }
L0:
        if (PlayerIsInOwnWorld()) {
            WaitFor(
                EventFlag(eventFlagId)
                    || (PlayerIsInOwnWorld()
                        && !EventFlag(eventFlagId)
                        && ActionButtonInArea(actionButtonParameterId, entityId)));
            GotoIf(L2, !PlayerIsInOwnWorld());
            RestartIf(EventFlag(eventFlagId));
            SuppressSoundForFogGate(5);
            if (!CharacterHasSpEffect(10000, 4250)) {
                RotateCharacter(10000, areaEntityId, 60060, true);
            } else {
                RotateCharacter(10000, areaEntityId, 60060, false);
            }
        }
L3:
        GotoIf(L1, EventFlag(eventFlagId2));
        time = ElapsedSeconds(3);
        WaitFor(
            ((InArea(10000, areaEntityId) || time)
                && PlayerIsInOwnWorld()
                && !EventFlag(eventFlagId))
                || EventFlag(eventFlagId));
        RestartIf(EventFlag(eventFlagId));
        RestartIf(time.Passed);
L1:
        if (PlayerIsInOwnWorld()) {
            IssueBossRoomEntryNotification();
            SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
        }
L2:
        ActivateMultiplayerdependantBuffs(chrEntityId);
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
        EndIf(!PlayerIsInOwnWorld());
        RestartEvent();
    }
L10:
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(PlayerIsInOwnWorld() && EventFlag(eventFlagId) && ActionButtonInArea(10000, entityId));
    RotateCharacter(10000, areaEntityId, 60060, true);
    SendInvadingPhantomsHome(0);
    RestartEvent();
});

$Event(9005801, Restart, function(eventFlagId, entityId, areaEntityId, eventFlagId2, eventFlagId3, actionButtonParameterId) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        !EventFlag(eventFlagId)
            && EventFlag(eventFlagId2)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(actionButtonParameterId, entityId));
    SuppressSoundForFogGate(5);
    RotateCharacter(10000, areaEntityId, 60060, true);
    time = ElapsedSeconds(3);
    WaitFor(CharacterType(10000, TargetType.WhitePhantom) && (InArea(10000, areaEntityId) || time));
    RestartIf(time.Passed);
    SetEventFlagID(eventFlagId3, ON);
    RestartEvent();
});

$Event(9005809, Restart, function(eventFlagId, chrEntityId, assetEntityId, distance, eventFlagId2) {
    if (!(EventFlag(eventFlagId2) && EventFlag(eventFlagId))) {
        DisableCharacter(chrEntityId);
        ChangeAssetEnableStateUnknown200510(assetEntityId, Disabled, 0);
        WaitFixedTimeSeconds(1);
        WaitFor(EventFlag(eventFlagId) && EventFlag(eventFlagId2));
        SpawnOneshotSFX(TargetEntityType.Asset, assetEntityId, 200, 1060);
        WaitFixedTimeSeconds(0.5);
        EnableCharacter(chrEntityId);
        ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 1);
    }
L0:
    RegisterBonfire(assetEntityId, 0, distance);
});

$Event(9005810, Restart, function(eventFlagId, chrEntityId, assetEntityId, distance) {
    if (!EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId);
        ChangeAssetEnableStateUnknown200510(assetEntityId, Disabled, 0);
        WaitFixedTimeSeconds(1);
        WaitFor(EventFlag(eventFlagId));
        SpawnOneshotSFX(TargetEntityType.Asset, assetEntityId, 200, 1060);
        WaitFixedTimeSeconds(0.5);
        EnableCharacter(chrEntityId);
        ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 1);
    }
L0:
    RegisterBonfire(assetEntityId, 0, distance);
});

$Event(9005811, Restart, function(eventFlagId, assetEntityId, sfxId, eventFlagId2) {
    DisableNetworkSync();
    DisableAsset(assetEntityId);
    DeleteAssetfollowingSFX(assetEntityId, true);
    if (0 != eventFlagId2) {
        flag &= EventFlag(eventFlagId2);
    }
    flag &= !EventFlag(eventFlagId);
    WaitFor(flag);
    EnableAsset(assetEntityId);
    DeleteAssetfollowingSFX(assetEntityId, true);
    CreateAssetfollowingSFX(assetEntityId, 101, sfxId);
    if (0 != eventFlagId2) {
        flag2 |= !EventFlag(eventFlagId2);
    }
    flag2 |= EventFlag(eventFlagId);
    WaitFor(flag2);
    RestartEvent();
});

$Event(90005860, Restart, function(eventFlagId, eventFlagId2, chrEntityId, value, itemLotId, timeSeconds) {
    if (Signed(itemLotId) != 0) {
        Unknown200476(eventFlagId, itemLotId);
    }
    if (EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndIf(!PlayerIsInOwnWorld());
        EndIf(Signed(itemLotId) == 0);
        WaitFixedTimeSeconds(1);
        AwardItemsIncludingClients(itemLotId);
        EndEvent();
    }
L0:
    WaitFor(CharacterHPValue(chrEntityId) <= 0);
    WaitFixedTimeSeconds(2);
    PlaySE(chrEntityId, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(chrEntityId));
    GotoIf(S0, value == 3);
    if (value != 2) {
        if (value != 1) {
            Unknown2003115(chrEntityId, 1030);
            Goto(L1);
        }
        Unknown2003115(chrEntityId, 1020);
    }
    Goto(L1);
S0:
    Unknown2003115(chrEntityId, 1000);
    Goto(L1);
    Unknown2003115(chrEntityId, 1010);
L1:
    SetEventFlagID(eventFlagId, ON);
    if (eventFlagId2 != 0) {
        SetEventFlagID(eventFlagId2, ON);
    }
    EndIf(!PlayerIsInOwnWorld());
    EndIf(Signed(itemLotId) == 0);
    WaitFixedTimeSeconds(5);
    AwardItemsIncludingClients(itemLotId);
    EndEvent();
    WaitFixedTimeSeconds(timeSeconds);
});

$Event(90005861, Restart, function(eventFlagId, eventFlagId2, chrEntityId, value, itemLotId, messageId, timeSeconds) {
    if (Signed(itemLotId) != 0) {
        Unknown200476(eventFlagId, itemLotId);
    }
    if (EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndIf(!PlayerIsInOwnWorld());
        EndIf(Signed(itemLotId) == 0);
        WaitFixedTimeSeconds(1);
        AwardItemsIncludingClients(itemLotId);
        EndEvent();
    }
L0:
    WaitFor(CharacterHPValue(chrEntityId) <= 0);
    WaitFixedTimeSeconds(2);
    PlaySE(chrEntityId, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(chrEntityId));
    GotoIf(S0, value == 3);
    if (value != 2) {
        if (value != 1) {
            Unknown2003115(chrEntityId, 1030);
            Goto(L1);
        }
        Unknown2003115(chrEntityId, 1020);
    }
    Goto(L1);
S0:
    Unknown2003115(chrEntityId, 1000);
    Goto(L1);
    Unknown2003115(chrEntityId, 1010);
L1:
    SetEventFlagID(eventFlagId, ON);
    if (eventFlagId2 != 0) {
        SetEventFlagID(eventFlagId2, ON);
    }
    EndIf(!PlayerIsInOwnWorld());
    EndIf(Signed(itemLotId) == 0);
    WaitFixedTimeSeconds(5);
    AwardItemsIncludingClients(itemLotId);
    WaitFixedTimeSeconds(2);
    DisplayBlinkingMessage(messageId);
    EndEvent();
    WaitFixedTimeSeconds(timeSeconds);
});

$Event(90005870, Default, function(chrEntityId, nameId, npcThreatLevel) {
    DisableNetworkSync();
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Combat)
            && FieldBattleBGMActive(npcThreatLevel)
            && EntityInRadiusOfEntity(20000, chrEntityId, 30, 1)
            && !EventFlag(9000));
    GotoIf(L0, !EventFlag(5000));
    GotoIf(L1, !EventFlag(5001));
    WaitFixedTimeSeconds(5);
    RestartEvent();
L0:
    SetEventFlagID(5000, ON);
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
    WaitFor(
        !(EntityInRadiusOfEntity(20000, chrEntityId, 30, 1)
            && CharacterAIState(chrEntityId, AIStateType.Combat)
            && FieldBattleBGMActive(npcThreatLevel))
            || CharacterDead(chrEntityId)
            || EventFlag(9000));
    if (CharacterDead(chrEntityId)) {
        WaitFixedTimeSeconds(3);
    } else if (!EventFlag(9000)) {
        WaitFixedTimeSeconds(1);
    }
    DisplayBossHealthBar(Disabled, chrEntityId, 0, nameId);
    SetEventFlagID(5000, OFF);
    RestartEvent();
L1:
    SetEventFlagID(5001, ON);
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, chrEntityId, 1, nameId);
    WaitFor(
        !(CharacterTargetedBy(chrEntityId, 20000)
            && EntityInRadiusOfEntity(20000, chrEntityId, 30, 1)
            && CharacterAIState(chrEntityId, AIStateType.Combat)
            && FieldBattleBGMActive(npcThreatLevel))
            || CharacterDead(chrEntityId)
            || EventFlag(9000));
    if (CharacterDead(chrEntityId)) {
        WaitFixedTimeSeconds(3);
    } else if (!EventFlag(9000)) {
        WaitFixedTimeSeconds(1);
    }
    DisplayBossHealthBar(Disabled, chrEntityId, 1, nameId);
    SetEventFlagID(5001, OFF);
    RestartEvent();
});

$Event(90005872, Default, function(chrEntityId, npcThreatLevel, eventFlagId) {
    DisableNetworkSync();
    if (0 != eventFlagId) {
        flagHp &= EventFlag(eventFlagId);
    } else {
        flagHp &= HPRatio(chrEntityId) <= 0.55;
    }
    flagHp &= FieldBattleBGMActive(npcThreatLevel);
    WaitFor(flagHp);
    SetFieldBattleBGMHeatUp(npcThreatLevel, true);
    WaitFor(CharacterDead(chrEntityId) || !FieldBattleBGMActive(npcThreatLevel));
    SetFieldBattleBGMHeatUp(npcThreatLevel, false);
    WaitFixedTimeSeconds(0.3);
    RestartEvent();
});

$Event(91005503, Restart, function(entityId) {
    EndIf(EventFlag(6011));
    DisableNetworkSync();
    WaitFor(ActionButtonInArea(9350, entityId));
    SetSpEffect(10000, 99202);
    WaitFixedTimeFrames(5);
    RestartEvent();
});

$Event(91005504, Restart, function(assetEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    EndIf(EventFlag(6011));
    EndIf(
        !(EventFlag(eventFlagId)
            || EventFlag(eventFlagId2)
            || EventFlag(eventFlagId3)
            || EventFlag(eventFlagId4)));
    EnableAsset(assetEntityId);
    DisableNetworkSync();
    WaitFor(ActionButtonInArea(9350, assetEntityId));
    SetSpEffect(10000, 99202);
    WaitFixedTimeFrames(5);
    RestartEvent();
});

$Event(91005505, Restart, function(areaEntityId, eventFlagId) {
    DisableNetworkSync();
    EndIf(!EventFlag(eventFlagId));
    WaitFixedTimeSeconds(0.1);
    WaitFor(EventFlag(7508) && InArea(20000, areaEntityId));
    PlaySE(20000, SoundType.CharacterMotion, 8712);
    WaitFor(!InArea(20000, areaEntityId));
    RestartEvent();
});

$Event(91005506, Restart, function(assetEntityId) {
    EndIf(!EventFlag(6011));
    DisableCharacter(assetEntityId);
    DisableAsset(assetEntityId);
});

$Event(91005550, Default, function(areaEntityId, generatorEntityId, chrEntityId) {
    WaitFor(InArea(10000, areaEntityId) && CharacterHasSpEffect(10000, 99805));
    InvokeEnemyGenerator(generatorEntityId);
    ForceCharacterTreasure(chrEntityId);
    RestartEvent();
});

$Event(90005904, Restart, function(eventFlagId, assetEntityId, dummypolyId, sfxId) {
    GotoIf(S0, eventFlagId == 0);
    GotoIf(S1, !EventFlag(eventFlagId));
S0:
    CreateAssetfollowingSFX(assetEntityId, dummypolyId, sfxId);
S1:
    EndEvent();
});

$Event(90005910, Default, function(assetEntityId, eventFlagId) {
    DisableNetworkSync();
    EndIf(!EventFlag(eventFlagId));
    WaitFor(EventFlag(7508));
    WaitFixedTimeSeconds(4);
    CreateAssetfollowingSFX(assetEntityId, 100, 807150);
    WaitFor(ActionButtonInArea(9291, assetEntityId));
    EnableCharacterDefaultBackread(12000950);
    EnableCharacterDefaultBackread(12000200);
    EnableCharacterDefaultBackread(12000201);
    ForceAnimationPlayback(10000, 61000, false, false, false);
    WaitFixedTimeSeconds(4);
    FadeToBlack(1, 3, false, -1);
    WaitFixedTimeSeconds(3.2);
    WarpCharacterAndSetFloor(10000, TargetEntityType.Area, 12002800, 0, 0, true);
    ChangeWeather(Weather.Type00, -1, true);
    SetNetworkconnectedEventFlagID(7521, ON);
    SetEventFlagID(9052, ON);
    RestartEvent();
});

$Event(90005915, Restart, function(assetEntityId, eventFlagId, objactParamId, distance) {
    if (!EventFlag(eventFlagId)) {
        WaitFor(EventFlag(eventFlagId));
        RecordUserDispLog(11230, assetEntityId, LogObjectType.None, -1);
    }
L0:
    Unknown200391(assetEntityId, distance);
    DisableObjAct(assetEntityId, objactParamId);
    EndEvent();
});

$Event(90005916, Restart, function(assetEntityId, eventFlagId) {
    SpawnOneshotSFX(TargetEntityType.Asset, assetEntityId, 90, 807030);
    WaitFor(EventFlag(eventFlagId));
    DeleteAssetfollowingSFX(assetEntityId, true);
});

$Event(90005917, Restart, function(assetEntityId, eventFlagId, objactParamId, distance) {
    if (!EventFlag(eventFlagId)) {
        WaitFor(EventFlag(eventFlagId));
        RecordUserDispLog(11230, assetEntityId, LogObjectType.None, -1);
        RecordUserDispLog(11231, assetEntityId, LogObjectType.None, -1);
    }
L0:
    Unknown200391(assetEntityId, distance);
    DisableObjAct(assetEntityId, objactParamId);
    EndEvent();
});

$Event(90005918, Default, function(entityId) {
    DisableNetworkSync();
    WaitFor(EventFlag(4990));
    RecordUserDispLog(11250, entityId, LogObjectType.None, -1);
    SetEventFlagID(4990, OFF);
});

$Event(90005919, Restart, function(entityId, eventFlagId) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId));
    WaitFor(ActionButtonInArea(9232, entityId));
    SpawnOneshotSFX(TargetEntityType.Character, 20000, 905, 305033);
    AddEstusCharge();
    RefillEstus();
    RecordUserDispLog(11250, entityId, LogObjectType.None, -1);
    SetEventFlagID(eventFlagId, ON);
});

$Event(90005920, Default, function(eventFlagId) {
    DisableNetworkSync();
    WaitFor(EventFlag(eventFlagId));
    SetWorldMapPointFlag(7, ON);
    SetWorldMapPointFlag(8, OFF);
});

$Event(90005921, Default, function(eventFlagId) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    ForceAnimationPlayback(20000, 60071, false, false, false);
    SetSpEffect(20000, 99270);
});

$Event(90005931, Restart, function(eventFlagId, assetEntityId, value, assetEntityId2) {
    if (EventFlag(eventFlagId)) {
        ReproduceAssetDestruction(assetEntityId, 1);
        AttachAssetToAsset(assetEntityId2, assetEntityId, 90);
        EnableObjAct(assetEntityId2, 99635);
        EndEvent();
    }
L0:
    if (Signed(value) == 0) {
        DeleteAssetfollowingSFX(assetEntityId, true);
        CreateAssetfollowingSFX(assetEntityId, 200, 803300);
    }
    AttachAssetToAsset(assetEntityId2, assetEntityId, 90);
    DisableObjAct(assetEntityId2, 99635);
    WaitFor(AssetDestroyed(assetEntityId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    EnableObjAct(assetEntityId2, 99635);
    if (Signed(value) == 0) {
        DeleteAssetfollowingSFX(assetEntityId, true);
    }
});

$Event(90005933, Default, function(eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId3));
    EndIf(!EventFlag(6011));
    WaitFor(EventFlag(eventFlagId2));
    SetEventFlagID(eventFlagId, ON);
});

$Event(90005934, Default, function(eventFlagId, tutorialParamId) {
    EndIf(!EventFlag(6011));
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, eventFlagId);
    if (eventFlagId != 9810) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9810);
    }
    if (eventFlagId != 9815) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9815);
    }
    if (eventFlagId != 9820) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9820);
    }
    if (eventFlagId != 9821) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9821);
    }
    if (eventFlagId != 9825) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9825);
    }
    if (eventFlagId != 9830) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9830);
    }
    if (eventFlagId != 9835) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9835);
    }
    if (eventFlagId != 9845) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9845);
    }
    if (eventFlagId != 9850) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9850);
    }
    if (eventFlagId != 9855) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9855);
    }
    if (eventFlagId != 9856) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9856);
    }
    if (eventFlagId != 9860) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9860);
    }
    if (eventFlagId != 9870) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9870);
    }
    if (eventFlagId != 9875) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9875);
    }
    if (eventFlagId != 9880) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9880);
    }
    if (eventFlagId != 9885) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9885);
    }
    if (eventFlagId != 9890) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9890);
    }
    if (eventFlagId != 9895) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9895);
    }
    if (eventFlagId != 9900) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9900);
    }
    if (eventFlagId != 9905) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9905);
    }
    if (eventFlagId != 9910) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9910);
    }
    if (eventFlagId != 9915) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9915);
    }
    if (eventFlagId != 9920) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9920);
    }
    if (eventFlagId != 9925) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9925);
    }
    if (eventFlagId != 9930) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9930);
    }
    if (eventFlagId != 9935) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9935);
    }
    if (eventFlagId != 9940) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9940);
    }
    if (eventFlagId != 9945) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9945);
    }
    if (eventFlagId != 9950) {
        flag |= EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9950);
    }
    WaitFor(flag);
    ShowTutorialPopup(tutorialParamId, false, true);
});
